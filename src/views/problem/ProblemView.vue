<template>
    <ElRow :gutter="20">
        <ElCol :span="18">
            <ElCard shadow="always">
                <div class="problem-title">
                    <h1>{{ problemInfo.id }} {{ problemInfo.title }}</h1>
                </div>
                <div class="problem-content">
                    <h3 class="weight">描述</h3>
                    <div v-html="renderMarkAndLaTeX(problemInfo.description || '')"></div>
                </div>
                <div class="problem-input">
                    <h3 class="weight">输入格式</h3>
                    <div v-html="renderMarkAndLaTeX(problemInfo.input || '')"></div>
                </div>
                <div class="problem-output">
                    <h3 class="weight">输出格式</h3>
                    <div v-html="renderMarkAndLaTeX(problemInfo.output || '')"></div>
                </div>
                <div class="problem-sample">
                    <h3 class="weight">输入样例</h3>
                    <div class="problem-sample-input sample-box">
                        {{ problemInfo.sample_input }}
                    </div>
                    <h3 class="weight">输出样例</h3>
                    <div class="problem-sample-output sample-box">
                        {{ problemInfo.sample_output }}
                    </div>
                </div>
                <div class="problem-hint">
                    <h3 class="weight">提示</h3>
                    <div v-html="renderMarkAndLaTeX(problemInfo.hint || '')"></div>
                </div>
                <CodeRun :problem="problemId" :input_text="problemInfo.sample_input" />
            </ElCard>
        </ElCol>
        <ElCol :span="6">
            <ElCard shadow="always">
                <div class="problem-info">
                    <div class="problem-info-item">
                        <h4>难度</h4>
                        <span>{{ DifficultyMap[problemInfo.difficulty] }}</span>
                    </div>
                    <div class="problem-info-item">
                        <h4>时间限制</h4>
                        <span>{{ problemInfo.time_limit }} s</span>
                    </div>
                    <div class="problem-info-item">
                        <h4>内存限制</h4>
                        <span>{{ problemInfo.memory_limit / 1024 }} MB</span>
                    </div>
                </div>
            </ElCard>
            <ElCard shadow="always" style="margin-top: 20px;">
                <div class="problem-info">
                    <div class="problem-info-item">
                        <h4>来源</h4>
                        <span>{{ problemInfo.source }}</span>
                    </div>
                </div>
            </ElCard>
        </ElCol>
    </ElRow>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { ProblemInfo, Solution, Tag } from "@/types/Problem";
import { useRouteParams } from "@vueuse/router";
import { getProblemApi } from "@/apis/problem";
import type { ApiResponse } from "@/types/ApiResponse";
import { renderMarkAndLaTeX } from "@/utils/renderMarkAndLaTeX";
import { DifficultyMap } from "@/types/Problem";


const problemId = useRouteParams<number>("id");

const { state, execute } = getProblemApi();

const problemInfo = ref<ProblemInfo>({} as ProblemInfo);

onMounted(async () => {
    await execute({
        id: problemId.value,
    });
    if (state.value?.code === 1) {
        if (state.value.data) {
            const data = state.value as unknown as ApiResponse<{
                problem: ProblemInfo
                tags: Tag[]
                solutions?: Solution[]
            }>;
            console.log(data.data);
            if (typeof data.data === 'object' && data.data !== null && 'problem' in data.data) {
                problemInfo.value = data.data.problem as ProblemInfo;
            }
        }
    }
});



</script>

<style scoped>
.problem-title,
.problem-content,
.problem-input,
.problem-output,
.problem-sample,
.problem-hint,
.problem-info {
    text-align: left;
    margin-bottom: 20px;
}

.weight {
    font-weight: bold;
}

.problem-sample-input,
.problem-sample-output {
    display: block;
    font-size: 13px;
}

.sample-box {
    border: 1px solid #ccc;
    /* 边框颜色 */
    padding: 10px;
    /* 内边距 */
    border-radius: 5px;
    /* 圆角 */
    background-color: #f9f9f9;
    /* 背景颜色 */
    margin-bottom: 20px;
    /* 底部外边距 */
}
</style>