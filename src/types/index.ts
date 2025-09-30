export type { ILogin } from "./auth.type";

export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: string;
};