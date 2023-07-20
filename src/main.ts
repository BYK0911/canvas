import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.scss'
import './assets/iconfont/iconfont.css'
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
