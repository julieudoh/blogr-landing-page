import { createWebHistory, createRouter } from 'vue-router'
import MainPage from './pages/MainPage.vue'
import AboutPage from './pages/AboutPage.vue'
// import FormLayout from './components/layout/FormLayout.vue'
import LogIn from './pages/forms/LogIn.vue'
import SignUp from './pages/forms/SignUp.vue'
import DashBoard from './pages/DashBoard.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        component: MainPage,
        meta: {hideHeader: false, hideFooter: false}

    },
    {
        path: '/home',
        name:MainPage,
        meta: {hideHeader: false, hideFooter: false}

    },
    {
        path: '/about',
        name:AboutPage,
        component: AboutPage,
         meta: {hideHeader: false, hideFooter: false}
    },
    // {
    //     path: '/register',
    //     component: FormLayout,
    //         children: [
                {
                    path: '/login',
                    components: {
                        default: MainPage,
                        modal:LogIn,
                    },
                },
                {
                    path: '/signup',
                    components: {
                        default: MainPage,
                        modal:SignUp,
                    },
                },
                    // meta: {hideHeader: true, hideFooter: true}

        // ]
    // },
    {
        path: '/dashboard',
        component: DashBoard,
        meta: {hideHeader: true, hideFooter: false}
    },
    
    
  ],
})

export default router