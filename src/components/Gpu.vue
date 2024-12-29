<script setup lang="ts">
import type { GraphicsControllerType } from "../types.d.ts";

type Props = {
  controllers: GraphicsControllerType[];
};

const props = defineProps<Props>();
</script>

<template>
  <div class="infoBox">
    <h2>Graphics</h2>
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
  </div>
</template>
