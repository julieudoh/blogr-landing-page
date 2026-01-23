<template>
  <div class="rlative h-screen w-full sm:h-100 lg:h-120">
    <div
      class="relative font-[Overpass] h-full rounded-bl-[90px] w-full bg-linear-to-l from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] overflow-hidden"
    >
      <div
        class="absolute z-1 -top-65 -left-65 w-250 h-290 sm:w-500 sm:h-400 sm:-top-150 sm:-left-52"
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
    </div>
    <div class="z-2 absolute w-[90%] top-0 left-4.5 mx-auto sm:w-[85%] lg:w-[80%] sm:right-0">
      <app-header></app-header>
      <banner-intro></banner-intro>
    </div>
  </div>
</template>

<script>
  import AppHeader from '../sectionLayout/AppHeader.vue';
import BannerIntro from './BannerIntro.vue'

export default {
  components: {
    AppHeader,
    BannerIntro,
  },
}
</script>
