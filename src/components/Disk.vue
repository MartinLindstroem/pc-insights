<script setup lang="ts">
import { onBeforeMount, ref, onMounted } from "vue";
import { DiskInterface } from "../types.d.ts";
import { convertBytes } from "../helpers";
interface Props {
  disks: DiskInterface[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="infoBox">
    <h2>DISK</h2>
    <div v-for="(disk, index) in props.disks" :key="index" class="controller">
      <h3>Disk {{ index + 1 }}</h3>
      <p><strong>Name:</strong> {{ disk.name }}</p>
      <p><strong>Type:</strong> {{ disk.type }}</p>
      <p><strong>Size:</strong> {{ convertBytes(disk.size) }}</p>
    </div>
  </div>
</template>
