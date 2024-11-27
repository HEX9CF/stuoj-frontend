import { computed, ref } from "vue";
import { ROLE, type BaseUserInfo } from "@/types/User";
import { GetUserInfo, GetId } from "@/apis/user";
import { createGlobalState, useStorage } from "@vueuse/core";

export const userStore = createGlobalState(() => {
  const { execute: getIdExecute } = GetId();
  const { execute } = GetUserInfo();

  const token = useStorage("token", "");

  const updateToken = (_token: string) => {
    token.value = _token;
  };

  const id = ref(0);
  const isLogin = computed(() => token.value !== "");
  const info = ref<BaseUserInfo>();

  const getId = async () => {
    const state = await getIdExecute(
      {
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
    )
    if (state.value) {
      id.value = state.value.data as number;
    }
  };


  const getUserInfo = async (userInfo?: BaseUserInfo) => {

    if (userInfo) {
      info.value = userInfo;
    } else {
      if (id.value === 0) {
      await getId();
      }
      const state = await execute({
        headers: {
          Authorization: `Bearer ${token.value}`
        },
        url: "/" + id.value.toString()
      })
      if (state.value) {
        info.value = state.value.data as BaseUserInfo;
      }
    };
  };

  if (token.value !== "") {
    getUserInfo();
  }

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
