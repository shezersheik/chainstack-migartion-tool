import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Endpoint } from '../../utils/constants';

interface EndpointsStepProps {
  selectedEndpoints: number[];
  onToggle: (id: number) => void;
  endpoints: Endpoint[];
  onNext: () => void;
}

const EndpointsStep = ({
  selectedEndpoints,
  onToggle,
  endpoints,
  onNext,
}: EndpointsStepProps) => {
  return (
    <div className="flex flex-col h-full p-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white mb-2">Select Endpoints</h2>
        <p className="text-slate-400 text-sm">
          We detected {endpoints.length} active endpoints. Select the ones you
          want to migrate.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 -mx-2 px-2 pb-4 scrollbar-thin scrollbar-thumb-slate-700">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-semibold text-slate-500 uppercase">
            Found Resources
          </span>
          <button
            onClick={
              () =>
                selectedEndpoints.length === endpoints.length
                  ? endpoints.forEach(e => onToggle(e.id)) // deselect all
                  : endpoints.forEach(
                      e => !selectedEndpoints.includes(e.id) && onToggle(e.id)
                    ) // select all
            }
            className="text-xs text-blue-400 hover:text-blue-300"
          >
            {selectedEndpoints.length === endpoints.length
              ? 'Deselect All'
              : 'Select All'}
          </button>
        </div>

        {endpoints.map(endpoint => {
          const isSelected = selectedEndpoints.includes(endpoint.id);
          return (
            <div
              key={endpoint.id}
              onClick={() => onToggle(endpoint.id)}
              className={`p-4 rounded-lg border cursor-pointer transition-all flex items-start gap-3 ${
                isSelected
                  ? 'bg-blue-900/10 border-blue-500/50'
                  : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50'
              }`}
            >
              <div
                className={`mt-1 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                  isSelected
                    ? 'bg-blue-600 border-blue-600'
                    : 'border-slate-600 bg-transparent'
                }`}
              >
                {isSelected && <CheckCircle size={14} className="text-white" />}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-medium text-sm ${isSelected ? 'text-white' : 'text-slate-300'}`}
                  >
                    {endpoint.name}
                  </span>
                  <span className="text-[10px] uppercase font-mono bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">
                    {endpoint.type}
                  </span>
                </div>
                <div className="text-xs text-slate-500 truncate mt-1 font-mono">
                  {endpoint.url}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-800">
        <button
          onClick={onNext}
          disabled={selectedEndpoints.length === 0}
          className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
            selectedEndpoints.length > 0
              ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          Migrate{' '}
          {selectedEndpoints.length > 0 && `(${selectedEndpoints.length})`}
        </button>
      </div>
    </div>
  );
}

export { EndpointsStep }