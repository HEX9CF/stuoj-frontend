<template>
    <el-select clearable v-model="selectedValue" placeholder="请选择难度" @change="handleSelectChange" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: [Number, String],
        default: null,
    },
});

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

// 初始化selectedValue为props中的modelValue
const selectedValue = ref(props.modelValue);

const emit = defineEmits(['update:modelValue']);

// 监听selectedValue的变化，并更新props中的modelValue
watch(selectedValue, (newValue) => {
    emit('update:modelValue', newValue);
});

const handleSelectChange = (value: number) => {
    selectedValue.value = value;
};
</script>