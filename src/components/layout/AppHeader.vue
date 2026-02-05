<template>
  <div class="w-full flex justify-center items-center mt-7">
      <div class="h-10 w-20 mr-auto">
        <img :src="headerLogo" alt="Company Logo" class="h-full object-contain" />
      </div>

    <app-nav class="hidden sm:block"></app-nav>
    <a @click="toggleNav" class="cursor-pointer sm:hidden ml-auto">
        <img :src="isOpen ? CloseMenu : OpenMenu" alt="hamburger icon" />
    </a>
  </div>
  <app-nav v-if="isOpen" @close-nav="closeNav" class="sm:hidden" >
  </app-nav>
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
  data() {
    return {
      isOpen: false,
      headerLogo: logo,
      OpenMenu: hamburger,
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
