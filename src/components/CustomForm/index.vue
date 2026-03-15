<script setup lang="ts">
defineOptions({ name: 'CustomForm' });
import { withDefaults } from 'vue'
withDefaults(
  defineProps<{
    labelWidth: number | string;
    labelSuffix: string;
  }>(),{
    labelWidth: 80,
    labelSuffix: '：',
  }
);
</script>

<template>
  <el-form :labelWidth="labelWidth" :labelSuffix="labelSuffix">
    <slot />
  </el-form>
</template>

<style scoped>

</style>
