<template>
  <nav
    class="w-full shadow-sm bg-[hsl(0,100%,100%)] shadow-gray-100 rounded-m rounded-md p-4 sm:p-0 sm:bg-transparent lg:w-large sm:shadow-none sm:flex sm:items-center sm:top-0 sm:ml-7"
  >
    <ul class="mb-2 sm:flex sm:justify-around sm:mb-0 sm:text-[14px] md:text-16 lg:text-[18px] 2xl:text-3xl gap-3.5 2xl:gap-5">
      <DropDown title="Product" :listItems="product" @emit-data="closeNav" />
      <DropDown title="Company" :listItems="company" @emit-data="closeNav" />
      <DropDown title="Connect" :listItems="connect" @emit-data="closeNav" />
    </ul>
    <div
      class="flex flex-col justify-center sm:flex-row gap-x-0.5  items-center pt-4 border-t border-gray-300 sm:border-none sm:pt-0 sm:text-[14px] ml-auto"
    >
      <router-link to="/login"><base-button
        class="flex items-center justify-center border-0 text-[hsl(208,49%,24%)] mb-2 sm:mb-0 w-full sm:w-22 md:w-26 lg:w-30 2xl:w-40 py-4 sm:text-[hsl(0,100%,100%)] text-16 sm:text-[12px] md:text-16 lg:text-[18px] 2xl:text-[20px]"
        >Login</base-button
      ></router-link>
      <router-link to="/signup"><base-button
        class=" w-full py-4 flex items-center justify-center  sm:w-22 md:w-26 lg:w-30 2xl:w-40 text-16 sm:text-[12px] md:text-16 lg:text-[18px]  2xl:text-2xl sm:bg-none bg-linear-to-l from-[hsl(353,100%,62%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] sm:bg-[hsl(0,100%,100%)] sm:border-none sm:text-[hsl(356,100%,66%)]"
        >Sign Up</base-button
      ></router-link>
    </div>
  </nav>
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
