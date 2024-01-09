import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import i18n from "./i18n/i18n"
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'


createApp(App).use(router).use(i18n).mount('#app')

