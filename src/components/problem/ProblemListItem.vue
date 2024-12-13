<template>
    <div class="problem-list-item">
        <div class="problem-list-item__id">
            {{ props.problem.id }}
        </div>
        <ElLink class="problem-list-item__title" :href="'/problem/' + props.problem.id">
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