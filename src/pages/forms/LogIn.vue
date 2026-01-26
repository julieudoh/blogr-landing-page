<template>
    <div class="w-[90%] sm:w-[60%] mx-auto bg-[hsl(0,100%,100%)] flex items-">
        <form class="w-[80%] sm:w-[60%] mx-auto my-20" @submit.prevent="handleLoginSubmit">
            <h2 class="text-[20px] mb-5  text-[hsl(208,49%,24%)] text-center font-bold">Login to your Account</h2>
            <div>
                <label for="email">Email :</label>
                <input name="email" id="email" type="email" class="w-full py-2 px-4 border border-gray-500 p-2 focus:outline-0"/>
            </div>
            <div>
                <label for="password">Password :</label>
                <input name="password" id="password" type="password" class="w-full py-2 px-4 border border-gray-500 p-2 focus:outline-0"/>
            </div>
            <base-button type="submit" class="bg-linear-to-tl from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-[hsl(353,100%,62%)] w-full mt-10 ">Login</base-button>

            <p>Forgot your password?</p>
        </form>
    </div>
</template>

<script>
    export default{
        methods: {
            handleLoginSubmit(){
                this.$router.push('/dashboard')
            }
        }
        
    }
</script>