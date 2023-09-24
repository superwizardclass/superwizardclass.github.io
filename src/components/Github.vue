<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps(['data'])

</script>
<template>
    <div class="container rounded-2xl py-4 mx-auto bg-stone-800 hover:bg-violet-500 bg-opacity-90 transition-all flex items-center flex-row justify-center gap-4  text-neutral-200">
        <img class="w-8 rounded-full" :src="data[0]['actor']['avatar_url']">
        <div v-if="data !== 'undefined'" class="">
            <a class="text-center hover:text-stone-800 transition-all" href="https://github.com/superwizardclass">{{ data[0]['actor']['display_login'] }}</a>
            <p class="text-xs ">Last Active Time: </p>
        </div>
        <h1 v-else>Loading...</h1>
        <img class="w-8" src="../components/icons/github-mark-white.png">
    </div>
</template>
<style scoped></style>