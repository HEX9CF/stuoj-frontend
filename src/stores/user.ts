import { computed, ref } from "vue";
import { ROLE, type BaseUserInfo } from "@/types/User";
import { ElNotification } from "element-plus";
import { GetUserInfo, GetId } from "@/apis/user";
import { createGlobalState, useStorage } from "@vueuse/core";

export const userStore = createGlobalState(() => {
  const { execute: getIdExecute } = GetId();
  const { execute } = GetUserInfo();

  const token = useStorage<string>("userToken", "");
  const updateToken = (_token: string) => {
    token.value = _token;
  };

  const id = ref(0);
  const isLogin = computed(() => token.value !== "");
  const info = ref<BaseUserInfo>();

  const getId = async () => {
    try {
      const state = await getIdExecute();
      if (state.value) {
        id.value = state.value.data as number;
      }
    } catch (err: Error | any) {
      console.error(err);
      ElNotification({
        title: "错误",
        message: err.value.message || "未知错误",
        type: "error"
      });
    }
  };


  const getUserInfo = async (userInfo?: BaseUserInfo) => {
    if (userInfo) {
      info.value = userInfo;
    } else {
      try {
        const state = await execute({
          parmas: { id: id.value }
        });
        if (state.value) {
          info.value = state.value.data as BaseUserInfo;
        }
      } catch (err: any) {
        console.error(err);
        ElNotification({
          title: "错误",
          message: err.value.message || '未知错误',
          type: "error"
        });
      }
    }
  };

  return {
    getId,
    getUserInfo,
    id,
    info,
    token,
    updateToken,
    isLogin
  };
});
