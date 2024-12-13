<template>
    <ElForm :model="params">
        <el-form-item label="题名" label-position="right">
            <el-input v-model="params.title" />
        </el-form-item>
        <el-form-item label="难度" label-position="right">
            <el-select v-model="params.difficulty" clearable placeholder="Select" style="width: 240px">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </el-form-item>
    </ElForm>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getProblemListApi } from '@/apis/problem';

const options = [
    {
        value: 0,
        label: '暂无评定',
    },
    {
        value: 1,
        label: '普及−',
    },
    {
        value: 2,
        label: '普及/提高−',
    },
    {
        value: 3,
        label: '普及+/提高',
    },
    {
        value: 4,
        label: '提高+/省选−',
    },
    {
        value: 5,
        label: '省选/NOI',
    },
    {
        value: 6,
        label: 'NOI/NOI+/CTSC',
    }
]


const { execute } = getProblemListApi()
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
})

const getList = async () => {
    const state = await execute({
        params: params.value
    })
}



</script>