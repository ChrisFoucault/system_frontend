import { get, post, put, del } from '@/utils/request.ts'
import type { LoginResponse } from '@/types/user.ts'

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  return post('/user/login', { username, password });
};
