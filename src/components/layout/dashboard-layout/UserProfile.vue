<template>
    <div class=" mt-10 sm:mt-0 px-5 w-full sm:w-[75%]">
        <h1 class="font-bold text-center sm:text-left">User Profile</h1>
        <p class="text-gray-400 text-center sm:text-left">Manage your details, view your tier status and change your password</p>

        <div class="w-full mt-5 sm:flex gap-3 ">
            <base-card class="w-full sm:w-[35%] p-4 flex flex-col justify-center items-center">
                <div class="h-30 w-30 rounded-full bg-blue-100">
                    <img src="" alt="">
                </div>
                <div class="mt-3 w-full overflow-scroll">
                    <h2 class="text-[hsl(208,49%,24%)]">{{user.firstname +" " + user.lastname}}</h2>
                    <p>{{user.email}}</p>
                </div>
            </base-card>
            <base-card class="p-5 mt-5 sm:mt-0 w-full sm:w-[68%]">
                <form @submit.prevent="" class="w-full flex sm:block flex-col items-center sm:items-left">
                    <h2 class="text-[hsl(208,49%,24%)] font-bold text-left">General Information</h2>
                    <div class="mt-3 sm:flex justify-between items-center w-full">
                        <base-card class="p-2 sm:p-1 sm:w-[45%]">
                            <label for="firstname" class="text-[hsl(208,49%,24%)]">FirstName</label>
                            <input id="firstname" name="firstname" type="text">
                        </base-card>
                        <base-card class="p-2 sm:p-1 mt-2 sm:mt-0 sm:w-[45%]">
                            <label for="lastname" class="text-[hsl(208,49%,24%)]">LastName</label>
                            <input id="lastname" name="lastname" type="text">
                        </base-card>
                    </div>
                    <base-button class="w-[60%] sm:w-[30%] mt-4 sm:mt-7 bg-linear-to-l from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)]">
                    Update
                    </base-button>
                </form>
            </base-card>
        </div>
        <div>
            <base-card></base-card>
        </div>
    </div>
</template>
<script>
export default{
    props: ['user']
}
</script>