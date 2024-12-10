import axios, { type AxiosRequestConfig } from "axios";
import { useAsyncState } from "@vueuse/core";
import type { ApiResponse } from "@/types/ApiResponse";
import { ElNotification } from "element-plus";
import { userStore } from "@/stores/user";
import type { AxiosRequestConfig2 } from "@/stores/useDefineApi"


const instance = axios.create({
  baseURL: '/api',
  timeout: 1000 * 10,
});


instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  const { updateToken, token, clearToken } = userStore();
  // 对响应错误做点什么
  if (error.response && error.response.status === 401) {
    clearToken();
    if (error.response.data.code === 2) {
      const retryRequestConfig = error.config;
      updateToken(error.response.data.data);
      retryRequestConfig.headers['Authorization'] = `Bearer ${token.value}`;

      return axios(retryRequestConfig).then(response => {
        return response;
      });
    } else {
      return error.response;
    }
  } else if (error.response) {
    return error.response;
  }
  return Promise.reject(error);
});

const _req = async <T>(config: AxiosRequestConfig): Promise<ApiResponse<T> | undefined> => {
  const result = await instance(config);
  let realData: ApiResponse<T>;
  if (!result.data)
    realData = { code: 0, msg: '请求失败', data: null } as ApiResponse<T>;
  else
    realData = result.data;
  if (realData.code === 0) {
    throw new Error(`Error: ${realData.msg}`);
  }
  return realData as ApiResponse<T>;
};

export const request = <T>(config: AxiosRequestConfig) => {
  return useAsyncState<ApiResponse<T> | undefined, AxiosRequestConfig2[]>(
    async (config2) => {
      if (config2 && config2.id) {
        config2.url = config.url + "/" + config2.id;
      }
      config2 = Object.assign({}, config, config2);
      const result = await _req<T>(config2);
      return result as ApiResponse<T>;
    },
    undefined,
    {
      immediate: false,
      shallow: false as any,
      throwError: false,
      resetOnExecute: false,
      onError: (e: any) => {
        console.error(e);
        ElNotification({
          title: "错误",
          message: e.message || "未知错误",
          type: "error"
        });
      }
    });
}