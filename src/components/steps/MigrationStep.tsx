import React from 'react';
import { CheckCircle } from 'lucide-react';

interface MigrationStepProps {
  progress: number;
  logs: string[];
}

const MigrationStep = ({ progress, logs }: MigrationStepProps) => {
  const isComplete = progress >= 100;

  return (
    <div className="flex flex-col h-full p-6 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex-1 flex flex-col items-center pt-8">
        <div className="relative mb-8">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              className="text-slate-800"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="58"
              cx="64"
              cy="64"
            />
            <circle
              className={`${isComplete ? 'text-emerald-500' : 'text-blue-500'} transition-all duration-300`}
              strokeWidth="8"
              strokeDasharray={365}
              strokeDashoffset={365 - (365 * progress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="58"
              cx="64"
              cy="64"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            {isComplete ? (
              <CheckCircle
                size={32}
                className="text-emerald-500 mb-1 animate-in zoom-in spin-in-12 duration-500"
              />
            ) : (
              <span className="text-2xl font-bold text-white font-mono">
                {Math.round(progress)}%
              </span>
            )}
          </div>
        </div>

        <h2 className="text-xl font-bold text-white mb-2">
          {isComplete ? 'Migration Complete!' : 'Migrating Endpoints...'}
        </h2>
        <p className="text-slate-400 text-sm text-center max-w-[250px] mb-8">
          {isComplete
            ? 'Your endpoints have been successfully deployed on Chainstack.'
            : 'Please keep this window open while we configure your nodes.'}
        </p>

        <div className="w-full bg-black/40 rounded-lg p-4 font-mono text-xs border border-slate-800 h-32 overflow-y-auto scrollbar-hide">
          {logs.map((log, i) => (
            <div key={i} className="mb-1.5 flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">➜</span>
              <span
                className={
                  i === logs.length - 1 ? 'text-white' : 'text-slate-500'
                }
              >
                {log}
              </span>
            </div>
          ))}
          {!isComplete && (
            <div className="flex items-center gap-2 text-slate-500 animate-pulse">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Processing...
            </div>
          )}
        </div>
      </div>

      {isComplete && (
        <button
          className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-lg transition-all shadow-lg shadow-emerald-900/20 animate-in fade-in slide-in-from-bottom-2"
          onClick={() => alert('Redirecting to dashboard...')}
        >
          Go to Dashboard
        </button>
      )}
    </div>
  );
}

export { MigrationStep }