<template>
  <div class="w-full mt-7 mb-15">
    <section-one></section-one>
    <section-two></section-two>
    <section-three></section-three>
  </div>
</template>

<script>
import SectionOne from '../body/SectionOne.vue'
import SectionTwo from '../body/SectionTwo.vue'
import SectionThree from '../body/SectionThree.vue'

export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
  },
}
</script>
