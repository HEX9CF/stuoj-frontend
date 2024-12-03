<template>
    <ElButton class="ToUserSettingButton" type="default" plain @click="handelToUserSetting" :icon="SetUp" />
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults } from "vue";
import { SetUp } from "@element-plus/icons-vue"
import { userStore } from "@/stores/user";
import router from "@/router";

const { id } = userStore();

const props = withDefaults(defineProps<{
    userId?: number;
}>(), {
    userId: 0,
});

let userId = ref(0);

if (props.userId) {
    userId.value = props.userId;
} else {
    userId = id;
}

const handelToUserSetting = () => {
    router.push({ path: `/user/setting/${userId.value}` });
};

</script>

<style>
.ToUserSettingButton {
    height: 30px;
    width: 30px;
}
</style>