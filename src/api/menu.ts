import { get, post, put, del } from '@/utils/request.ts'
import type { MenuListResponse } from '@/types/menu.ts'

export const getMenuList = async (): Promise<MenuListResponse> => {
  return get('/menu/list',);
};
