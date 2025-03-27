<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faTrash } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <div class="flex justify-center items-center">
        <FontAwesomeIcon v-bind:icon="faTrash" class="text-red-500 px-2" />
        <slot></slot>
    </div>
</template>