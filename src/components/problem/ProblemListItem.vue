<template>
    <div class="problem-list-item">
        <div class="problem-list-item__id">
            {{ props.problem.id }}
        </div>
        <ElLink class="problem-list-item__title" :href="'/web/problem/' + props.problem.id">
            {{ props.problem.title }}
        </ElLink>
        <div v-if="info.role >= ROLE.Admin" class="problem-list-item__status">
            {{ props.problem.status }}
        </div>
        <div class="problem-list-item__difficulty">
            {{ difficultyString }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { type ProblemInfo, DifficultyMap, Difficulty } from '@/types/Problem';
import { userStore } from '@/stores/user';
import { ROLE } from '@/types/User';
import { ref } from 'vue';

const { info } = userStore();
const props = defineProps<{ problem: ProblemInfo }>();
const difficultyString = ref<string>(DifficultyMap[props.problem.difficulty]);
</script>

<style scoped>
.problem-list-item {
    display: flex;
    align-items: center;
    gap: 16px; /* 调整间距 */
    padding: 8px; /* 添加内边距 */
    border-bottom: 1px solid #eaeaea; /* 添加底部边框 */
}

.problem-list-item__id,
.problem-list-item__title,
.problem-list-item__status,
.problem-list-item__difficulty {
    font-size: 14px; /* 统一字体大小 */
}

.problem-list-item__title {
    color: #007bff; /* 设置链接颜色 */
    text-decoration: none; /* 去掉下划线 */
}

.problem-list-item__title:hover {
    text-decoration: underline; /* 鼠标悬停时显示下划线 */
}

.problem-list-item__status {
    font-weight: bold; /* 加粗状态文本 */
}

.problem-list-item__difficulty {
    color: #5cb85c; /* 设置难度颜色 */
    margin-left: auto; /* 确保难度项靠右 */
}
</style>