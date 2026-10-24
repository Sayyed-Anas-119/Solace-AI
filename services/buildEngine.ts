import { COMPONENTS_DB } from '../data/mockDb';
import { BuildPreferences, RecommendedBuild, PCComponent } from '../types';

const getByType = (type: string) => COMPONENTS_DB.filter(c => c.type === type);

export const generateBuilds = (prefs: BuildPreferences): RecommendedBuild[] => {
  const { budget, peripherals, ramSize } = prefs;
  const towerBudget = peripherals ? budget * 0.82 : budget;
  
  const createBuild = (type: 'Budget' | 'Balanced' | 'Performance'): RecommendedBuild => {
    let currentTotal = 0;
    const components: PCComponent[] = [];
    
    let gpuRatio = 0.35;
    let cpuRatio = 0.20;

    if (type === 'Performance') {
        gpuRatio = 0.45;
        cpuRatio = 0.15;
    } else if (type === 'Budget') {
        gpuRatio = 0.30;
        cpuRatio = 0.25;
    }

    const targetGpuPrice = towerBudget * gpuRatio;
    const targetCpuPrice = towerBudget * cpuRatio;

    // 1. Select GPU
    const gpus = getByType('GPU').sort((a, b) => Math.abs(a.price - targetGpuPrice) - Math.abs(b.price - targetGpuPrice));
    const selectedGpu = gpus[0];
    if (selectedGpu) {
        components.push(selectedGpu);
        currentTotal += selectedGpu.price;
    }

    // 2. Select CPU
    const cpus = getByType('CPU').sort((a, b) => Math.abs(a.price - targetCpuPrice) - Math.abs(b.price - targetCpuPrice));
    const selectedCpu = cpus[0];
    if (selectedCpu) {
        components.push(selectedCpu);
        currentTotal += selectedCpu.price;
    }

    // 3. Select Motherboard (Must match socket)
    const mobos = getByType('Motherboard').filter(m => m.specs.socket === selectedCpu?.specs.socket)
        .sort((a, b) => a.price - b.price);
    const selectedMobo = type === 'Performance' && mobos.length > 1 ? mobos[mobos.length - 1] : mobos[0];
    if (selectedMobo) {
        components.push(selectedMobo);
        currentTotal += selectedMobo.price;
    }

    // 4. Select RAM
    // The dataset RAM size is usually encoded in capacity (e.g., '16GB')
    const rams = getByType('RAM').filter(r => 
        (r.specs.capacity === ramSize) && 
        (!selectedMobo?.specs.memoryType || r.specs.memoryType === selectedMobo.specs.memoryType)
    ).sort((a, b) => a.price - b.price);
    
    const selectedRam = rams.length > 0 ? rams[0] : getByType('RAM')[0];
    if (selectedRam) {
        components.push(selectedRam);
        currentTotal += selectedRam.price;
    }

    // 5. Storage
    const storages = getByType('Storage').filter(s => 
        prefs.storageType === 'NVMe' ? (s.specs.speed?.includes('NVMe')) : true
    ).sort((a, b) => a.price - b.price);
    const selectedStorage = storages.length > 0 ? (type === 'Performance' ? storages[storages.length - 1] : storages[0]) : getByType('Storage')[0];
    if (selectedStorage) {
        components.push(selectedStorage);
        currentTotal += selectedStorage.price;
    }

    // 6. PSU
    const estimatedWattage = (Number(selectedCpu?.specs.wattage) || 65) + (Number(selectedGpu?.specs.wattage) || 200) + 100;
    const psus = getByType('PSU').filter(p => (Number(p.specs.wattage) || 500) >= estimatedWattage).sort((a, b) => a.price - b.price);
    const selectedPsu = psus[0] || getByType('PSU')[0];
    if (selectedPsu) {
        components.push(selectedPsu);
        currentTotal += selectedPsu.price;
    }

    // 7. Case
    const cases = getByType('Case').sort((a, b) => a.price - b.price);
    const selectedCase = type === 'Performance' ? (cases[cases.length - 1] || cases[0]) : cases[0];
    if (selectedCase) {
        components.push(selectedCase);
        currentTotal += selectedCase.price;
    }

    // 8. Cooler
    const coolers = getByType('Cooler').sort((a, b) => a.price - b.price);
    if (type === 'Performance' || (Number(selectedCpu?.specs.wattage) > 100)) {
        const selectedCooler = coolers.find(c => c.name.toLowerCase().includes('aio')) || coolers[coolers.length - 1];
        if (selectedCooler) {
            components.push(selectedCooler);
            currentTotal += selectedCooler.price;
        }
    } else {
        const selectedCooler = coolers[0];
        if (selectedCooler) {
            components.push(selectedCooler);
            currentTotal += selectedCooler.price;
        }
    }

    // 9. Peripherals
    if (peripherals) {
        const monitor = getByType('Monitor')[0];
        const keyboard = getByType('Keyboard')[0];
        const mouse = getByType('Mouse')[0];
        if (monitor) { components.push(monitor); currentTotal += monitor.price; }
        if (keyboard) { components.push(keyboard); currentTotal += keyboard.price; }
        if (mouse) { components.push(mouse); currentTotal += mouse.price; }
    }

    return { type, components, totalPrice: currentTotal };
  };

  return [
    createBuild('Budget'),
    createBuild('Balanced'),
    createBuild('Performance')
  ];
};

export const upgradeRecommendation = (currentCpuName: string, budget: number): PCComponent | null => {
    const cpus = getByType('CPU').sort((a, b) => a.price - b.price);
    const currentIdx = cpus.findIndex(c => c.name.toLowerCase().includes(currentCpuName.toLowerCase()));
    
    // If we can't find current, just show best within budget
    const upgrades = cpus.filter(c => c.price <= budget && (currentIdx === -1 || c.price > cpus[currentIdx].price));
    return upgrades.length > 0 ? upgrades[upgrades.length - 1] : null;
};
