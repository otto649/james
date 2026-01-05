
import React from 'react';
import { CreditCard as CardIcon } from 'lucide-react';

const CreditCard: React.FC = () => {
  return (
    <div className="relative w-full h-56 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-200 cursor-pointer group">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950" />
      
      {/* Shimmer Effect */}
      <div className="shimmer absolute inset-0 opacity-10" />
      
      {/* Subtle Texture/Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      {/* Card Content */}
      <div className="relative h-full p-8 flex flex-col justify-between text-white">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-blue-200/60 uppercase tracking-[0.2em]">Available Balance</p>
            <p className="text-3xl font-bold tracking-tight">€12,450.00</p>
          </div>
          <div className="w-12 h-10 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform group-hover:rotate-12">
            <CardIcon size={24} className="text-blue-200" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="text-lg font-mono tracking-[0.25em] text-white/90">****</span>
            <span className="text-lg font-mono tracking-[0.25em] text-white/90">****</span>
            <span className="text-lg font-mono tracking-[0.25em] text-white/90">****</span>
            <span className="text-lg font-mono tracking-widest text-white">8421</span>
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[9px] text-blue-200/50 uppercase tracking-widest mb-1">Card Holder</p>
              <p className="text-sm font-bold tracking-wide">ALEXANDER DUPONT</p>
            </div>
            <div>
              <p className="text-[9px] text-blue-200/50 uppercase tracking-widest mb-1">Expires</p>
              <p className="text-sm font-bold">12 / 26</p>
            </div>
            <div className="flex -space-x-3 opacity-90">
              <div className="w-8 h-8 rounded-full bg-red-500 mix-blend-screen shadow-sm" />
              <div className="w-8 h-8 rounded-full bg-orange-500 mix-blend-screen shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
