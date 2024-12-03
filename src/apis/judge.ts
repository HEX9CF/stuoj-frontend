import { useDefineApi } from "@/stores/useDefineApi"
import type { Language } from "@/types/Judge"

export const Submit = useDefineApi<
    {
        problem_id: number;
        language_id: number;
        source_code: string;
    },
    number
>({
    url: "/judge/submit",
    method: "post",
});

export const GetLanguages = useDefineApi<
    {},
    Language
>({
    url: "/judge/language",
    method: "get"
});

export const TestRun = useDefineApi<
    {
        Stdin: string;
        language_id: number;
        source_code: string;
    },
    {
        memory: number;
        status: number;
        stdout: string;
        time: number;
        [property: string]: any;
    }
>({
    url: "/judge/testrun",
    method: "post"
});

