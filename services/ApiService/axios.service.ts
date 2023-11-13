import axios from 'axios';
import { parseCookies } from 'nookies';

export function getAxiosClient(ctx?: any) {
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
