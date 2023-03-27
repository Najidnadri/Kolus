<template>
    <div class="quill-text-editor w-100% h-100%">
        <QuillEditor class="w-100% h-100%" contentType='html' :content="content" @update:content="update3" theme="snow" toolbar="minimal" :placeholder="'insert anything'"/>
    </div>
</template>
  
<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref } from '@vue/reactivity';

export default {
    props: ["value"],
    components: {
    QuillEditor
    },
    data() {
    return {
        content: this.value
    }
    },
    methods: {
    update3(event) {
        this.$emit('input', event);
    }
    }
}
</script>
  
<style>
.quill-text-editor {
    background-color: var(--white);
    overflow: hidden;
    min-height: 400px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

.quill-text-editor p, .quill-text-editor li, .quill-text-editor ul {
    font-size: 1.6rem;
}

.quill-text-editor .ql-toolbar {
    border: none;
    border-bottom: 2px solid var(--black);
}

.quill-text-editor .ql-container {
    min-height: 400px;
    border: none;
}
</style>