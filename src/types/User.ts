export interface BaseUserInfo {
    /**
     * 用户头像
     */
    avatar: string;
    /**
     * 注册日期
     */
    create_time?: string;
    email?: string;
    /**
     * 用户id，ID 编号
     */
    id: number;
    password: string;
    /**
     * 角色
     */
    role: ROLE;
    /**
     * 更新日期
     */
    update_time: string;
    username: string;
    [property: string]: any;
}

export enum ROLE {
    Visitor = -1,
    Banned = 0,
    User = 1,
    Adimin = 2,
    Root = 3,
}

export const role = {
    [ROLE.Visitor]: "Visitor",
    [ROLE.Banned]: "Banned",
    [ROLE.User]: "User",
    [ROLE.Root]: "Root"
};

export interface LoginReq{
    email: string;
    password: string;
} 