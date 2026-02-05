import { createWebHistory, createRouter } from 'vue-router'
import MainPage from './pages/MainPage.vue'
import AboutPage from './pages/AboutPage.vue'
import FormLayout from './components/layout/FormLayout.vue'
import LogIn from './pages/forms/LogIn.vue'
import SignUp from './pages/forms/SignUp.vue'
import DashBoard from './pages/DashBoard.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        redirect: '/home',
        meta: {hideHeader: false, hideFooter: false}

    },
    {
        path: '/home',
        component: MainPage,
        meta: {hideHeader: false, hideFooter: false}

    },
    {
        path: '/about',
        component: AboutPage,
         meta: {hideHeader: false, hideFooter: false}
    },
    {
        path: '/register',
        component: FormLayout,
            children: [
                {
                    path: '/login',
                    component: LogIn,
                    meta: {hideHeader: true, hideFooter: true}
                },
                {
                    path: '/signup',
                    component: SignUp,
                    meta: {hideHeader: true, hideFooter: true}
                },
        ]
    },
    {
        path: '/dashboard',
        component: DashBoard,
        meta: {hideHeader: true, hideFooter: false}
    },
    
    
  ],
})

export default router