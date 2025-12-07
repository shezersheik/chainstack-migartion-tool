import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  step: number;
  onBack: () => void;
}

const Header = ({ step, onBack }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#0B1120]">
      <div className="flex items-center gap-3">
        <span className="font-semibold text-white tracking-tight">
          Chainstack
        </span>
      </div>
      {step > 1 && step < 5 && (
        <button
          onClick={onBack}
          className="text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
      )}
    </div>
  );
}

export { Header }
