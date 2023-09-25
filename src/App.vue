<script setup>
import { computed, onMounted, ref } from 'vue'
import Banner from './components/Banner.vue' 
import Github from './components/Github.vue'
import Linkedin from './components/Linkedin.vue'

const githubData = ref(null)
const API_URL = 'https://api.github.com/users/superwizardclass/events'
const fetchGithubData = async (url) => {
  const response = await fetch(url)
  const githubJson = await response.json()
  githubData.value = githubJson
}

onMounted(() => {
  fetchGithubData(API_URL)
})

</script>

<template>
<div class="bg-app-background bg-no-repeat bg-cover bg-left lg:bg-left transition-all min-h-screen pt-20 px-1 flex flex-col gap-2 lg:gap-4 font-cabin">
<Banner></Banner>
<div class="h-8 lg:h-14"></div>
<Github v-if="githubData" :github-data="githubData"></Github>
<Linkedin></Linkedin>
</div>
</template>

<style scoped>

</style>
