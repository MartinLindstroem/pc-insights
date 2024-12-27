<script setup>
import { onBeforeMount, ref, onMounted } from "vue";
import Cpu from "./components/cpu/Cpu.vue";
import Gpu from "./components/gpu/Gpu.vue";
import System from "./components/system/System.vue";
import Display from "./components/gpu/Display.vue";

const systemInfo = ref(null);

onBeforeMount(async () => {
  const pc = window.pc;
  const system = await pc.getSystemInfo();
  systemInfo.value = system;
  console.log(systemInfo.value);
});
</script>

<template>
  <div class="container">
    <System
      :manufacturer="systemInfo.system.manufacturer"
      :model="systemInfo.system.model"
      :os="systemInfo.osInfo.platform"
      :uptime="systemInfo.time.uptime"
    />
    <Cpu
      :manufacturer="systemInfo.cpu.manufacturer"
      :brand="systemInfo.cpu.brand"
      :speed="systemInfo.cpu.speed"
      :cores="systemInfo.cpu.cores"
      :physicalCores="systemInfo.cpu.physicalCores"
      :socket="systemInfo.cpu.socket"
    />
    <Gpu :controllers="systemInfo.graphics.controllers" />
    <Display :displays="systemInfo.graphics.displays" />
  </div>
</template>

<style>
#app {
  background-color: #363b49;
  color: #fff;
  min-height: 100vh;
  max-width: 100vw;
  /* margin: 0; */
}

.container {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

.infoBox {
  background-color: #363b49;
  border-bottom: 1px solid #fff;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  width: 70%;
}

h1 {
  margin: 0;
}
</style>
