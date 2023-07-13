import { Http } from '@/domain/repositories/Http';
import axios from 'axios';

const timeout = process.env.NEXT_PUBLIC_TIMEOUT;
const timeoutInMilliseconds = /^\d+$/.test(timeout!)
  ? parseInt(timeout!, 10)
  : undefined;

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BFF,
  timeout: timeoutInMilliseconds,
  headers: {
    'Content-Type': 'application/json',
    // 'Ocp-Apim-Subscription-Key': process.env.NEXT_PUBLIC_APIM_SUBSCRIPTION_KEY,
  },
});

export const axiosHttpClient: Http = {
  get: async <T>(path: string, params?: any, config?: any) => {
    const response = await axiosInstance.get(path, {
      ...config,
      ...params,
    });
    return response.data as T;
  },
  post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axiosInstance.post(
      path,
      { ...params },
      { ...config },
    );
    return response.data as T;
  },
  put: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axiosInstance.put(
      path,
      { ...params },
      { ...config },
    );
    return response.data as T;
  },
  delete: async <T>(path: string, params?: any, config?: any) => {
    const response = await axiosInstance.delete(path, {
      ...config,
      params: params,
    });
    return response.data as T;
  },
};
