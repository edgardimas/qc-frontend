<script setup lang="ts">
    import Add from '@/components/atoms/Add.vue'

    defineEmits(['click'])
</script>

<template>
    <button class="bg-green-300 py-1 px-3 w-full rounded-lg" type="button" @click="$emit('click')">
        <Add role="button" class="cursor-pointer">New</Add>
    </button>
</template>