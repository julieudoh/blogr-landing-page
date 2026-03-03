<template>
    <hero-container v-if="!$route.meta.hideHeader"></hero-container>
    <main>
      <router-view v-slot="slotProps">
        <Transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </Transition>
      </router-view>
    </main>
    <app-footer v-if="!$route.meta.hideHeader"></app-footer>

    <router-view name="modal" v-slot="slotProps">
       <Transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </Transition>
    </router-view>
</template>

<script>
  import HeroContainer from '@/components/intro/HeroContainer.vue'
  import AppFooter from '@/components/layout/AppFooter.vue';
  import close from '@/assets/images/icon-close.svg';


export default {
  components: {
    HeroContainer,
    AppFooter,
  },
  data() {
    return {
      CloseMenu: close,
    }
  },
  methods: {
    
    closePage() {
      // this.$router.go(-1) //{Takes page a step back}
      this.$router.back()     //{Takes page to the previous page}
    },
  },
  provide() {
    return {
      closePage: this.closePage,
      closeMenu: this.CloseMenu,
    }
  }
}
</script>

<style>
*, *::before, *::after{
  box-sizing: border-box;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active{
  transition: opacity 0.5s ease-out;
}
.route-leave-active{
  transition: opacity 0.5s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}

</style>
