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
    const state = await getIdExecute();
    if (state.value) {
      id.value = state.value.data as number;
    }
  };


  const getUserInfo = async (userInfo?: BaseUserInfo) => {
    if (userInfo) {
      info.value = userInfo;
    } else {
      const state = await execute({
        parmas: { id: id.value }
      });
      if (state.value) {
        info.value = state.value.data as BaseUserInfo;
      }
    };
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
