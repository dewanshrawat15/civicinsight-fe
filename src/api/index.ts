import axios, { AxiosError } from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";
import { refreshAccessToken } from "./auth";

const baseUrl = "http://localhost:8000/api/";
export const apiClient = axios.create({
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
    (error: AxiosError | Error) => {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 401) {
                const refreshToken = sessionStorage.getItem(REFRESH_TOKEN);
                if (refreshToken) {
                    refreshAccessToken(refreshToken);
                } else {
                    sessionStorage.clear();
                    window.location.href = "/";
                }
            }
        }
        return Promise.reject(error);
    }
);
