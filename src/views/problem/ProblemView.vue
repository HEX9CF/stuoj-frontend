<template>

</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { ProblemInfo } from "@/types/Problem";
import { useRouteParams } from "@vueuse/router";
import { getProblemApi } from "@/apis/problem";

const userId = useRouteParams<number>("id");

const { state, execute } = getProblemApi();

const problemInfo = ref<ProblemInfo>({} as ProblemInfo);

onMounted(async () => {
    execute({
        id: userId.value,
    });
});

</script>