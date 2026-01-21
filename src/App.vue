<template>
  <banner-container></banner-container>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script>
import BannerContainer from './components/intro/BannerContainer.vue'
import AppFooter from './components/layout/AppFooter.vue'

export default {
  components: {
    BannerContainer,
    AppFooter,
  },
}
</script>

<style scoped></style>
