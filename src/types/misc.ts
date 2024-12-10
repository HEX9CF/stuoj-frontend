export type Page<P extends string, T> = {
    [key in P]: T[];
} & {
    page?: number;
    size?: number;
    total: number;
};