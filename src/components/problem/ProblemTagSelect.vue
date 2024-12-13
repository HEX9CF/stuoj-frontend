<template>
    <ElButton plain @click="showDialog()">
        标签
    </ElButton>
    <ElDialog v-model="tagDialogVisible">
        <div class="flex gap-2">
            <ElCheckTag v-for="tag in wsTags" :key="tag.data.id" v-model:checked="tag.checked" :label="tag.data.name">
                {{ tag.data.name }}
            </ElCheckTag>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="handleCancel()">Cancel</el-button>
                <el-button type="primary" @click="handleConfirm()">
                    Confirm
                </el-button>
            </div>
        </template>
    </ElDialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getProblemTagsApi } from '@/apis/problem';
import type { Tag } from '@/types/Problem';

const props = defineProps({
    modelValue: {
        type: Array<number>,
        default: null,
    },
});


const emit = defineEmits(['update:modelValue']);

interface TemTag {
    checked: boolean;
    data: Tag;
}

const tags = ref<number[]>(props.modelValue);
const tagDialogVisible = ref(false);
let wsTags = ref<TemTag[]>([]);
let savedWsTags: TemTag[] | null = null; // 用于保存wsTags状态的变量

const { state, execute } = getProblemTagsApi();

onMounted(async () => {
    await execute();
    if (state.value?.data && Array.isArray(state.value.data)) {
        wsTags.value = state.value.data.map((tag: Tag) => ({
            checked: false,
            data: tag
        }));
    }
})

const showDialog = () => {
    if (savedWsTags === null) {
        savedWsTags = JSON.parse(JSON.stringify(wsTags.value));
    }
    tagDialogVisible.value = true;
};

const handleConfirm = () => {
    tagDialogVisible.value = false;
    tags.value = wsTags.value.filter(tag => tag.checked).map(({ data }) => data.id);
    emit('update:modelValue', tags.value);
    savedWsTags = null; // 确认后清空保存的状态
};

const handleCancel = () => {
    if (savedWsTags !== null) {
        wsTags.value =JSON.parse(JSON.stringify(savedWsTags));
    }
    tagDialogVisible.value = false;
    savedWsTags = null; // 取消后清空保存的状态
};
</script>