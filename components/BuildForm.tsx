import React, { useState } from 'react';
import { BuildPreferences } from '../types';
import { Check, Info } from 'lucide-react';

interface Props {
  onSubmit: (prefs: BuildPreferences) => void;
}

export default function BuildForm({ onSubmit }: Props) {
  const [budget, setBudget] = useState(80000);
  const [purposes, setPurposes] = useState<string[]>([]);
  const [peripherals, setPeripherals] = useState(false);
  const [ramSize, setRamSize] = useState('16GB');
  const [storageType, setStorageType] = useState('NVMe');
  const [storageSize, setStorageSize] = useState('1TB');

  const availablePurposes = ['Gaming', 'Editing', 'Streaming', 'Coding', 'Office'];

  const togglePurpose = (p: string) => {
    if (purposes.includes(p)) {
      setPurposes(purposes.filter(item => item !== p));
    } else {
      setPurposes([...purposes, p]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      budget,
      purposes,
      peripherals,
      ramSize,
      storageType,
      storageSize
    });
  };

  return (
    <div className="glass-panel p-8 rounded-2xl border border-zinc-200 dark:border-white/10">
      <h2 className="text-3xl font-bold mb-8 flex items-center text-zinc-900 dark:text-white">
        <span className="bg-red-600 w-1 h-8 rounded-full mr-4"></span>
        Configure Your Build
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-zinc-500 dark:text-gray-400 mb-2">Budget (₹ INR)</label>
          <div className="flex items-center space-x-4">
            <input 
              type="range" 
              min="30000" 
              max="500000" 
              step="5000" 
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-red-600"
            />
            <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 min-w-[120px] text-center font-mono font-bold text-red-600 dark:text-red-500">
              ₹{budget.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Purpose */}
        <div>
          <label className="block text-sm font-medium text-zinc-500 dark:text-gray-400 mb-2">Primary Purpose (Select multiple)</label>
          <div className="flex flex-wrap gap-3">
            {availablePurposes.map(p => (
              <button
                key={p}
                type="button"
                onClick={() => togglePurpose(p)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  purposes.includes(p) 
                    ? 'bg-red-600/10 border-red-500 text-red-600 dark:text-red-500' 
                    : 'bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-gray-400 hover:border-zinc-400 dark:hover:border-gray-500'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Peripherals */}
        <div className="flex items-center space-x-3 p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <input 
            type="checkbox" 
            id="peripherals"
            checked={peripherals}
            onChange={(e) => setPeripherals(e.target.checked)}
            className="w-5 h-5 rounded border-zinc-300 dark:border-gray-600 text-red-600 focus:ring-red-500 bg-white dark:bg-zinc-800"
          />
          <label htmlFor="peripherals" className="text-zinc-700 dark:text-gray-300 cursor-pointer select-none">
            Include Monitor, Keyboard & Mouse in budget?
          </label>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-zinc-500 dark:text-gray-400 mb-2">RAM Amount</label>
            <select 
              value={ramSize} 
              onChange={(e) => setRamSize(e.target.value)}
              className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-red-500"
            >
              <option value="8GB">8 GB</option>
              <option value="16GB">16 GB</option>
              <option value="32GB">32 GB</option>
              <option value="64GB">64 GB</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-500 dark:text-gray-400 mb-2">Storage Type</label>
            <select 
              value={storageType} 
              onChange={(e) => setStorageType(e.target.value)}
              className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-red-500"
            >
              <option value="NVMe">NVMe SSD (Fastest)</option>
              <option value="SSD">SATA SSD (Fast)</option>
              <option value="HDD">HDD (Slower, Cheap)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-500 dark:text-gray-400 mb-2">Storage Size</label>
            <select 
              value={storageSize} 
              onChange={(e) => setStorageSize(e.target.value)}
              className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-red-500"
            >
              <option value="500GB">500 GB</option>
              <option value="1TB">1 TB</option>
              <option value="2TB">2 TB</option>
            </select>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-900/30 dark:shadow-red-900/20 transition-all transform hover:scale-[1.01]"
        >
          Generate Recommendations
        </button>
      </form>
    </div>
  );
}