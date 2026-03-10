<template>
  <div class="login-page">
    <div class="login-mask">
      <el-card class="login-card" shadow="always">
        <h2 class="title">登录</h2>
        <el-form @submit.prevent="handleLogin" label-position="top">
          <el-form-item label="用户名">
            <el-input
              v-model="username"
              placeholder="请输入用户名"
              clearable
            />
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="password"
              type="password"
              placeholder="请输入密码"
              show-password
              clearable
            />
          </el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            class="login-btn"
            @click="handleLogin"
          >
            登录
          </el-button>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'LoginView' });
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user.ts';
import { useMenuStore } from '@/stores/menu.ts';

onMounted(() => {
  userStore.handleLogout();
});
const username = ref('administrators');
const password = ref('111111');
const loading = ref(false);
const router = useRouter();
const userStore = useUserStore();
const menuStore = useMenuStore();
const handleLogin = async () => {
  // 登录
  await userStore.handleLogin(username.value, password.value);
  // 获取菜单栏
  await menuStore.handleMenuTree();
  // 跳转主页
  if (userStore.userId) {
    router.push('/home');
  }
}
</script>

<style scoped>
:global(html, body) {
  margin: 0;
  width: 100%;
  height: 100%;
}

:global(#app) {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  height: 100%;
}

.login-page {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/login_background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.login-mask {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.28);
  padding: 24px;
  box-sizing: border-box;
}

.login-card {
  width: 100%;
  max-width: 420px;
  border-radius: 12px;
}

.title {
  margin: 0 0 18px;
  text-align: center;
}

.login-btn {
  width: 100%;
}
</style>
