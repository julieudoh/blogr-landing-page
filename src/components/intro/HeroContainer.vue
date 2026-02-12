<template>
  <header class="relative w-screen h-[85vh] md:h-[65vh] font-overpass bg-linear-to-l from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] rounded-bl-[100px] md:overflow-hidden">
        <div class="absolute h-full top-0 md:-top-30 md:-left-30 max-md:overflow-hidden  ">
          <img
          src="@/assets/images/bg-pattern-intro-mobile.svg"
          alt="Company Logo"
          class="object-cover w-screen h-screen md:hidden"
        />
        <img
          src="@/assets/images/bg-pattern-intro-desktop.svg"
          alt="Company Logo"
          class="hidden object-cover md:block"
        />
    </div>
    <div class="relative w-small top-6 md:top-8 xl:top-10 h-full mx-auto md:w-large">
      <app-header></app-header>
      <hero-intro v-if="!isOpen"></hero-intro>
    </div>

  </header>
</template>

<script>
import HeroIntro from './HeroIntro.vue';
import AppHeader from '../layout/AppHeader.vue';

export default {
  components: {
    AppHeader,
    HeroIntro,
  },
  data(){
    return{
      isOpen: false,
    }
  },
  provide(){
    return{
    isOpen : () => this.isOpen,
    toggleNav : this.toggleNav
    }
    
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen
    },
  }

}
</script>
