import React, { useState, useEffect } from 'react';
import { Home, Cpu, PenTool, BookOpen, ShoppingCart, Menu, X, ChevronRight, Activity, Sun, Moon, CircuitBoard } from 'lucide-react';

// Components
import BuildForm from './components/BuildForm';
import BuildResults from './components/BuildResults';
import UpgradeForm from './components/UpgradeForm';
import AssemblyGuide from './components/AssemblyGuide';
import DeliveryForm from './components/DeliveryForm';
import { RecommendedBuild, BuildPreferences } from './types';
import { generateBuilds } from './services/buildEngine';

// Screens Enum
enum Screen {
  HOME,
  BUILD_FORM,
  BUILD_RESULTS,
  UPGRADE_FORM,
  GUIDE,
  DELIVERY
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);
  const [generatedBuilds, setGeneratedBuilds] = useState<RecommendedBuild[]>([]);
  const [selectedBuild, setSelectedBuild] = useState<RecommendedBuild | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const handleBuildSubmit = (prefs: BuildPreferences) => {
    const builds = generateBuilds(prefs);
    setGeneratedBuilds(builds);
    setCurrentScreen(Screen.BUILD_RESULTS);
  };

  const handleOrder = (build: RecommendedBuild) => {
    setSelectedBuild(build);
    setCurrentScreen(Screen.DELIVERY);
  };

  const NavItem = ({ icon: Icon, label, screen }: { icon: any, label: string, screen: Screen }) => (
    <button 
      onClick={() => {
        setCurrentScreen(screen);
        setMobileMenuOpen(false);
      }}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        currentScreen === screen 
          ? 'bg-primary text-white' 
          : 'text-zinc-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-gray-200 selection:bg-red-900 selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setCurrentScreen(Screen.HOME)}>
              <div className="w-9 h-9 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform duration-300">
                <CircuitBoard className="text-white" size={22} />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400">
                  SOLACE
                </span>
                <span className="text-[10px] font-bold text-red-600 tracking-[0.2em] uppercase">PC Systems</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <NavItem icon={Home} label="Home" screen={Screen.HOME} />
              <NavItem icon={Cpu} label="Build PC" screen={Screen.BUILD_FORM} />
              <NavItem icon={PenTool} label="Upgrade" screen={Screen.UPGRADE_FORM} />
              <NavItem icon={BookOpen} label="Handbook" screen={Screen.GUIDE} />
              
              <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 mx-2"></div>
              
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-zinc-500 dark:text-gray-400 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg text-zinc-500 dark:text-gray-400"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-zinc-500 dark:text-gray-300">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <NavItem icon={Home} label="Home" screen={Screen.HOME} />
              <NavItem icon={Cpu} label="Build PC" screen={Screen.BUILD_FORM} />
              <NavItem icon={PenTool} label="Upgrade" screen={Screen.UPGRADE_FORM} />
              <NavItem icon={BookOpen} label="Handbook" screen={Screen.GUIDE} />
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="pt-20 min-h-[calc(100vh-80px)]">
        {currentScreen === Screen.HOME && (
          <div className="relative overflow-hidden">
             {/* Hero Background Effects */}
             <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 dark:bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />
             <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

             <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white">
                  Build Your Dream <span className="text-red-600">Machine</span>
                </h1>
                <p className="text-xl text-zinc-600 dark:text-gray-400 max-w-2xl mb-10">
                  Precision-matched components and budget optimization to build the perfect PC for Gaming, Editing, or Work. 
                  Every part balanced for peak performance and reliability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setCurrentScreen(Screen.BUILD_FORM)}
                    className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-red-900/20 flex items-center justify-center space-x-2"
                  >
                    <Cpu size={20} />
                    <span>Start Building</span>
                  </button>
                  <button 
                    onClick={() => setCurrentScreen(Screen.UPGRADE_FORM)}
                    className="px-8 py-4 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-xl font-bold transition-all border border-zinc-200 dark:border-zinc-700 flex items-center justify-center space-x-2"
                  >
                    <PenTool size={20} />
                    <span>Upgrade Rig</span>
                  </button>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full">
                  <div className="glass-panel p-8 rounded-2xl text-left border border-zinc-200 dark:border-white/5 hover:border-red-500/50 transition-colors">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-500">
                      <CircuitBoard size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Smart Compatibility</h3>
                    <p className="text-zinc-600 dark:text-gray-400">Our hardware validation engine ensures every part fits perfectly together. Socket matching, clearance, and wattage validation included.</p>
                  </div>
                  <div className="glass-panel p-8 rounded-2xl text-left border border-zinc-200 dark:border-white/5 hover:border-red-500/50 transition-colors">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-500">
                      <Activity size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Performance First</h3>
                    <p className="text-zinc-600 dark:text-gray-400">Targeted allocation ratios designed to squeeze maximum frames per rupee out of your exact budget.</p>
                  </div>
                  <div className="glass-panel p-8 rounded-2xl text-left border border-zinc-200 dark:border-white/5 hover:border-red-500/50 transition-colors">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-500">
                      <ShoppingCart size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Build & Deliver</h3>
                    <p className="text-zinc-600 dark:text-gray-400">Export your curated parts list or have our bench technicians professionally assemble, test, and ship your turnkey rig.</p>
                  </div>
                </div>
             </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4">
          {currentScreen === Screen.BUILD_FORM && (
            <div className="max-w-3xl mx-auto py-8">
              <BuildForm onSubmit={handleBuildSubmit} />
            </div>
          )}

          {currentScreen === Screen.BUILD_RESULTS && (
            <div className="py-8">
              <button 
                onClick={() => setCurrentScreen(Screen.BUILD_FORM)} 
                className="mb-6 text-zinc-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white flex items-center space-x-1"
              >
                <span>← Back to preferences</span>
              </button>
              <BuildResults builds={generatedBuilds} onOrder={handleOrder} />
            </div>
          )}

          {currentScreen === Screen.UPGRADE_FORM && (
            <div className="max-w-3xl mx-auto py-8">
              <UpgradeForm />
            </div>
          )}

          {currentScreen === Screen.GUIDE && (
            <div className="max-w-5xl mx-auto py-8">
               <AssemblyGuide />
            </div>
          )}

          {currentScreen === Screen.DELIVERY && selectedBuild && (
            <div className="max-w-3xl mx-auto py-8">
              <DeliveryForm build={selectedBuild} onBack={() => setCurrentScreen(Screen.BUILD_RESULTS)} />
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-black py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-zinc-500 dark:text-gray-500 text-sm">
          <p>© 2025 Solace PC Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
