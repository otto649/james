
import React, { useState, useEffect } from 'react';
import { DashboardTab } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<DashboardTab>(DashboardTab.OVERVIEW);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) setCollapsed(true);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        onLogout={() => setIsLoggedIn(false)}
      />
      
      <main className={`flex-1 transition-all duration-300 p-4 md:p-10 
        ${collapsed ? 'ml-20' : 'ml-64'} 
        ${isMobile ? 'ml-20' : ''}`}
      >
        <div className="max-w-[1600px] mx-auto">
          {activeTab === DashboardTab.OVERVIEW && <Dashboard />}
          {activeTab !== DashboardTab.OVERVIEW && (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">✨</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{activeTab} Section</h2>
              <p className="text-slate-500 mt-2 max-w-md">
                We're currently polishing the {activeTab.toLowerCase()} experience. 
                Please check back shortly!
              </p>
              <button 
                onClick={() => setActiveTab(DashboardTab.OVERVIEW)}
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all"
              >
                Back to Dashboard
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
