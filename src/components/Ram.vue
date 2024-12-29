<script setup lang="ts">
import { onBeforeMount, ref, onMounted } from "vue";
import { RamInterface } from "../types.d.ts";
import { convertBytes } from "../helpers";
interface Props {
  total: number;
  ram: RamInterface[];
}

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
