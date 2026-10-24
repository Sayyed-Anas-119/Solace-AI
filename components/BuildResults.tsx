import React, { useState } from 'react';
import { RecommendedBuild, PCComponent } from '../types';
import { ShoppingCart, CheckCircle, Sliders, Info, ShieldCheck } from 'lucide-react';
import { getHardwareAnalysis } from '../services/analysisEngine';

interface Props {
  builds: RecommendedBuild[];
  onOrder: (build: RecommendedBuild) => void;
}

export default function BuildResults({ builds, onOrder }: Props) {
  const [specReviews, setSpecReviews] = useState<{ [key: string]: string }>({});

  const handleShowAnalysis = (build: RecommendedBuild) => {
    const analysis = getHardwareAnalysis(build, ['Gaming', 'General Use']);
    setSpecReviews(prev => ({ ...prev, [build.type]: analysis }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {builds.map((build, idx) => (
        <div 
          key={idx} 
          className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
            build.type === 'Balanced' 
              ? 'ring-2 ring-red-600 bg-white dark:bg-zinc-900 shadow-2xl shadow-red-900/10 dark:shadow-red-900/20 transform md:-translate-y-4 z-10' 
              : 'border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60'
          }`}
        >
          {build.type === 'Balanced' && (
            <div className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider text-center py-1">
              Best Value
            </div>
          )}
          
          <div className="p-6 border-b border-zinc-100 dark:border-white/5">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">{build.type} Build</h3>
            <p className="text-red-600 dark:text-red-500 font-mono text-xl font-bold">₹{build.totalPrice.toLocaleString()}</p>
          </div>

          <div className="flex-1 p-6 space-y-4 overflow-y-auto max-h-[600px] custom-scrollbar">
            {build.components.map((comp, cIdx) => (
              <div key={cIdx} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors group">
                <img src={comp.image} alt={comp.name} className="w-12 h-12 rounded object-cover bg-zinc-200 dark:bg-black" />
                <div>
                  <p className="text-xs text-zinc-400 dark:text-gray-500 uppercase">{comp.type}</p>
                  <p className="text-sm font-medium text-zinc-800 dark:text-gray-200 group-hover:text-zinc-900 dark:group-hover:text-white">{comp.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-gray-500">₹{comp.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hardware Compatibility & Spec Check */}
          <div className="px-6 py-4 bg-zinc-50 dark:bg-black/20 border-t border-zinc-100 dark:border-white/5 min-h-[90px] flex items-center">
             {!specReviews[build.type] ? (
                 <button 
                    onClick={() => handleShowAnalysis(build)}
                    className="w-full py-2 border border-red-500/30 text-red-600 dark:text-red-400 hover:bg-red-500/5 dark:hover:bg-red-500/10 rounded-lg text-sm flex items-center justify-center space-x-2 transition-colors font-medium"
                 >
                    <ShieldCheck size={16} />
                    <span>Run Hardware Compatibility & Bottleneck Check</span>
                 </button>
             ) : (
                <div className="text-xs text-zinc-700 dark:text-zinc-300 p-3 bg-red-500/5 rounded-lg border border-red-200 dark:border-red-500/20 w-full leading-relaxed">
                    <div className="flex items-center gap-1.5 mb-1.5 font-bold text-red-600 dark:text-red-400">
                        <ShieldCheck size={14} /> Hardware Diagnostic & Synergy:
                    </div>
                    {specReviews[build.type]}
                </div>
             )}
          </div>

          <div className="p-6 bg-zinc-50/50 dark:bg-black/40 border-t border-zinc-100 dark:border-white/5 space-y-3">
             <button 
               onClick={() => onOrder(build)}
               className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-red-900/10"
             >
               <ShoppingCart size={18} />
               <span>Order Assembly</span>
             </button>
             <button 
               onClick={() => window.print()}
               className="w-full py-3 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-gray-300 font-medium rounded-lg transition-colors text-sm border border-zinc-200 dark:border-zinc-700"
             >
               Print / Export Build
             </button>
          </div>
        </div>
      ))}
    </div>
  );
}
