<template>
    <HeaderNav />
    <ElContainer class="app-container">
        <ElMain class="main-content">
            <RouterView />
        </ElMain>
    </ElContainer>
</template>

<script setup lang="ts">

</script>

<style>
.app-container {
    display: flex;
    justify-content: center;
    align-items: center; /* 垂直居中 */
    overflow: hidden;
    width: 80%;
    margin: 0 auto; /* 水平居中整个容器 */
}

.main-content {
    width: 100%; /* 确保 ElMain 的宽度为 100% */
    display: flex;
    justify-content: center; /* 水平居中 RouterView */
    align-items: center; /* 垂直居中 RouterView */
}

.router-view {
    width: 100%; /* 确保 RouterView 的宽度为 100% */
    /* 添加其他必要的样式 */
}
</style>