<template>
  <div class="w-full h-[20%] flex justify-center items-center">
    <div class="w-23 h-full flex items-center" >
      <div class="h-1/2 w-full mr-auto flex items-center justify-center">
        <img :src="headerLogo" alt="Company Logo" class="h-full object-contain" />
      </div>
    </div>
      

    <app-nav class="hidden md:block"></app-nav>
    <a @click="toggleNav" class="cursor-pointer md:hidden ml-auto">
      <img :src="isOpen() ? CloseMenu : OpenMenu" alt="hamburger icon" />
    </a>
  </div>
  <transition name="menu">
    <app-nav v-if="isOpen()" class="md:hidden" >
    </app-nav>
  </transition>
</template>

<script>
import logo from '@/assets/images/logo.svg'
import hamburger from '@/assets/images/icon-hamburger.svg'
import close from '@/assets/images/icon-close.svg'
import AppNav from '../nav/AppNav.vue'

export default {
  components: {
    AppNav,
  },
  inject: ['isOpen','toggleNav'],
  data() {
    return {
      headerLogo: logo,
      OpenMenu: hamburger,
      CloseMenu: close,
    }
  },
  methods: {
    closeNav() {
      this.isOpen = false
      console.log(this.isOpen)

    },
  },
}
</script>

