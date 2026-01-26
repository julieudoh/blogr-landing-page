<template>
  <div class="w-full py-3 sm:py-0 sm:mr-5 text-center sm:relative sm:inline-block">
    <a
      @click="toggleDropDown"
      class="flex w-full items-center justify-center text-[hsl(208,49%,24%)] sm:text-[hsl(0,100%,100%)] cursor-pointer"
    >
      {{ title }}
      <img
        :src="darkArrow"
        alt="dropdown icon"
        class="ml-2 md:hidden"
        :class="{ 'rotate-180': isOpen }"
      />
      <img
        :src="lightArrow"
        alt="dropdown icon"
        class="hidden sm:block ml-2"
        :class="{ 'rotate-180': isOpen }"
      />
    </a>
    <div
      class="w-full rounded-sm bg-gray-200 sm:bg-[hsl(0,100%,100%)] p-4 sm:absolute sm:left-0 sm:w-30 sm:border-gray-500  cursor-pointer sm:text-[14px] lg:text-[16px]"
      v-if="isOpen"
      @click="closeDropDown"
    >
    <!-- sm:w-[150px] -->
      <router-link
        v-for="item in listItems"
        :key="item.name"
        :to="item.href"
        class="block py-1 text-[hsl(207,13%,34%)] text-[16px]"
        >{{ item.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
import dark from '../../assets/images/icon-arrow-dark.svg'
import light from '../../assets/images/icon-arrow-light.svg'

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
