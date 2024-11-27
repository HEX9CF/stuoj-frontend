<template>
    <HeaderNav />
    <RouterView class="router-view" />
</template>
<script setup lang="ts">
// import HeaderNav from "./components/HeaderNav.vue";
</script>

<style>
.router-view {
    display: flex;
    /* 将.app-main设置为flex容器 */
    justify-content: center;
    /* 水平居中flex子项 */
    align-items: center;
    /* 垂直居中flex子项（如果需要） */
    width: 80vh;
    height: 100vh;
    /* 保持高度设置 */
}
</style>