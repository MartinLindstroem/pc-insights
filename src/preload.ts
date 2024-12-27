// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";
// import { getSystemInfo } from "./hooks/systemInfo";

(async () => {
  contextBridge.exposeInMainWorld("pc", {
    getSystemInfo: () => ipcRenderer.invoke("getSystemInfo"),
  });
})();
