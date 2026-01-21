<template>
  <div class="w-full mt-7 mb-15">
    <section-one></section-one>
    <section-two></section-two>
    <section-three></section-three>
  </div>
</template>

<script>
import SectionOne from '../body/home/SectionOne.vue'
import SectionTwo from '../body/home/SectionTwo.vue'
import SectionThree from '../body/home/SectionThree.vue'

export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
  },
}
</script>
