import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import BaseButton from './components/base/BaseButton.vue'
import HomePage from './components/pages/HomePage.vue'
import AboutPage from './components/pages/AboutPage.vue'

import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // component: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomePage,
    },
    {
      path: '/about',
      component: AboutPage,
    },
  ],
})

const app = createApp(App)

app.use(router)
app.component('base-button', BaseButton)

app.mount('#app')
