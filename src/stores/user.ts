import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    realName: '',
    token: ''
  }),
  getters: {
  },
  actions: {
    login(token: string, realName: string) {
      this.realName = realName;
      this.token = token;
    }
  },
  persist: true
});
