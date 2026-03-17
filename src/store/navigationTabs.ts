import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export interface TabItem {
  path: string
  title: string
  closable: boolean
}

const HOME_TAB: TabItem = {
  path: '/home',
  title: '主页',
  closable: false,
}

export const useNavigationTabsStore = defineStore('navigationTabs', () => {
  const tabs = ref<TabItem[]>([HOME_TAB])
  const activePath = ref(HOME_TAB.path)

  const addTab = (route: RouteLocationNormalizedLoaded) => {
    const title = (route.meta.title as string) || '未命名页面'
    const path = route.path

    const existing = tabs.value.find((tab) => tab.path === path)
    if (!existing) {
      tabs.value.push({
        path,
        title,
        closable: path !== HOME_TAB.path,
      })
    }

    activePath.value = path
  }

  const removeTab = (path: string) => {
    const index = tabs.value.findIndex((tab) => tab.path === path)
    if (index === -1) {
      return activePath.value
    }

    const tab = tabs.value[index]
    if (!tab.closable) {
      return activePath.value
    }

    tabs.value.splice(index, 1)

    if (activePath.value !== path) {
      return activePath.value
    }

    const fallback = tabs.value[index - 1] || tabs.value[index] || HOME_TAB
    activePath.value = fallback.path
    return fallback.path
  }

  return {
    tabs,
    activePath,
    addTab,
    removeTab,
  }
})

