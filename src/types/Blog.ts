export interface BlogInfo {
    content?: string;
    create_time: string;
    id: number;
    problem_id?: number;
    status: number;
    title: string;
    update_time: string;
    user_id: number;
    [property: string]: any;
}
