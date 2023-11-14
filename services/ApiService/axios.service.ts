import axios, { AxiosInstance } from 'axios';
import { parseCookies } from 'nookies';

export function getAxiosClient(ctx?: any):AxiosInstance {
  const cookies = parseCookies(ctx);
  const token = cookies['nextauth.token'];
  const api = axios.create({
    baseURL: process.env.HOST,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return api;
}
export const api = getAxiosClient();

