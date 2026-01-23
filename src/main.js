import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import BaseButton from './components/base/BaseButton.vue'


import App from './App.vue'

const app = createApp(App)
app.use(router)


app.component('base-button', BaseButton)

app.mount('#app')
