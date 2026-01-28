<template>
    <h1>My DashBoard</h1>
</template>

<script>
    export default {
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
            console.log(this.user)
        }
    }
</script>