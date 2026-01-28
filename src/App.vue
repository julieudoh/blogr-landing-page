<template>
    <div class="font-[Overpass]">
      <banner-container v-if="!$route.meta.hideHeader"></banner-container>
      <main>
        <router-view></router-view>
      </main>
      <app-footer v-if="!$route.meta.hideHeader"></app-footer>
    </div>
</template>

<script>
  import BannerContainer from './components/intro/BannerContainer.vue';
  import AppFooter from './components/layout/AppFooter.vue';

export default {
  components: {
    BannerContainer,
    AppFooter,
  },
}
</script>
