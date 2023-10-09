<script setup>
const props = defineProps(['url'])
</script>
<template>
  <a :href="url"
    class="container rounded-2xl py-4 mx-auto max-w-xl transition-all bg-opacity-70 hover:bg-opacity-100 bg-stone-800 hover:bg-cyan-900 flex items-center flex-row justify-center gap-4 lg:gap-6 text-neutral-200">
    <div class="">
      <p class="lg:text-lg">Dan S.</p>
      <p class="text-xs lg:text-base text-neutral-300">Software Developer</p>
    </div>
    <img class="w-8 lg:w-12" src="../assets/LI-In-Bug.png" />
  </a>
</template>
<style scoped></style>
