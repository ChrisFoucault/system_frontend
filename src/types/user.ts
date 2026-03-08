import  type  { BaseResponse } from './baseType.ts';

export type LoginResponse = BaseResponse & {
  data: {
    user: {
      id: number;
      realName: string;
    };
    expiresAt: string;
    token: string;
  };
};
