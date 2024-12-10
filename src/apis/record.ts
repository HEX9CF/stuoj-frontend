import { useDefineApi } from "@/stores/useDefineApi"
import type { Page } from "@/types/misc";
import type { Judgement, Submission } from "@/types/Record"

export const getRecordeList = useDefineApi<
    {
        params: {
            "end-time"?: string;
            language?: number;
            page?: number;
            problem?: number;
            size?: number;
            "start-time"?: string;
            status?: number;
            user?: number;
        }
    },
    Page<"submissions", Submission>
>({
    url: "/record",
    method: "get"
})

export const getRecordeInfo = useDefineApi<
    {
        id: number
    },
    {
        submission: Submission,
        judgements: Judgement[]
    }
>({
    url: "/record",
    method: "get"
})