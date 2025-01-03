<script setup lang="ts">
import type {
  CpuType,
  RamType,
  GraphicsControllerType,
  DisplayType,
  OperatingSystemType,
  DiskType,
  SystemType,
} from "../types.d.ts";
import { convertBytes } from "../helpers";
type Props = {
  cpu: CpuType;
  totalRam: number;
  graphics: GraphicsControllerType[];
  displays: DisplayType[];
  os: OperatingSystemType;
  disk: DiskType[];
  system: SystemType;
};
const props = defineProps<Props>();
</script>

<template>
  <div class="infoBox">
    <h2>System</h2>
    <div class="system">
      <div>
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
      </div>
      <div>
        <p>
          <strong>Graphics card:</strong>
          {{ props.graphics[0] ? props.graphics[0].model : "N/A" }}
        </p>
        <p><strong>RAM:</strong> {{ props.totalRam ? convertBytes(props.totalRam) : "N/A" }}</p>
      </div>
      <div>
        <div v-for="(disk, index) in props.disk" :key="index" class="disk">
          <p>
            <strong>Disk {{ index + 1 }}:</strong>
            {{ disk.name && disk.size ? disk.name + " (" + convertBytes(disk.size) + " )" : "N/A" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.system {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}
</style>
