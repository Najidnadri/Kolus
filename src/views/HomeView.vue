<script setup lang="ts">
import forYouContent from '../sections/home/forYouContent.vue';
import forYouHero from '../sections/home/forYouHero.vue';
import followingHero from '@/sections/home/followingHero.vue';
import { computed, ref, watch, type ComputedRef } from 'vue';
import { useStore } from 'vuex';
import type {FeedType} from "../store/home";


let store = useStore();
let feedType: ComputedRef<FeedType> = computed(() => store.state.home.feedType);
let section = ref<HTMLElement | null>(null);

// let changeSection =  (type: FeedType) => {
//   feedType.value = type
//   if (feedType.value === FeedType.following) {
//     section.value!.classList.remove('foryou')
//     section.value!.classList.add('following')
//   } else {
//     section.value!.classList.remove('following')
//     section.value!.classList.add('foryou')
//   }
// }

watch(feedType, () => {
  if (feedType.value === 'following') {
    section.value!.classList.remove('foryou')
    section.value!.classList.add('following')
  } else {
    section.value!.classList.remove('following')
    section.value!.classList.add('foryou')
  }
})

</script>

<template>
    <div ref="section" class="wrapper foryou overflow-hidden w-200% flex flex-row justify-start items-start mt--80px relative ">
      <div class="w-50% relative overflow-y-auto h-100svh h-100vh content">
        <forYouHero />
        <forYouContent />
      </div>
      <div class="w-50% relative overflow-y-auto h-100svh h-100vh content" >
        <followingHero />
        <forYouContent />
      </div>
    </div>

</template>

<style scoped>
.wrapper {
  transition: all 0.5s ease;
}

.content::-webkit-scrollbar {
  display: none;
}

.foryou {
  transform: translateX(0);
}

.following {
  transform: translateX(-50%);
}
</style>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 1;
  transform: translateX(100%);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
