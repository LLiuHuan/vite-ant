import { createApp } from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import * as antIcons from '@ant-design/icons-vue'

import router from './router';
import { store } from './store'


const app = createApp(App)

Object.keys(antIcons).forEach(key => {
    // @ts-ignore
    app.component(key, antIcons[key])
})
// 添加到全局
app.config.globalProperties.$antIcons = antIcons

app.use(Antd)
app.use(router)
app.use(store)

app.mount('#app')
