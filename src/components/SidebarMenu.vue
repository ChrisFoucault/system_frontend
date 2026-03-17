<template>
  <el-menu class="el-menu-vertical-demo">
    <el-sub-menu v-for="item in menuTree" :key="item.id" :index="item.id">
      <template #title>{{item.name}}</template>
      <el-menu-item
        v-for="child in item.children"
        :key="child.id"
        :index="item.id + '-' + child.id"
        @click="handleMenuItemClick(child)"
        >{{ child.name }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/store/menu.ts';
import type { Menu } from '@/types/menu.ts';
import { useRouter } from 'vue-router';

const router = useRouter();
const menuStore = useMenuStore();
const menuTree = menuStore.menuTree;
const handleMenuItemClick = (menu: Menu) => {
  router.push(menu.url);
}

</script>

<style >
.sidebar-wrap{
  background: #ffffff;
}
</style>
