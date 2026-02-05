<template>
  <header class="relative w-screen h-[85vh] sm:h-[75vh] font-overpass bg-linear-to-l from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] rounded-bl-[100px]">
    <div class="absolute w-screen h-[85vh] sm:h-[75vh] overflow-hidden">
      <div class="w-150 h-150 sm:w-300 sm:h-300 absolute -top-30 -left-40 sm:-top-110 sm:-left-20 z-0">
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
    <div class="absolute w-[90%] top-0 sm:-left-2 h-full mx-auto sm:w-large right-0">
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
