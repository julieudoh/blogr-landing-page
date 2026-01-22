<template>
  <div
    class="absolute w-full top-20 shadow-sm bg-[hsl(0,100%,100%)] shadow-gray-100 rounded-m z-23 rounded-md p-4 sm:bg-transparent sm:w-[87%] lg:w-[80%] sm:shadow-none sm:right-0 sm:flex sm:items-center sm:justify-between sm:p-0 sm:relative sm:top-0 sm:p-0 sm:ml-5"
  >
    <ul class="mb-2 sm:flex sm:justify-around sm:mb-0 sm:text-[14px] lg:text-[16px]">
      <DropDown title="Product" :listItems="product" @emit-data="closeNav" />
      <DropDown title="Company" :listItems="company" @emit-data="closeNav" />
      <DropDown title="Connect" :listItems="connect" @emit-data="closeNav" />
    </ul>
    <div
      class="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-gray-300 sm:border-none sm:pt-0 sm:text-[14px] lg:text-[16px]"
    >
      <base-button
        class="border-0 text-[hsl(208,49%,24%)] mb-2 sm:mb-0 px-10 sm:text-[hsl(0,100%,100%)]"
        >Login</base-button
      >
      <base-button
        class="bg-linear-to-tl from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-[hsl(353,100%,62%)] px-10 sm:px-6 sm:bg-none sm:bg-[hsl(0,100%,100%)] sm:border-none sm:text-[hsl(356,100%,66%)]"
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
