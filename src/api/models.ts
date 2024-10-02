
export interface LoginDTO {
    username: string;
    password: string;
}

export interface AuthDTO {
    access: string;
    refresh: string;
}

export interface RefreshAccessDTO {
    access: string;
    refresh: string;
}