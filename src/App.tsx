import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Search, 
  Users, 
  Lightbulb, 
  PenTool, 
  CheckCircle2,
  Cpu,
  Layout as LayoutIcon,
  Smartphone,
  Globe,
  Menu,
  X,
  Languages,
  Heart
} from 'lucide-react';

const WhatsappIcon = ({ size = 28, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.061-.301-.15-1.265-.462-2.405-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.202.049-.382-.029-.533-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345zM20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.895c-.002 2.1.554 4.14 1.604 5.94L0 24l6.398-1.67a11.908 11.908 0 0 0 5.642 1.41h.004c6.578 0 11.939-5.325 11.943-11.895 0-3.18-1.24-6.165-3.467-8.396zM12.045 21.696h-.002c-1.782 0-3.527-.47-5.056-1.37l-.361-.21-3.76.98.995-3.66-.23-.36A9.9 9.9 0 0 1 2.096 11.9c.002-5.46 4.456-9.9 9.948-9.9 2.655 0 5.145 1.035 7.02 2.91a9.92 9.92 0 0 1 2.906 7.005c-.004 5.46-4.455 9.9-9.925 9.9z" />
  </svg>
);
import { Project, SkillCategory, Article, DesignStep } from './types';
import { translations, Language } from './translations';
import ProjectDetail from './components/ProjectDetail';

import Layout from './components/Layout';
import WaveMesh from './components/WaveMesh';
import { ComplexWireframeSphere, WireframeSphere, WireframeGrid, DecoStar, ZigzagLine, CircleGrid, WireframeTorus, WireframePlane, Glass3DBox } from './components/Shapes';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function Home({ language }: { language: Language }) {
  const t = translations[language];

  const projects: Project[] = [
    {
      id: 'recruitersys',
      title: t.portfolio.projects.recruitersys.title,
      description: t.portfolio.projects.recruitersys.description,
      category: 'Product Design',
      imageUrl: import.meta.env.BASE_URL + 'CAPA RECRUITER.png',
      tags: ['UX Strategy', 'Dashboard', 'HR Tech']
    },
    {
      id: 'diario-aeronautico',
      title: t.portfolio.projects.diario.title,
      description: t.portfolio.projects.diario.description,
      category: 'UX/UI Design',
      imageUrl: import.meta.env.BASE_URL + 'HORUZ.png',
      tags: ['Mobile App', 'Aviation', 'Compliance']
    },
    {
      id: 'pet-plant',
      title: t.portfolio.projects.petplant.title,
      description: t.portfolio.projects.petplant.description,
      category: 'Mobile Design',
      imageUrl: import.meta.env.BASE_URL + 'PETPLANT.png',
      tags: ['B2C', 'IoT', 'Mobile']
    },
    {
      id: 'ai-lab',
      title: t.portfolio.projects.ailab.title,
      description: t.portfolio.projects.ailab.description,
      category: 'UX/UI & IoT',
      imageUrl: import.meta.env.BASE_URL + 'VENTIHOME.png',
      tags: ['IoT', 'Mobile App', 'Design System']
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: t.skills.categories.ux,
      skills: ['Pesquisa com Usuários', 'Arquitetura de Informação', 'Wireframing', 'Testes de Usabilidade', 'Jornadas do Usuário']
    },
    {
      title: t.skills.categories.ui,
      skills: ['Design Visual', 'Sistemas de Design', 'Prototipagem', 'Tipografia', 'Design Responsivo']
    },
    {
      title: t.skills.categories.product,
      skills: ['Estratégia de Produto', 'Alinhamento de Negócios', 'Design Thinking', 'Metodologia Ágil', 'Acompanhamento de KPIs']
    },
    {
      title: t.skills.categories.ai,
      skills: ['Engenharia de Prompt', 'UI Generativa', 'Ferramentas No-code', 'Viabilidade Técnica']
    },
    {
      title: t.skills.categories.empathy.title,
      skills: [],
      description: t.skills.categories.empathy.text
    }
  ];

  const designProcess: DesignStep[] = t.process.steps.map((step, idx) => ({
    ...step,
    icon: ['Search', 'Users', 'Lightbulb', 'PenTool', 'CheckCircle2'][idx]
  }));

  const IconComponent = ({ name, className }: { name: string, className?: string }) => {
    switch (name) {
      case 'Search': return <Search className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Lightbulb': return <Lightbulb className={className} />;
      case 'PenTool': return <PenTool className={className} />;
      case 'CheckCircle2': return <CheckCircle2 className={className} />;
      default: return <LayoutIcon className={className} />;
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden bg-[#050505]">
        <WaveMesh />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)] pointer-events-none z-[1]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full px-4 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Top Badge */}
            <div className="mb-10 inline-flex items-center justify-center px-6 py-2 rounded-full border border-brand-accent/50 text-[11px] font-sans text-brand-accent uppercase tracking-widest bg-brand-black/50 backdrop-blur-md">
              {t.hero.badge || "DESIGN ENGINEER | SENIOR PRODUCT DESIGNER"}
            </div>

            {/* Main Title - Using Serif and mimicking the image style */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[72px] font-serif font-medium tracking-tight mb-8 leading-[1.1] md:leading-[1.1] max-w-4xl mx-auto text-white">
              <span className="block mb-2">{t.hero.title1}</span>
              <span className="block mb-2">
                {t.hero.title2} <span className="text-brand-accent italic font-serif pr-2">{t.hero.title3}</span>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p 
              className="text-sm md:text-base text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-sans"
              dangerouslySetInnerHTML={{ __html: t.hero.description }}
            />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <button 
                onClick={() => scrollTo('portfólio')}
                className="group relative px-8 py-3.5 bg-white text-brand-accent rounded-full text-[11px] font-sans font-semibold uppercase tracking-[0.15em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto flex items-center justify-center gap-2"
              >
                {t.hero.btnPortfolio} <ArrowRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollTo('processo')}
                className="group relative px-8 py-3.5 bg-transparent border border-brand-accent text-brand-accent rounded-full text-[11px] font-sans font-semibold uppercase tracking-[0.15em] transition-all hover:bg-brand-accent/10 active:scale-95 w-full sm:w-auto"
              >
                {t.hero.btnHire}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding relative overflow-hidden">
        {/* Deco between About and Skills */}
        <div className="absolute -bottom-20 right-10 w-32 h-32 text-brand-accent/10 pointer-events-none">
          <DecoStar className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-0 w-40 text-brand-accent/10 opacity-20 pointer-events-none -translate-x-1/2">
          <ZigzagLine className="w-full" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden glass-card">
              <img 
                src={import.meta.env.BASE_URL + "avatarnovo.png"} 
                alt="Daniel Leite" 
                className="w-full h-full object-contain bg-black/20 hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
              
              {/* Experience Badge Overlay */}
              <div className="absolute bottom-8 left-8 glass-card p-6 border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-bold text-brand-accent">16+</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/80">{t.about.years}</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mt-1">{t.about.experience}</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-glow-purple/10 rounded-full blur-3xl" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">{t.about.badge}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">{t.about.title}</h2>
            <div className="space-y-6 text-base text-white/70 leading-relaxed mb-10">
              {t.about.description2.split('\n\n').map((paragraph, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
            <ul className="grid grid-cols-2 gap-4">
              {t.about.skills.map(item => (
                <li key={item} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/80">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                    <CheckCircle2 size={10} className="text-brand-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-48 h-48 text-brand-accent/5 pointer-events-none">
          <WireframeTorus className="w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">{t.skills.badge}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">{t.skills.title}</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 hover:bg-white/10 transition-all group h-full"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-brand-accent group-hover:scale-110 transition-transform">
                  {idx === 0 && <LayoutIcon size={28} />}
                  {idx === 1 && <PenTool size={28} />}
                  {idx === 2 && <Globe size={28} />}
                  {idx === 3 && <Cpu size={28} />}
                  {idx === 4 && <Heart size={28} />}
                </div>
                <h3 className="text-xl font-display font-bold mb-6">{category.title}</h3>
                {category.description ? (
                  <p className="text-white/60 text-sm leading-relaxed italic">
                    {category.description}
                  </p>
                ) : (
                  <ul className="space-y-4">
                    {category.skills.map(skill => (
                      <li key={skill} className="text-white/60 text-sm font-medium flex items-center">
                        <div className="w-1 h-1 bg-brand-accent rounded-full mr-3" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfólio" className="section-padding relative overflow-hidden">
        <div className="absolute bottom-0 left-10 w-56 h-56 text-brand-accent/5 pointer-events-none rotate-12">
          <CircleGrid className="w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">{t.portfolio.badge}</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold">{t.portfolio.title}</h2>
            </div>
            <p className="text-white/60 max-w-md text-sm leading-relaxed">
              {t.portfolio.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link to={`/project/${project.id}`} className="block">
                  <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 glass-card border-white/5">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-8 py-3.5 bg-brand-accent text-brand-black rounded-full font-bold uppercase tracking-widest text-xs">
                        {t.portfolio.viewCase}
                      </div>
                    </div>
                  </div>
                </Link>
                <div>
                  <span className="text-brand-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">{project.category}</span>
                  <Link to={`/project/${project.id}`}>
                    <h3 className="text-3xl font-display font-bold mb-4 hover:text-brand-accent transition-colors">{project.title}</h3>
                  </Link>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="processo" className="section-padding relative overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-10 text-brand-accent pointer-events-none">
          <WireframePlane className="w-full" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">{t.process.badge}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">{t.process.title}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {designProcess.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 text-center hover:bg-white/10 transition-all border-white/5 relative overflow-hidden"
              >
                <div className="text-brand-accent font-display font-bold opacity-10 text-4xl absolute top-3 left-3 select-none">
                  0{idx + 1}
                </div>
                <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-brand-accent/20">
                  <IconComponent name={step.icon} className="text-brand-black w-8 h-8" />
                </div>
                <h3 className="text-lg font-display font-bold mb-4">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">{t.contact.badge}</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-10 leading-tight text-white/60">{t.contact.title1} <br className="hidden md:block" /> <span className="text-white">{t.contact.title2}</span></h2>
              <p className="text-base md:text-lg text-white/70 mb-16 leading-relaxed">
                {t.contact.description}
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center lg:justify-center lg:pl-12"
            >
              <div className="flex flex-wrap gap-6">
                <a href="mailto:danielleitedesign@gmail.com" className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all">
                  <Mail size={28} />
                </a>
                <a href="https://www.linkedin.com/in/daniel-rodrigo-leite/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all">
                  <Linkedin size={28} />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5592992552746" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all">
                  <WhatsappIcon size={28} />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const t = translations[language];

  const projects: Project[] = [
    {
      id: 'recruitersys',
      title: t.portfolio.projects.recruitersys.title,
      description: t.portfolio.projects.recruitersys.description,
      category: 'Product Design',
      imageUrl: import.meta.env.BASE_URL + 'CAPA RECRUITER.png',
      tags: ['UX Strategy', 'Dashboard', 'HR Tech']
    },
    {
      id: 'diario-aeronautico',
      title: t.portfolio.projects.diario.title,
      description: t.portfolio.projects.diario.description,
      category: 'UX/UI Design',
      imageUrl: import.meta.env.BASE_URL + 'HORUZ.png',
      tags: ['Mobile App', 'Aviation', 'Compliance']
    },
    {
      id: 'pet-plant',
      title: t.portfolio.projects.petplant.title,
      description: t.portfolio.projects.petplant.description,
      category: 'Mobile Design',
      imageUrl: import.meta.env.BASE_URL + 'PETPLANT.png',
      tags: ['B2C', 'IoT', 'Mobile']
    },
    {
      id: 'ai-lab',
      title: t.portfolio.projects.ailab.title,
      description: t.portfolio.projects.ailab.description,
      category: 'UX/UI & IoT',
      imageUrl: import.meta.env.BASE_URL + 'VENTIHOME.png',
      tags: ['IoT', 'Mobile App', 'Design System']
    }
  ];

  return (
    <HashRouter>
      <ScrollToTop />
      <Layout language={language} setLanguage={setLanguage}>
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/project/:projectId" element={<ProjectDetail language={language} projects={projects} />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
