<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <el-form :inline="true" label-width="90" label-suffix="：" :model="form" class="demo-form-inline">
    <el-form-item label="合同名称">
      <el-input v-model="form.user" clearable />
    </el-form-item>
    <el-form-item label="合同编号">
      <el-input v-model="form.user" clearable />
    </el-form-item>
    <el-form-item label="合同类型">
      <el-select
        v-model="form.region"
        placeholder="全部"
        clearable
      >
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="关联客户">
      <el-input v-model="form.user" clearable />
    </el-form-item>
    <el-form-item label="生效日期">
      <el-date-picker
        v-model="form.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </el-form-item>
    <el-form-item label="至">
      <el-date-picker
        v-model="form.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </el-form-item>
    <el-form-item label="结束日期">
      <el-date-picker
        v-model="form.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </el-form-item>
    <el-form-item label="至">
      <el-date-picker
        v-model="form.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </el-form-item>
    <el-form-item label="签订日期">
      <el-date-picker
        v-model="form.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </el-form-item>
    <el-form-item label="至">
      <el-date-picker
        v-model="form.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
      <el-button @click="onSubmit">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
