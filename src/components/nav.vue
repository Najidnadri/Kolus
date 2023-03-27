<template>
  <header class="header sticky z-99 top-0 left-0 right-0 h-70px flex flex-row justify-between items-center primary-bg backdrop-blur-sm px-20px">
    <div class="text-16px black font-700">
        logo
    </div>
    <div class="w-200px grid grid-cols-[1fr_1px_1fr] gap-5px items-center justify-center text-16px black font-600">
        <p class="text-16px text-end cursor-pointer" :class="{'font-700': feedType === 'foryou'}" @click="store.commit('home/changeFeed', 'foryou')">
            For You
        </p>
        <div class="w-1px black-bg h-100%"></div>
        <p class="text-16px text-start cursor-pointer" :class="{'font-700': feedType === 'following'}" @click="store.commit('home/changeFeed', 'following')">
            Following
        </p>
    </div>
    <div>
        <h2 class="text-16px black text-center">Live</h2>
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { FeedType } from "@/store/home";
import { computed, type ComputedRef } from "vue";
import { useStore } from "vuex";


let store = useStore();
let feedType: ComputedRef<FeedType> = computed(() => store.state.home.feedType);

</script>

<style scoped>

</style>