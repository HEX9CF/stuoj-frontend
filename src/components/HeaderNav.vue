<template>
    <div class="header-nav">
        <el-row class="header-nav__row">
            <el-col :span="4" class="header-nav__logo">
                <el-text class="mx-2" size="large" tag="ins">Logo</el-text>
            </el-col>
            <el-col :span="16" class="header-nav__menu">
            </el-col>
            <el-col :span="4" class="header-nav__user">
                <el-text class="mx-2" size="large">{{ username }}</el-text>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref,watchEffect } from 'vue';
import { userStore } from '@/stores/user';

const {info}=userStore();
const username=ref(info?.value?.username||'未登录')

watchEffect(() => {
    username.value = info.value?.username || '未登录';
});

</script>

<style>
.header-nav {
    background-color: #FFFFFF;
    height: 35px;
    border-bottom: 1px solid var(--el-border-color);
    display: flex;
    flex-direction: column;
}

.header-nav__row {
    height: 35px;
}
</style>