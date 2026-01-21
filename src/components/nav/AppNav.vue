<template>
  <div
    class="absolute w-full top-20 shadow-sm bg-[hsl(0,100%,100%)] shadow-gray-100 rounded-m z-23 rounded-md p-4"
  >
    <ul class="mb-2">
      <DropDown title="Product" :listItems="product" />
      <DropDown title="Company" :listItems="company" />
      <DropDown title="Connect" :listItems="connect" />
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
          href: '#',
        },
        {
          name: 'Pricing',
          href: '#',
        },
        {
          name: 'Marketplace',
          href: '#',
        },
        {
          name: 'Features',
          href: '#',
        },
        {
          name: 'Integrations',
          href: '#',
        },
      ],
      company: [
        {
          name: 'About',
          href: '#',
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
}
</script>
