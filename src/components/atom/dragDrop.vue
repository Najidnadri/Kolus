<template>
    <div class="input-box w-100% h-80px border-rounded-xl overflow-hidden p-7px cursor-pointer relative" :class="{idle: state === 'idle', hover: state === 'hover', error: state === 'error'}">
        <div class="wrapper h-100% w-100% flex justify-center items-center border-rounded-xl relative z-10">
            <input type="file" class="display-none"  ref="input" @input="evt => onInput(evt)" multiple/>
            <label for="file" class="text-14px cursor-pointer" v-if="state === 'idle'">
                <strong>Choose a photo</strong><span class="box__dragndrop"> or drag it here</span>.
            </label>
            <label for="file" class="text-14px cursor-pointer" v-else-if="state === 'hover'">
                <strong>Drop Here!</strong>
            </label>
            <label for="file" class="text-14px cursor-pointer" v-else-if="state === 'error'">
                <strong>Files must be an image only!</strong>
            </label>
        </div>

        <div class="capture-layer absolute top-0 bottom-0 right-0 left-0 h-100% w-100% opacity-0 z-30 third-bg" 
            @click="boxClick" 
            @dragenter.self="startDrag" 
            @dragleave.self="leaveDrag" 
            @dragover="dragOVer"
            @drop="drop"
            >

        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue"
/*
CLASSES & INTERFACE
*/
enum inputState {
    hover = 'hover',
    idle = 'idle',
    error = 'error',
    errNotFile = 'errNotFile'
}

/*
    PROPS & EMITS
*/

let props = defineProps({
    key: String,
    filter: Function,
    errorMsg: String,
    errNotFile: String,
})

let emits = defineEmits<{
    (e: 'changes', files: File[]): void
}>()

/*
    VARIABLES
*/
let input = ref<HTMLInputElement | null>(null);
let state = ref<inputState>(inputState.idle);

/*
    EVENT HANDLER
*/
let boxClick = () => {
    input.value!.click();
}

let onInput = (event: any) => {
    let files: File[] = Array.from(event.target.files);
    files.forEach((file) => {
        if (!file.type.startsWith('image')) {
            console.log('file is not an image');
            state.value = inputState.error
        }
    })

    if (state.value !== inputState.error && state.value !== inputState.errNotFile) {
        console.log('emit change')
        emits('changes', files);
    }

    state.value = inputState.idle;
}

let startDrag = (event: DragEvent) => {
    state.value = inputState.hover
    Array.from(event.dataTransfer?.items!).forEach((file) => {
        if (!file.type.startsWith('image')) {
            console.log('file is not an image');
            state.value = inputState.error
        }
    })
}

let leaveDrag = () => {
    state.value = inputState.idle;
}

let dragOVer = (event: any) => {
    event.preventDefault();
}

let drop = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    let files = Array.from(event.dataTransfer?.files!);
    if (state.value !== inputState.error && state.value !== inputState.errNotFile) {
        emits('changes', files);
    }

    state.value = inputState.idle;
}
</script>

  
<style scoped>
.input-box {
    transition: all 0.3s ease;
}

.idle {
    background-color: var(--secondary-color);
    color: var(--white);
}

.idle .wrapper {
    border: 2px dashed white
}

.hover {
    background-color: var(--third-color);
    color: var(--black)
}

.hover .wrapper {
    border: 2px dashed var(--black);
}

.error {
    background-color: var(--red);
    color: white
}

.error .wrapper {
    border: 2px dashed white;
}
</style>