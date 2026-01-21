<template>
  <div class="flex justify-between items-center mt-10 top-0 left-0">
    <div class="h-10 w-20">
      <img :src="headerLogo" alt="Company Logo" class="h-full object-contain" />
    </div>

    <a @click="toggleDropDown">
      <img :src="isOpen ? CloseMenu : OpenMenu" alt="hamburger icon" />
    </a>
    <app-nav v-if="isOpen"></app-nav>
  </div>
</template>

<script>
import logo from '../../assets/images/logo.svg'
import hamburger from '../../assets/images/icon-hamburger.svg'
import close from '../../assets/images/icon-close.svg'
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
    toggleDropDown() {
      this.isOpen = !this.isOpen

      console.log(this.isOpen)
    },
  },
}
</script>
