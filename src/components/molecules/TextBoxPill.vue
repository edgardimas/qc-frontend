<script setup lang="ts">
    import TextBox from '@/components/atoms/TextBox.vue';

    const props = defineProps<{
        row: string
    }>()
</script>

<template>
    <TextBox :id="'pill-left' + row" width="w-60" />
</template>