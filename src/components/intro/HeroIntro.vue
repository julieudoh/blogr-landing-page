<template>
  <div class="w-small sm:w-large mx-auto mt-12 sm:mt-8 lg:mt-20 text-center">
    <h1 class="font-semibold text-[hsl(0,100%,100%)] text-[30px] sm:text-[36px] lg:text-[45px]">
      A modern publishing platform
    </h1>
    <p class="font-light text-[#ffffff] text-[17px] pt-3">
      Grow your audience and build your online brand
    </p>
    <div class="flex justify-center gap-4 mt-10 sm:mx-auto">
      <base-button class="active w-32 sm:w-40 h-10 sm:h-12 border-[hsl(0,100%,100%)] text-[12px] sm:text-16">Start for Free</base-button>
      <base-button class="w-32 sm:w-40 h-10 sm:h-12 border-[hsl(0,100%,100%)] text-[12px] sm:text-16">Learn More</base-button>
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: hsl(0, 100%, 100%);
  color: hsl(356, 100%, 66%);
}
</style>
