<template>
    <div class="w-full h-screen p-5 sm:p-12 flex">
        <user-nav></user-nav>
        <user-profile 
        v-for="data in user" 
        :key="data.email"
        :user="data"></user-profile>
    </div>
</template>

<script>
import UserNav from '../components/layout/dashboard-layout/UserNav.vue';
import UserProfile from '../components/layout/dashboard-layout/UserProfile.vue'
    export default {
        components: {
            UserNav,
            UserProfile,
        },
        data() {
            return{
                user: []
            }
        },
        mounted(){
            const user = JSON.parse(localStorage.getItem('user'))
            if(user) {
                this.user.push(user)
            }
        }
    }
</script>