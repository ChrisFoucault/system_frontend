<script setup lang="ts">
defineOptions({ name: 'ContractView' })
import PageLayout1   from '@/plugins/layouts/PageLayout1.vue'
import Query from './Query.vue';
import Table from './Table.vue';

</script>

<template>
  <PageLayout1>
    <template #query>
      <Query />
    </template>
    <template #table>
      <Table />
    </template>
  </PageLayout1>
</template>

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
