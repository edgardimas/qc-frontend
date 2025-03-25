<script setup lang="ts">
    import LowerHeader from '@/components/molecules/LowerHeader.vue';
    import UpperHeader from '@/components/molecules/UpperHeader.vue';

    defineProps<{
        title: string,
        userName: string
    }>()

</script>

<template>
    <div class="shadow-xl">
        <UpperHeader :title=title />
        <LowerHeader :userName="userName" />
    </div>
</template>
