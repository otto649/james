
import React, { useState } from 'react';
import { Search, Bell, Filter, Calendar, Sparkles } from 'lucide-react';
import CreditCard from './CreditCard';
import SpendingChart from './SpendingChart';
import RecentTransactions from './RecentTransactions';
import QuickTransfer from './QuickTransfer';

const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      {/* Top Header */}
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Financial Overview</h1>
          <p className="text-slate-400 font-medium mt-1">Insights for your personal wealth, Alexander.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search payments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white border border-slate-200 rounded-2xl pl-12 pr-6 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-80 shadow-sm transition-all"
            />
          </div>
          <button className="relative p-3.5 rounded-2xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all">
            <Bell size={22} />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-blue-600 rounded-full border-2 border-white"></span>
          </button>
          <div className="flex items-center gap-3 p-1 pl-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <span className="text-sm font-bold text-slate-700 hidden sm:block">Alexander D.</span>
            <img src="https://picsum.photos/seed/argon-user/100/100" className="w-10 h-10 rounded-xl object-cover" alt="Profile" />
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column - Financial Cards */}
        <div className="lg:col-span-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between h-56 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Savings</span>
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-2.5 py-1 rounded-lg tracking-widest">+12.4%</span>
                  </div>
                  <h3 className="text-4xl font-black text-slate-900">€24,850.40</h3>
                  <p className="text-xs text-slate-400 mt-2 font-semibold">Account ending in <span className="text-slate-900 font-mono">9012</span></p>
                </div>
                <div className="flex gap-3 relative">
                  <button className="flex-1 py-3.5 bg-slate-900 text-white rounded-2xl font-bold text-xs hover:bg-slate-800 transition-all active:scale-95">Transfer Funds</button>
                  <button className="flex-1 py-3.5 bg-slate-50 text-slate-900 rounded-2xl font-bold text-xs hover:bg-slate-100 transition-all border border-slate-100 active:scale-95">Statement</button>
                </div>
             </div>
             <CreditCard />
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Cash Flow Analysis</h3>
                <p className="text-sm text-slate-400 font-medium">Your spending velocity is lower than last week.</p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-600 rounded-2xl text-xs font-bold hover:bg-slate-100 transition-all border border-slate-100">
                <Calendar size={16} />
                Custom Range
              </button>
            </div>
            <SpendingChart />
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {searchQuery ? 'Filtered Transactions' : 'Recent Activity'}
              </h3>
              {!searchQuery && <button className="text-blue-600 font-bold text-sm hover:underline">Download CSV</button>}
            </div>
            <RecentTransactions searchQuery={searchQuery} />
          </div>
        </div>

        {/* Right Column - Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-10">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-slate-900">Express Pay</h3>
              <button className="p-2 text-slate-300 hover:text-slate-600"><Filter size={20} /></button>
            </div>
            <QuickTransfer />
          </div>

          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-slate-200 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-600 rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity" />
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                 <Sparkles size={16} />
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Argon Intelligence</span>
            </div>
            <h4 className="text-2xl font-bold mb-3 tracking-tight leading-tight">Smart Saving Insight</h4>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed font-medium">
              We identified <b>€150</b> in recurring subscriptions you haven't used in 3 months. Cancel them with one tap.
            </p>
            <button className="w-full bg-white text-slate-900 font-black py-4 rounded-2xl hover:bg-blue-50 transition-all text-sm tracking-wide">
              Show Recommendations
            </button>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <h3 className="text-xl font-black text-slate-900 mb-8">Scheduled Pay</h3>
             <div className="space-y-6">
                {[
                  { name: 'Loft Rent', date: 'Oct 30', amount: '€1,200.00', color: 'bg-indigo-500' },
                  { name: 'Fiber Internet', date: 'Nov 02', amount: '€55.00', color: 'bg-emerald-500' },
                  { name: 'Gym Membership', date: 'Nov 05', amount: '€45.00', color: 'bg-blue-500' }
                ].map((bill) => (
                  <div key={bill.name} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`w-1.5 h-12 rounded-full ${bill.color} opacity-40 group-hover:opacity-100 transition-opacity`} />
                      <div>
                        <p className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">{bill.name}</p>
                        <p className="text-xs text-slate-400 font-bold">{bill.date}</p>
                      </div>
                    </div>
                    <p className="font-black text-slate-900 text-sm">{bill.amount}</p>
                  </div>
                ))}
             </div>
             <button className="w-full mt-8 py-4 text-slate-400 hover:text-slate-900 font-bold text-xs uppercase tracking-widest transition-colors">
               Manage All Bills
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
