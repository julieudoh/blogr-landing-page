<template>
  <nav
    class="relative z-10 w-full shadow-sm bg-[hsl(0,100%,100%)] shadow-gray-100 rounded-m rounded-md p-4 md:p-0 md:bg-transparent lg:w-large md:shadow-none md:flex md:items-center md:top-0 md:ml-7"
  >
    <ul class="mb-2 md:flex md:justify-around md:mb-0 md:text-16 lg:text-[20px] xl:text-[22px] 2xl:text-5xl gap-8 2xl:gap-10">
      <DropDown title="Product" :listItems="product" @emit-data="closeNav" />
      <DropDown title="Company" :listItems="company" @emit-data="closeNav" />
      <DropDown title="Connect" :listItems="connect" @emit-data="closeNav" />
    </ul>
    <div
      class="flex flex-col justify-center md:flex-row gap-x-0.5 lg:gap-x-4  items-center pt-4 border-t border-gray-300 md:border-none md:pt-0 md:text-[14px] ml-auto"
    >
      <router-link to="/login"><base-button
        class="flex items-center justify-center border-0 text-[hsl(208,49%,24%)] mb-2 md:mb-0 w-full md:w-[13vw] py-4 md:text-[hsl(0,100%,100%)] text-16 md:text-16 lg:text-[20px] xl:text-[22px] 2xl:text-5xl"
        >Login</base-button
      ></router-link>
      <router-link to="/signup"><base-button
        class=" w-full py-4 xl:py-5 2xl:py-8 flex items-center justify-center md:w-[13vw] text-16 md:text-16 lg:text-[20px] xl:text-[22px] 2xl:text-5xl md:bg-none bg-linear-to-l from-[hsl(353,81%,61%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] md:bg-[hsl(0,100%,100%)] md:border-none md:text-[hsl(356,100%,66%)]"
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
