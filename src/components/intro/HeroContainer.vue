<template>
  <header class="relative w-screen h-[85vh] sm:h-[75vh] font-overpass bg-linear-to-l from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] rounded-bl-[100px]">
    <div class="absolute w-screen h-full overflow-hidden">
      <div class="w-150 h-150 sm:w-290 sm:h-290 md:w-7xl md:h-7xl lg:w-400 lg:h-400 xl:w-470 xl:h-470 2xl:w-650 2xl:h-650 3xl:w-750 3xl:h-750  max-xsm:w-220 max-xsm:h-220 absolute -top-30 -left-40 max-xsm:-top-50 sm:-top-60 sm:-left-50 lg:-left-70 lg:-top-80 2xl:-left-120 2xl:-top-100  z-0">
          <img
          src="@/assets/images/bg-pattern-intro-mobile.svg"
          alt="Company Logo"
          class="sm:hidden"
        />
        <img
          src="@/assets/images/bg-pattern-intro-desktop.svg"
          alt="Company Logo"
          class="hidden sm:block"
        />
      </div>
    </div>
    <div class="relative w-small top-8 lg:top-12 h-full mx-auto sm:w-[75%]">
      <app-header></app-header>
      <hero-intro></hero-intro>
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
}
</script>
