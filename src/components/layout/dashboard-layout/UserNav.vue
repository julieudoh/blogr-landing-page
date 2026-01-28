<template>
    <nav class="  relative sm:static sm:w-[25%]">
    <a @click="toggleNav" class="absolute top-0 cursor-pointer p-2 w-8 h-8 bg-linear-to-l from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] sm:hidden flex justify-center items-center">
        <img :src="isOpen ? CloseMenu : OpenMenu" alt="hamburger icon" class="object-cover "/>
    </a>
    <div class="w-full hidden sm:block p-5 bg-gray-100 rounded-lg h-70 ">
        <div class="h-full flex flex-col justify-between">
            <ul  class="list-none text-left text-[hsl(208,49%,24%)] h-[60%] w-full flex flex-col justify-between  font-bold">
                <a href="" class="m-b"><li>User Profile</li></a>
                <a href=""><li>Orders</li></a>
                <a href=""><li>Address</li></a>
                <a href=""><li>Wish List</li></a> 
            </ul>        
             <div
            class="mt-6 pt-8 border-t border-gray-500 text-[14px] lg:text-[16px] font-bold"
            >
                <router-link to="/login" class="text-[hsl(356,100%,66%)]">Sign Out</router-link>
            </div>
        </div>
    </div>
    <div v-if="isOpen" class="absolute z-2 top-10 left-0 w-70  h-100 sm:w-[35%] p-10 sm:p-5 bg-gray-100 rounded-lg sm:h-70 flex flex-col justify-between">
            <ul  class="list-none text-left text-[hsl(208,49%,24%)] h-[60%] w-full flex flex-col justify-between  font-bold">
                <a href="" class="m-b"><li>User Profile</li></a>
                <a href=""><li>Orders</li></a>
                <a href=""><li>Address</li></a>
                <a href=""><li>Wish List</li></a> 
            </ul>        
        <div
            class="mt-6 pt-8 border-t border-gray-500 sm:text-[14px] lg:text-[16px] font-bold"
        >
            <router-link to="/login" class="text-[hsl(356,100%,66%)]">Sign Out</router-link>
        </div>
    </div>
    </nav>
</template>

<script>
import close from '../../../assets/images/icon-close.svg'
import hamburger from '../../../assets/images/icon-hamburger.svg'
    export default{
        data(){
            return{
                isOpen: false,
                CloseMenu: close,
                OpenMenu: hamburger,
            }
        },
        methods: {
            toggleNav() {
            this.isOpen = !this.isOpen
            },
            closeNav() {
            this.isOpen = false
            },
        },
    }
</script>