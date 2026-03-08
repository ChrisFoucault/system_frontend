<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el_sub-menu v-for="item in menuList" :key="item.id" :index="item.id.toString()">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item v-for="child in item.children" :key="child.id" :index="child.id.toString()">{{ child.name }}</el-menu-item>
    </el_sub-menu>
<!--    <el-sub-menu index="1">-->
<!--      <template #title>-->
<!--        <el-icon><location /></el-icon>-->
<!--        <span>Navigator One</span>-->
<!--      </template>-->
<!--      <el-menu-item-group title="Group One">-->
<!--        <el-menu-item index="1-1">item one</el-menu-item>-->
<!--        <el-menu-item index="1-2">item two</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-menu-item-group title="Group Two">-->
<!--        <el-menu-item index="1-3">item three</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-sub-menu index="1-4">-->
<!--        <template #title>item four</template>-->
<!--        <el-menu-item index="1-4-1">item one</el-menu-item>-->
<!--      </el-sub-menu>-->
<!--    </el-sub-menu>-->
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { getMenuList }  from "@/api/menu.ts";
import { onMounted, ref } from 'vue'
import type { Menu } from '@/types/menu.ts'

const menuList = ref<Menu[]>([]);

onMounted(() => {
  getMenuList().then((res) => {
    console.log(res);
    menuList.value = res.data;
  });
});
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
