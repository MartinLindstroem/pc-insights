import si from "systeminformation";

export const getCpuInfo = async () => {
  try {
    const cpuInfo = await si.cpu();
    return cpuInfo;
  } catch (error) {
    console.log(error);
  }
};

// export default getCpuInfo;
