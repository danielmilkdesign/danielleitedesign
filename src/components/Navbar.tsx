import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Languages, ChevronDown, Linkedin } from 'lucide-react';
import { translations, Language } from '../translations';

interface NavbarProps {
  language: Language;
  setLanguage: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setIsMenuOpen(false);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Handle hash scroll on initial load or navigation to home
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const languages = [
    { code: 'pt', label: 'PT', flag: 'https://flagcdn.com/w40/br.png' },
    { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'es', label: 'ES', flag: 'https://flagcdn.com/w40/es.png' }
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="border-b border-white/10">
          <div className="flex justify-between items-stretch h-[72px]">
            {/* Logo Section */}
            <div className="flex items-center px-6 md:px-12 border-r border-white/10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-sans font-bold tracking-tighter cursor-pointer"
                onClick={() => scrollTo('hero')}
              >
                DL<span className="text-brand-accent">.</span>
              </motion.div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 items-center justify-center space-x-12 px-8">
              {[
                { id: 'portfólio', label: t.nav.portfolio },
                { id: 'sobre', label: t.nav.about }, // Assuming "IA & Estratégia", "Artigos" are not in current nav array, keep existing but we'll try to match
                { id: 'habilidades', label: t.nav.skills },
                { id: 'processo', label: t.nav.process },
                { id: 'contato', label: t.nav.contact }
              ].map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => scrollTo(item.id)}
                  className="text-[11px] font-sans font-normal uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Language Switcher & CTA */}
            <div className="hidden md:flex items-center border-l border-white/10">
              <div className="flex items-stretch h-full">
                {/* Language (Optional but kept for functionality) */}
                <div className="relative flex items-center border-r border-white/10 px-6">
                  <button 
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-widest text-white/70 hover:text-white transition-all"
                  >
                    <span>{currentLang.label}</span>
                    <ChevronDown size={12} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isLangMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 mt-2 bg-brand-black p-1.5 min-w-[80px] border border-white/10 shadow-2xl"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code as Language);
                              setIsLangMenuOpen(false);
                            }}
                            className={`w-full flex items-center gap-2 px-3 py-2 text-[10px] uppercase tracking-widest transition-colors ${language === lang.code ? 'text-brand-accent' : 'hover:bg-white/5 text-white/70'}`}
                          >
                            {lang.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex items-center px-6">
                  <button 
                    onClick={() => scrollTo('contato')}
                    className="px-8 py-2.5 rounded-full text-[11px] font-sans uppercase tracking-[0.15em] border border-white/20 hover:border-white hover:text-white transition-all text-white/80"
                  >
                    CONTACT
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center px-6 border-l border-white/10">
              <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-8">
              {[
                { id: 'sobre', label: t.nav.about },
                { id: 'habilidades', label: t.nav.skills },
                { id: 'portfólio', label: t.nav.portfolio },
                { id: 'processo', label: t.nav.process },
                { id: 'contato', label: t.nav.contact }
              ].map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => scrollTo(item.id)}
                  className="text-3xl font-display font-bold text-left"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-8 flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as Language);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all ${language === lang.code ? 'bg-brand-accent border-brand-accent text-brand-black' : 'border-white/10 text-white/80 bg-white/5'}`}
                  >
                    <img 
                      src={lang.flag} 
                      alt={lang.label} 
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span className="text-sm font-bold uppercase tracking-widest">{lang.label}</span>
                  </button>
                ))}
              </div>

              <div className="pt-4">
                <a 
                  href="https://www.linkedin.com/in/daniel-rodrigo-leite/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white/80 font-bold uppercase tracking-widest text-xs hover:border-brand-accent hover:text-brand-accent transition-all"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
