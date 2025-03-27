<script setup lang="ts">
    import SelectInput from '@/components/molecules/SelectInput.vue'
    import TextInput from '@/components/molecules/TextInput.vue'
    import DateInput from '@/components/molecules/DateInput.vue'
    import AddTestButton from '@/components/molecules/AddTestButton.vue'
    import TableInput from '@/components/molecules/TableInput.vue'

    import { ref, onMounted } from 'vue'

    // Create reactive state for analyzers with proper type
    interface SelectType {
        value: string
        name: string
    }

    // Define the type for table rows
    interface TableRow {
        testName: string | null
        mean: number | null
        meanGroup: number | null
    }

    interface FormData {
        anzId: string
        name: string
        periode: string
        activityDate: Date
    }
    
    const analyzers = ref<SelectType[]>([])
    const pmes = ref<SelectType[]>([])

    // Status messages
    const statusMessage = ref('')
    const isSuccess = ref(false)
    const isLoading = ref(false)

    // Form data state
    const formData = ref<FormData>(
        {
            anzId: '',
            name: '',
            periode: '',
            activityDate: new Date()
        }
    )

    // Create reactive state for table rows
    const tableRows = ref<TableRow[]>([])

    // Function to fetch analyzers from API
    const fetchAnalyzers = () => {
        fetch(
            `${import.meta.env.VITE_API_URL}/load`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            },
        ) 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json();
            })
            .then(response => {
                // Check if response has data property and it's an array
                if (response.ok && 
                    response.data && 
                    response.data.analyzers && 
                    response.data.pmes && 
                    Array.isArray(response.data.analyzers) &&
                    Array.isArray(response.data.pmes)
                ) {
                    // Map API data to the format expected by the select component
                    analyzers.value = response.data.analyzers.map((analyzer: { code: string; name: string }) => ({
                        value: analyzer.code,
                        name: analyzer.name
                    }))

                    pmes.value = response.data.pmes.map((pme: { code: string; name: string }) => ({
                        value: pme.code,
                        name: pme.name
                    }))
                } else {
                    console.error('Invalid response format:', response)
                    analyzers.value = []
                    pmes.value = []
                }
            })
            .catch(error => {
                console.error('Error fetching analyzers:', error)
                // Fallback data in case of error
                analyzers.value = []
            });
    }
    
    // Fetch analyzers on component mount
    onMounted(fetchAnalyzers)



    // Counter to generate unique test names
    let testCounter = 1

    const handleClickAddTest = () => {
        testCounter++
        // Add a new row to the table
        tableRows.value.push({
            testName: null,
            mean: null,
            meanGroup: null
        })
        console.log(tableRows.value)
    }

    // Form submission handler using Promises
    const handleSubmit = (event: Event) => {
        event.preventDefault()
        isLoading.value = true
        statusMessage.value = ''

        // Validate required fields
        if (!formData.value.anzId || !formData.value.name || !formData.value.periode || !formData.value.activityDate) {
            statusMessage.value = 'Please fill in all required fields'
            isSuccess.value = false
            isLoading.value = false
            return
        }
        
        if (tableRows.value.length === 0) {
            statusMessage.value = 'Please add at least one test'
            isSuccess.value = false
            isLoading.value = false
            return
        }
        
        // Format data for API
        const details = tableRows.value.map(row => ({
            testCd: row.testName?.toUpperCase(),
            mean: row.mean !== null ? parseFloat(row.mean.toString()) : null,
            meanGroup: row.meanGroup !== null ? parseFloat(row.meanGroup.toString()) : null
        }))
        
        const payload = {
            anzId: formData.value.anzId,
            name: formData.value.name,
            periode: formData.value.periode,
            activityDate: formData.value.activityDate,
            details: details
        }
        
        // Send POST request using Promises
        fetch(`${import.meta.env.VITE_API_URL}/qc`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(data.message || 'Failed to submit data')
                })
            }
            return response.json()
        })
        .then(data => {
            // Success handling
            statusMessage.value = 'Data submitted successfully!'
            isSuccess.value = true
            
            // Optional: Reset form
            resetForm()
        })
        .catch(error => {
            // Error handling
            statusMessage.value = error.message || 'An error occurred'
            isSuccess.value = false
            console.error('Submission error:', error)
        })
        .finally(() => {
            isLoading.value = false
        })
    }
    
    // Reset form function
    const resetForm = () => {
        formData.value = {
            anzId: '',
            name: '',
            periode: '',
            activityDate: new Date()
        }
        tableRows.value = []
        testCounter = 0
    }

    // Handle selecting analyzer from dropdown
    const handleAnalyzerSelect = (value: string) => {
        formData.value.anzId = value
    }
</script>

<template>
    <form @submit="handleSubmit">
        <div class="md:mx-5">
            <div class="flex justify-center items-center text-2xl font-semibold py-7">
                <h1>New QC PME Data</h1>
            </div>
            
            <!-- Status message -->
            <div v-if="statusMessage" 
                 :class="['text-center p-2 rounded mx-20 mb-4', isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700']">
                {{ statusMessage }}
            </div>
            
            <div class="flex flex-wrap justify-around items-baseline pt-5 mx-20">
                <div class="w-full xl:w-1/2 mb-6 md:mb-0">
                    <div class="w-9/12 pb-4">
                        <label for="anzId" class="font-medium text-nowrap">Analyzer</label>
                        <select 
                            name="anzId" 
                            v-model="formData.anzId" 
                            class="border border-gray-300 rounded-md p-2 w-full"
                        >
                            <option value="" disabled selected>Select an analyzer</option>
                            <option v-for="anz in analyzers" :key="anz.value" :value="anz.value">{{ anz.name }}</option>
                        </select>
                    </div>
                    <div class="w-9/12 pb-4">
                        <label for="name" class="font-medium text-nowrap">PME Name</label>
                        <select
                            name="name"
                            v-model="formData.name"
                            class="border border-gray-300 rounded-md p-2 w-full"
                        >
                            <option value="" disabled selected>Select a PME</option>
                            <option v-for="pme in pmes" :key="pme.value" :value="pme.value">{{ pme.name }}</option>
                        </select>
                    </div>
                    <div class="w-9/12 pb-4">
                        <label for="periode" class="font-medium text-nowrap">Periode</label>
                        <input 
                            type="text" 
                            name="periode" 
                            v-model="formData.periode" 
                            class="border border-gray-300 rounded-md p-2 w-full"  
                            placeholder="e.g. 2025-01"
                        />
                    </div>
                    <div class="w-9/12 pb-4">
                        <label for="activityDate" class="font-medium text-nowrap">Activity Date</label>
                        <input 
                            type="date" 
                            name="activityDate" 
                            v-model="formData.activityDate" 
                            class="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                </div>
                <div class="w-full xl:w-1/2 sm:pt-10">
                    <TableInput 
                        :tableRows="tableRows"
                        @update:tableRows="newRows => tableRows = newRows" 
                    />
                    <div class="py-1.5 w-full">
                        <AddTestButton @click="handleClickAddTest" />
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center mt-20">
                <button
                    class="
                        bg-red-300 text-white shadow-lg py-1.5 sm:px-12 md:px-12 
                        lg:px-10 xl:px-18 2xl:px-26 rounded-lg mt-5 mr-5
                        hover:bg-red-400"
                    type="reset"
                    @click="resetForm"
                >
                    Clear
                </button>
                <button 
                    class="
                        bg-blue-400 text-white shadow-lg py-1.5 sm:px-12 md:px-12 lg:px-10 xl:px-18 2xl:px-26 
                        rounded-lg mt-5
                        hover:bg-blue-500" 
                    type="submit"
                    :disabled="isLoading"
                >
                    {{ isLoading ? 'Submitting...' : 'Submit' }}
                </button>
            </div>
        </div>
    </form>
</template>