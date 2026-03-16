<template>
  <Transition name="slide" appear>
    <div class="bg-[hsl(240,10%,16%)] rounded-tr-[90px] font-ubuntu py-10  2xl:py-25">
      <div
        class="w-sm sm:w-lg mx-auto text-[hsl(0,100%,100%)] text-[13px] flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start text-center md:text-left"
      >
        <div class="w-20 h-20 2xl:w-25">
          <div class=" h-1/2 w-full ">
            <img src="@/assets/images/logo.svg" alt="company logo" class=" h-full object-contain" />
          </div>
        </div>
        <div class="w-lg h-full flex flex-col md:flex-row max-md:items-center md:justify-around">
          <section>
            <h4 class="font-semibold mt-10 md:mt-0 text-16 md:text-[13px] 2xl:text-xl mb-5">Product</h4>
            <ul class="list-none text-gray-200 font-light text-16 md:text-[13px] 2xl:text-xl">

              <li class="mb-2 hover:underline lg:mb-4 xl:mb-7 cursor-pointer"><a href="">Overview</a></li>
              <li class="mb-2 hover:underline lg:mb-4 xl:mb-7 cursor-pointer"><a href="">Pricing</a></li>
              <li class="mb-2 hover:underline lg:mb-4 xl:mb-7 cursor-pointer"><a href="">Marketplace</a></li>
              <li class="mb-2 hover:underline lg:mb-4 xl:mb-7 cursor-pointer"><a href="">Features</a></li>
              <li class="mb-2 hover:underline lg:mb-4 xl:mb-7 cursor-pointer"><a href="">Integration</a></li>
            </ul>
          </section>
          <section>
            <h4 class="font-semibold mt-10 md:mt-0 text-16 md:text-[13px] 2xl:text-xl mb-5">Company</h4>
            <ul class="list-none text-gray-200 font-light text-16 md:text-[13px] 2xl:text-xl">
              <li class="mb-2 hover:underline lg:mb-4 xl:mb-7 cursor-pointer"><a href="">About</a></li>
              <li class="mb-2 hover:underline lg:mb-4 xl:mb-7 cursor-pointer"><a href="">Team</a></li>
              <li class="mb-2 hover:underline lg:mb-4 xl:mb-7 cursor-pointer"><a href="">Blog</a></li>
              <li class="mb-2 hover:underline lg:mb-4 xl:mb-7 cursor-pointer"><a href="">Carrers</a></li>
            </ul>
          </section>
          <section>
            <h4 class="mt-10 md:mt-0 text-16 md:text-[13px] 2xl:text-xl font-semibold mb-5">Connect</h4>
            <ul class="list-none text-gray-200 font-light text-16 md:text-[13px] 2xl:text-xl">
              <li class="mb-2 hover:underline lg:mb-4 xl:mb-7 cursor-pointer"><a href="">Contact</a></li>
              <li class="mb-2 hover:underline lg:mb-4 xl:mb-7 cursor-pointer"><a href="">Newsletter</a></li>
              <li class="mb-2 hover:underline lg:mb-4 xl:mb-7 cursor-pointer"><a href="">LinkedIn</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </Transition>
</template>
