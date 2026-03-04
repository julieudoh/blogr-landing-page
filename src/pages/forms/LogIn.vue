<template>
    <div class="fixed top-0 left-0 w-screen h-full bg-[rgba(0,0,0,0.9)]  z-1000 py-10 md:px-20">
        <a @click="closePage" class="absolute right-5 md:right-40 top-10 cursor-pointer">
            <img :src="closeMenu" alt="hamburger icon" />
        </a>
        <div class="w-sm max-h-full p-12 md:w-[60%] bg-[rgba(255,255,255,0.9)] mx-auto my-20 overflow-y-auto hide-scrollbar">
            <form class="text-[hsl(208,49%,24%)] font-semibold" @submit.prevent="handleLoginSubmit">
                <h2 class="text-[20px] mb-5  text-[hsl(356,100%,66%)] text-center font-bold">Login to your Account</h2>
                <div>
                    <label for="email">Email :</label>
                    <input name="email" id="email" type="email" v-model="useremail" class="w-full py-2 px-4 border border-gray-500 p-2 focus:outline-0" :class="{invalid : useremail === '' && invalidInput}"/>

                    <p v-if="useremail=== '' && invalidInput" class=" mt-2 text-red-300">Input Email</p>
                </div>
                <div>
                    <label for="password">Password :</label>
                    <input name="password" id="password" type="password" v-model="userpassword" class="w-full py-2 px-4 border border-gray-500 p-2 focus:outline-0" :class="{invalid : userpassword === '' && invalidInput}"/>

                    <p v-if="userpassword === '' && invalidInput" class=" mt-2 text-red-300">Input Password</p>
                </div>
                <base-button type="submit" class="bg-linear-to-tl from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-[hsl(353,100%,62%)] w-full mt-10 ">Login</base-button>

                <p :class="{invalidUser: loginError !== ''}">Forgot your password?</p>

                <h2 class="pt-5 font-bold ">{{ loginError }}</h2>
            </form>
        </div>
        
    </div>
</template>

<script>

    export default{
        data(){
            return{
                useremail: '',
                userpassword: '',
                error: null,
                invalidInput: false,
                // currentUser: null,
                loginError: ''
            }
        },
        inject: ['closePage', 'closeMenu'],
        methods: {
            handleLoginSubmit(){
                if(this.useremail === '' || this.userpassword === ''){
                    this.invalidInput = true;
                    return
                }

                this.error = null
                
                fetch('https://rsvp-form-34302-default-rtdb.firebaseio.com/blogrusersdata.json')
                .then((Response) => {
                    if (Response.ok) {
                         return Response.json()
                    }
                }).then((data) => {
                    const results = []
                    let userData
                    for(const id in data){
                        results.push({
                            email: data[id].email,
                            firstname: data[id].firstname,
                            lastname: data[id].lastname,
                            password: data[id].password
                        })
                    }
                        
                        userData = results.find((result) => {
                        return this.useremail === result.email && this.userpassword === result.password})

                        if(userData) {
                            // this.currentUser = userData
                            console.log('Current User ' , this.userData)
                            localStorage.setItem('user', JSON.stringify(userData));
                            this.$router.push(
                                { path: '/dashboard', query: { firstName: userData.firstname } }
                            )
                        } else {
                            this.loginError = 'Invalid email or password - Recover password'
                        }

                }).catch((error) => {
                    console.log(error)
                    this.error = 'Failed to fetch data - Try again later!!'
                })
            

                   
                
                

                
                
            },
            
        }
        
    }
</script>
<style>
.invalidUser {
    color: red;
}

.hide-scrollbar {
    overflow-y: auto;
  scrollbar-width: none; 
  -ms-overflow-style: none;  
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
  width: 0px; 
  background: transparent;
}
</style>