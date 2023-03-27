<template>
    <Teleport to="body" >
        <Transition>
            <div v-if="props.show" class="popup grid fixed z-97 top-0 bottom-0 left-0 right-0 w-100% overflow-hidden place-items-center items-center justify-center backdrop-blur-sm" @click="closePopup" >
                <div class="popup-box w-100% max-w-1000px max-h-95% overflow-y-auto third-bg min-w-400px min-h-300px border-rounded-xl overflow-x-hidden">
                    <slot></slot>
                </div>        
            </div>
        </Transition>
    </Teleport>
    
</template>

<script setup lang="ts">

let props = defineProps<{
    show: boolean,
}>();

let emits = defineEmits<{
    (e: 'close'): void
}>();

let closePopup = () => {
    emits('close')
}


</script>

<style scoped>
.popup {
    height: 100svh;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(1.2)
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: scale(1)
}

</style>