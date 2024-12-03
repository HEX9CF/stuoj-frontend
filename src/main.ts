import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import { userStore } from './stores/user'

const app = createApp(App)

const { getUserInfo, isLogin } = userStore();

const initApp = async () => {
    try {
        isLogin.value && (await getUserInfo());
        app.use(router);
        app.use(ElementPlus);
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component);
        }
    } catch (err: any) {
        console.error(err);
    } finally {
        app.mount("#app");
    }
};

initApp();