<script setup>
import { onBeforeMount, ref, onMounted } from "vue";
import Cpu from "./components/Cpu.vue";
import Gpu from "./components/Gpu.vue";
import System from "./components/System.vue";
import Display from "./components/Display.vue";
import Ram from "./components/Ram.vue";
import Disk from "./components/Disk.vue";

const systemInfo = ref(null);

onBeforeMount(async () => {
  const pc = window.pc;
  const system = await pc.getSystemInfo();
  systemInfo.value = system;
  console.log("SYSTEM INFO: ", systemInfo.value);
});
</script>

<template>
  <div class="container">
    <System
      :os="systemInfo.osInfo"
      :cpu="systemInfo.cpu"
      :totalRam="systemInfo.mem.total"
      :graphics="systemInfo.graphics.controllers"
      :displays="systemInfo.graphics.displays"
      :disk="systemInfo.diskLayout"
      :system="systemInfo.system"
    />
    <Cpu :cpu="systemInfo.cpu" />
    <Gpu :controllers="systemInfo.graphics.controllers" />
    <Display :displays="systemInfo.graphics.displays" />
    <Ram :ram="systemInfo.memLayout" :total="systemInfo.mem.total" />
    <Disk :disks="systemInfo.diskLayout" />
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
