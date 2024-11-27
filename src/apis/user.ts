import { useDefineApi } from "@/stores/useDefineApi"
import type { BaseUserInfo } from "@/types/User";

export const GetUserInfo = useDefineApi<
    {},
    BaseUserInfo
>({
    url:  "/user",
    method: "GET"
});

export const GetId = useDefineApi<
    {},
    number
>({
    url: "/user/current",
    method: "GET"
})