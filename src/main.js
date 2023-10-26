
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin }  from './directives'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

