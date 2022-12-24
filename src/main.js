import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import { createPinia } from 'pinia'
import router from '../routes/router'

const app = createApp(App);
const pinia = createPinia()




app.use(router)
app.use(pinia)
app.use(naive)
app.mount('#app')
