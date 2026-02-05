<template>
  <section class="relative w-full overflow-hidden">
    <div class="w-small my-15 sm:w-large text-center text-16 mx-auto">
      <h2 class="text-[26px] sm:text-[30px] text-[hsl(208,49%,24%)] font-semibold">
        Designed for the future
      </h2>
      
      <div class="flex flex-col-reverse sm:flex-row-reverse sm:w-full py-15">
        <div class="sm:w-[62%] sm:flex sm:flex-col items-center justify-center mr-auto">
          <div class="mt-8 sm:text-left sm:mt-0">
            <h3 class="text-[26px] sm:text-[18px] text-[hsl(208,49%,24%)] mb-4 font-semibold">
              Introducing an extensible editor
            </h3>
            <p class="text-[hsl(207,13%,34%)] text-16 sm:text-[14px] font-light">
              Blogr features an exceedingly intuitive interface which let you focus on one thing:
              creating content. The editor supports management of multiple blogs and allows easy
              manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins
              and themes provide easy ways to add functionality or change the looks of a blog
            </p>
          </div>

          <div class="mt-8 sm:text-left">
            <h3 class="text-[26px] sm:text-[18px] text-[hsl(208,49%,24%)] mb-4 font-semibold">
              Robust content management
            </h3>
            <p class="text-[hsl(207,13%,34%)] text-16 sm:text-[14px]">
              Flexible content management enables users to easily move through posts. Increase the
              usability of your blog by adding customized categories, sections, format, or flow. With
              this functionality, you're in full control.
            </p>
          </div>
        </div>

        <div class="w-full sm:w-[70vw] lg:w-full h-full sm:h-[70%] flex justify-center sm:absolute top-17 -right-52 lg:-right-110">
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
