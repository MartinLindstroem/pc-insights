<script setup lang="ts">
import { ref } from "vue";
import type { DiskType } from "../types.d.ts";
import { convertBytes } from "../helpers";
type Props = {
  disks: DiskType[];
};

const props = defineProps<Props>();
const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="infoBox">
    <h2 :class="{ collapsed: !isExpanded }" @click="toggleExpand">Disk</h2>
    <div v-if="isExpanded">
      <div v-for="(disk, index) in props.disks" :key="index" class="controller">
        <h3>Disk {{ index + 1 }}</h3>
        <p><strong>Name:</strong> {{ disk.name }}</p>
        <p><strong>Type:</strong> {{ disk.type }}</p>
        <p><strong>Size:</strong> {{ convertBytes(disk.size) }}</p>
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
