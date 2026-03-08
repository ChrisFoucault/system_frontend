<template>
  <div class="home-view">
    <div class="header">
      <h2>主页概览</h2>
      <span class="sub-text">今日系统运行稳定，以下是简易数据看板。</span>
    </div>
    <div class="grid">
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'HomeView' })

const lineData = [
  { label: 'Mon', value: 120 },
  { label: 'Tue', value: 140 },
  { label: 'Wed', value: 132 },
  { label: 'Thu', value: 180 },
  { label: 'Fri', value: 168 },
  { label: 'Sat', value: 200 },
  { label: 'Sun', value: 176 },
]

const barData = [
  { label: '登录', value: 82 },
  { label: '用户', value: 65 },
  { label: '订单', value: 54 },
  { label: '报表', value: 93 },
  { label: '设置', value: 48 },
]

const donutData = [
  { label: '已完成', value: 56, color: '#67c23a' },
  { label: '进行中', value: 30, color: '#409eff' },
  { label: '待处理', value: 14, color: '#e6a23c' },
]
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
}

.sub-text {
  color: #909399;
  font-size: 13px;
}

.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(320px, 1fr));
}

.grid :last-child {
  grid-column: span 2;
}

@media (max-width: 1100px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .grid :last-child {
    grid-column: span 1;
  }
}
</style>
