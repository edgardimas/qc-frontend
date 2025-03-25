<script setup lang="ts">

    const props = defineProps<{
        title: string
    }>()

</script>

<template>
    <h1 class="text-3xl font-bold text-center">{{ title }}</h1>
</template>

