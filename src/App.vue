<script setup>
import { computed, onBeforeMount, onMounted, ref } from 'vue'
import Banner from './components/Banner.vue' 
import Github from './components/Github.vue'
import Linkedin from './components/Linkedin.vue'

const githubData = ref('')
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
<div class="bg-app-background bg-no-repeat bg-cover min-h-screen pt-20 px-1 flex flex-col gap-2 font-cabin">
<Banner></Banner>
<div class="h-8"></div>
<Github :data="githubData"></Github>
<Linkedin></Linkedin>
</div>
</template>

<style scoped>

</style>
