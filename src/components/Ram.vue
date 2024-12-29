<script setup lang="ts">
import type { RamType } from "../types.d.ts";
import { convertBytes } from "../helpers";
type Props = {
  total: number;
  ram: RamType[];
};

const props = defineProps<Props>();
</script>

<template>
  <div class="infoBox">
    <h2>RAM</h2>
    <p><strong>Total:</strong> {{ convertBytes(props.total) }}</p>
    <div v-for="(ram, index) in props.ram" :key="index" class="controller">
      <h3>RAM stick {{ index + 1 }}</h3>
      <p><strong>Size:</strong> {{ convertBytes(ram.size) }}</p>
      <p><strong>Speed:</strong> {{ ram.speed }}</p>
      <p><strong>Type:</strong> {{ ram.type }}</p>
    </div>
  </div>
</template>
