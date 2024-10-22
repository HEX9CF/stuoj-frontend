import './assets/main.css'

import { createApp } from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import router from './router'
import axios from "axios";
const pinia = createPinia();
axios.defaults.baseURL = '/api';

createApp(App).use(router).use(pinia).mount('#app')

