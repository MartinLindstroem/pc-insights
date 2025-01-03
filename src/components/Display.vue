<script setup lang="ts">
import { ref } from "vue";

interface Display {
  builtin: boolean;
  connection: string;
  currentRefreshRate: number;
  currentResX: number;
  currentResY: number;
  deviceName: string;
  main: boolean;
  model: string;
  pixelDepth: number;
  positionX: number;
  positionY: number;
  resolutionX: number;
  resolutionY: number;
  sizeX: number;
  sizeY: number;
  vendor: string;
}

interface Props {
  displays: Display[];
}

const props = defineProps<Props>();
const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="infoBox">
    <h2 :class="{ collapsed: !isExpanded }" @click="toggleExpand">Display</h2>
    <div v-if="isExpanded">
      <div v-for="(display, index) in props.displays" :key="index" class="display">
        <h3>Display {{ index + 1 }}</h3>
        <p><strong>Model:</strong> {{ display.model || "N/A" }}</p>
        <p><strong>Vendor:</strong> {{ display.vendor || "N/A" }}</p>
        <p><strong>Resolution:</strong> {{ display.resolutionX }} x {{ display.resolutionY }}</p>
        <p><strong>Current refresh rate:</strong> {{ display.currentRefreshRate }} Hz</p>
      </div>
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

h2::after {
  content: "▼";
  margin-left: 0.5rem;
  font-size: 0.8rem;
}

h2.collapsed::after {
  content: "►";
}
</style>
