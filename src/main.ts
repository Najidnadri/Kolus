import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'uno.css'

import './assets/css/main.css'
import './assets/css/base.css'

const app = createApp(App)

app.use(router)
app.use(store);

app.mount('#app')
