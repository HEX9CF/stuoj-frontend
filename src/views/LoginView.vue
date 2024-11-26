<template>
    <div class="layout">
        <ElForm :model="req" label-width="auto">
            <ElFormItem label="email" :label-position="itemLabelPosition">
                <ElInput v-model="req.email" />
            </ElFormItem>
            <ElFormItem label="Password" :label-position="itemLabelPosition">
                <ElInput v-model="req.password" type="password" />
            </ElFormItem>
            <ElFormItem>
                <ElButton type="primary" @click="handleLogin" style="width: 100%;">
                    Login
                </ElButton>
            </ElFormItem>
        </ElForm>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LoginApi } from '@/apis/auth';
import type { LoginReq } from '@/types/User';
import { userStore } from '@/stores/user'
import { ElNotification, type FormItemProps } from 'element-plus';

const req = ref<LoginReq>({ email: '', password: '' });
const itemLabelPosition = ref<FormItemProps['labelPosition']>('right')
const { updateToken } = userStore();

const handleLogin = async () => {
    const { execute } = LoginApi();
    await execute({
        data: {
            email: req.value.email,
            password: req.value.password
        }
    }).then((res) => {
        if (res.value) {
            updateToken(res.value.data as string);
            ElNotification({
                title: "成功",
                message: "登录成功",
                type: "success"
            });
        }
    })
};

</script>