<template>
  <section class="relative w-full overflow-hidden">
    <div class="w-small mb-15 sm:my-15 sm:w-large text-center text-20 mx-auto flex flex-col-reverse sm:flex-row-reverse py-10">
      <div class="text-center sm:text-left flex flex-col w-full sm:w-[57%] lg:w-[62%] ml-auto items-center justify-center ">
        <div class="mt-8 sm:text-left sm:mt-0">
          <h3 class="text-[26px] sm:text-[18px] text-[hsl(208,49%,24%)] mb-4 font-semibold">
            Free, open, simple
          </h3>
          <p class="text-[hsl(207,13%,34%)] text-16 sm:text-[14px] font-light">
            Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and relatively easy to learn.
          </p>
        </div>
        <div class="mt-8 sm:text-left">
          <h3 class="text-[26px] sm:text-[18px] text-[hsl(208,49%,24%)] mb-4 font-semibold">
            Powerful tooling
          </h3>
          <p class="text-[hsl(207,13%,34%)] text-16 sm:text-[14px]">
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
          </p>
        </div>
      </div>

      <div class="w-full sm:absolute sm:w-[80vw] lg:w-full sm:h-[75vh] -left-52 top-0 lg:-left-110 flex justify-center">
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
