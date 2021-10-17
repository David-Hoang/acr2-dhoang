import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import VueAgile from 'vue-agile'

createApp(App).use(router).use(VueAgile).mount('#app')

