<template>
    <ElSelect v-model="selectedValue" @change="handleSelectChange">
        <ElOption v-for="item in options" :key="item.id" :label="item.name" :value="item.id">{{ item.name }}</ElOption>
    </ElSelect>
</template>

<script setup lang="ts">
import { GetLanguages } from '@/apis/judge';
import type { Language } from '@/types/Judge';
import {  onMounted, ref } from 'vue';

const { execute, state } = GetLanguages();
const options = ref<Language[]>([]);

const props = defineProps({
    modelValue: {
        type: [Number],
        default: null,
    },
});

const selectedValue = ref(props.modelValue);

onMounted(async () => {
    await execute();
    if (state.value?.code === 1) {
        options.value = state.value.data as Language[];
    }
});
const emit = defineEmits(['update:modelValue']);
const handleSelectChange = (value: number) => {
    selectedValue.value = value;
    emit('update:modelValue', value);
};

</script>