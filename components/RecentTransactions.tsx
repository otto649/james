
import React from 'react';
import { ShoppingBag, Coffee, Laptop, Zap, Film, TrendingUp, SearchX } from 'lucide-react';
import { MOCK_TRANSACTIONS } from '../constants';

interface RecentTransactionsProps {
  searchQuery?: string;
}

const getIcon = (category: string) => {
  switch (category) {
    case 'Electronics': return <Laptop size={18} />;
    case 'Shopping': return <ShoppingBag size={18} />;
    case 'Food & Drink': return <Coffee size={18} />;
    case 'Bills': return <Zap size={18} />;
    case 'Entertainment': return <Film size={18} />;
    default: return <TrendingUp size={18} />;
  }
};

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ searchQuery = '' }) => {
  const filteredTransactions = MOCK_TRANSACTIONS.filter(tx => 
    tx.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tx.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredTransactions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-400">
        <SearchX size={48} strokeWidth={1.5} className="mb-4 opacity-20" />
        <p className="font-medium">No transactions found matching "{searchQuery}"</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {filteredTransactions.map((tx) => (
        <div 
          key={tx.id} 
          className="flex items-center justify-between p-4 rounded-3xl hover:bg-slate-50 transition-all group cursor-pointer border border-transparent hover:border-slate-100"
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-sm
              ${tx.type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}
            >
              {getIcon(tx.category)}
            </div>
            <div>
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{tx.merchant}</p>
              <p className="text-xs text-slate-400 font-medium">{tx.category} • {tx.date}</p>
            </div>
          </div>
          <div className="text-right">
            <p className={`font-bold text-base ${tx.type === 'income' ? 'text-emerald-600' : 'text-slate-900'}`}>
              {tx.type === 'income' ? '+' : ''}{tx.amount.toLocaleString('en-EU', { style: 'currency', currency: 'EUR' })}
            </p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Completed</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactions;
