<template>
  <div
    class=" font-[Overpass] relative h-30 sm:h-50 rounded-bl-[90px] w-full bg-linear-to-l from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] overflow-hidden"
  >
    <div
      class="absolute z-1 -top-15 -left-10 w-100 h-100 sm:w-200 sm:h-200 sm:-top-60 sm:-right-90 "
    >
       <img
        src="../../assets/images/bg-pattern-intro-mobile.svg"
        alt="Company Logo"
        class="object-fill h-full sm:hidden"
      />
      <img
        src="../../assets/images/bg-pattern-intro-desktop.svg"
        alt="Company Logo"
        class="object-contain h-full hidden sm:block"
      />
    </div>
    <div class="z-2 absolute w-[90%] top-0 left-4.5 mx-auto sm:w-[85%] lg:w-[80%] sm:right-0">
      <div class="flex justify-between items-center mt-10 top-0 left-0">
      <div class="h-10 w-20">
        <img :src="headerLogo" alt="Company Logo" class="h-full object-contain" />
      </div>

      <a @click="toggleNav" class="cursor-pointer sm:hidden">
        <img :src="isOpen ? CloseMenu : OpenMenu" alt="hamburger icon" />
      </a>
    </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import logo from '../../assets/images/logo.svg'
import close from '../../assets/images/icon-close.svg'

export default {
  data() {
    return {
      isOpen: false,
      headerLogo: logo,
      CloseMenu: close,
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


