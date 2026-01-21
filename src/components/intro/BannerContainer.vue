<template>
  <div class="rlative h-screen w-full sm:h-60">
    <div
      class="relative font-[Overpass] h-full rounded-bl-[90px] w-full bg-linear-to-tl from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] overflow-hidden"
    >
      <div class="absolute z-1 -top-65 -left-65 w-250 h-290 sm:w-500 sm:h-400 sm:-top-100">
        <img
          src="../../assets/images/bg-pattern-intro-mobile.svg"
          alt="Company Logo"
          class="object-fill h-full sm:hidden"
        />
        <img
          src="../../assets/images/bg-pattern-intro-desktop.svg"
          alt="Company Logo"
          class="object-fill h-full hidden sm:block"
        />
      </div>
    </div>
    <div class="z-2 absolute w-[90%] top-0 left-4.5 mx-auto">
      <app-header></app-header>
      <banner-intro></banner-intro>
    </div>
  </div>
</template>

<script>
import AppHeader from '../layout/AppHeader.vue'
import BannerIntro from './BannerIntro.vue'

export default {
  components: {
    AppHeader,
    BannerIntro,
  },
}
</script>
