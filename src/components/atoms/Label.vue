<script setup lang="ts">
    const props = defineProps<{
        label: string
    }>()
</script>

<template>
    <div>
        <label class="font-medium text-nowrap" >{{ label }}</label>
    </div>
</template>