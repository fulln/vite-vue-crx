import { createApp } from 'vue'
// 全局样式
import '@/common/styles/frame.styl'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Popup from '@/popup/popup.vue'

const app = createApp(Popup)
app.use(ElementPlus, {
    locale: zhCn,
})

app.mount('#app')
