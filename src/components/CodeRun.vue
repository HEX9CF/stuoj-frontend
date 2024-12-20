<template>
    <CodeEditor v-model="code_text" :mode="mode" :theme="theme" :options="options" />
    <div class="button-container">
        <LanguageSelect v-model="language_id" style="width: 50%; margin-right: 2%;" />
        <ElButton class="debug-button" @click="handleDebug">调试</ElButton>
        <ElButton class="submit-button" type="primary" @click="handleSubmit">提交</ElButton>
    </div>
    <div class="result-container" v-if="resultFlag">
        <ElContainer class="result-container-content">
            <ElHeader class="result-container-header">
                <h1>{{ debugFlag ? '调试结果' : '提交结果' }}</h1>
            </ElHeader>
            <ElMain class="result-container-main">
                <div v-if="debugFlag">
                    <h3>输入</h3>
                    <ElInput type="textarea" v-model="debug_input" resize="none"
                        :autosize="{ minRows: 2, maxRows: 20 }" />
                    <h3>输出</h3>
                    <ElInput type="textarea" v-model="debug_output" resize="none" :readonly="true"
                        :autosize="{ minRows: 2, maxRows: 20 }" />
                    <div v-if="testState && testState.code === 1">
                        <ElText style="margin-right: 20px;">运行时间:{{ time }}s</ElText>
                        <ElText>运行内存:{{ memory }}KB</ElText>
                    </div>
                </div>
                <div v-else>
                    <RecordInfo v-bind:id="judge_id" />
                </div>
            </ElMain>
        </ElContainer>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { userStore } from '@/stores/user';
import { TestRun } from '@/apis/judge';
import { Submit } from '@/apis/judge';

const { execute: testExcute, state: testState } = TestRun();
const { execute: submitExcute, state: submitState } = Submit();

const { token } = userStore();

const props = withDefaults(defineProps<{
    modelValue?: string,
    mode?: string,
    theme?: string,
    options?: any,
    problem?: number | string,
    input_text?: string,
}>(), {
    options: () => ({}),
    theme: 'monokai',
    input_text: '',
});

const language_id = ref(1);
const code_text = ref("");
const debug_input = ref(props.input_text);
const debug_output = ref("");
const resultFlag = ref(false);
const debugFlag = ref(false);
const time = ref(0);
const memory = ref(0);
const state = ref(0);
const judge_id = ref(0);

const emit = defineEmits(['update:modelValue']);

watch(() => code_text, (newValue) => {
    emit('update:modelValue', newValue);
});

const handleDebug = async () => {
    debugFlag.value = true;
    resultFlag.value = true;
    await testExcute({
        headers: {
            Authorization: token.value
        },
        data: {
            language_id: language_id.value,
            source_code: code_text.value,
            stdin: debug_input.value,
        }
    });
    if (testState.value?.code === 1) {
        const res = testState.value?.data as {
            memory: number;
            status: number;
            stdout: string;
            time: number;
            [property: string]: any;
        };
        debug_output.value = res.stdout;
        memory.value = res.memory;
        time.value = res.time;
        state.value = res.status;
    }

};

const handleSubmit = async () => {
    debugFlag.value = false;
    resultFlag.value = true;
    let problem_id: number | undefined;
    if (typeof props.problem === 'string') {
        const match = props.problem.match(/\d+/);
        if (match) {
            problem_id = parseInt(match[0], 10);
        }
    } else if (typeof props.problem === 'number') {
        problem_id = props.problem;
    }
    if (problem_id != undefined)
        await submitExcute({
            headers: {
                Authorization: token.value
            },
            data: {
                language_id: language_id.value,
                source_code: code_text.value,
                problem_id: problem_id,
            }
        });
    if (submitState.value?.code === 1) {
        const res = submitState.value?.data as number;
        judge_id.value = res;
    }
};
</script>

<style scoped>
.button-container {
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-end;
}

.submit-button {
    width: 15%;
}

.result-container-content {
    border: 1px solid #dcdfe6;
}

.result-container-header {
    height: 30px;
    background-color: #f0f0f0c5;
}

.result-container-main {
    text-align: left;
}
</style>