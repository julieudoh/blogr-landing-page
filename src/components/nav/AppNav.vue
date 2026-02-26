<template>
  <nav
    class="relative z-10 w-full shadow-sm bg-[hsl(0,100%,100%)] shadow-gray-100 rounded-m rounded-md p-4 md:p-0 lg:w-large md:shadow-none md:h-full md:bg-transparent md:flex md:items-center md:ml-8 lg:ml-15 xl:ml-20 2xl:ml-30 font-semibold"
  >
    <ul class="mb-2 md:flex gap-5 lg:gap-8 2xl:gap-10 md:justify-around md:mb-0 text-sm xl:text-16 2xl:text-2xl md:text-gray-50">
      <DropDown  title="Product" :listItems="product" :is-open="activeDropdown === 'product'" @toggle="handleToggle('product')" @close-all="activeDropdown = null" class="hover:underline hover:text-[hsl(0,100%,100%)]" />
      <DropDown  title="Company" :listItems="company" :is-open="activeDropdown === 'company'" @toggle="handleToggle('company')" @close-all="activeDropdown = null" class="hover:underline hover:text-[hsl(0,100%,100%)]" />
      <DropDown  title="Connect" :listItems="connect" :is-open="activeDropdown === 'connect'" @toggle="handleToggle('connect')" @close-all="activeDropdown = null" class="hover:underline hover:text-[hsl(0,100%,100%)]" />
    </ul>
    <div
      class="max-md:w-full flex flex-col justify-center md:flex-row gap-4 lg:gap-6 xl:gap-10 items-center pt-4 border-t border-gray-300 md:border-none md:pt-0 ml-auto"
    >
      <router-link to="/login"><button
        class="flex items-center md:justify-end border-0 text-[hsl(208,49%,24%)] mb-2 md:mb-0 max-w-full md:w-0 text-sm  xl:text-16 2xl:text-2xl md:text-gray-50 cursor-pointer"
        >Login</button
      ></router-link>
      <router-link to="/signup">
        <base-button
        class=" md:bg-none text-[hsl(0,0%,100%)] bg-linear-to-l from-[hsl(353,81%,61%)] to-[hsl(13,100%,72%)] border-b-[hsl(353,100%,62%)] md:bg-[hsl(0,100%,100%)] md:border-0 md:text-[hsl(356,100%,66%)] md:hover:bg-[hsl(355,100%,74%)] md:hover:text-[hsl(0,100%,100%)]" 
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
      activeDropdown: null,
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
    // closeNav(data) {
    //   this.$emit('close-nav', data)
    // },
    handleToggle(id){
      this.activeDropdown = (this.activeDropdown === id) ? null : id;
    }
  },
}
</script>
