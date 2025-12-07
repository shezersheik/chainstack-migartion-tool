import React from 'react';

interface LoginStepProps {
  onNext: () => void;
}

const LoginStep = ({ onNext }: LoginStepProps) => {
  return (
    <div className="flex flex-col h-full p-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-slate-400 text-sm">
          Log in to your Chainstack account to sync your new endpoints.
        </p>
      </div>

      <div className="space-y-4 flex-1">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-1.5 ml-1">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              defaultValue="developer@example.com"
              className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-1.5 ml-1">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              defaultValue="password123"
              className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
            <svg
              className="absolute right-4 top-3.5 text-slate-500"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M8.47671 15.3137C9.11858 14.5239 10.465 14 12 14C13.535 14 14.8814 14.5239 15.5233 15.3137"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
          <label className="flex items-center gap-2 cursor-pointer hover:text-slate-300">
            <input
              type="checkbox"
              className="rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-offset-slate-900"
            />
            Remember me
          </label>
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Forgot password?
          </a>
        </div>
      </div>

      <div className="space-y-3 mt-auto">
        <button
          onClick={onNext}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-all shadow-lg shadow-blue-900/20"
        >
          Log In
        </button>
        <button className="w-full bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800 font-medium py-3 rounded-lg transition-all">
          Create Account
        </button>
      </div>
    </div>
  );
}

export { LoginStep }