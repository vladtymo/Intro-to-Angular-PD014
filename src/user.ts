export enum RoleType { User, Admin };

export interface IUser {
    email: string;
    username: string;
    birthdate: Date;
    role: RoleType
};