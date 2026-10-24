import React from 'react';

const steps = [
  { 
    title: 'CPU Installation', 
    desc: 'Lift the socket retention arm. Carefully align the gold triangle on the processor with the indicator mark on the motherboard socket. Gently lower it into place without forcing, then lower and lock the retention arm.', 
    img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80'
  },
  { 
    title: 'Thermal Compound Application', 
    desc: 'Apply a pea-sized dot of thermal compound directly to the center of the CPU integrated heat spreader (IHS). Avoid manual spreading; the mounting pressure from the cooler bracket will distribute it evenly.', 
    img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
  },
  { 
    title: 'RAM Installation', 
    desc: 'Open the locking latches on the memory slots (usually slots 2 and 4 for dual-channel configs). Match the notch on the memory stick with the keyed slot divider. Press straight down firmly on both ends until both latches click shut.', 
    img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80'
  },
  { 
    title: 'Mount Motherboard & Standoffs', 
    desc: 'Verify that the brass standoffs are aligned with your board form factor. Snap the rear I/O shield into the chassis opening, rest the motherboard onto the standoffs, and tighten screws in a cross pattern without overtorquing.', 
    img: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80'
  },
  { 
    title: 'Graphics Card (GPU) Installation', 
    desc: 'Unfasten the rear PCIe slot expansion covers. Open the PCIe x16 retention clip on the motherboard. Insert the GPU firmly into the slot until the clip locks in, then secure the bracket with thumb screws and connect PCIe power cables.', 
    img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80'
  },
];

export default function AssemblyGuide() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">PC Building <span className="text-red-600">Handbook</span></h2>
        <p className="text-zinc-600 dark:text-gray-400 max-w-2xl mx-auto">Follow our step-by-step visual workshop guide to assemble your custom hardware safely and methodically.</p>
      </div>

      <div className="grid gap-12">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-8 glass-panel p-6 rounded-2xl border border-zinc-200 dark:border-white/5">
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 aspect-video flex items-center justify-center">
              <img 
                src={step.img} 
                alt={step.title} 
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500" 
                loading="lazy"
                onError={(e) => {
                  // Fallback placeholder if image load fails
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-xl shadow-lg shadow-red-900/40 text-white">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{step.title}</h3>
              </div>
              <p className="text-zinc-700 dark:text-gray-300 text-lg leading-relaxed border-l-2 border-zinc-200 dark:border-white/10 pl-4">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
