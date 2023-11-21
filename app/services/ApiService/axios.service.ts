import { CookiesEnum } from '@/app/shared/cookies/Cookies.enum';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { NextApiResponse } from 'next';
import { parseCookies } from 'nookies';

interface ResponseAxios {
  status: number;
  data: any
}
export function getAxiosClient(ctx?: any): ApiService {
  const cookies = parseCookies(ctx);
  const token = cookies[CookiesEnum.windelcrmToken];
  const api = axios.create({
    baseURL: process.env.HOST,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const apiService = new ApiService(api)
  return apiService;
}

export class ApiService {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance){
    this.axiosInstance = axiosInstance;
  }
  public async get(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<ResponseAxios> {
    try {
      const response: AxiosResponse<NextApiResponse> = await this.axiosInstance.get(
        endpoint,
        config
      );
      return response;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  public async post(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ResponseAxios> {
    try {
      const response: AxiosResponse<NextApiResponse> =
        await this.axiosInstance.post(endpoint, data, config);
      return response;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  public async patch(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ResponseAxios> {
    try {
      const response: AxiosResponse<NextApiResponse> =
        await this.axiosInstance.patch(endpoint, data, config);
      return response;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  public async update(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ResponseAxios> {
    try {
      const response: AxiosResponse<NextApiResponse> = await this.axiosInstance.put(
        endpoint,
        data,
        config
      );
      return response;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  public async delete(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<ResponseAxios> {
    try {
      const response: AxiosResponse<NextApiResponse> =
        await this.axiosInstance.delete(endpoint, config);
      return response;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  private handleApiError(error: any): AxiosError {
    return error.response;
  }
}


export const api = getAxiosClient();

