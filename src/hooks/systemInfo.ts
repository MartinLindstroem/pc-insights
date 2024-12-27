import si from "systeminformation";

export const getSystemInfo = async () => {
  // define all values, you want to get back
  const valueObject = {
    cpu: "*",
    graphics: "*",
    osInfo: "platform, release",
    system: "model, manufacturer",
    time: "uptime",
  };

  //   si.get(valueObject).then((data) => console.log(data));
  try {
    const systemInfo = await si.get(valueObject);
    return systemInfo;
  } catch (error) {
    console.log(error);
  }
};

// export default getGpuInfo;
