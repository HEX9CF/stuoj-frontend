import { useDefineApi } from "@/stores/useDefineApi";
import type { ProblemInfo, Tag } from "@/types/Problem";

export const getProblemListApi = useDefineApi<
    {
        pamars: {
            page: number,
            size?: number,
            title?: string,
            difficulty?: number,
            tag?: number,
            status: number,
        };

    },
    ProblemInfo
>({
    url: "/problem",
    method: "get"
});

export const getProblemApi = useDefineApi<
    {
        id: number
    },
    ProblemInfo
>({
    url: "/problem/:id",
    method: "get"
});

export const getProblemTagsApi = useDefineApi<
    {},
    Tag
>({
    url: "/problem/tag",
    method: "get"
});
