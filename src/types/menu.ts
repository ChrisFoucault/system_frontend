import  type  { BaseResponse } from './baseType.ts';

export type Menu =  {
  id: number;
  name: string;
  code: string;
  url: string;
  children: Menu[];
}

export type MenuListResponse = BaseResponse & {
  data: Menu[];
};
