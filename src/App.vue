<template>
  <div class="container">
    <TheHeader />

    <router-view />

    <TheFooter class="mt-250" />
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<style lang="scss"></style>
