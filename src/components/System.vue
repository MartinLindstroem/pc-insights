<script setup lang="ts">
import { onBeforeMount, ref, onMounted, onBeforeUnmount, computed } from "vue";
import Cpu from "../cpu/Cpu.vue";
import Gpu from "../gpu/Gpu.vue";
import Display from "../gpu/Display.vue";
import Ram from "../memory/Ram.vue";
import {
  CpuInterface,
  RamInterface,
  GraphicsControllerInterface,
  DisplayInterface,
  OperatingSystemInterface,
  DiskInterface,
  SystemInterface,
} from "../types.d.ts";
import { convertBytes } from "../helpers";
interface Props {
  cpu: CpuInterface;
  totalRam: number;
  graphics: GraphicsControllerInterface[];
  displays: DisplayInterface[];
  os: OperatingSystemInterface;
  disk: DiskInterface[];
  system: SystemInterface;
}
const props = defineProps<Props>();

const time = ref(props.uptime);

let intervalId: number | null = null;

onMounted(() => {
  intervalId = setInterval(() => {
    time.value++;
  }, 1000);
});

onBeforeUnmount(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
});

const formattedTime = computed(() => {
  const hours = Math.floor(time.value / 3600);
  const minutes = Math.floor((time.value % 3600) / 60);
  const seconds = (time.value % 60).toFixed(0);

  return `${String(hours)}:${String(minutes)}:${String(seconds)}`;
});
</script>

<template>
  <div class="infoBox">
    <h2>System</h2>
    <p><strong>Operating System:</strong> {{ props.os.distro ? props.os.distro : "N/A" }}</p>
    <p>
      <strong>Motherboard:</strong>
      {{ props.system.model ? props.system.manufacturer + " " + props.system.model : "N/A" }}
    </p>
    <p>
      <strong>Processor:</strong>
      {{
        props.cpu.brand && props.cpu.manufacturer
          ? props.cpu.manufacturer + " " + props.cpu.brand
          : "N/A"
      }}
    </p>
    <p>
      <strong>Graphics card:</strong>
      {{ props.graphics[0] ? props.graphics[0].model : "N/A" }}
    </p>
    <p><strong>RAM:</strong> {{ props.totalRam ? convertBytes(props.totalRam) : "N/A" }}</p>
    <p>
      <strong>Disk:</strong>
      {{
        props.disk[0].name && props.disk[0].size
          ? props.disk[0].name + " (" + convertBytes(props.disk[0].size) + " )"
          : "N/A"
      }}
    </p>
  </div>
</template>
