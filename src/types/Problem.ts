export interface ProblemInfo {
    create_time: string;
    description?: string;
    difficulty: number;
    hint?: string;
    id: number;
    input?: string;
    memory_limit: number;
    output?: string;
    sample_input?: string;
    sample_output?: string;
    source: string;
    status: number;
    time_limit: number;
    title: string;
    update_time: string;
    [property: string]: any;
}

export interface Tag {
    id: number;
    name: string;
    ProblemTag: null;
    [property: string]: any;
}

export interface Solution {
    id: number;
    language_id: number;
    problem_id: number;
    source_code: string;
    [property: string]: any;
}