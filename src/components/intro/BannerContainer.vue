<template>
  <div class="rlative h-screen w-full">
    <div
      class="relative font-[Overpass] h-screen rounded-bl-[90px] w-full bg-linear-to-tl from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] overflow-hidden"
    >
      <div class="absolute z-1 -top-65 -left-65 w-250 h-290">
        <img
          src="../../assets/images/bg-pattern-intro-mobile.svg"
          alt="Company Logo"
          class="object-fill h-full"
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
