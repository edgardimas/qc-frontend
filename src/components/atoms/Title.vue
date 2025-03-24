<script setup lang="ts">
    defineProps({
        title: {
            type: String,
            required: true,
        },
    })
</script>

<template>
    <h1 class="text-3xl font-bold text-center">{{ title }}</h1>
</template>

