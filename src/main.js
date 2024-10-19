import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createApp} from 'vue'

import App from './App.vue'
import router from "@/router/router.js";
const oj = createApp(App);
oj.use(router)
oj.mount('#app')
