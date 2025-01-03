import si, { diskLayout, memLayout } from "systeminformation";
import os from "os";
import { exec } from "child_process";
import { stderr } from "process";
const getMotherboardInfo = async () => {
  let motherboard = {
    manufacturer: "",
    model: "",
  };

  if (os.platform() === "win32") {
    try {
      exec("wmic baseboard get product,Manufacturer", (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing command: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Error: ${stderr}`);
          return;
        }

        const lines = stdout.split("\n").filter((line) => line.trim() !== "");
        if (lines.length > 1) {
          const [manufacturer, model] = lines[1].split(/\s{2,}/).map((item) => item.trim());

          motherboard.manufacturer = manufacturer;
          motherboard.model = model;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return motherboard;
};

export const getSystemInfo = async () => {
  const valueObject = {
    cpu: "*",
    graphics: "*",
    osInfo: "*",
    system: "*",
    mem: "total",
    memLayout: "*",
    diskLayout: "device, type, name, vendor, size",
    time: "uptime",
  };

  try {
    const motherboard = await getMotherboardInfo();
    const systemInfo = await si.get(valueObject);
    if (systemInfo.system.manufacturer === "") {
      systemInfo.system.manufacturer = motherboard.manufacturer;
    }
    systemInfo.system.model = motherboard.model;

    return systemInfo;
  } catch (error) {
    console.log(error);
  }
};
