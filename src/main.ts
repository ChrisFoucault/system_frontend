import './assets/main.css';
import 'element-plus/dist/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router/index.ts'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate));
app.use(router);
app.use(ElementPlus);
app.mount('#app');
