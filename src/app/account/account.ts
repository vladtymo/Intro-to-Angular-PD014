export interface ILoginRequest {
    login: string;
    password: string;
}

export interface ILoginResponse {
    token: string,
    name: string
}