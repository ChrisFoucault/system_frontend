<template>
  <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu v-for="item in menuTree" :key="item.id" :index="item.id">
      <template #title>{{item.name}}</template>
      <el-menu-item
        v-for="child in item.children"
        :key="child.id"
        :index="item.id + '-' + child.id"
        >{{ child.name }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu.ts';

const menuStore = useMenuStore();
const menuTree = menuStore.menuTree;
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style >
.sidebar-wrap{
  background: #ffffff;
}
</style>
