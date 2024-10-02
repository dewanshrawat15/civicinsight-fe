import { apiClient } from "."
import { ComplaintResponseDTO, ComplaintStatusDTO } from "./models"


export const registerNewComplaint = async (formData: FormData) => {
    const response = await apiClient.post<ComplaintResponseDTO>('complaint/new/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    });
    return response.data;
}

export const fetchHistory = async (): Promise<ComplaintStatusDTO[]> => {
    const response = await apiClient.get<ComplaintStatusDTO[]>("complaint/history/");
    return response.data;
}