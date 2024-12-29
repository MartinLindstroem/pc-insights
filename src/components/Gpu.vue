<script setup lang="ts">
import { onBeforeMount, ref, onMounted } from "vue";
import GraphicsControllerInterface from "../types.d.ts";

interface Props {
  controllers: GraphicsControllerInterface[];
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
