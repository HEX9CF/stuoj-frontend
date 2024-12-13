<template>
    <ElForm :model="params">
        <el-form-item label="题名" label-position="right">
            <el-input v-model="params.title" />
        </el-form-item>
        <el-form-item label="难度" label-position="right">
            <ProblemDifficultySelect v-model="params.difficulty" ref="difficultySelectRef" />
        </el-form-item>
        <el-form-item label-width="auto">
            <ProblemTagSelect v-model="params.tag" ref="problemTagSelectRef" />
        </el-form-item>
        <el-form-item>
            <el-button @click="handleReset">重置</el-button>
            <el-button type="primary" @click="getList">查询</el-button>
        </el-form-item>
    </ElForm>
    <ProblemList :problems="problems" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getProblemListApi } from '@/apis/problem';
import type { ProblemInfo } from '@/types/Problem';
import type { Page } from '@/types/misc';
import ProblemTagSelect from '@/components/problem/ProblemTagSelect.vue';
import ProblemDifficultySelect from '@/components/problem/ProblemDifficultySelect.vue';


const problemPage = ref<Page<"problems", ProblemInfo>>();
const problems = ref<ProblemInfo[]>([]);
const { state, execute } = getProblemListApi()
interface ProblemParams {
    page: number
    size: number
    title?: string
    difficulty?: number
    tag?: number[]
    status?: number
}
const params = ref<ProblemParams>({
    page: 1,
    size: 20
});

const getList = async () => {
    await execute({
        params: {
            ...params.value,
            tag: params.value.tag?.join(',') // 将数组转换为字符串
        }
    })
    if (state.value && state.value.code === 1) {
        problemPage.value = state.value.data as Page<"problems", ProblemInfo>;
        problems.value = problemPage.value?.problems;
    }
}

onMounted(getList);

const problemTagSelectRef = ref<InstanceType<typeof ProblemTagSelect> | null>(null);
const difficultySelectRef = ref<InstanceType<typeof ProblemDifficultySelect> | null>(null);
const handleReset = () => {
    if (difficultySelectRef.value)
        difficultySelectRef.value.reset();

    if (problemTagSelectRef.value)
        problemTagSelectRef.value.resetAndConfirm();

    params.value.title = '';
};

</script>