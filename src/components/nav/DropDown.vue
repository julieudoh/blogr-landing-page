<template>
  <div class="w-full py-3 md:py-0 text-center ">
    <a
      @click="toggleDropDown"
      class="flex w-full items-center justify-center text-[hsl(208,49%,24%)] md:text-[hsl(0,100%,100%)] cursor-pointer"
    >
      {{ title }}
      <img
        :src="darkArrow"
        alt="dropdown icon"
        class="ml-2 w-2 h-2 md:hidden"
        :class="{ 'rotate-180': isOpen }"
      />
      <img
        :src="lightArrow"
        alt="dropdown icon"
        class="hidden w-2 h-2 lg:w-3 lg:h-3 2xl:w-5 2xl:h-5 md:block ml-2 xl:ml-4"
        :class="{ 'rotate-180': isOpen }"
      />
    </a>

    <div
      class="w-full rounded-sm bg-gray-200 sm:bg-[hsl(0,100%,100%)] p-4 md:absolute md:left-0 md:w-30 md:border-gray-500  cursor-pointer md:text-[14px] lg:text-16"
      v-if="isOpen"
      @click="closeDropDown"
    >
      <router-link
        v-for="item in listItems"
        :key="item.name"
        :to="item.href"
        class="block py-1 text-[hsl(207,13%,34%)] text-16"
        >{{ item.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
import dark from '@/assets/images/icon-arrow-dark.svg'
import light from '@/assets/images/icon-arrow-light.svg'

export default {
  props: ['title', 'listItems'],
  data() {
    return {
      isOpen: false,
      darkArrow: dark,
      lightArrow: light,
    }
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen
    },
    closeDropDown() {
      this.isOpen = false

      this.$emit('emit-data', this.isOpen)
    },
  },
}
</script>
