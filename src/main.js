import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import BaseButton from './components/base/BaseButton.vue'
import HomePage from './components/pages/HomePage.vue'
import AboutPage from './components/pages/AboutPage.vue'
import LogIn from './components/forms/LogIn.vue'
import SignUp from './components/forms/SignUp.vue'

import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {layout: 'AppLayout'}
    },
    {
      path: '/home',
      component: HomePage,
      meta: {layout: 'AppLayout'}
    },
    {
      path: '/about',
      component: AboutPage,
      meta: {layout: 'AppLayout'}
    },
    {
      path: '/login',
      component: LogIn,
      meta: {layout: 'FormLayout'}
    },
    {
      path: '/signup',
      component: SignUp,
      meta: {layout: 'FormLayout'}
    },
  ],
})

const app = createApp(App)

app.use(router)
app.component('base-button', BaseButton)

app.mount('#app')
