<script setup lang="ts">
    import { defineProps } from 'vue'
    import Label from '@/components/atoms/Label.vue';
    import ComboBox from '@/components/atoms/ComboBox.vue'

    const props = defineProps<{
        label: string,
        placeholder?: string,
        items: Array<{ value: string, name: string }>,
        width?: string
    }>()
    
</script>


<template>
    <div class="pb-3">
        <Label :label="label" />
        <ComboBox :items="items" :placeholder="placeholder" :width="width" />
    </div>
</template>

