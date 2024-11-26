import { useDefineApi } from "@/stores/useDefineApi"
import type { BaseUserInfo } from "@/types/User";

export const GetUserInfo = useDefineApi<
    {
        parmas: {
            id: number;
        }
    },
    BaseUserInfo
>({
    url: "/user/info",
    method: "GET"
});

export const GetId = useDefineApi<
    {},
    number
>({
    url: "/user/current",
    method: "GET"
})