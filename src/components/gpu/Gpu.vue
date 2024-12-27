<script setup lang="ts">
import { onBeforeMount, ref, onMounted } from "vue";

interface GraphicsController {
  bus: string;
  busAddress: string;
  model: string;
  pciID: string;
  subVendor: string;
  vendor: string;
  vram: number;
  vramDynamic: boolean;
}

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
  controllers: GraphicsController[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="infoBox">
    <h2>Graphics</h2>
    <!-- <div v-if="props"> -->
    <div v-for="(controller, index) in props.controllers" :key="index" class="controller">
      <p><strong>Bus:</strong> {{ controller.bus }}</p>
      <p><strong>Bus Address:</strong> {{ controller.busAddress }}</p>
      <p><strong>Model:</strong> {{ controller.model }}</p>
      <p><strong>PCI ID:</strong> {{ controller.pciID || "N/A" }}</p>
      <p><strong>Sub Vendor:</strong> {{ controller.subVendor }}</p>
      <p><strong>Vendor:</strong> {{ controller.vendor }}</p>
      <p><strong>VRAM:</strong> {{ controller.vram }} MB</p>
      <p><strong>VRAM Dynamic:</strong> {{ controller.vramDynamic ? "Yes" : "No" }}</p>
    </div>
    <!-- </div> -->
    <!-- <div v-else>
      <p>Loading graphics information...</p>
    </div> -->
  </div>
</template>
