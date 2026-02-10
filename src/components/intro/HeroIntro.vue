<template>
  <div class="w-small h-small sm:h-large mx-auto flex flex-col justify-center sm:w-large  text-center">
    <h1 class="font-semibold text-[hsl(0,100%,100%)] text-[30px] xxsm:text-4xl sm:text-4xl md:text-[40px] 2xl:text-[100px]">
      A modern publishing platform
    </h1>
    <p class="font-light text-[#ffffff] text-lg xxsm:text-xl md:text-2xl 2xl:text-6xl pt-3 sm:pt-5 ">
      Grow your audience and build your online brand
    </p>
    <div class="flex justify-center gap-2 sm:gap-4 lg:gap-10 mt-8 xxsm:mt-12  md:mt-10 xl:mt-22 2xl:mt-30 sm:mx-auto">
      <base-button class="active w-32 sm:w-40 md:w-50 xl:w-60 2xl:w-90 h-10 sm:h-12 md:h-16 xl:h-20 2xl:h-30 border-[hsl(0,100%,100%)] text-[13px] xxsm:text-sm sm:text-16 md:text-xl xl:text-3xl 2xl:text-4xl">Start for Free</base-button>
      <base-button class="w-32 sm:w-40 md:w-50 xl:w-60 2xl:w-90 h-10 sm:h-12 md:h-16 xl:h-20 2xl:h-30 border-[hsl(0,100%,100%)] text-[13px] xxsm:text-sm sm:text-16 md:text-xl xl:text-3xl 2xl:text-4xl">Learn More</base-button>
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: hsl(0, 100%, 100%);
  color: hsl(356, 100%, 66%);
}
</style>
