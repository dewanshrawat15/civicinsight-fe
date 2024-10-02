import axios from "axios";
import { AuthDTO, LoginDTO, RefreshAccessDTO } from "./models";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";

const baseUrl = "http://localhost:8000/api/";
const apiClient = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle the error
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        console.log("Response:", response);
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            const refreshToken = sessionStorage.getItem(REFRESH_TOKEN);
            if (refreshToken) {
                refreshAccessToken(refreshToken);
            } else {
                sessionStorage.clear();
                window.location.href = "/";
            }
        }
        return Promise.reject(error);
    }
);

const refreshAccessToken = async (refreshToken: string) => {
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