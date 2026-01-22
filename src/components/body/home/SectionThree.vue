<template>
  <div class="w-[90%] sm:w-full sm:relative sm:h-150 mx-auto mt-5 mb-3 sm:flex overflow-hidden ">
    <div class="w-full h-60 sm:w-[65%] lg:w-[70%] sm:absolute sm:h-full sm:-left-40 lg:-left-52">
      <img
        src="../../../assets/images/illustration-laptop-mobile.svg"
        alt="illustration laptop"
        class="object-cover h-full sm:hidden"
      />
      <img
        src="../../../assets/images/illustration-laptop-desktop.svg"
        alt="illustration laptop"
        class="object-contain h-full hidden sm:block"
      />
    </div>
    <div class="text-center sm:w-1/2 sm:h-1/2 sm:text-left md:flex md:flex-col justify-center items-center sm:absolute sm:right-2 lg:right-5 top-45 ">
      <div class="mt-8 sm:mt-0">
        <h3 class="text-[26px] sm:text-[18px] lg:text-[22px] text-[hsl(208,49%,24%)] mb-4 font-semibold">Free, open, simple</h3>
        <p class="text-[hsl(207,13%,34%)] text-[16px] sm:text-[14px] lg:text-[16px] font-light">
          Blogr is a free and open source application backed by a large community of helpful
          developers. It supports features such as code syntax highlighting, RSS feeds, social media
          integration, third-party commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and relatively easy to learn.
        </p>
      </div>

      <div class="mt-8">
        <h3 class="text-[26px] sm:text-[18px] lg:text-[22px] text-[hsl(208,49%,24%)] mb-4 font-semibold">Powerful tooling</h3>
        <p class="text-[hsl(207,13%,34%)] text-[16px] sm:text-[14px] lg:text-[16px]">
          Batteries included. We built a simple and straightforward CLI tool that makes
          customization and deployment a breeze, but capable of producing even the most complicated
          sites.
        </p>
      </div>
    </div>
  </div>
</template>
