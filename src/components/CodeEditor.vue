<template>
    <div ref="editor" class="ace-editor"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, toRefs, onUnmounted } from 'vue';
import ace from 'brace';
import 'brace/mode/javascript'; // 根据需要加载其他语言模式
import 'brace/theme/monokai'; // 根据需要加载其他主题

const props = withDefaults(defineProps<{
    modelValue: string,
    mode?: string,
    theme?: string,
    options?: any,
}>(), {
    options: () => ({}),
    theme: 'monokai',
});

const emit = defineEmits(['update:modelValue']);

const { mode, theme, options } = toRefs(props);

const editor = ref(null);

onMounted(() => {
    const editorElement = editor.value as unknown as HTMLElement;
    const editorInstance = ace.edit(editorElement);
    editorInstance.getSession().setMode(`ace/mode/${mode.value}`);
    editorInstance.setTheme(`ace/theme/${theme.value}`);
    editorInstance.setOptions(options.value);

    editorInstance.on('change', () => {
        const content = editorInstance.getValue();
        emit('update:modelValue', content);
    });
});

watch(theme, (newTheme) => {
    const editorInstance = ace.edit(editor.value as unknown as HTMLElement);
    editorInstance.setTheme(`ace/theme/${newTheme}`);
});

watch(mode, (newMode) => {
    const editorInstance = ace.edit(editor.value as unknown as HTMLElement);
    editorInstance.getSession().setMode(`ace/mode/${newMode}`);
});

onUnmounted(() => {
    const editorInstance = ace.edit(editor.value as unknown as HTMLElement);
    editorInstance.destroy();
});
</script>

<style scoped>
.ace-editor {
    height: 700px;
    width: 100%;
    font-size: 16px;
}
</style>