<template>
  <el-card shadow="never">
    <h3 class="title">用户管理</h3>
    <p class="desc">这里可以扩展用户列表、权限配置等管理功能。</p>
  </el-card>
</template>

<script setup lang="ts">
defineOptions({ name: 'UsersView' })
</script>

<style scoped>
.title {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
}

.desc {
  color: #606266;
}
</style>

