<template>
    <el-avatar :size="size" :src="props.src" @error="errorHandler">
        <img :src="empty" />
    </el-avatar>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{
    size?: number
    src?: string
}>(), {
    size: 40
});

const errorHandler = () => true;
const empty = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png');

</script>

<style></style>