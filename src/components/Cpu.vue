<script setup lang="ts">
import { onBeforeMount, ref, onMounted } from "vue";
import type { CpuType } from "../types.d.ts";
type Props = {
  cpu: CpuType;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="infoBox">
    <h2>CPU</h2>
    <div v-if="props">
      <p>Manufacturer: {{ props.cpu.manufacturer }}</p>
      <p>Brand: {{ props.cpu.brand }}</p>
      <p>Clock speed: {{ props.cpu.speed }} Ghz</p>
      <p>Cores: {{ props.cpu.physicalCores }}</p>
      <p>Threads: {{ props.cpu.cores }}</p>
      <p>Socket: {{ props.cpu.socket }}</p>
    </div>
    <div v-else>
      <p>Loading CPU information...</p>
    </div>
  </div>
</template>
