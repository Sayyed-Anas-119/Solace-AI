export type ComponentType = 'CPU' | 'GPU' | 'RAM' | 'Motherboard' | 'Storage' | 'PSU' | 'Case' | 'Cooler' | 'Monitor' | 'Keyboard' | 'Mouse';

export interface ComponentSpecs {
  socket?: string;
  wattage?: number;
  memoryType?: string; // DDR4, DDR5
  capacity?: string; // For Storage/RAM
  speed?: string;
  formFactor?: string;
  chipset?: string;
}

export interface PCComponent {
  id: string;
  name: string;
  brand: string;
  type: ComponentType;
  price: number;
  image: string;
  specs: ComponentSpecs;
  buyLink: string;
}

export interface BuildPreferences {
  budget: number;
  peripherals: boolean;
  purposes: string[]; // Gaming, Editing, etc.
  ramSize: string; // 16GB, 32GB
  storageType: string; // NVMe, SSD, HDD
  storageSize: string; // 1TB, 2TB
}

export interface RecommendedBuild {
  type: 'Budget' | 'Balanced' | 'Performance';
  components: PCComponent[];
  totalPrice: number;
}

export interface UpgradeRequest {
  currentCpu?: string;
  currentGpu?: string;
  budget: number;
}
