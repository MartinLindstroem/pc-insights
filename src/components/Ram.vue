<script setup lang="ts">
import { ref } from "vue";
import type { RamType } from "../types.d.ts";
import { convertBytes } from "../helpers";
type Props = {
  total: number;
  ram: RamType[];
};

const props = defineProps<Props>();

const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="infoBox">
    <h2 :class="{ collapsed: !isExpanded }" @click="toggleExpand">RAM</h2>
    <div v-if="isExpanded">
      <p><strong>Total:</strong> {{ convertBytes(props.total) }}</p>
      <div v-for="(ram, index) in props.ram" :key="index" class="controller">
        <h3>RAM stick {{ index + 1 }}</h3>
        <p><strong>Size:</strong> {{ convertBytes(ram.size) }}</p>
        <p><strong>Speed:</strong> {{ ram.clockSpeed }}MHz</p>
        <p><strong>Type:</strong> {{ ram.type }}</p>
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
