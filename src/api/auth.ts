import { apiClient } from ".";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";
import { RefreshAccessDTO, LoginDTO, AuthDTO, RegisterUserDTO, RegisterUserResponseDTO } from "./models";

export const refreshAccessToken = async (refreshToken: string) => {
    try {
        const refreshData = {
            refresh: refreshToken
        }
        const response = await apiClient.post<RefreshAccessDTO>("auth/token/refresh/", refreshData);
        sessionStorage.clear();

        const { access: accessToken } = response.data;
        sessionStorage.setItem(ACCESS_TOKEN, accessToken);
    
    } catch (error) {
        console.info("Auth API Error", error);
    }
}

export const loginUser = async (authData: LoginDTO) => {
    try {
        const response = await apiClient.post<AuthDTO>("auth/token/", authData);
        const { access: accessToken, refresh: refreshToken } = response.data;
        sessionStorage.setItem(ACCESS_TOKEN, accessToken);
        sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
    } catch (error) {
        console.info("Auth API Error", error);
    }
};

export const getUserSession = async () => {
    try {
        const response = await apiClient.get("auth/session/");
        console.info(response);
    } catch (error) {
        console.info("Auth API Error", error);
    }
}

export const registerNewUser = async (registerUserDTO: RegisterUserDTO) => {
    try {
        await apiClient.post<RegisterUserResponseDTO>("user/register/", registerUserDTO);
        window.location.href = "/login";
    } catch (error) {
        console.info("Auth API Error", error);
    }
}