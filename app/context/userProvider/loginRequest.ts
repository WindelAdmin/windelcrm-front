import { api } from "@/services/ApiService/axios.service";

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await api.post('/login/', {
      email,
      password,
    });
    return { success: true, data: request.data };
  } catch (error) {
    return { success: false, error };
  }
}
