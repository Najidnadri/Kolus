<template>
    <Teleport to="body" >
        <Transition name="wrapper">
            <div v-if="notifications.length !== 0" class="notification grid fixed z-99 top-10px left-50% translate-x--50% min-w-200px min-h-50px overflow-hidden place-items-center items-center justify-center" @click="closePopup" >
                <TransitionGroup name="list" tag="div" class="min-w-200px min-h-50px flex flex-row justify-center items-center gap-10px flex-wrap white">
                    <div v-for="noti in notifications" :key="noti.id" :class="noti.class" class="min-w-100px min-h-50px overflow-hidden grid grid-cols-[auto_20px] px-10px py-8px items-center justify-center place-items-center border-rounded-xl overflow-hidden">
                        <h2 class="text-16px font-600">{{ noti.message }}</h2>
                        <p class="text-16px font-300 text-right w-100% cursor-pointer" @click="store.commit('noti/removeNoti', noti.id)">x</p>
                    </div>
                </TransitionGroup>
            </div>
        </Transition>
    </Teleport>
    
</template>

<script setup lang="ts">
import { computed, ComputedRef } from "vue"
import { useStore } from "vuex";
import { Noti } from "../../store/noti";

let store = useStore();
let notifications: ComputedRef<Noti[]> = computed(() => store.state.noti.notifications);


let emits = defineEmits<{
    (e: 'close'): void
}>();

let closePopup = () => {
    emits('close')
}


</script>

<style scoped>

.green {
  color: white;
  background-color: var(--green);
}

.red {
  color: white;
  background-color: var(--red);
}

.grey {
  color: white;
  background-color: var(--grey);
}
</style>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-50px) translateX(-50%);
}


.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

.wrapper-enter-active,
.wrapper-leave-active {
  transition: opacity 0.5s ease;
}

.wrapper-enter-from,
.wrapper-leave-to {
    opacity: 0;
    transform: translateY(-50px) translateX(-50%);
}

.wrapper-enter-to,
.wrapper-leave-from {
  opacity: 1;
  transform: translateY(0px) translateX(-50%);
}

</style>