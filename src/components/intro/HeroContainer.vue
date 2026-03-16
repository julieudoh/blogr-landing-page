<template>
  <Transition name="slide" appear>
    <header class="relative w-screen h-[75vh] md:h-[70vh] font-overpass bg-linear-to-l from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] rounded-bl-[80px] md:overflow-hidden">
        <div class="absolute -top-7 md:-top-50 md:-left-30 h-full max-md:overflow-hidden">
          <div class="h-full">
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
        </div>
      <div class="relative w-sm h-full top-2 md:top-5 md:h-sm mx-auto md:w-lg">
        <app-header></app-header>
        <hero-intro class="hidden sm:flex"></hero-intro>
        <hero-intro v-if="!isOpen" class="sm:hidden"></hero-intro>
      </div>

    </header>
  </Transition>
</template>

<script>
import HeroIntro from './HeroIntro.vue';
import AppHeader from '../layout/AppHeader.vue';

export default {
  components: {
    AppHeader,
    HeroIntro,
  },
  computed:{
    isOpen(){
      return this.$store.state.isOpen
    }
  },
  // provide(){
  //   return{
  //   isOpen : () => this.isOpen,
  //   toggleNav : this.toggleNav
  //   }
    
  // },
  // methods: {
  //   toggleNav() {
  //     this.$store.commit('toogleNav')
  //   },
  // }

}
</script>

<style>

.slide-enter-active{
  animation: slide-in 0.5s ease-in;
}

@keyframes slide-in {
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>
