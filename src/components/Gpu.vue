<script setup lang="ts">
import { ref } from "vue";
import type { GraphicsControllerType } from "../types.d.ts";

type Props = {
  controllers: GraphicsControllerType[];
};

const props = defineProps<Props>();

const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="infoBox">
    <h2 @click="toggleExpand">Graphics</h2>
    <div v-if="isExpanded">
      <div v-for="(controller, index) in props.controllers" :key="index" class="controller">
        <p><strong>Vendor:</strong> {{ controller.vendor }}</p>
        <p><strong>Model:</strong> {{ controller.model }}</p>
        <p><strong>VRAM:</strong> {{ controller.vram }} MB</p>
        <p><strong>VRAM Dynamic:</strong> {{ controller.vramDynamic ? "Yes" : "No" }}</p>
        <p><strong>Bus:</strong> {{ controller.bus }}</p>
        <p><strong>Bus Address:</strong> {{ controller.busAddress || "N/A" }}</p>
        <p><strong>PCI ID:</strong> {{ controller.pciID || "N/A" }}</p>
        <p><strong>Sub Vendor:</strong> {{ controller.subVendor || "N/A" }}</p>
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
</style>
