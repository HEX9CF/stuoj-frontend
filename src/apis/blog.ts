import { useDefineApi } from "@/stores/useDefineApi";
import type { BlogInfo } from "@/types/Blog";

export const getBlogListApi = useDefineApi<
    {
        params: {
            page: number,
            size: number,
            user?: number,
            problem?: number,
            title?: string,
            status?: number,
            "start-time"?: string,
            "end-time"?: string
        };
    },
    BlogInfo
>({
    url: "/blog",
    method: "get"
});

export const getBlogApi = useDefineApi<
    {
        id: number;
    },
    BlogInfo
>({
    url: "/blog",
    method: "get"
});

export const createBlogApi = useDefineApi<
    {
        data: {
            content: string;
            problem_id?: number;
            status?: number;
            title: string;
        };
    },
    number
>({
    url: "/blog",
    method: "post"
});

export const updateBlogApi = useDefineApi<
    {
        data: {
            content: string;
            id: number;
            problem_id?: number;
            status?: number;
            title: string;
        };
    },
    number
>({
    url: "/blog",
    method: "put"
});

export const publishBlogApi = useDefineApi<
    {
        id: number;
    },
    null
>({
    url: "/blog",
    method: "put"
});

export const deleteBlogApi = useDefineApi<
    {
        id: number;
    },
    null
>({
    url: "/blog",
    method: "delete"
});