<template>
    <div class="w-[90%] sm:w-[60%] mx-auto bg-[hsl(0,100%,100%)] flex items-center justify-center text-center">
        <form class="p-10" @submit.prevent="handleSignUpSubmit">
            <h2 class="text-[20px]  text-[hsl(208,49%,24%)]">Register</h2>
            <div class="w-full">
                <label for="firstname">First Name :</label>
                <input name="firstname" id="firstname" type="text" class="w-full py-2 px-4"/>
            </div>
            <div>
                <label for="lastname">First Name :</label>
                <input name="lastname" id="lastname" type="text" class="w-full py-2 px-4"/>
            </div>
            <div>
                <label for="Age">Age :</label>
                <input name="age" id="age" type="number" class="w-full py-2 px-4"/>
            </div>
            <div>
                <label for="password">Password :</label>
                <input name="password" id="password" class="w-full py-2 px-4"/>
            </div>
            <div>
                <label for="re-enterpassword">Re-Enter Password :</label>
                <input name="re-enterpassword" id="re-enterpassword" class="w-full py-2 px-4"/>
            </div>
            <base-button class="bg-linear-to-tl from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-[hsl(353,100%,62%)] w-[30%] p-2">Sign Up</base-button>
        </form>
    </div>
</template>

<script>
    export default{
        handleSignUpSubmit(){
            this.$route.push('/login')
        }
    }
</script>