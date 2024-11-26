import axios, { type AxiosRequestConfig } from "axios";
import { useAsyncState } from "@vueuse/core";
import type { ApiResponse } from "@/types/ApiResponse";

const instance = axios.create({
  baseURL: '/api',
  timeout: 1000 * 10,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
    'Content-Type': 'application/json',
  },
});


instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token');
    if (error.response.data.code === 2) {
      const retryRequestConfig = error.config;
      localStorage.setItem('token', error.response.data.data);
      retryRequestConfig.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

      return axios(retryRequestConfig).then(response => {
        return response;
      });
    }
    location.reload();
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
  return useAsyncState<ApiResponse<T> | undefined, AxiosRequestConfig[]>(
    async (config2) => {
      config = Object.assign({}, config, config2);
      const result = await _req<T>(config);
      return result as ApiResponse<T>;
    },
    undefined,
    {
      immediate: false,
      shallow: false as any,
      throwError: true,
      resetOnExecute: false
    }
  );
}