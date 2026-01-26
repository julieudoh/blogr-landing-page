<template>
    <div class="w-[90%] sm:w-[60%] mx-auto bg-[hsl(0,100%,100%)] flex items-center justify-center">
        <form class="w-[80%] sm:w-[60%] mx-auto my-20" @submit.prevent="handleSignUpSubmit">
            <h2 class="text-[20px] mb-5 text-[hsl(208,49%,24%)] text-center font-bold">Register</h2>
            <div class="w-full mb-3">
                <label for="firstname">First Name :</label>
                <input name="firstname" id="firstname" type="text" v-model="firstname" :class="{invalid : firstname === '' && invalidInput}" class="w-full py-2 px-4 border border-gray-500 p-2 focus:outline-0"/>
            </div>
            <div class="w-full mb-3">
                <label for="lastname">Last Name :</label>
                <input name="lastname" id="lastname" type="text" v-model="lastname" :class="{invalid : lastname === '' && invalidInput}" class="w-full py-2 px-4 border border-gray-500 p-2 focus:outline-0"/>
            </div>
            <div class="w-full mb-3">
                <label for="age">Age :</label>
                <input name="age" id="age" type="number" :class="{invalid : age === null && invalidInput}" v-model="age" class="w-full py-2 px-4 border border-gray-500 p-2 focus:outline-0"/>
            </div>
            <div class="w-full mb-3">
                <label for="email">Email :</label>
                <input name="email" id="email" type="email" v-model="email" :class="{invalid : email === '' && invalidInput}" class="w-full py-2 px-4 border border-gray-500 p-2 focus:outline-0"/>
            </div>
            <div class="w-full mb-3">
                <label for="password">Password :</label>
                <input name="password" id="password" v-model="password" :class="{invalid : password === '' && invalidInput}" class="w-full py-2 px-4 border border-gray-500 p-2 focus:outline-0"/>
            </div>
            <div class="w-full mb-3">
                <label for="re-enterpassword">Re-Enter Password :</label>
                <input name="re-enterpassword" id="re-enterpassword" v-model="recheckPassword" :class="{invalid : recheckPassword === '' && invalidInput && password !== recheckPassword }" class="w-full py-2 px-4 border border-gray-500 p-2 focus:outline-0"/>
                <p v-if="password !== recheckPassword" class="text-red-500">Password should be the same</p>
            </div>
            <div class="w-full">
                <input type="checkbox" v-model="confirmterms" class="border border-gray-500 p-2 focus:outline-0"/>
                <label for="checkbox"> Yes I agree to the terms</label>
                <p v-if="confirmterms === false && invalidInput" class="text-red-500">Please agree to terms!!</p>
            </div>

            <p v-if="error">{{ error }}</p>

            <base-button type="submit" class="bg-linear-to-tl from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-[hsl(353,100%,62%)] w-full p-2 mt-10">Sign Up</base-button>
        </form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                firstname: '',
                lastname: '',
                age: null,
                email: '',
                password: '',
                recheckPassword: '',
                confirmterms: false,
                invalidInput: false,
                error: null
            }
        },
        
        methods: {
            handleSignUpSubmit(){
                if(this.firstname == '' || this.lastname === '' || this.age === null || this.email === '' || this.password === '' || this.recheckPassword === '' || this.confirmterms === false || this.password !== this.recheckPassword ){
                     this.invalidInput = true
                     return
                }
                this.invalidInput = false
                this.error = null

                fetch('https://rsvp-form-34302-default-rtdb.firebaseio.com/blogrusersdata.json', {
                    method: 'POST',
                    header: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        firstname:this.firstname,
                        lastname: this.lastname,
                        age:this.age,
                        email:this.email,
                        password:this.password

                    })
                })
                .then(
                    (Response) => {
                        if(Response.ok){
                            this.$router.push('/login')
                        } else {
                            throw new Error ('Could not save data - Try again!!')
                        }
                    }
                )
                .catch((error) => {
                    console.log(error)
                    this.error = error.message;
                }

                )
                this.firstname == '' 
                this.lastname === '' 
                this.age === null 
                this.email === '' 
                this.password === '' 
                this.recheckPassword === '' 
                this.confirmterms === false

                
            }
        }
    }
</script>

<style scoped>
    .invalid{
        border: 1px solid red;
    }
</style>