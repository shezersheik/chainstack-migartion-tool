import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { IntroStep } from './components/steps/IntroStep';
import { LoginStep } from './components/steps/LoginStep';
import { ProviderStep } from './components/steps/ProviderStep';
import { EndpointsStep } from './components/steps/EndpointsStep';
import { MigrationStep } from './components/steps/MigrationStep';
import { mockEndpoints } from './utils/constants';

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [selectedEndpoints, setSelectedEndpoints] = useState<number[]>([]);
  const [migrationProgress, setMigrationProgress] = useState<number>(0);
  const [migrationLogs, setMigrationLogs] = useState<string[]>([]);

  useEffect(() => {
    if (step === 4 && selectedEndpoints.length === 0) {
      setSelectedEndpoints(mockEndpoints.map(e => e.id));
    }
  }, [step, selectedEndpoints.length]);

  useEffect(() => {
    if (step === 5) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 5;
        if (progress > 100) progress = 100;
        setMigrationProgress(progress);

        if (progress > 10 && migrationLogs.length === 0)
          setMigrationLogs(prev => [
            ...prev,
            'Initializing migration environment...',
          ]);
        if (progress > 30 && migrationLogs.length === 1)
          setMigrationLogs(prev => [
            ...prev,
            'Analyzing source configurations...',
          ]);

        if (progress > 60 && migrationLogs.length === 2)
          setMigrationLogs(prev => [
            ...prev,
            'Deploying Chainstack Global Nodes...',
          ]);
        if (progress > 90 && migrationLogs.length === 3)
          setMigrationLogs(prev => [...prev, 'Verifying RPC connectivity...']);
        if (progress >= 100) {
          setMigrationLogs(prev => [
            ...prev,
            'Migration completed successfully.',
          ]);
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [step, migrationLogs]);

  const toggleEndpoint = (id: number) => {
    if (selectedEndpoints.includes(id)) {
      setSelectedEndpoints(selectedEndpoints.filter(e => e !== id));
    } else {
      setSelectedEndpoints([...selectedEndpoints, id]);
    }
  };

  const handleBack = () => setStep(prev => prev - 1);
  const handleNext = (nextStep: number) => setStep(nextStep);

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center p-2">
      <div className="w-[375px] h-[600px] bg-[#0B1120] rounded-xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden font-sans relative ring-1 ring-slate-800">
        <Header step={step} onBack={handleBack} />

        <main className="flex-1 overflow-hidden relative bg-gradient-to-b from-[#0B1120] to-[#050912]">
          {step === 1 && <IntroStep onNext={() => handleNext(2)} />}
          {step === 2 && <LoginStep onNext={() => handleNext(3)} />}
          {step === 3 && (
            <ProviderStep
              selectedProvider={selectedProvider}
              onSelect={setSelectedProvider}
              onNext={() => handleNext(4)}
            />
          )}
          {step === 4 && (
            <EndpointsStep
              selectedEndpoints={selectedEndpoints}
              onToggle={toggleEndpoint}
              endpoints={mockEndpoints}
              onNext={() => handleNext(5)}
            />
          )}
          {step === 5 && (
            <MigrationStep progress={migrationProgress} logs={migrationLogs} />
          )}
        </main>

        {step > 1 && step < 5 && (
          <div className="bg-[#0B1120] p-4 flex justify-center gap-2 border-t border-slate-800">
            {[2, 3, 4, 5].map(s => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step >= s ? 'w-6 bg-blue-500' : 'w-1.5 bg-slate-700'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { App };
