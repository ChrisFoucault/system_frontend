<template>
  <div class="a_container_1">
    <div class="a_container_2">
      <slot name="query"/>
    </div>
    <div class="a_container_3">
      <div class="a_container_4">
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="primary" plain>Primary</el-button>
      </div>
      <slot name="table"/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.a_container_1 {
  background: #f5f7fa;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.a_container_2 {
  background: #ffffff;
  height: auto;
  margin-bottom: 10px;
  padding: 18px 0 0 32px;
}

.a_container_3 {
  background: #ffffff;
  height: 100%;
  padding: 18px;
}

.a_container_4{
  width: 100%;
  padding-bottom: 18px;
}
</style>
