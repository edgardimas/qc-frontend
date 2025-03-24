<script setup lang="ts">
    import LowerHeader from '@/components/molecules/LowerHeader.vue';
    import UpperHeader from '@/components/molecules/UpperHeader.vue';

    defineProps({
        title: {
            type: String,
            required: true,
        },
    })
</script>

<template>
    <div>
        <UpperHeader :title=title />
        <LowerHeader />
    </div>
</template>