<template>
    <hero-container v-if="!$route.meta.hideHeader" class="overflow-hidden"></hero-container>
    <main>
      <router-view></router-view>
    </main>
    <app-footer v-if="!$route.meta.hideHeader"></app-footer>
</template>

<script>
  import HeroContainer from '@/components/intro/HeroContainer.vue'
  import AppFooter from '@/components/layout/AppFooter.vue';

export default {
  components: {
    HeroContainer,
    AppFooter,
  },
}
</script>

<style>
*, *::before, *::after{
  box-sizing: border-box;
}
</style>
