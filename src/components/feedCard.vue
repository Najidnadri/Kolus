<template>
  <div class="card w-100% py-15px mt-10px grid grid-cols-[60px_auto_50px] grid-rows-[60px_auto_60px] items-center">
    <div class="card-logo col-span-1 col-start-1 h-100% w-100%">
        <div class="profile h-50px w-50px border-rounded-full secondary-bg">

        </div>
    </div>
    <div class="col-span-1 col-start-2 flex flex-col justify-center gap-5px">
        <h2 class="text-15px font-700">KolusOfficial</h2>
        <h2 class="text-15px font-500 opacity-80">@KolusOfficial</h2>
    </div>
    <div class="col-span-1 col-start-3">
        <p class="black opacity-80 text-15px">12 min</p>
    </div>

    <div class="col-span-2 col-start-2 row-start-2 secondary-bg h-100% min-h-100px max-h-400px">
        <h2>Hello</h2>
    </div>

    <div class="action-btns col-span-2 col-start-2 row-start-3 flex flex-row justify-between items-center flex-wrap gap-20px">
        <div class="flex flex-row justify-evenly items-center gap-15px">
            <AkHeart class="text-18px opacity-70 hover:opacity-100 cursor-pointer" />
            <FaRetweet class="text-18px opacity-70 hover:opacity-100 cursor-pointer"/>
            <AkArrowForwardThickFill class="text-18px opacity-70 hover:opacity-100 cursor-pointer"/>
        </div>
        <div>
            <p class="text-15px opacity-80 black cursor-pointer hover:opacity-100">3 comments</p>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AkHeart } from "@kalimahapps/vue-icons";
import { FaRetweet } from "@kalimahapps/vue-icons";
import { AkArrowForwardThickFill } from "@kalimahapps/vue-icons";

</script>

<style scoped>
.card {
    height: fit-content;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>