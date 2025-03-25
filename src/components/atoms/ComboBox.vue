<script setup lang="ts">
    const props = defineProps<{
        placeholder?: string,
        items: Array<{ value: string, name: string }>
        width?: string
    }>()
</script>

<template>
    <div class="py-1">
        <select class="border border-gray-300 rounded-md p-2 text-black sm:w-sm md:w-md lg:w-lg xl:w-xl 2xl:w-2xl" >
            <option disabled selected>{{ placeholder || 'Select an option' }}</option>
            <option v-for="item in items" :key="item.value" :value="item.value">{{ item.name }}</option>
        </select>
    </div>
</template>
