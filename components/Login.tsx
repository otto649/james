
import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="max-w-lg w-full relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-[2rem] shadow-2xl shadow-slate-200 mb-6 transform -rotate-12 transition-transform hover:rotate-0 duration-500">
            <span className="text-white text-4xl font-black">A</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Argon</h1>
          <p className="text-slate-400 mt-4 font-semibold text-lg max-w-sm mx-auto leading-relaxed">Modern banking for the next generation of wealth.</p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Access Key / Username</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={22} />
                <input 
                  required
                  type="text" 
                  placeholder="alexander.dupont"
                  className="w-full bg-slate-50/50 border border-slate-100 rounded-[1.5rem] pl-14 pr-6 py-5 focus:bg-white focus:border-blue-500 outline-none transition-all font-bold text-slate-900 shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center ml-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Password</label>
                <button type="button" className="text-[10px] font-black text-blue-600 hover:text-blue-700 tracking-widest uppercase">Lost Key?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={22} />
                <input 
                  required
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-slate-50/50 border border-slate-100 rounded-[1.5rem] pl-14 pr-14 py-5 focus:bg-white focus:border-blue-500 outline-none transition-all font-bold text-slate-900 shadow-inner"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 ml-2">
              <input type="checkbox" id="remember" className="w-5 h-5 rounded-lg border-slate-200 text-slate-900 focus:ring-slate-900 transition-all cursor-pointer" />
              <label htmlFor="remember" className="text-xs text-slate-500 font-bold cursor-pointer select-none">Trust this device</label>
            </div>

            <button 
              disabled={isLoading}
              className={`w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-6 rounded-[1.5rem] shadow-2xl shadow-slate-200 transition-all active:scale-[0.97] flex items-center justify-center gap-3 text-lg
                ${isLoading ? 'opacity-90 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-[3px] border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Enter Vault
                  <ArrowRight size={22} strokeWidth={3} />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 pt-10 border-t border-slate-100 text-center">
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">New to Argon?</p>
            <button className="text-blue-600 font-black mt-3 hover:text-blue-700 transition-colors">Apply for Membership</button>
          </div>
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-slate-300 text-[10px] font-bold uppercase tracking-[0.3em] leading-relaxed">
            Encrypted with 256-bit bank grade security.<br />
            Member of the European Banking Association.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
