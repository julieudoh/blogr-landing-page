<template>
  <header class="relative w-screen h-[75vh] md:h-[70vh] font-overpass bg-linear-to-l from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] rounded-bl-[80px] md:overflow-hidden">
        <div class="absolute h-full top-0 md:-top-30 md:-left-30 max-md:overflow-hidden  ">
          <img
          src="@/assets/images/bg-pattern-intro-mobile.svg"
          alt="Hero Background"
          class="object-cover w-screen h-screen md:hidden"
        />
        <img
          src="@/assets/images/bg-pattern-intro-desktop.svg"
          alt="Hero Background"
          class="hidden object-cover md:block"
        />
    </div>
    <div class="relative w-sm h-full top-2 md:top-5 md:h-sm mx-auto md:w-lg">
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
