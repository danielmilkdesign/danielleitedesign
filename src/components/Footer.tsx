import React from 'react';
import { translations, Language } from '../translations';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="py-6 px-6 border-t border-white/10 mt-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-sans uppercase tracking-[0.15em] text-white/50">
        <div>
          MANAUS, AMAZONAS <span className="mx-2 text-white/20">|</span> DISPONÍVEL REMOTO
        </div>
        
        <div className="flex items-center">
          <a href="https://www.linkedin.com/in/daniel-rodrigo-leite/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">LINKEDIN</a>
          <span className="mx-4 text-white/20">|</span>
          <a href="#" className="hover:text-brand-accent transition-colors">BEHANCE</a>
          <span className="mx-4 text-white/20">|</span>
          <a href="#" className="hover:text-brand-accent transition-colors">GITHUB</a>
        </div>
      </div>
      
      {/* Little Star icon in bottom right like the image */}
      <div className="absolute bottom-4 right-4 text-white/30">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1L19.1 4.9" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
