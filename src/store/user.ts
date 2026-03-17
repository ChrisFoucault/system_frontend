import { defineStore } from 'pinia';
import { ElMessage } from 'element-plus';
import { login } from '@/api/user.ts';
import { useMenuStore } from '@/store/menu.ts';

interface UserState {
  userId?: number;
  realName: string;
  token: string;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userId: undefined,
    realName: '',
    token: ''
  }),
  getters: {
  },
  actions: {
    async handleLogin(userName: string, password: string) {
      const response = await login(userName, password);
      if (response.code === 200) {
        this.userId = response.data.user.id;
        this.realName = response.data.user.realName;
        this.token = response.data.token;
      } else {
        ElMessage({
          message: response.message,
          type: 'error',
        });
      }
    },
    handleLogout() {
      const menuStore = useMenuStore();
      this.realName = '';
      this.token = '';
      menuStore.clearMenu();
    }
  },
  persist: true
});
