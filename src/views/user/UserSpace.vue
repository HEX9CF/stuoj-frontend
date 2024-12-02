<template>
    <div class="space-div">
        <ElContainer class="background">
            <ElRow :gutter="20" style="width: 100%; height: 30%;">
                <ElCol :span="2" class="avatar-container">
                        <Avatar :size="100" :src="info?.avatar" />
                </ElCol>
                <ElCol :span="3">
                    <div style="font-size: 40px; text-align: left;">{{ info?.username }}</div>
                </ElCol>
            </ElRow>
        </ElContainer>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watchEffect } from "vue";
import { useRouteParams } from "@vueuse/router";
import { userStore } from "@/stores/user";
import { GetUserInfo } from "@/apis/user";
import type { BaseUserInfo } from "@/types/User";

const { info: info_, id } = userStore();
const { execute } = GetUserInfo();

let info = ref<BaseUserInfo>();

const userId = useRouteParams<string>("id");

const updateInfo = async () => {
    const userIdNum = Number(userId.value);
    if (userIdNum === id.value) {
        info = info_;
    } else {
        const state = await execute(
            {
                url: `/${userId.value}`
            }
        );
        if (state.value?.code === 1) {
            info.value = state.value?.data as BaseUserInfo;
        }
    }
};

watchEffect(() => {
    updateInfo();
});

onBeforeMount(async () => {
    await updateInfo();
});

</script>

<style>
.space-div {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.background {
    display: flex;
    background-color: #EEE;
    margin-top: 5vh;
    height: 35%;
    align-items: flex-end;
    /* 将子元素对齐到容器底部 */
    justify-content: flex-end;
}
</style>