
import React, { useState } from 'react';
import { Send, Users, CheckCircle2 } from 'lucide-react';

const QuickTransfer: React.FC = () => {
  const [iban, setIban] = useState('');
  const [amount, setAmount] = useState('');
  const [isSent, setIsSent] = useState(false);

  const contacts = [
    { name: 'Sarah', img: 'https://picsum.photos/seed/sarah/100/100' },
    { name: 'Michael', img: 'https://picsum.photos/seed/michael/100/100' },
    { name: 'Emma', img: 'https://picsum.photos/seed/emma/100/100' },
  ];

  const handleSend = () => {
    if (!iban || !amount) return;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setIban('');
      setAmount('');
    }, 3000);
  };

  if (isSent) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-inner">
          <CheckCircle2 size={40} />
        </div>
        <h4 className="text-xl font-bold text-slate-900">Transfer Successful</h4>
        <p className="text-slate-500 text-sm mt-1 leading-relaxed">
          €{parseFloat(amount).toFixed(2)} is on its way to <br/><span className="font-mono font-semibold">{iban.slice(-4)}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {contacts.map((contact) => (
          <button key={contact.name} className="flex flex-col items-center gap-2 flex-shrink-0 group">
            <img src={contact.img} alt={contact.name} className="w-12 h-12 rounded-full border-2 border-transparent group-hover:border-blue-500 transition-all p-0.5 grayscale hover:grayscale-0" />
            <span className="text-[10px] font-bold text-slate-500 group-hover:text-blue-600 uppercase tracking-tighter">{contact.name}</span>
          </button>
        ))}
        <button className="flex flex-col items-center gap-2 flex-shrink-0">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all bg-slate-50">
            <Users size={18} />
          </div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">New</span>
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 ml-1">Recipient IBAN</label>
          <input 
            type="text" 
            placeholder="ES91 0000 0000 0000 0000"
            value={iban}
            onChange={(e) => setIban(e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 ml-1">Amount</label>
          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 font-bold text-slate-900 text-lg">€</span>
            <input 
              type="number" 
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-10 pr-5 py-4 text-lg font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-200"
            />
          </div>
        </div>
        <button 
          onClick={handleSend}
          disabled={!iban || !amount}
          className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold py-5 rounded-3xl flex items-center justify-center gap-3 shadow-xl shadow-slate-200 transition-all active:scale-[0.98]"
        >
          <Send size={20} />
          <span className="tracking-wide">Confirm Transfer</span>
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;
