<template>
    <ElButton type="danger" @click="handelLogout">
        登出
    </ElButton>
</template>

<script setup lang="ts">
import {ElNotification} from "element-plus";
import { userStore } from "@/stores/user";

const {clearToken} = userStore();

const handelLogout = () => {
    clearToken();
    ElNotification({
        title: "登出成功",
        type: "success"
    });
};

</script>