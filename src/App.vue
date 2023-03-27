<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import navVue from './components/nav.vue';
</script>

<template>
  <navVue />
  <RouterView />
</template>

<style>
#app {
  height: 100vh;
  height: 100svh;
  margin: 0;
}
</style>
