<template>
    <div style="width: 100%; justify-content: center;">
        <ElForm :model="req" label-width="auto">
            <ElFormItem label="Username" :label-position="itemLabelPosition">
                <ElInput v-model="req.username" />
            </ElFormItem>
            <ElFormItem label="Email" :label-position="itemLabelPosition">
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
import { RegisterApi } from '@/apis/auth';
import type { RegisterReq } from '@/types/User';
import { ElNotification, type FormItemProps } from 'element-plus';
import  router  from '@/router';

const req = ref<RegisterReq>({ username: '', email: '', password: '' });
const itemLabelPosition = ref<FormItemProps['labelPosition']>('right')

const handleLogin = async () => {
    const { execute } = RegisterApi();
    const state = await execute({
        data: {
            username: req.value.username,
            email: req.value.email,
            password: req.value.password
        }
    })
    if (state.value) {
        ElNotification({
            title: '成功',
            message: '注册成功',
            type: 'success',
        });
        router.push('/login')
    }
};

</script>