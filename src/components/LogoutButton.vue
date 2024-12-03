<template>
    <ElButton class="LogoutButton" type="danger" plain @click="handelLogout" :icon="SwitchButton" />
</template>

<script setup lang="ts">
import {SwitchButton} from "@element-plus/icons-vue";
import {ElNotification} from "element-plus";
import { userStore } from "@/stores/user";

const {clearToken} = userStore();

const handelLogout = () => {
    clearToken();
    ElNotification({
        title: "登出成功",
        type: "success"
    });
    window.location.reload();
};
</script>

<style>
.LogoutButton {
    height: 30px;
    width: 30px;
}
</style>