<template>
  <div class="w-full py-3 md:py-0 text-center md:relative">
    <a
      @click="$emit('toggle')"
      class="flex w-full items-center justify-center text-[hsl(208,49%,24%)] active:text-gray-400 md:text-gray-200 cursor-pointer"
    >

      {{ title }}
      <img
        :src="darkArrow"
        alt="dropdown icon"
        class="ml-1 md:hidden"
        :class="{ 'rotate-180': isOpen }"
      />
      <img
        :src="lightArrow"
        alt="dropdown icon"
        class="hidden md:block ml-1 xl:ml-3 2xl:w-4 2xl:h-4"
        :class="{ 'rotate-180': isOpen }"
      />
    </a>

    <div
      class="w-full rounded-sm bg-gray-200 md:bg-[hsl(0,100%,100%)] p-4 md:absolute md:left-0 md:w-30 xl:w-50 2xl:w-70 md:border-gray-500  cursor-pointer text-sm  lg:text-lg xl:text-xl 2xl:text-4xl"
      v-if="isOpen"
      @click="$emit('close-all')"
    >

      <router-link
        v-for="item in listItems"
        :key="item.name"
        :to="item.href"
        class="block py-1 xl:py-2 2xl:py-5 text-gray-400 text-sm  lg:text-lg xl:text-xl 2xl:text-4xl md:hover:text-gray-700"
        >{{ item.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
import dark from '@/assets/images/icon-arrow-dark.svg'
import light from '@/assets/images/icon-arrow-light.svg'

export default {
  props: {
    title: String,
    listItems: Array,
    isOpen: Boolean,
  },
  data() {
    return {
      darkArrow: dark,
      lightArrow: light,
    }
  },
  emits: ['toggle', 'close-all'],
  // methods: {
  //   // toggleDropDown() {
  //   //   this.isOpen = !this.isOpen
  //   // },
  //   // closeDropDown() {
  //   //   this.isOpen = false

  //   //   this.$emit('emit-data', this.isOpen)
  //   // },
  // },
}
</script>
