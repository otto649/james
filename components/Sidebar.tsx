
import React from 'react';
import { 
  LayoutDashboard, 
  Wallet, 
  CreditCard, 
  ArrowRightLeft, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { DashboardTab } from '../types';

interface SidebarProps {
  activeTab: DashboardTab;
  setActiveTab: (tab: DashboardTab) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  collapsed, 
  setCollapsed,
  onLogout 
}) => {
  const menuItems = [
    { name: DashboardTab.OVERVIEW, icon: LayoutDashboard },
    { name: DashboardTab.ACCOUNTS, icon: Wallet },
    { name: DashboardTab.CARDS, icon: CreditCard },
    { name: DashboardTab.TRANSFERS, icon: ArrowRightLeft },
    { name: DashboardTab.SETTINGS, icon: Settings },
  ];

  return (
    <aside 
      className={`fixed left-0 top-0 h-full bg-white border-r border-slate-200 transition-all duration-500 z-50 flex flex-col
        ${collapsed ? 'w-20' : 'w-64'}`}
    >
      <div className="p-6 flex items-center justify-between mb-8">
        {!collapsed ? (
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Argon</span>
          </div>
        ) : (
          <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center mx-auto shadow-lg shadow-slate-200">
             <span className="text-white font-bold text-xl">A</span>
          </div>
        )}
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 
              ${activeTab === item.name 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            <item.icon size={22} strokeWidth={activeTab === item.name ? 2.5 : 2} />
            {!collapsed && <span className="font-semibold text-sm">{item.name}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100 space-y-2">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 p-3 rounded-2xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
        >
          <LogOut size={22} />
          {!collapsed && <span className="font-semibold text-sm">Sign Out</span>}
        </button>
        
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center p-2 rounded-xl hover:bg-slate-100 text-slate-400"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
