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
