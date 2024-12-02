<template>
    <HeaderNav />
    <ElContainer class="app-container">
        <ElMain>
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
    height: 100vh;
}
</style>