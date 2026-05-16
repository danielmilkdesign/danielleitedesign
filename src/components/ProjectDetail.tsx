import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Tag, Calendar, Layout, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { translations, Language } from '../translations';
import { Project } from '../types';
import capaRecruiter from '../assets/CAPA RECRUITER.png';
import group22 from '../assets/OSXDCD1 copiar 1.png';
import group24 from '../assets/Group 24.png';
import group25 from '../assets/Group 25.png';
import group27 from '../assets/Group 27.png';
import group28 from '../assets/Group 28.png';
import group29 from '../assets/Group 29.png';
import group30 from '../assets/Group 30.png';
import group31 from '../assets/Group 31.png';
import group32 from '../assets/Group 32.png';
import mock1 from '../assets/mock 1.png';

interface ProjectDetailProps {
  language: Language;
  projects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ language, projects }) => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const t = translations[language];

  const project = projects.find((p) => p.id === projectId);

  const resolveMediaUrl = (url: string) => {
    if (!url) return url;
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    if (url.startsWith(import.meta.env.BASE_URL)) {
      return url;
    }
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    return `${import.meta.env.BASE_URL}${cleanUrl}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors mx-auto"
          >
            <ArrowLeft size={20} />
            {t.portfolio.back}
          </button>
        </div>
      </div>
    );
  }

  // Map route/project ids to translation keys
  const projectTranslationMap: Record<string, string> = {
    recruitersys: 'recruitersys',
    'diario-aeronautico': 'diario',
    'pet-plant': 'petplant',
    'ai-lab': 'ailab'
  };

  // Get translated details
  const projectT = (t.portfolio.projects as any)[projectTranslationMap[project.id] || project.id];

  const renderRichCaseStudy = () => {
    return (
      <div className="space-y-32 mt-20">
        {/* Intro / Role & Objective */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12 border-white/10 w-full"
          >
            <h3 className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-6">Informações do Projeto</h3>
            <div className="space-y-8">
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Papel</p>
                <p className="text-xl font-display font-bold">{projectT.role}</p>
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Objetivo</p>
                <p className="text-lg text-white/80 leading-relaxed">
                  {project.id === 'recruitersys'
                    ? 'O objetivo do RecruiterSys foi estruturar uma experiência digital mais clara, eficiente e orientada a resultados para todo o fluxo de recrutamento em tecnologia, reduzindo ruídos entre recrutadores e candidatos, aumentando a qualidade do matching e transformando etapas operacionais em uma jornada mais fluida, com decisões guiadas por dados e interações mais objetivas para todos os envolvidos no processo.'
                    : projectT.objective}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 01. The Problem */}
        <section>
          <div className="w-full max-w-none mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">{projectT.problem.title}</h2>
            {project.id === 'recruitersys' ? (
              <div className="w-full space-y-8 text-white/80 leading-relaxed">
                <p className="text-xl md:text-2xl text-white/60 max-w-none">
                  O mercado de tecnologia enfrenta um paradoxo: ha milhares de vagas e milhares de candidatos, mas o Time-to-Hire e extremamente alto. Atraves de pesquisas, identificamos tres dores principais:
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <p className="glass-card p-6 border border-white/10 rounded-2xl">
                    <span className="text-yellow-400 font-semibold">Para o Recrutador:</span> Excesso de candidatos sem o stack tecnico necessario, gerando fadiga na triagem manual.
                  </p>
                  <p className="glass-card p-6 border border-white/10 rounded-2xl">
                    <span className="text-yellow-400 font-semibold">Para o Candidato (TI):</span> Falta de transparencia. O sentimento de "enviar curriculos para um buraco negro" sem nunca receber feedback.
                  </p>
                  <p className="glass-card p-6 border border-white/10 rounded-2xl">
                    <span className="text-yellow-400 font-semibold">Contexto de Mercado:</span> Plataformas genericas nao falam a lingua do desenvolvedor (GitHub, portfolio, stack) nem a necessidade de agilidade do RH Tech.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <p className="text-xl text-white/60 mb-10 leading-relaxed">{projectT.problem.description}</p>
                <ul className="space-y-6">
                  {projectT.problem.items.map((item: string, i: number) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0 text-xs font-bold">{i + 1}</div>
                      <p className="text-white/80 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          {project.id === 'recruitersys' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img src={group27} alt="Value Proposition Recruiter" className="w-full h-full object-contain bg-black/20" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img src={import.meta.env.BASE_URL + "Group 26.png"} alt="Value Proposition Candidate" className="w-full h-full object-contain bg-black/20" />
              </div>
            </div>
          )}
        </section>

        {/* 02. The Process */}
        <section className="relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">{projectT.process.title}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: projectT.process.fase1?.split(':')[0] || 'Fase 1', description: projectT.process.fase1 },
              { title: projectT.process.fase2?.split(':')[0] || 'Fase 2', description: projectT.process.fase2 },
              { title: projectT.process.fase3?.split(':')[0] || 'Fase 3', description: projectT.process.fase3 }
            ].filter(f => f.description).map((fase, i) => (
              <div key={i} className="glass-card p-8 border-white/10 flex flex-col h-full">
                <div className="text-yellow-500/20 font-display font-bold text-6xl mb-4 italic">0{i+1}</div>
                <h3 className="text-white font-bold text-lg md:text-xl mb-3">{fase.title}</h3>
                <p className="text-white/70 leading-relaxed flex-grow">{fase.description}</p>
              </div>
            ))}
          </div>

          {projectT.process.northStar && (
            <div className="mb-16">
              <div className="glass-card p-6 border-yellow-500/30 bg-yellow-500/5 text-center mb-12">
                 <span className="text-yellow-400 font-bold tracking-[0.2em] uppercase text-xs">{projectT.process.northStar}</span>
              </div>
            </div>
          )}

          {project.id === 'recruitersys' && (
            <>
              <div className="mb-16">
                <div className="rounded-3xl overflow-hidden border border-white/5 mb-8">
                   <img src={group24} alt="Process Overview" className="w-full h-auto" />
                </div>
                <div className="rounded-3xl overflow-hidden border border-white/5">
                   <img src={group25} alt="User Flow" className="w-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
                    <img src={group30} alt="Research Illustration 1" className="w-full h-full object-contain bg-black/20" />
                 </div>
                 <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
                    <img src={group31} alt="Research Illustration 2" className="w-full h-full object-contain bg-black/20" />
                 </div>
              </div>
            </>
          )}
        </section>

        {/* 03. & 04. Solutions */}
        {projectT.solutionA && (
          <section className="space-y-32">
            {/* Solution A */}
            <div className={`grid grid-cols-1 ${project.id === 'recruitersys' || project.id === 'ai-lab' ? 'lg:grid-cols-2' : ''} gap-16 items-center`}>
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">{projectT.solutionA.title}</h2>
                <p className="text-xl text-white/60 mb-10 leading-relaxed">{projectT.solutionA.description}</p>
                <ul className="space-y-4">
                  {projectT.solutionA.features.map((feature: string, i: number) => (
                    <li key={i} className="flex gap-3 items-center text-white/80">
                      <CheckCircle2 size={18} className="text-yellow-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {project.id === 'recruitersys' && (
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={group22} alt="Recruiter Dashboard" className="w-full h-auto" />
                </div>
              )}
              {project.id === 'ai-lab' && (
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={import.meta.env.BASE_URL + "mockupventihome.png"} alt="VentHome Mockup" className="w-full h-auto" />
                </div>
              )}
            </div>

            {project.id === 'pet-plant' && projectT.media && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectT.media.map((item: any, index: number) => (
                  <div key={index} className="rounded-2xl overflow-hidden border border-white/10 bg-black/20 flex flex-col justify-between">
                    <img 
                      src={resolveMediaUrl(item.url)} 
                      alt={item.caption || `Pet Plant Media ${index + 1}`} 
                      className="w-full h-auto max-h-[400px] object-contain p-4 mx-auto" 
                    />
                    {item.caption && (
                      <div className="p-4 bg-white/5 text-sm text-white/50 text-center italic mt-auto">
                        {item.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Solution B */}
            {projectT.solutionB && (
              <div className={`grid grid-cols-1 ${project.id === 'recruitersys' ? 'lg:grid-cols-2 lg:flex-row-reverse' : ''} gap-16 items-center`}>
                 <div className="lg:order-2">
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">{projectT.solutionB.title}</h2>
                  <p className="text-xl text-white/60 mb-10 leading-relaxed">{projectT.solutionB.description}</p>
                  <ul className="space-y-4">
                    {projectT.solutionB.features.map((feature: string, i: number) => (
                      <li key={i} className="flex gap-3 items-center text-white/80">
                        <CheckCircle2 size={18} className="text-yellow-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {project.id === 'recruitersys' && (
                  <div className="lg:order-1 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img src={mock1} alt="Candidate App" className="w-full h-auto" />
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* Personas */}
        {project.id === 'recruitersys' && (
          <section>
            <h2 className="text-3xl font-display font-bold mb-12 text-center">User Personas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <img src={group28} alt="Persona Candidate" className="rounded-2xl border border-white/10" />
               <img src={group29} alt="Persona Recruiter" className="rounded-2xl border border-white/10" />
            </div>
          </section>
        )}

        {/* 05. Results */}
        <section className="pb-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">{projectT.results.title}</h2>
            <p className="text-xl text-white/60 leading-relaxed mb-12">
              {projectT.results.description}
            </p>
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${projectT.results.items.length === 3 ? 'lg:grid-cols-3' : ''} gap-8 text-left`}>
              {projectT.results.items.map((item: string, i: number) => {
                let cardTitle = `Impacto ${i === 0 ? 'Negócio' : 'Usuário'}`;
                if (project.id === 'pet-plant' && i === 1) {
                  cardTitle = 'Benefício à Longo Prazo';
                }
                
                // Remove the "Melhoria na Taxa de Sobrevivência: " prefix from the text if it's the second card of pet-plant
                let displayItem = item;
                if (project.id === 'pet-plant' && i === 1 && item.startsWith('Melhoria na Taxa de Sobrevivência: ')) {
                  displayItem = item.replace('Melhoria na Taxa de Sobrevivência: ', '');
                }

                return (
                  <div key={i} className="glass-card p-8 border-white/10 h-full">
                     <p className="text-sm font-bold uppercase tracking-widest text-yellow-400 mb-2">{cardTitle}</p>
                     <p className="text-white/80">{displayItem}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {project.id === 'recruitersys' && (
            <>
              <div className="glass-card p-8 md:p-12 border-white/10 text-left">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">Validação</h3>
                <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                  <p>
                    Com todas as pesquisas realizadas, protótipo pronto após alterações nos testes de usabilidade, foi feito o lançamento da versão 1.0 Beta Testes no formato web responsivo, tornando seu uso mais fácil e acessível, coletando mais feedbacks e pontos de melhoria (apresentação do produto e novo formulário, feito especialmente para os eventos).
                  </p>
                  <p>
                    Participamos do Sebrae Startup 360º na Campus Party Manaus 2023 nos dias 12 e 13 de outubro. Também participamos do Senac Capacitar 2023 nos dias 22 e 23 de novembro, e da Expo Amazônia Bio & TIC, nos dias 28, 29 e 30 de novembro.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl mt-8">
                 <img src={group32} alt="Project Exhibition" className="w-full h-auto" />
              </div>
            </>
          )}
        </section>
      </div>
    );
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {t.portfolio.back}
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
              <Layout size={14} />
              {project.category}
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              {projectT?.fullDescription || project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm"
                >
                  <Tag size={14} className="text-yellow-400" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-yellow-500/5"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-contain bg-black/20"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        
        {projectT?.problem ? renderRichCaseStudy() : (
          <>
            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl border border-white/10"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{t.portfolio.sections.challenges}</h3>
                <p className="text-white/60 leading-relaxed">
                  {projectT.challenges}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/10"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{t.portfolio.sections.solution}</h3>
                <p className="text-white/60 leading-relaxed">
                  {projectT.solution}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 rounded-3xl border border-white/10"
              >
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{t.portfolio.sections.results}</h3>
                <p className="text-white/60 leading-relaxed">
                   {projectT.resultsSummary || projectT.results}
                </p>
              </motion.div>
            </div>

          </>
        )}

        {/* Media Gallery - Rendered for all projects below content */}
        {projectT.media && projectT.media.length > 0 && project.id !== 'pet-plant' && (
          <div className="space-y-12 mt-20">
            {projectT.media.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-3xl overflow-hidden border border-white/10 ${
                  project.id === 'diario-aeronautico' ? 'max-w-4xl mx-auto' : ''
                }`}
              >
                {item.type === 'video' ? (
                  <div className="aspect-video bg-white/5 flex items-center justify-center relative group cursor-pointer">
                    <video 
                      src={resolveMediaUrl(item.url)} 
                      controls 
                      className="w-full h-full object-cover"
                      poster={`https://picsum.photos/seed/${project.id}-thumb/1280/720`}
                    />
                  </div>
                ) : (
                  <img
                    src={resolveMediaUrl(item.url)}
                    alt={item.caption || `Project Detail ${index + 1}`}
                    className={`w-full h-full object-contain bg-black/20 ${
                      project.id === 'diario-aeronautico' ? 'max-h-[520px]' : ''
                    }`}
                    referrerPolicy="no-referrer"
                  />
                )}
                {item.caption && (
                  <div className="p-4 bg-white/5 text-sm text-white/50 text-center italic">
                    {item.caption}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Other Projects Section */}
        <div className="mt-32 border-t border-white/10 pt-20 pb-20">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              {language === 'pt' ? 'Veja Também' : 'See Also'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.id !== project.id).map((otherProject, idx) => (
              <motion.div
                key={otherProject.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link to={`/project/${otherProject.id}`} className="block">
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 glass-card border-white/5">
                    <img 
                      src={resolveMediaUrl(otherProject.imageUrl)} 
                      alt={otherProject.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-6 py-2.5 bg-yellow-400 text-black rounded-full font-bold uppercase tracking-widest text-[10px]">
                        {language === 'pt' ? 'Ver Caso de Estudo' : 'View Case Study'}
                      </div>
                    </div>
                  </div>
                </Link>
                <div>
                  <span className="text-yellow-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">{otherProject.category}</span>
                  <Link to={`/project/${otherProject.id}`}>
                    <h3 className="text-xl font-display font-bold mb-3 hover:text-yellow-400 transition-colors">{otherProject.title}</h3>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
