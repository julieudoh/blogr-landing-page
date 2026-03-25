<template>
  <div class="w-full font-overpass overflow-hidden">
    <future-section></future-section>
    <infrastructure-section></infrastructure-section>
    <tooling-section></tooling-section>
  </div>
</template>

<script>
import FutureSection from '../components/body/home/FutureSection.vue';
import ToolingSection from '../components/body/home/ToolingSection.vue';
import InfrastructureSection from '../components/body/home/InfrastructureSection.vue';

export default {
  components: {
    FutureSection,
    InfrastructureSection,
    ToolingSection,
  },
}
</script>


