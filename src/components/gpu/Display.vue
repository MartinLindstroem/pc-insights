<script setup lang="ts">
import { onBeforeMount, ref, onMounted } from "vue";

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
</script>

<template>
  <div class="infoBox">
    <h2>Display</h2>
    <div v-for="(display, index) in props.displays" :key="index" class="display">
      <p><strong>Model:</strong> {{ display.model }}</p>
      <p><strong>Vendor:</strong> {{ display.vendor }}</p>
      <p><strong>Resolution:</strong> {{ display.resolutionX }} x {{ display.resolutionY }}</p>
    </div>
  </div>
</template>
