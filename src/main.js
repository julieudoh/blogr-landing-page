import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import BaseButton from './components/base/BaseButton.vue'
import BaseCard from './components/base/BaseCard.vue'


import App from './App.vue'

const app = createApp(App)
app.use(router)


app.component('base-button', BaseButton)
app.component('base-card', BaseCard)

app.mount('#app')
