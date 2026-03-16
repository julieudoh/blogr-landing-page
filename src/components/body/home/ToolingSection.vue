<template>
  <Transition name="slide-up" appear>
    <section class="md:relative w-full h-full mb-15 md:mt-15 lg:mt-20 md:mb-30">
      <div class="w-sm h-full  md:w-lg text-center text-16 mx-auto flex flex-col-reverse md:flex-row-reverse py-15 2xl:py-35 ">
        <div class="text-center md:text-left flex flex-col w-full h-full md:w-[53%] xl:w-[40%] ml-auto items-center justify-center ">
          <div class="mt-8 xl:mt-12 sm:text-left md:mt-0">
            <h3 class="text-2xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-[40px] text-[hsl(208,49%,24%)] mb-4 font-semibold">
              Free, open, simple
            </h3>
            <p class="text-[hsl(207,13%,34%)] text-16 md:text-sm xl:text-xl 2xl:text-2xl font-light">
              Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and relatively easy to learn.
            </p>
          </div>
          <div class="mt-8 xl:mt-22 sm:text-left">
            <h3 class="text-2xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-[40px] text-[hsl(208,49%,24%)] mb-4 font-semibold">
              Powerful tooling
            </h3>
            <p class="text-[hsl(207,13%,34%)] text-16 md:text-sm xl:text-xl 2xl:text-2xl font-light">
              Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
            </p>
          </div>
        </div>

        <div class="w-full sm:w-[80vw] md:w-[70vw] h-[50vh] md:h-screen xl:h-[70vh] flex justify-center items-center md:absolute top-0 lg:-top-10 xl:top-15 md:-left-55 xl:-left-75 2xl:-left-125">
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
  </Transition>
</template>
