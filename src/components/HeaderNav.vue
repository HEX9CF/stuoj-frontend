<template>
    <div class="header-nav">
        <el-row class="header-nav__row">
            <el-col :span="4" class="header-nav__logo">
                <el-text class="mx-2" size="large" tag="ins">Logo</el-text>
            </el-col>
            <el-col :span="16" class="header-nav__menu">
            </el-col>
            <el-col :span="4" class="header-nav__user">
                <div class="header-nav__user_avatar">
                    <AvatarInfo />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { userStore } from '@/stores/user';
import router from '@/router';

const { info, isLogin, id } = userStore();
const username = ref(info?.value?.username || '未登录')

watchEffect(() => {
    username.value = info.value?.username || '未登录';
});

</script>

<style>
.header-nav {
    background-color: #FFFFFF;
    height: 45px;
    border-bottom: 1px solid var(--el-border-color);
    display: flex;
    flex-direction: column;
}

.header-nav__row {
    height: 100%;
}

.header-nav__user {
    display: flex;
    justify-content: flex-end;
}

.header-nav__user_avatar {
    margin-top: 1%;
    height: 40px;
    width: 40px;
    display: flex;
}
</style>