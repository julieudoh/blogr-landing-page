<template>
  <div class="w-full py-3 text-center">
    <a @click="toggleDropDown" class="flex w-full items-center justify-center">
      {{ title }}
      <img :src="darkArrow" alt="dropdown icon" class="ml-2" :class="{ 'rotate-180': isOpen }" />
    </a>
    <div class="w-full rounded-sm bg-gray-200 p-4" v-if="isOpen" @click="closeDropDown">
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
      console.log(this.isOpen)
    },
    closeDropDown() {
      this.isOpen = false

      this.$emit('emit-data', this.isOpen)
    },
  },
}
</script>
