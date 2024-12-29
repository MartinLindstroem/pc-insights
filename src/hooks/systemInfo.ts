import si, { diskLayout, memLayout } from "systeminformation";
import os from "os";
import { exec } from "child_process";
const getMotherboardInfo = async () => {
  let motherboard;
  console.log(os.platform());

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

        // Split lines and parse
        const lines = stdout.split("\n").filter((line) => line.trim() !== "");
        const dataLine = lines[1]; // Second line contains the data

        const [manufacturer, model] = dataLine.split(/\s{2,}/).map((item) => item.trim());

        motherboard = {
          manufacturer,
          model,
        };
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      exec("sudo dmidecode -t baseboard", (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing command: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Error: ${stderr}`);
          return;
        }

        console.log("STANDOUT", stdout);

        const lines = stdout.split("\n");
        let manufacturer = "";
        let model = "";

        // Parse the lines for Manufacturer and Product Name
        lines.forEach((line) => {
          if (line.includes("Manufacturer:")) {
            manufacturer = line.split(":")[1].trim();
          }
          if (line.includes("Product Name:")) {
            model = line.split(":")[1].trim();
          }
        });

        motherboard = {
          manufacturer,
          model,
        };

        console.log(motherboard);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return motherboard;
};

export const getSystemInfo = async () => {
  // define all values, you want to get back
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

  //   si.get(valueObject).then((data) => console.log(data));
  try {
    const systemInfo = await si.get(valueObject);
    systemInfo.motherboard = await getMotherboardInfo();
    return systemInfo;
  } catch (error) {
    console.log(error);
  }
};

// export default getGpuInfo;
