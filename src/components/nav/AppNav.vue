<template>
  <div
    class="absolute w-full top-20 shadow-sm bg-[hsl(0,100%,100%)] shadow-gray-100 rounded-m z-23 rounded-md p-4 sm:bg-transparent sm:w-[70%] sm:shadow-none sm:right-0"
  >
    <ul class="mb-2">
      <DropDown title="Product" :listItems="product" @emit-data="closeNav" />
      <DropDown title="Company" :listItems="company" @emit-data="closeNav" />
      <DropDown title="Connect" :listItems="connect" @emit-data="closeNav" />
    </ul>
    <div class="flex flex-col justify-between items-center pt-4 border-t border-gray-300">
      <base-button class="border-0 text-[hsl(208,49%,24%)] mb-2 px-10">Login</base-button>
      <base-button
        class="bg-linear-to-tl from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] px-10"
        >Sign Up</base-button
      >
    </div>
  </div>
</template>

<script>
import DropDown from './DropDown.vue'
export default {
  components: {
    DropDown,
  },
  data() {
    return {
      product: [
        {
          name: 'Overview',
          href: '/home',
        },
        {
          name: 'Pricing',
          href: '/pricing',
        },
        {
          name: 'Marketplace',
          href: '/marketplace',
        },
        {
          name: 'Features',
          href: '/features',
        },
        {
          name: 'Integrations',
          href: '/integrations',
        },
      ],
      company: [
        {
          name: 'About',
          href: '/about',
        },
        {
          name: 'Team',
          href: '#',
        },
        {
          name: 'Blog',
          href: '#',
        },
        {
          name: 'Careers',
          href: '#',
        },
      ],
      connect: [
        {
          name: 'Contact',
          href: '#',
        },
        {
          name: 'Newsletter',
          href: '#',
        },
        {
          name: 'LinkedIn',
          href: '#',
        },
      ],
    }
  },
  methods: {
    closeNav(data) {
      this.$emit('close-nav', data)
    },
  },
}
</script>
