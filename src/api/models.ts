
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

export interface RegisterUserDTO {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
}

export interface RegisterUserResponseDTO {
    first_name: string,
    last_name: string,
    email: string,
    username: string
}