<template>
  <banner-container></banner-container>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script>
    import BannerContainer from '../intro/BannerContainer.vue';
    import AppFooter from './AppFooter.vue';

export default {
  components: {
    BannerContainer,
    AppFooter,
  },
}
</script>
