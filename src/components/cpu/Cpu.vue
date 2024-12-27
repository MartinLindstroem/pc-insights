<script setup lang="ts">
import { onBeforeMount, ref, onMounted } from "vue";
interface Props {
  manufacturer: string;
  brand: string;
  speed: number;
  cores: number;
  physicalCores: number;
  socket: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="infoBox">
    <h2>CPU</h2>
    <div v-if="props">
      <p>Manufacturer: {{ props.manufacturer }}</p>
      <p>Brand: {{ props.brand }}</p>
      <p>Clock speed: {{ props.speed }} Ghz</p>
      <p>Cores: {{ props.physicalCores }}</p>
      <p>Threads: {{ props.cores }}</p>
      <p>Socket: {{ props.socket }}</p>
    </div>
    <div v-else>
      <p>Loading CPU information...</p>
    </div>
  </div>
</template>
