<template>
  <banner-container></banner-container>
  <home-page></home-page>
  <app-footer></app-footer>
</template>

<script>
import BannerContainer from './components/intro/BannerContainer.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HomePage from './components/pages/HomePage.vue'

export default {
  components: {
    BannerContainer,
    AppFooter,
    HomePage,
  },
}
</script>

<style scoped></style>
