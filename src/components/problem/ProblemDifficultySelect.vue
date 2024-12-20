<template>
    <el-select clearable v-model="selectedValue" placeholder="请选择难度" @change="handleSelectChange" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import { Difficulty,DifficultyMap } from '@/types/Problem';
const props = defineProps({
    modelValue: {
        type: [Number, String],
        default: null,
    },
});

const options = [
    {
        value: Difficulty.unknown,
        label: DifficultyMap[Difficulty.unknown],
    },
    {
        value: Difficulty.easy,
        label: DifficultyMap[Difficulty.easy],
    },
    {
        value: Difficulty.medium,
        label: DifficultyMap[Difficulty.medium],
    },
    {
        value: Difficulty.hard,
        label: DifficultyMap[Difficulty.hard],
    },
    {
        value: Difficulty.expert,
        label: DifficultyMap[Difficulty.expert],
    },
    {
        value: Difficulty.legend,
        label: DifficultyMap[Difficulty.legend],
    },
    {
        value: Difficulty.master,
        label: DifficultyMap[Difficulty.master],
    }
]

// 初始化selectedValue为props中的modelValue
const selectedValue = ref(props.modelValue);

const emit = defineEmits(['update:modelValue']);

const handleSelectChange = (value: number) => {
    selectedValue.value = value;
    emit('update:modelValue', value);
};
const reset = () => {
    selectedValue.value = "";
};
defineExpose({
    reset,
});
</script>