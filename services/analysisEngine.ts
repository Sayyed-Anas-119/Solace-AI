import { RecommendedBuild } from "../types";

export interface SpecAnalysis {
  summary: string;
  bottleneckScore: string;
  powerHeadroom: string;
  thermalStatus: string;
}

export const getHardwareAnalysis = (build: RecommendedBuild, purposes: string[] = ['Gaming', 'General Use']): string => {
  const cpu = build.components.find(c => c.type === 'CPU');
  const gpu = build.components.find(c => c.type === 'GPU');
  const psu = build.components.find(c => c.type === 'PSU');
  const cooler = build.components.find(c => c.type === 'Cooler');
  const ram = build.components.find(c => c.type === 'RAM');

  const cpuTdp = Number(cpu?.specs?.wattage) || 65;
  const gpuTdp = Number(gpu?.specs?.wattage) || 170;
  const systemTdp = cpuTdp + gpuTdp + 80; // approximate overhead
  const psuWattage = Number(psu?.specs?.wattage) || 650;
  const psuHeadroomPercent = Math.round(((psuWattage - systemTdp) / psuWattage) * 100);

  // Balance & Bottleneck calculation
  let balanceVerdict = "Nicely balanced system with minimal bottlenecking.";
  if (cpu && gpu) {
    const cpuPrice = cpu.price;
    const gpuPrice = gpu.price;
    const ratio = gpuPrice / (cpuPrice || 1);

    if (ratio > 2.8) {
      balanceVerdict = "Heavy GPU skew: Ideal for maximum 4K visual fidelity, though CPU may slightly limit 1080p high-refresh gaming.";
    } else if (ratio < 1.0) {
      balanceVerdict = "Strong CPU bias: Optimized for heavy multitasking, compiling, and editing workloads with stable graphic output.";
    } else {
      balanceVerdict = "Optimal pairing: Balanced throughput between CPU and GPU ensures smooth frame pacing and negligible bottleneck.";
    }
  }

  // Thermal & Power assessment
  let powerVerdict = `${psuWattage}W PSU provides ~${psuHeadroomPercent}% headroom over the ${systemTdp}W peak TDP, ensuring stable transient response.`;
  if (psuHeadroomPercent < 15) {
    powerVerdict = `Estimated peak load is ~${systemTdp}W against a ${psuWattage}W PSU. Operates within limits, but offers modest upgrade headroom.`;
  }

  // Thermal assessment
  const isAio = cooler?.name.toLowerCase().includes('aio') || cooler?.specs?.socket === 'aio';
  let thermalVerdict = isAio
    ? "Liquid cooling ensures sustained boost clocks under multi-core stress testing."
    : "High-airflow thermal solution keeps junction temperatures well within manufacturer thresholds.";

  // Overall Verdict
  const primaryPurpose = purposes[0] || 'Gaming';
  const buildName = build.type;
  
  return `${buildName} Config Analysis: ${balanceVerdict} ${powerVerdict} ${thermalVerdict} Excellent component synergy for ${primaryPurpose.toLowerCase()} and productivity.`;
};
