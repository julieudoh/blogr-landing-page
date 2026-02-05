<template>
  <section class="relative w-full overflow-hidden">
    <div class="w-small my-15 sm:w-large text-center text-20 mx-auto flex flex-col-reverse sm:flex-row-reverse">
      <div class="text-center sm:text-left flex flex-col w-full sm:w-[62%] ml-auto items-center justify-center ">
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

      <div class="w-full sm:absolute sm:w-[70vw] lg:w-full sm:h-[70%] -left-52 top-17 lg:-left-110 flex justify-center">
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
