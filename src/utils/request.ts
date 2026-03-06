import axios from 'axios';
import { API_BASE_URL } from '@/config/index.ts';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const get = <T = unknown> (url: string, params?: unknown): Promise<T> => {
  return instance.get(url, { params });
};

export const post = <T = unknown> (url: string, data?: unknown): Promise<T> => {
  return instance.post(url, data);
};

export const put = <T = unknown> (url: string, data?: unknown): Promise<T> => {
  return instance.put(url, data);
};

export const del = <T = unknown> (url: string): Promise<T> => {
  return instance.delete(url);
};

