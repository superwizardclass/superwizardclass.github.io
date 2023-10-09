<script setup>
const props = defineProps(['url'])
</script>
<template>
    <a :href="url"
        class="container rounded-2xl py-4 mx-auto max-w-xl transition-all bg-opacity-60 hover:bg-opacity-80  bg-stone-800 hover:bg-cyan-900 flex items-center flex-row justify-center gap-4 lg:gap-6 text-neutral-200">
        <slot>FallBack</slot>
    </a>
</template>