import { useDefineApi } from "@/stores/useDefineApi";
import type { ProblemInfo, Tag } from "@/types/Problem";
import type { Page } from "@/types/misc";

export const getProblemListApi = useDefineApi<
    {
        params: {
            page: number,
            size?: number,
            title?: string,
            difficulty?: number,
            tag?: number,
            status?: number,
        };

    },
    Page<"problems", ProblemInfo>
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
    url: "/problem",
    method: "get"
});

export const getProblemTagsApi = useDefineApi<
    {},
    Tag
>({
    url: "/problem/tag",
    method: "get"
});
