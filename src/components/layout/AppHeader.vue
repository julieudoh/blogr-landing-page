<template>
  <div class="flex justify-between items-center mt-10">
    <div class="h-10 w-20">
      <img :src="headerLogo" alt="Company Logo" class="h-full object-contain" />
    </div>
    <div>
      <a>
        <img src="../../assets/images/icon-hamburger.svg" alt="hamburger icon" />
      </a>
    </div>
  </div>
</template>

<script>
import logo from '../../assets/images/logo.svg'
export default {
  data() {
    return {
      headerLogo: logo,
    }
  },
}
</script>
