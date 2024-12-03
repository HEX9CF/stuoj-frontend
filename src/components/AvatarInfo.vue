<template>
    <el-popover :width="300"
        popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
        <template #reference>
            <Avatar :src="info?.avatar" @click="handelClick" />
        </template>
        <template #default>
            <div>
                <ElContainer direction="vertical">
                    <div class="UserNameText">{{ info?.username }}</div>
                    <ElContainer style="justify-content: center;">
                        <ToUserSettingButton v-if="info_.avatar>=2 || id===userId" />
                        <el-divider direction="vertical" style="height: 30px;" />
                        <LogoutButton v-if="id == userId" />
                    </ElContainer>
                </ElContainer>
            </div>
        </template>
    </el-popover>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { userStore } from '@/stores/user';
import { GetUserInfo } from '@/apis/user';
import type { BaseUserInfo } from '@/types/User';
import router from '@/router';

const { id, isLogin, info:info_ } = userStore();

const props = withDefaults(defineProps<{
    userId?: number;
}>(), {
    userId: 0,
});

let info = ref<BaseUserInfo>(
    
);
let userId = ref(0);

onBeforeMount(async () => {
    if (props.userId === 0) {
        userId = id;
    } else {
        userId.value = props.userId;
    }
    updateInfo();
});

const updateInfo = async () => {
    if (userId.value === id.value) {
        info = info_;
    } else {
        const { state, execute } = GetUserInfo();
        await execute({
            data: {
                url: `/${userId.value}`,
            }
        });
        if (state.value?.code === 1) {
            info.value = state.value?.data as BaseUserInfo;
        }
    }
};

const handelClick = () => {
    if (!isLogin.value) {
        router.push('/login');
    }else{
        router.push(`/user/${userId.value}`);
    }
}

</script>

<style>
.UserNameText{
    display:flex;
    justify-content: center;
    font-size: 25px;
    color: #303133;
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>