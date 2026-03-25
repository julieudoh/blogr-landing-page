<template>
  <Transition name="slide-up" appear>
    <section class="relative w-full h-full my-15 2xl:my-35 ">
      <div class="w-sm h-full md:w-lg text-center text-16 mx-auto">
        <h2 class=" text-xl sm:text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl text-[hsl(208,49%,24%)] font-semibold ">
          Designed for the future
        </h2>
        
        <div class="flex items-center h-full justify-center flex-col-reverse md:flex-row-reverse md:w-full py-15 2xl:py-35">
          <div class="w-full md:w-[53%] 2xl:w-[50%] md:flex md:flex-col items-center justify-center mr-auto">
            <div class="mt-8 xl:mt-12 md:text-left">
              <h3 class="text-2xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-[40px] text-[hsl(208,49%,24%)] mb-4 font-semibold">
                Introducing an extensible editor
              </h3>
              <p class="text-[hsl(207,13%,34%)] text-16 md:text-sm xl:text-xl 2xl:text-2xl  font-light">
                Blogr features an exceedingly intuitive interface which let you focus on one thing:
                creating content. The editor supports management of multiple blogs and allows easy
                manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins
                and themes provide easy ways to add functionality or change the looks of a blog
              </p>
            </div>

            <div class="mt-8 xl:mt-22 md:text-left">
              <h3 class="text-2xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-[40px] text-[hsl(208,49%,24%)] mb-4 font-semibold">
                Robust content management
              </h3>
              <p class="text-[hsl(207,13%,34%)] text-16 md:text-sm xl:text-xl 2xl:text-2xl font-light">
                Flexible content management enables users to easily move through posts. Increase the
                usability of your blog by adding customized categories, sections, format, or flow. With
                this functionality, you're in full control.
              </p>
            </div>
          </div>

          <div class="w-full sm:w-[80vw] md:w-[70vw] h-[50vh] md:h-screen lg:h-screen xl:h-[80vh] 2xl:h-[70vh] flex justify-center items-center md:absolute top-0 xl:top-15 2xl:-top-20 md:-right-52 lg:-right-65 xl:-right-90 2xl:-right-130">
            <img
              src="@/assets/images/illustration-editor-mobile.svg"
              alt="illustration editor"
              class="object-cover h-full sm:hidden"
            />
            <img
              src="@/assets/images/illustration-editor-desktop.svg"
              alt="illustration editor"
              class="object-contain h-full hidden sm:block"
            />
          </div>

        </div>
      </div>
    </section>
  </Transition>
</template>

<style>

.slide-up-enter-active{
  animation: slide-up 0.5s ease-out;
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

</style>
