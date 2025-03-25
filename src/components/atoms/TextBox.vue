<script setup lang="ts">
    const props = defineProps<{
        id: string
        placeholder?: string
        width?: string
    }>()
</script>

<template>
    <div>
        <input 
            type="text" 
            :id="id" 
            :placeholder="placeholder" 
            :class="['border border-gray-300 rounded-md p-2', width || 'sm:w-sm md:w-md lg:w-lg xl:w-xl 2xl:w-2xl']" 
        />
    </div>
</template>