import React from 'react';
import { Globe, Zap, Shield, ArrowRight } from 'lucide-react';

interface IntroStepProps {
  onNext: () => void;
}

const IntroStep = ({ onNext }: IntroStepProps) => {
  return (
    <div className="flex flex-col h-full p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
        <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 mb-4 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">
          <Globe size={40} className="text-blue-500" />
        </div>
        <h2 className="text-2xl font-bold text-white">
          Endpoint Migration Tool
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Seamlessly migrate your RPC endpoints from other providers to
          Chainstack's high-performance global infrastructure in just a few
          clicks.
        </p>

        <div className="grid grid-cols-2 gap-4 w-full mt-8">
          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 flex flex-col items-center">
            <Zap size={20} className="text-amber-400 mb-2" />
            <span className="text-xs text-slate-300">Zero Downtime</span>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 flex flex-col items-center">
            <Shield size={20} className="text-emerald-400 mb-2" />
            <span className="text-xs text-slate-300">Secure Transfer</span>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 group mt-6"
      >
        Let's Begin{' '}
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>
    </div>
  );
}

export { IntroStep }