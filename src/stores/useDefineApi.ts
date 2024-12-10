import { type AxiosRequestConfig } from "axios";
import { request } from "@/utils/requests";

export interface AxiosRequestConfig2 extends AxiosRequestConfig {
  id?: any;
}

export const useDefineApi = <P, T>(config2: AxiosRequestConfig) => {
  return () => {
    const { isLoading, state, isReady, execute } = request<T>(config2);
    return {
      isLoading,
      state,
      isReady,
      execute: async (config?: P & AxiosRequestConfig2) => {
        await execute(0, config ? config : {});
        return state;
      }
    };
  };
};
