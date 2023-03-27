<template>
  <div class="editor-comp w-100% h-100% overflow-hidden grid grid-cols-[300px_5px_auto]" ref="section">
    <div class="w-100% h-100% ">
        <slot name="left"></slot>
    </div>

    <div id="resize-bar" ref="resizeBar" class="w-5px h-100% white-bg cursor-col-resize">

    </div>

    <div class="w-100% h-100%">
        <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

let section = ref<HTMLElement | null>(null);
let resizeBar = ref<HTMLElement | null>(null);
let isResizing = ref<boolean>(false);

onMounted(() => {
    window.addEventListener('mousemove', (event) => {
        if (isResizing.value === true) {
            section.value!.style.gridTemplateColumns = event.clientX + 'px 5px auto';
            resizeBar.value!.dispatchEvent(new CustomEvent('resizetab'));
        }
    })

    resizeBar.value!.addEventListener('mousedown', () => {
        isResizing.value = true
    })
    resizeBar.value!.addEventListener('mouseup', () => {
        isResizing.value = false
    })
})

</script>

<style scoped>
</style>