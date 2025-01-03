<script setup lang="ts">
import { onBeforeMount, ref, onMounted } from "vue";
import type { CpuType } from "../types.d.ts";
type Props = {
  cpu: CpuType;
};

const props = defineProps<Props>();
const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="infoBox">
    <h2 @click="toggleExpand">CPU</h2>
    <div v-if="isExpanded">
      <p>Manufacturer: {{ props.cpu.manufacturer }}</p>
      <p>Brand: {{ props.cpu.brand }}</p>
      <p>Clock speed: {{ props.cpu.speed }} Ghz</p>
      <p>Cores: {{ props.cpu.physicalCores }}</p>
      <p>Threads: {{ props.cpu.cores }}</p>
      <p>Socket: {{ props.cpu.socket }}</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  cursor: pointer;
  margin: 0;
}

.infoBox {
  transition: all 0.3s ease;
}
</style>
