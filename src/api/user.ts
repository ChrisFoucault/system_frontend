import axios, { type AxiosResponse } from 'axios'
import { API_BASE_URL } from '@/config';
import { get, post, put, del } from '@/utils/request.ts'

interface LoginResponse {
  token?: string;
  message?: string;
}

export const login = async (username: string, password: string): Promise<string> => {
  return post('/loign', { username, password });
};
