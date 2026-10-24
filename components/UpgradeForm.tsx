import React, { useState } from 'react';
import { upgradeRecommendation } from '../services/buildEngine';
import { PCComponent } from '../types';
import { ArrowRight, Cpu } from 'lucide-react';

export default function UpgradeForm() {
  const [currentCpu, setCurrentCpu] = useState('');
  const [budget, setBudget] = useState(20000);
  const [recommendation, setRecommendation] = useState<PCComponent | null>(null);

  const handleUpgradeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const result = upgradeRecommendation(currentCpu, budget);
    setRecommendation(result);
  };

  return (
    <div className="glass-panel p-8 rounded-2xl border border-zinc-200 dark:border-white/10">
      <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">Upgrade Advisor</h2>
      <p className="text-zinc-600 dark:text-gray-400 mb-8">Enter your current specs and we'll calculate the most effective upgrade path.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form onSubmit={handleUpgradeCheck} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-zinc-500 dark:text-gray-400 mb-2">Current CPU Model</label>
            <input 
              type="text" 
              placeholder="e.g. i3-9100F"
              value={currentCpu}
              onChange={(e) => setCurrentCpu(e.target.value)}
              className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-500 dark:text-gray-400 mb-2">Upgrade Budget (₹)</label>
            <input 
              type="number" 
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-red-500"
            />
          </div>
          <button type="submit" className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
            Check Upgrades
          </button>
        </form>

        <div className="border-l border-zinc-100 dark:border-white/10 pl-12 flex flex-col justify-center">
            {!recommendation ? (
                <div className="text-center text-zinc-400 dark:text-gray-500">
                    <Cpu size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Result will appear here</p>
                </div>
            ) : (
                <div className="animate-fade-in">
                    <h3 className="text-sm font-bold text-red-600 dark:text-red-500 uppercase tracking-wide mb-4">Recommended Upgrade</h3>
                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-xl border border-red-500/20 dark:border-red-500/30">
                        <div className="flex items-center space-x-4 mb-4">
                            <img src={recommendation.image} alt={recommendation.name} className="w-16 h-16 rounded bg-zinc-200 dark:bg-black object-cover"/>
                            <div>
                                <h4 className="font-bold text-xl text-zinc-900 dark:text-white">{recommendation.name}</h4>
                                <p className="text-zinc-500 dark:text-gray-400">₹{recommendation.price.toLocaleString()}</p>
                            </div>
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-gray-300">
                            This upgrade fits within your budget and offers significantly better performance for modern titles.
                        </p>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}