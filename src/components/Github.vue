<script setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs';

const props = defineProps(['githubData'])


const convertedDate = computed(() => {
        const dateString = props.githubData[0]['created_at']
        return dayjs(dateString).format('MMM D, YYYY')
})


</script>
<template>
    <a href="https://github.com/superwizardclass" class="container rounded-2xl py-4 mx-auto max-w-xl transition-all bg-opacity-70 hover:bg-opacity-100 bg-stone-800 hover:bg-cyan-900 flex items-center flex-row justify-center gap-4 lg:gap-6 text-neutral-200">
        <img class="w-8 lg:w-10 rounded-full" :src="githubData[0]['actor']['avatar_url']">
        <div class="">
            <p class="transition-all lg:text-lg" >{{ githubData[0]['actor']['display_login'] }}</p>
            <p class="text-xs lg:text-sm">Last Activity: {{ convertedDate }}</p>
        </div>
        <img class="w-8 lg:w-10" src="../components/icons/github-mark-white.png">
    </a>
</template>
<style scoped></style>