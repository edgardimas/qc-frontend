<script setup lang="ts">
    import Label from '@/components/atoms/Label.vue'
    import Date from '@/components/atoms/Date.vue'
    import { defineProps } from 'vue'

    const props = defineProps<{
        id: string
    }>()
</script>

<template>
    <div class="pb-3">
        <Label label="Date" />
        <Date :id="id" />
    </div>
</template>