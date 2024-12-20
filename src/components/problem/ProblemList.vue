<template>
    <ProblemListItem v-for="problem in props.problems" :key="problem.id" :problem="problem" />
</template>

<script setup lang="ts">
import type { ProblemInfo } from '@/types/Problem';

const props = defineProps<{ problems: ProblemInfo[] }>();
</script>