<template>
  <section class="relative w-full h-full overflow-hidden ">
    <div class="w-small h-full my-15 xl:my-24 2xl:my-45 md:w-large text-center text-16 mx-auto">
      <h2 class=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-8xl text-[hsl(208,49%,24%)] font-semibold ">
        Designed for the future
      </h2>
      
      <div class="flex items-center justify-center flex-col-reverse md:flex-row-reverse md:w-full py-15 2xl:py-22">
        <div class="w-full md:w-[60%] 2xl:w-[53%] md:flex md:flex-col items-center justify-center mr-auto">
          <div class="mt-8 xl:mt-12 md:text-left md:mt-0">
            <h3 class="text-2xl sm:text-3xl md:text-lg lg:text-2xl xl:text-3xl 2xl:text-6xl text-[hsl(208,49%,24%)] mb-4 font-semibold">
              Introducing an extensible editor
            </h3>
            <p class="text-[hsl(207,13%,34%)] text-16 sm:text-lg md:text-sm  lg:text-xl xl:text-2xl 2xl:text-5xl font-light">
              Blogr features an exceedingly intuitive interface which let you focus on one thing:
              creating content. The editor supports management of multiple blogs and allows easy
              manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins
              and themes provide easy ways to add functionality or change the looks of a blog
            </p>
          </div>

          <div class="mt-8 xl:mt-22 md:text-left">
            <h3 class="text-2xl sm:text-3xl md:text-lg lg:text-2xl xl:text-3xl 2xl:text-6xl text-[hsl(208,49%,24%)] mb-4 font-semibold">
              Robust content management
            </h3>
            <p class="text-[hsl(207,13%,34%)] text-16 sm:text-lg md:text-sm lg:text-xl xl:text-2xl 2xl:text-5xl font-light">
              Flexible content management enables users to easily move through posts. Increase the
              usability of your blog by adding customized categories, sections, format, or flow. With
              this functionality, you're in full control.
            </p>
          </div>
        </div>

        <div class="w-full sm:w-[80vw] md:w-[70vw] lg:w-[90vw] xl:w-screen 2xl:w-[90vw] h-full lg:h-large xl:h-small 2xl:h-[70vh] flex justify-center items-center md:absolute top-17 2xl:top-30 -right-52 lg:-right-90 xl:-right-150 2xl:-right-190">
          <img
            src="../../../assets/images/illustration-editor-mobile.svg"
            alt="illustration editor"
            class="object-cover h-full sm:hidden"
          />
          <img
            src="../../../assets/images/illustration-editor-desktop.svg"
            alt="illustration editor"
            class="object-contain h-full hidden sm:block"
          />
        </div>

      </div>
    </div>
  </section>
</template>
