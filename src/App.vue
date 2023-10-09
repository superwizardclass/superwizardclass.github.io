<script setup>
import { computed, onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import Banner from './components/Banner.vue'
import Github from './components/Github.vue'
import Linkedin from './components/Linkedin.vue'
import Info from './components/Info.vue'

const githubData = ref(null)
const API_URL = 'https://api.github.com/users/superwizardclass/events'
const BLOG_URL = 'https://superwizardclass.github.io/blog/'
const GH_URL = 'https://github.com/superwizardclass'
const LI_URL = 'https://www.linkedin.com/in/dan3000/'
const fetchGithubData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  githubData.value = data
}

const convertedDate = computed(() => {
  const dateString = githubData.value[0]['created_at']
  return dayjs(dateString).format('MMM D, YYYY')
})

onMounted(() => {
  fetchGithubData(API_URL)
})

</script>

<template>
  <div
    class="bg-app-background bg-no-repeat bg-cover bg-left lg:bg-left transition-all min-h-screen pt-20 px-1 flex flex-col gap-2 lg:gap-4 font-cabin">
    <Banner></Banner>
    <div class="h-8 lg:h-14"></div>
    <Info v-if="githubData" :url="GH_URL">
      <img class="w-10 lg:w-12 rounded-full" :src="githubData[0]['actor']['avatar_url']">
      <div class="">
        <p class="transition-all lg:text-lg">{{ githubData[0]['actor']['display_login'] }}</p>
        <p class="text-xs lg:text-sm">Last Activity: {{ convertedDate }}</p>
      </div>
      <img class="w-10 lg:w-12" src="./assets/github-mark-white.png">
    </Info>
    <Info v-else>
      <p class="font-bold text-xl">LOADING...</p>
    </Info>
    <Info :url="LI_URL">
      <div class="">
        <p class="lg:text-lg">Dan S.</p>
        <p class="text-xs lg:text-base text-neutral-300">Software Developer</p>
      </div>
      <img class="w-10 lg:w-14" src="./assets/LI-In-Bug.png" />
    </Info>
    <Info :url="BLOG_URL">
      <img class="w-12 lg:w-16 rounded-full" src="./assets/blog-profile-pic.jpg" />
      <div class="">
        <p class="font-bold text-lg lg:text-xl text-center">blog one <span class="text-2xl">&#128640;</span></p>
        <p class="text-sm lg:text-base text-neutral-300">package may not include real life rocket.</p>
      </div>
    </Info>
  </div>
</template>

<style scoped></style>
