<template>
  <el-card shadow="never">
    <h3 class="title">组织机构</h3>
    <p class="desc">这里可以扩展参数配置、通知策略等系统设置项。</p>
  </el-card>
</template>

<script setup lang="ts">
defineOptions({ name: 'OrgView' })
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
