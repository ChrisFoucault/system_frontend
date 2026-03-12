import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/login/index.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import HomeView from '@/views/home/index.vue';
import UsersView from '@/views/users/index.vue';
import SettingsView from '@/views/settings/index.vue';
import OrgView from '@/views/org/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { title: '登录' },
    },
    {
      path: '/',
      component: MainLayout,
      redirect: '/login',
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView,
          meta: { title: '主页' },
        },
        {
          path: 'organization',
          name: 'organization',
          component: OrgView,
          meta: { title: '组织机构' },
        },
        {
          path: 'users',
          name: 'users',
          component: UsersView,
          meta: { title: '用户管理' },
        },
        {
          path: 'settings',
          name: 'settings',
          component: SettingsView,
          meta: { title: '系统设置' },
        },
      ],
    },
  ],
})

export default router
