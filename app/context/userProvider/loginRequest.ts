import { api } from "@/services/ApiService/api.service";


export async function LoginRequest(email: string, password: string) {
  try {
    const request = await api.post('/login/', {
      username: email,
      password: password,
    });
    return { success: true, data: request.data };
  } catch (error) {
    return { success: false, error };
  }
}
