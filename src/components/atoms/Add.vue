<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faPlus } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <div class="flex justify-center items-center">
        <FontAwesomeIcon :icon="faPlus" class="text-black px-2" />
        <slot></slot>
    </div>

</template>