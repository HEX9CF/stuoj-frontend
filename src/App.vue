<template>
    <HeaderNav />
    <el-container class="flex main-container">
        <el-main class="app-main">
            <RouterView />
        </el-main>
    </el-container>
</template>
<script setup lang="ts">
// import HeaderNav from "./components/HeaderNav.vue";
</script>

<style>
.app-main {
    text-align: center;
}

.main-container {
    height: 100vh;
}
</style>