<script lang="ts" setup>
    defineProps<{
        text: string
    }>()
</script>

<template>
    <button class="greetings">
        <h1 class="green">{{ text }}</h1>
    </button>
</template>

<style scoped>
    h1 {
        font-weight: 500;
        font-size: 2rem;
    }

    .greetings h1 {
        text-align: center;
    }
</style>

