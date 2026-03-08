import axios from 'axios';
import { API_BASE_URL } from '@/config/index.ts';
import { useUserStore } from '@/stores/user.ts';

// 登录等无需鉴权的接口白名单
const AUTH_SKIP_PATHS = new Set(['/user/login']);

const getNormalizedPath = (url?: string): string => {
  if (!url) return '';
  try {
    const pathname = new URL(url, API_BASE_URL).pathname;
    return pathname.replace(/\/+$/, '') || '/';
  } catch {
    return (url.split('?')[0]?.split('#')[0] ?? '').replace(/\/+$/, '') || '/';
  }
};

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// 添加token
instance.interceptors.request.use((config) => {
  const userStore = useUserStore();
  const token = userStore.token;
  const requestPath = getNormalizedPath(config.url);
  const shouldSkipAuth = AUTH_SKIP_PATHS.has(requestPath);
  if (token && !shouldSkipAuth) {
    const authValue = `Bearer ${token}`;
    if (!config.headers) {
      config.headers = new axios.AxiosHeaders();
    }
    if (typeof (config.headers as { set?: (name: string, value: string) => void }).set === 'function') {
      config.headers.set('Authorization', authValue);
    } else {
      (config.headers as Record<string, string>).Authorization = authValue;
    }
  }
  return config;
})

export const get = <T = unknown>(url: string, params?: unknown): Promise<T> => {
  return instance.get<T>(url, { params }).then((res) => res.data);
};

export const post = <T = unknown>(url: string, data?: unknown): Promise<T> => {
  return instance.post<T>(url, data).then((res) => res.data);
};

export const put = <T = unknown>(url: string, data?: unknown): Promise<T> => {
  return instance.put<T>(url, data).then((res) => res.data);
};

export const del = <T = unknown>(url: string): Promise<T> => {
  return instance.delete<T>(url).then((res) => res.data);
};
