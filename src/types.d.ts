export type CpuType = {
  manufacturer?: string;
  brand?: string;
  speed?: number;
  cores?: number;
  physicalCores?: number;
  socket?: string;
};

export type GraphicsControllerType = {
  bus?: string;
  busAddress?: string;
  model?: string;
  pciID?: string | null;
  subVendor?: string;
  vendor?: string;
  vram?: number;
  vramDynamic?: boolean;
};

export type DisplayType = {
  model?: string;
  vendor?: string;
  resolutionX?: number;
  resolutionY?: number;
};

export type RamType = {
  total?: number;
  size?: number;
  clockSpeed?: number;
  type?: string;
};
export type OperatingSystemType = {
  platform?: string;
  distro?: string;
  release?: string;
  arch?: string;
};

export type DiskType = {
  device?: string;
  type?: string;
  name?: string;
  vendor?: string;
  size?: number;
};

export type SystemType = {
  manufacturer?: string;
  model?: string;
  serial?: string;
  sku?: string;
  uuid?: string;
  version?: string;
  virtual?: boolean;
};
