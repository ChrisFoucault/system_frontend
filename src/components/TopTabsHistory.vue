<template>
  <div class="top-tabs-history">
    <el-tabs
      :model-value="activePath"
      type="card"
      @tab-click="handleTabClick"
      @tab-remove="handleTabRemove"
    >
      <el-tab-pane
        v-for="tab in tabs"
        :key="tab.path"
        :name="tab.path"
        :label="tab.title"
        :closable="tab.closable"
      />
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { TabPaneName, TabsPaneContext } from 'element-plus'
import { useNavigationTabsStore } from '@/stores/navigationTabs'

const route = useRoute()
const router = useRouter()
const tabsStore = useNavigationTabsStore()
const { tabs, activePath } = storeToRefs(tabsStore)

watch(
  () => route.path,
  () => {
    tabsStore.addTab(route)
  },
  { immediate: true },
)

const handleTabClick = (pane: TabsPaneContext) => {
  const targetPath = String(pane.paneName)
  if (targetPath && targetPath !== route.path) {
    router.push(targetPath)
  }
}

const handleTabRemove = (name: TabPaneName) => {
  const nextPath = tabsStore.removeTab(String(name))
  if (nextPath && nextPath !== route.path) {
    router.push(nextPath)
  }
}
</script>

<style scoped>
.top-tabs-history {
  background: #ffffff;
  border-bottom: 1px solid var(--el-border-color-lighter);
  padding: 0 12px;
  width: 100%;
}

:deep(.el-tabs__header) {
  margin: 0;
}

:deep(.el-tabs__item) {
  user-select: none;
}
</style>
