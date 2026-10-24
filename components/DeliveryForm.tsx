import React from 'react';
import { RecommendedBuild } from '../types';
import { Truck, CheckCircle } from 'lucide-react';

interface Props {
  build: RecommendedBuild;
  onBack: () => void;
}

export default function DeliveryForm({ build, onBack }: Props) {
  const assemblyFee = 2500;
  const shippingFee = 1200;
  const total = build.totalPrice + assemblyFee + shippingFee;

  return (
    <div className="glass-panel p-8 rounded-2xl border border-zinc-200 dark:border-white/10">
      <button onClick={onBack} className="text-zinc-500 dark:text-gray-400 mb-6 hover:text-zinc-900 dark:hover:text-white transition-colors">← Back</button>
      
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-red-600/10 dark:bg-red-600/20 rounded-full text-red-600 dark:text-red-500">
            <Truck size={32} />
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Assembly & Delivery</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-zinc-800 dark:text-white">Shipping Details</h3>
            <input type="text" placeholder="Full Name" className="w-full bg-white dark:bg-zinc-800 p-3 rounded border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white" />
            <input type="text" placeholder="Address Line 1" className="w-full bg-white dark:bg-zinc-800 p-3 rounded border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white" />
            <input type="text" placeholder="City" className="w-full bg-white dark:bg-zinc-800 p-3 rounded border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white" />
            <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="State" className="w-full bg-white dark:bg-zinc-800 p-3 rounded border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white" />
                <input type="text" placeholder="ZIP Code" className="w-full bg-white dark:bg-zinc-800 p-3 rounded border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white" />
            </div>
            <input type="tel" placeholder="Phone Number" className="w-full bg-white dark:bg-zinc-800 p-3 rounded border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white" />
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-6 text-zinc-800 dark:text-white">Order Summary</h3>
            <div className="space-y-3 mb-6">
                <div className="flex justify-between text-zinc-600 dark:text-gray-400">
                    <span>Parts Total</span>
                    <span>₹{build.totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-600 dark:text-gray-400">
                    <span>Professional Assembly</span>
                    <span>₹{assemblyFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-600 dark:text-gray-400">
                    <span>Secure Shipping</span>
                    <span>₹{shippingFee.toLocaleString()}</span>
                </div>
                <div className="h-px bg-zinc-200 dark:bg-white/10 my-4"></div>
                <div className="flex justify-between text-zinc-900 dark:text-white text-xl font-bold">
                    <span>Total</span>
                    <span className="text-red-600 dark:text-red-500">₹{total.toLocaleString()}</span>
                </div>
            </div>
            
            <button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-green-900/10">
                <CheckCircle size={20} />
                <span>Confirm Order</span>
            </button>
            <p className="text-center text-xs text-zinc-500 dark:text-gray-500 mt-4">
                By confirming, you agree to our terms of service. Estimated delivery: 5-7 business days.
            </p>
        </div>
      </div>
    </div>
  );
}