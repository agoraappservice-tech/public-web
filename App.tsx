
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Discover from './pages/Discover';
import Chat from './pages/Chat';
import News from './pages/News';
import Profile from './pages/Profile';
import { dataService } from './services/dataService';
import { COLORS } from './constants';

const NavItem: React.FC<{ to: string, label: string, icon: React.ReactNode }> = ({ to, label, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className="flex flex-col items-center justify-center space-y-1 transition-all">
      <div className={`p-2 rounded-xl transition-all ${isActive ? 'gradient-primary shadow-neon-pink' : 'text-gray-400'}`}>
        {icon}
      </div>
      <span className={`text-[10px] font-semibold ${isActive ? 'text-white' : 'text-gray-500'}`}>{label}</span>
    </Link>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(dataService.getCurrentUser());

  useEffect(() => {
    return dataService.subscribe((updatedUser) => {
      setUser(updatedUser);
    });
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-[#1a1c29] text-white">
      {/* Top Banner */}
      <header className="sticky top-0 z-50 glass px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center font-black text-xl italic">A</div>
          <h1 className="text-xl tracking-tighter">AGORA</h1>
        </div>
        <div className="flex items-center space-x-2 bg-[#31333e] px-3 py-1.5 rounded-full border border-gray-700">
          <span className="text-yellow-400 font-bold">{user.monedas}</span>
          <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
             <span className="text-[10px] text-black font-black">€</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pb-24 overflow-y-auto px-4 pt-4">
        {children}
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto glass border-t border-gray-800 px-8 py-4 flex justify-between items-center z-50 rounded-t-3xl">
        <NavItem to="/" label="Descubrir" icon={<IconDiscover />} />
        <NavItem to="/chat" label="Chat" icon={<IconChat />} />
        <NavItem to="/news" label="Noticias" icon={<IconNews />} />
        <NavItem to="/profile" label="Perfil" icon={<IconProfile />} />
      </nav>
    </div>
  );
};

const IconDiscover = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8L12 12l-4.2 4.2"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/></svg>
);
const IconChat = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);
const IconNews = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9"/></svg>
);
const IconProfile = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
