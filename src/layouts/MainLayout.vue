<template>
  <div class="main-layout">
    <aside class="sidebar-wrap">
      <SidebarMenu />
    </aside>
    <section class="content-wrap">
      <TopTabsHistory />
      <main class="page-wrap">
        <RouterView />
      </main>
    </section>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from '@/components/SidebarMenu.vue';
import TopTabsHistory from '@/components/TopTabsHistory.vue';
</script>

<style scoped>
.main-layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 220px 1fr;
  background: #f5f7fa;
}

.sidebar-wrap {
  min-width: 0;
}

.content-wrap {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.page-wrap {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 16px;
}
</style>

