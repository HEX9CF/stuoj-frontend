export interface Submission {
    create_time: string;
    id: number;
    language_id: number;
    length: number;
    memory?: number;
    problem_id: number;
    score?: number;
    source_code?: string;
    status: number;
    time?: number;
    update_time: string;
    user_id: number;
    [property: string]: any;
}


export interface Judgement {
    compile_output?: string;
    id?: number;
    memory?: number;
    message?: string;
    status?: number;
    stderr?: string;
    stdout?: string;
    submission_id?: number;
    testcase_id?: number;
    time?: number;
    [property: string]: any;
}