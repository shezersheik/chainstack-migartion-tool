import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Provider } from '../../utils/constants';

interface ProviderStepProps {
  selectedProvider: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
}

const ProviderStep = ({
  selectedProvider,
  onSelect,
  onNext,
}: ProviderStepProps) => {
  const providers: Provider[] = [
    { id: 'alchemy', name: 'Alchemy', icon: 'A' },
    { id: 'infura', name: 'Infura', icon: 'I' },
    { id: 'quicknode', name: 'QuickNode', icon: 'Q' },
    { id: 'ankr', name: 'Ankr', icon: 'K' },
  ];

  return (
    <div className="flex flex-col h-full p-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Select Source</h2>
        <p className="text-slate-400 text-sm">
          Which provider are you migrating from?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {providers.map(p => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-3 relative group ${
              selectedProvider === p.id
                ? 'bg-blue-600/10 border-blue-500'
                : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600'
            }`}
          >
            {selectedProvider === p.id && (
              <div className="absolute top-2 right-2 text-blue-500">
                <CheckCircle
                  size={16}
                  fill="currentColor"
                  className="text-blue-500 bg-white rounded-full"
                />
              </div>
            )}
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold ${
                selectedProvider === p.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-400 group-hover:bg-slate-600 group-hover:text-white'
              }`}
            >
              {p.icon}
            </div>
            <span
              className={`text-sm font-medium ${selectedProvider === p.id ? 'text-white' : 'text-slate-400'}`}
            >
              {p.name}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-auto">
        <button
          onClick={onNext}
          disabled={!selectedProvider}
          className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
            selectedProvider
              ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export { ProviderStep }