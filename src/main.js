/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-01 10:05:43
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-06 15:48:21
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import directive from '@/utils/directive'
import '@/assets/css/common.less'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(directive)
app.mount('#app')
