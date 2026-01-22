<template>
  <div class="w-[94%] sm:w-[85%] lg:w-[80%] mx-auto mb-18 mt-14 sm:mt-17 lg:mt-20 text-center">
    <h1 class="font-semibold text-[hsl(0,100%,100%)] text-[29px] sm:text-[35px]">
      A modern publishing platform
    </h1>
    <p class="font-light text-[hsl(0,100%,100%)] text-[17px] pt-3">
      Grow your audience and build your online brand
    </p>

    <div class="flex justify-between mt-10 sm:w-[50%] sm:mx-auto">
      <base-button class="active">Start for Free</base-button>
      <base-button>Learn More</base-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.active {
  background-color: hsl(0, 100%, 100%);
  color: hsl(356, 100%, 66%);
}
</style>
