<script setup></script>
<template>
    <div class="container rounded-2xl py-4 mx-auto bg-stone-800 hover:bg-violet-500 transition-all flex items-center flex-row justify-center gap-4  text-neutral-200">
        <img class="w-8" src="../components/icons/github-mark-white.png">
        <div class="">
            <a class="text-center" href="https://github.com/superwizardclass">superwizardclass</a>
            <p class="text-xs ">Last commit: {fetchedData}</p>
        </div>
    </div>
</template>
<style scoped></style>