<script setup lang="ts">
    import { defineProps } from 'vue';
    import Label  from '@/components/atoms/Label.vue';
    import TextBox from '@/components/atoms/TextBox.vue';

    const props = defineProps<{
        label: string,
        id: string,
        placeholder?: string,
    }>()
    
</script>

<template>
    <div class="pb-3">
        <Label :label="label" />
        <TextBox :id="id" :placeholder="placeholder" />
    </div>
</template>