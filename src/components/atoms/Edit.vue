<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faPencil } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <div class="flex justify-center items-center">
        <FontAwesomeIcon v-bind:icon="faPencil" class="text-black px-2" />
        <slot></slot>
    </div>
</template>