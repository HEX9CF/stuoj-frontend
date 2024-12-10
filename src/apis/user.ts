import { useDefineApi } from "@/stores/useDefineApi"
import type { BaseUserInfo } from "@/types/User"

export const GetUserInfo = useDefineApi<
    {
        id: number;
    },
    BaseUserInfo
>({
    url: "/user",
    method: "GET"
});

export const ModifyUserInfo = useDefineApi<
    {
        id: number;
        username?: string;
        email?: string;
        signature?: string;
    },
    null
>({
    url: "/user/modify",
    method: "PUT"
});


export const GetId = useDefineApi<
    {},
    number
>({
    url: "/user/current",
    method: "GET"
});

export const UploadAvatar = useDefineApi<
    {
        id: number;
    },
    null
>({
    url: "/user/avatar",
    method: "POST"
});

export const ModifyPassword = useDefineApi<
    {
        id: number;
        password: string;
    },
    null
>({
    url: "/user/password",
    method: "PUT"
});