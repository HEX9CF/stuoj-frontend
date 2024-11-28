<template>
    <el-popover :width="300"
        popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
        <template #reference>
            <el-avatar v-if="ready" class="avatar" :src="info_?.avatar" @error="errorHandler" @click="handelClick">
                <img :src="empty" />
            </el-avatar>
        </template>
        <template #default>
            <div v-if="ready">
                <ElContainer direction="vertical">
                    <div class="UserNameText">{{ info_?.username }}</div>
                    <ElContainer style="justify-content: center;">
                        <ToUserSettingButton v-if="info?.avatar>=2 || id===userId" />
                        <el-divider direction="vertical" style="height: 30px;" />
                        <LogoutButton v-if="id == userId" />
                    </ElContainer>
                </ElContainer>
            </div>
        </template>
    </el-popover>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { userStore } from '@/stores/user';
import { GetUserInfo } from '@/apis/user';
import type { BaseUserInfo } from '@/types/User';
import router from '@/router';

const errorHandler = () => true;
const empty = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png');

const { id, isLogin, info } = userStore();

const props = withDefaults(defineProps<{
    userId?: number;
}>(), {
    userId: 0,
});

let info_ = ref<BaseUserInfo>();
let userId = ref(0);
const ready = ref(false);

onMounted(async () => {
    if (props.userId === 0) {
        userId = id;
    } else {
        userId.value = props.userId;
    }
    updateInfo();
    ready.value = true;
});

const updateInfo = async () => {
    if (userId.value === id.value) {
        info_ = info;
    } else {
        const { state, execute } = GetUserInfo();
        await execute({
            data: {
                url: `/${userId.value}`,
            }
        });
        if (state.value?.code === 1) {
            info_.value = state.value?.data as BaseUserInfo;
        }
    }
};

const handelClick = () => {
    if (!isLogin.value) {
        router.push('/login');
    }
}

</script>

<style>
.avatar {
    width: 100%;
    height: 100%;
}

.UserNameText{
    display:flex;
    justify-content: center;
    font-size: 25px;
    color: #303133;
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>