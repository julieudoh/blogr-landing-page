import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import BaseButton from './components/base/BaseButton.vue'
import BaseCard from './components/base/BaseCard.vue'
import close from '@/assets/images/icon-close.svg';


import App from './App.vue'

import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            isOpen: false,
            closeMenu: close,
            isLoggedIn: false
        }
    },
    mutations: {
        toggleNav(state) {
            state.isOpen = !state.isOpen
        },
        setAuth(state, payload){
            state.isLoggedIn = payload.isAuth
        }
    },
    actions: {
        setAuth(context){
            context.commit('setAuth', {isAuth: true})
        }
    },
    getters: {
        userIsAuthenticated(state){
            return state.isLoggedIn
        }
    }

})

const app = createApp(App)
app.use(router)
app.use(store)


app.component('base-button', BaseButton)
app.component('base-card', BaseCard)

router.isReady().then(() => {
    app.mount('#app')
})
