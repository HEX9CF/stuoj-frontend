import { useDefineApi } from "@/stores/useDefineApi"
import type { BaseUserInfo } from "@/types/User"

export const GetUserInfo = useDefineApi<
    {},
    BaseUserInfo
>({
    url: "/user",
    method: "GET"
});

export const ModifyUserInfo = useDefineApi<
    {
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
    {},
    null
>({
    url: "/user/avatar",
    method: "POST"
});

export const ModifyPassword = useDefineApi<
    {
        password: string;
    },
    null
>({
    url: "/user/password",
    method: "PUT"
});