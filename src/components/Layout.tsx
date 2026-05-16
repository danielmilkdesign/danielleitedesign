import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Language } from '../translations';

interface LayoutProps {
  language: Language;
  setLanguage: (l: Language) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ language, setLanguage, children }) => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-brand-black text-white bg-[#050505]">
      {/* Background Gradients */}
      <div className="atmospheric-bg">
        <div className="glow-purple" />
        <div className="glow-blue" />
        <div className="glow-green" />
      </div>

      <Navbar language={language} setLanguage={setLanguage} />
      
      <main>
        {children}
      </main>

      <Footer language={language} />
    </div>
  );
};

export default Layout;
