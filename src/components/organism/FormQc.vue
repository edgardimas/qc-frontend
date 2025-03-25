<script setup lang="ts">
    import SelectInput from '@/components/molecules/SelectInput.vue'
    import TextInput from '@/components/molecules/TextInput.vue'
    import DateInput from '@/components/molecules/DateInput.vue'
    import LabelHeader from '@/components/molecules/LabelHeader.vue'
    import AddTestButton from '@/components/molecules/AddTestButton.vue'
    import TextBoxPill from '@/components/molecules/TextBoxPill.vue'

    const items = [
        { value: '1', name: 'Analyzer 1' },
        { value: '2', name: 'Analyzer 2' },
        { value: '3', name: 'Analyzer 3' },
        { value: '4', name: 'Analyzer 4' },
        { value: '5', name: 'Analyzer 5' },
    ]

    const handleClickAddTest = () => {
        console.log('Add Test')
    }
</script>

<template>
    <form>
        <div class="md:mx-5">
            <div class="flex justify-center items-center text-2xl font-semibold py-7">
                <h1>New QC PME Data</h1>
            </div>
            <div class="flex flex-wrap justify-around items-baseline pt-5 mx-20">
                <div class="w-full xl:w-1/2 mb-6 md:mb-0">
                    <SelectInput label="Analyzer" :items="items" placeholder="Choose an analyzer" />
                    <TextInput label="Name" id="name" placeholder="e.g. INAEQAS" />
                    <TextInput label="Periode" id="periode" placeholder="e.g. 2025-01" />
                    <DateInput id="activityDate" />
                </div>
                <div class="w-full xl:w-1/2 sm:pt-10">
                    <table>
                        <thead>
                            <tr>
                                <th class="text-center">Test Code</th>
                                <th class="text-center">Mean</th>
                                <th class="text-center">Mean Group</th>
                            </tr>
                        </thead>

                    </table>
                    <div class="flex flex-row sm:justify-around md:justify-between w-full font-medium">
                        <LabelHeader label="Test Code" />
                        <LabelHeader label="Mean"/>
                        <LabelHeader label="Mean Group" />
                    </div>
                    <div class="flex flex-row sm:justify-around md:justify-between w-full font-medium">
                        <TextBoxPill row="1" />
                        <TextBoxPill row="1"/>
                        <TextBoxPill row="1" />
                    </div>
                    <div class="py-1.5 w-full">
                        <AddTestButton @click="handleClickAddTest" />
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>