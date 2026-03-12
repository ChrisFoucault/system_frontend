import { defineStore } from 'pinia'
import { getMenuTree } from '@/api/menu.ts'
import type { Menu } from '@/types/menu.ts'

interface MenuState {
  userId?: number;
  menuTree: Menu[];
}

export const useMenuStore = defineStore('menu', {
  state: (): MenuState => ({
    userId: undefined,
    menuTree: [],
  }),
  getters: {},
  actions: {
    async handleMenuTree() {
      const response = await getMenuTree();
      this.menuTree = response.data;
    },
    clearMenu() {
      this.menuTree = [];
    }
  },
  persist: true
});
