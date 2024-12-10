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
    id?: number;
    language_id: number;
    problem_id: number;
    source_code: string;
    [property: string]: any;
}

export interface Testcase {
    id?: number;
    problem_id: number;
    serial: number;
    test_input: string;
    test_output: string;
    [property: string]: any;
}

export interface Global {
    rows: Row[];
    [property: string]: any;
}

/**
 * Row
 */
export interface Row {
    row_size_id?: number;
    values: Value[];
    [property: string]: any;
}

/**
 * Value
 */
export interface Value {
    max?: number;
    max_id?: number;
    min?: number;
    min_id?: number;
    type: Type;
    value_size_id?: number;
    [property: string]: any;
}

export enum Type {
    Float = "float",
    Int = "int",
}

export interface ProblemHistory {
    create_time: string;
    description: string;
    difficulty: number;
    hint: string;
    id: number;
    input: string;
    memory_limit: number;
    operation: number;
    output: string;
    problem_id: number;
    sample_input: string;
    sample_output: string;
    source: string;
    time_limit: number;
    title: string;
    user_id: number;
    [property: string]: any;
}

export interface FpsProblemInfo {
    create_time: string;
    description: string;
    input: string;
    memory_limit: number;
    output: string;
    sample_input: string;
    sample_output: string;
    time_limit: number;
    title: string;
    update_time: string;
    [property: string]: any;
}

export interface FpsTestCase {
    test_input?: string;
    test_output?: string;
    [property: string]: any;
}

export interface FpsSolution {
    create_time: string;
    language_id: number;
    source_code: string;
    update_time: string;
    [property: string]: any;
}