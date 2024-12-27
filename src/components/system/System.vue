<script setup lang="ts">
import { onBeforeMount, ref, onMounted, onBeforeUnmount, computed } from "vue";
interface Props {
  manufacturer: string;
  model: string;
  os: string;
  uptime: number;
}
const props = defineProps<Props>();

const time = ref(props.uptime);

let intervalId: number | null = null;

onMounted(() => {
  intervalId = setInterval(() => {
    time.value++;
  }, 1000);
});

onBeforeUnmount(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
});

const formattedTime = computed(() => {
  const hours = Math.floor(time.value / 3600);
  const minutes = Math.floor((time.value % 3600) / 60);
  const seconds = (time.value % 60).toFixed(0);

  return `${String(hours)}:${String(minutes)}:${String(seconds)}`;
});
</script>

<template>
  <div class="infoBox">
    <h2>System</h2>
    <div v-if="props">
      <p>Manufacturer: {{ props.manufacturer }}</p>
      <p>Model: {{ props.model }}</p>
      <p>Operating System: {{ props.os }}</p>
      <p>System uptime: {{ formattedTime }}</p>
    </div>
    <div v-else>
      <p>Loading system information...</p>
    </div>
  </div>
</template>
