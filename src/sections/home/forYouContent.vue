<template>
    <div class="content min-h-1000px white-bg relative z-50 mt-15px p-20px">
      <feedCardVue />
      <feedCardVue />
    </div>
</template>

<script setup lang="ts">
import feedCardVue from "../../components/feedCard.vue";



</script>

<style scoped>
.content {
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
}
</style>