export interface CpuInterface {
  manufacturer?: string;
  brand?: string;
  speed?: number;
  cores?: number;
  physicalCores?: number;
  socket?: string;
}

export interface GraphicsControllerInterface {
  bus?: string;
  busAddress?: string;
  model?: string;
  pciID?: string | null;
  subVendor?: string;
  vendor?: string;
  vram?: number;
  vramDynamic?: boolean;
}

export interface DisplayInterface {
  model?: string;
  vendor?: string;
  resolutionX?: number;
  resolutionY?: number;
}

export interface RamInterface {
  total?: number;
  size?: number;
  speed?: number;
  type?: string;
}
export interface OperatingSystemInterface {
  platform?: string;
  distro?: string;
  release?: string;
  arch?: string;
}

export interface DiskInterface {
  device?: string;
  type?: string;
  name?: string;
  vendor?: string;
  size?: number;
}
