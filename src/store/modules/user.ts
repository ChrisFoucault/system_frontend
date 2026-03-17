import { defineStore } from "pinia";
import { store, storageLocal } from "../utils";
import { type DataInfo, userKey } from "@/utils/auth"


export const useUserStore = defineStore("pure-user", {
  state: () => ({
    // 头像
    avatar: storageLocal().getItem<DataInfo<number>>(userKey)?.avatar ?? "",
    // 用户名
    username: "",
    // 昵称
    nickname: "",
    // 是否勾选了登陆页面免登录
    isRemembered: false,
    // 登录页的免登录储存几天，默认7天
    loginDay: 7
  })
});

export function useUserStoreHook() {
  return useUserStore(store);
}
