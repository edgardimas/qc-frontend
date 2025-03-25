<script setup lang="ts">
    const props = defineProps<{
        id: string
    }>()
</script>

<template>
    <div>
        <input type="date" :id="id" class="border border-gray-300 rounded-md p-2 sm:w-sm md:w-md lg:w-lg xl:w-xl 2xl:w-2xl" />
    </div>
</template>