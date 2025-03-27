<script setup lang="ts">
    import NewButton from '@/components/molecules/NewButton.vue'
    import EditButton from '@/components/molecules/EditButton.vue'
    import DeleteButton from '@/components/molecules/DeleteButton.vue'
    import { useRouter } from 'vue-router'
    import { ref, onMounted } from 'vue'

    const router = useRouter()
    const search = ref<HTMLInputElement | null>(null)

    interface Analyzer {
        code: string
        name: string
    }

    interface QcData {
        id: number
        anz: Analyzer
        name: string
        periode: string
        activityDate: string
    }

    const qcs = ref<QcData[]>([])

    const fetchQcData = () => {
        fetch(`${import.meta.env.VITE_API_URL}/qc`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            },
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                if (data.ok) {
                    qcs.value = data.data;
                } else {
                    console.error('Error fetching QC data:', data.error)
                }
            })
            .catch(error => {
                console.error('Failed to fetch QC data:', error)
            })
    }

    onMounted(() => {
        fetchQcData()
    })


    onMounted(() => {
        document.addEventListener('keydown', (event) => {
            // Check if Ctrl+K is pressed
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault() // Prevent default browser behavior
                search.value?.focus()
            }
        })
    })
</script>

<template>
    
    <div class="md:mx-10 xl:mx-40">
        <div class="flex justify-center items-center text-2xl font-semibold py-7">
            <h1>List QC PME Data</h1>
        </div>
        <div class="py-4 flex justify-end">
            <div class="w-3/12">
                <input 
                  ref="search"
                  type="text" 
                  class="w-full border border-gray-300 rounded-md px-3 py-1" 
                  placeholder="CTRL+K Search" />
            </div>
            <div class="ps-4">
                <NewButton @click="router.push('/qc/new')" />
            </div>
        </div>
        <div>
            <table class="w-full border-collapse border-y border-gray-300">
                <thead>
                    <tr>
                        <th class="w-1/12">No.</th>
                        <th class="text-left">Analyzer</th>
                        <th class="w-2/12 text-left">Name</th>
                        <th class="w-2/12 text-left">Periode</th>
                        <th class="w-2/12">Activity Date</th>
                        <th class="w-2/12">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="qc, index in qcs" :key="qc.id">
                        <td class="text-center py-2">{{ index + 1 }}</td>
                        <td class="py-2">{{ qc.anz.name }}</td>
                        <td class="py-2">{{ qc.name }}</td>
                        <td class="py-2">{{ qc.periode }}</td>
                        <td class="text-center py-2">{{ new Date(qc.activityDate).toLocaleDateString() }}</td>
                        <td class="flex justify-center items-center py-2">    
                            <EditButton class="px-2" />
                            <DeleteButton class="px-2" />
                        </td>
                    </tr>
                </tbody>    
            </table>
        </div>
    </div>

</template>