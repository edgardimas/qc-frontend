<script setup lang="ts">
    import Logo from '@/components/atoms/Logo.vue'
    import Title from '@/components/atoms/Title.vue'

    defineProps({
        title: {
            type: String,
            required: true,
        },
    })
</script>

<template>
    <div class="flex justify-between items-center p-5">
        <Logo />
        <Title :title=title />
    </div>
</template>

