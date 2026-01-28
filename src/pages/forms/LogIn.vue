<template>
    <div class="w-[90%] sm:w-[60%] mx-auto bg-[hsl(0,100%,100%)] flex items-">
        <form class="w-[80%] sm:w-[60%] mx-auto my-20" @submit.prevent="handleLoginSubmit">
            <h2 class="text-[20px] mb-5  text-[hsl(208,49%,24%)] text-center font-bold">Login to your Account</h2>
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
</style>