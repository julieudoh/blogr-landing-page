import './assets/main.css'

import { createApp } from 'vue'
import BaseButton from './components/base/BaseButton.vue'

import App from './App.vue'

const app = createApp(App)

app.component('base-button', BaseButton)
app.mount('#app')
