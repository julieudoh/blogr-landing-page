<template>
  <section class="relative h-full w-full overflow-hidden">
    <div class="w-small h-full md:my-15 text-center text-20 mx-auto flex flex-col-reverse md:flex-row-reverse mb-15 xl:my-30 2xl:my-100 md:w-large">
      <div class="text-center md:text-left flex flex-col w-full md:w-[60%] 2xl:w-[53%] ml-auto items-center justify-center ">
        <div class="mt-8 xl:mt-12 sm:text-left md:mt-0">
          <h3 class="text-2xl sm:text-3xl md:text-lg lg:text-2xl xl:text-3xl 2xl:text-6xl text-[hsl(208,49%,24%)] mb-4 font-semibold">
            Free, open, simple
          </h3>
          <p class="text-[hsl(207,13%,34%)] text-16 sm:text-lg md:text-sm lg:text-xl xl:text-2xl 2xl:text-5xl font-light">
            Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and relatively easy to learn.
          </p>
        </div>
        <div class="mt-8 xl:mt-22 sm:text-left">
          <h3 class="text-2xl sm:text-3xl md:text-lg lg:text-2xl xl:text-3xl 2xl:text-6xl text-[hsl(208,49%,24%)] mb-4 font-semibold">
            Powerful tooling
          </h3>
          <p class="text-[hsl(207,13%,34%)] text-16 sm:text-lg md:text-sm  lg:text-xl xl:text-2xl 2xl:text-5xl font-light">
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
          </p>
        </div>
      </div>

      <div class="w-full sm:w-[80vw] md:w-[70vw] lg:w-screen 2xl:w-[90vw] h-full lg:h-large xl:h-small 2xl:h-[70vh] -left-52 top-0 2xl:top-30 lg:-left-95 xl:-left-150 2xl:-left-190 md:absolute flex justify-center items-center">
          <img
        src="@/assets/images/illustration-laptop-mobile.svg"
        alt="illustration laptop"
        class="object-cover h-full sm:hidden"
        />
        <img
          src="@/assets/images/illustration-laptop-desktop.svg"
          alt="illustration laptop"
          class="object-contain h-full hidden sm:block"
        />
      </div>
    </div>
  </section>
</template>
