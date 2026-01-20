<template>
  <banner-container></banner-container>
  <app-body></app-body>
  <app-footer></app-footer>
</template>

<script>
import BannerContainer from './components/intro/BannerContainer.vue'
import AppBody from './components/layout/AppBody.vue'
import AppFooter from './components/layout/AppFooter.vue'

export default {
  components: {
    BannerContainer,
    AppBody,
    AppFooter,
  },
}
</script>

<style scoped></style>
