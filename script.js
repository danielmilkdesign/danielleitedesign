import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {
  createIcons,
  ArrowUpRight,
  Menu,
  X,
  ArrowDown,
  MessageSquare,
  ChevronDown,
  User,
  Briefcase,
  ArrowRight,
  Layers,
  Target,
  Check,
  Palette,
  Cpu,
  GitCommit,
  Mail,
  Linkedin,
  Phone,
  ArrowLeft
} from 'lucide';

// Ensure GSAP plugins are registered
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Only Used Icons for Ultra-Lightweight Bundle
    createIcons({
        icons: {
            ArrowUpRight,
            Menu,
            X,
            ArrowDown,
            MessageSquare,
            ChevronDown,
            User,
            Briefcase,
            ArrowRight,
            Layers,
            Target,
            Check,
            Palette,
            Cpu,
            GitCommit,
            Mail,
            Linkedin,
            Phone,
            ArrowLeft
        }
    });

    // 2. Initialize Core Performance Systems
    initHeroVideoPerformance();
    initLenis();
    initCursor();
    initEdgeGlowButtons();
    initCanvasBg();
    initGSAPAnimations();
    initScrollToTop();
    initMobileMenu();
    initTimelineScroll();
    initCaseModalListeners();
});

/* --------------------------------------------------------
   Hero Video Performance & Viewport Controller
   -------------------------------------------------------- */
let isHeroVisible = true;

function initHeroVideoPerformance() {
    const video = document.querySelector('#hero video');
    if (!video) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSaveData = Boolean(navigator.connection?.saveData);

    // Em telas pequenas, conexões lentas ou prefers-reduced-motion: não reproduz vídeo, exibe apenas o poster
    if (isMobile || isReducedMotion || isSaveData) {
        video.removeAttribute('autoplay');
        video.pause();
        return;
    }

    // IntersectionObserver para pausar o vídeo fora da viewport e retomar ao voltar
    const observer = new IntersectionObserver(([entry]) => {
        isHeroVisible = entry.isIntersecting;
        if (entry.isIntersecting) {
            if (video.paused && !document.hidden) {
                video.play().catch(() => {});
            }
        } else {
            if (!video.paused) {
                video.pause();
            }
        }
    }, { threshold: 0.1 });

    observer.observe(video);

    // Pausar na troca de aba (visibilitychange)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (!video.paused) video.pause();
        } else if (isHeroVisible) {
            video.play().catch(() => {});
        }
    });
}

/* --------------------------------------------------------
   1. Lenis Smooth Scroll Setup
   -------------------------------------------------------- */
let lenis = null;

function initLenis() {
    // Desativa smooth scroll artificial em dispositivos touch para melhor fluidez nativa
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
    });

    lenis.on('scroll', (e) => {
        ScrollTrigger.update();
        
        // Scroll Progress Bar
        const progress = (e.scroll / (e.limit || 1)) * 100;
        const progressBar = document.getElementById('scroll-progress');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        // Header Background state (Desktop >= 768px)
        const navbar = document.getElementById('navbar-inner');
        if (navbar && window.innerWidth >= 768) {
            if (e.scroll > 40) {
                navbar.classList.add('bg-dark-card/95', 'shadow-2xl', 'shadow-black/50', 'border-white/15');
                navbar.classList.remove('bg-dark-card/90', 'border-white/10');
            } else {
                navbar.classList.remove('bg-dark-card/95', 'shadow-2xl', 'shadow-black/50', 'border-white/15');
                navbar.classList.add('bg-dark-card/90', 'border-white/10');
            }
        }
    });

    // Unifica o loop de animação do Lenis com o GSAP Ticker
    gsap.ticker.add((time) => {
        lenis?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

/* --------------------------------------------------------
   Timeline Wheel Scroll Handler
   -------------------------------------------------------- */
function initTimelineScroll() {
    const container = document.getElementById('timeline-container');
    const section = document.getElementById('experience');
    if (!container || !section) return;

    const cards = gsap.utils.toArray('.timeline-card');
    if (!cards.length) return;

    ScrollTrigger.getAll().forEach(st => {
        if (st.vars && st.vars.trigger === section) st.kill();
    });

    const getScrollAmount = () => {
        const containerWidth = container.scrollWidth;
        const windowWidth = window.innerWidth;
        const extraPadding = windowWidth < 768 ? 40 : 250;
        return Math.max(0, containerWidth - windowWidth + extraPadding);
    };

    gsap.to(container, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.6,
            start: "top top",
            end: () => "+=" + (getScrollAmount() + 500),
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    });

    container.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            if ((container.scrollLeft < maxScrollLeft && e.deltaY > 0) || (container.scrollLeft > 0 && e.deltaY < 0)) {
                // Wheel horizontal fallback
            }
        }
    }, { passive: true });
}

/* --------------------------------------------------------
   2. Microkit Cursor Edge Glow Button Pattern
   -------------------------------------------------------- */
function initEdgeGlowButtons() {
    const glowElements = document.querySelectorAll('.edge-glow-btn, .edge-glow-btn-sm, .glow-card-border');
    
    glowElements.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            btn.style.setProperty('--x', `${x}px`);
            btn.style.setProperty('--y', `${y}px`);
        }, { passive: true });

        btn.addEventListener('mouseleave', () => {
            btn.style.setProperty('--x', `50%`);
            btn.style.setProperty('--y', `50%`);
        }, { passive: true });
    });
}

/* --------------------------------------------------------
   3. Custom Follower Cursor (Disabled on touch devices)
   -------------------------------------------------------- */
function initCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');

    if (!dot || !ring) return;

    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024) {
        dot.style.display = 'none';
        ring.style.display = 'none';
        return;
    }

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    function renderCursor() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(renderCursor);
    }
    renderCursor();

    const interactives = document.querySelectorAll('a, button, input, textarea, .edge-glow-btn, .edge-glow-btn-sm, .glow-card-border');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering-interactive'), { passive: true });
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering-interactive'), { passive: true });
    });
}

/* --------------------------------------------------------
   4. Ambient Grid Canvas (Throttled to 30fps & Paused on video/hidden tab)
   -------------------------------------------------------- */
function initCanvasBg() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }, { passive: true });

    const particles = Array.from({ length: 24 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.3 + 0.1
    }));

    let lastTime = 0;
    const fpsInterval = 1000 / 30; // 30 FPS target

    function draw(timestamp) {
        requestAnimationFrame(draw);

        if (document.hidden) return;
        if (isHeroVisible && window.innerWidth >= 768) return;

        const elapsed = timestamp - lastTime;
        if (elapsed < fpsInterval) return;
        lastTime = timestamp - (elapsed % fpsInterval);

        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 90) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${0.08 * (1 - dist / 90)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }
    requestAnimationFrame(draw);
}

/* --------------------------------------------------------
   5. GSAP Scroll Animations
   -------------------------------------------------------- */
function initGSAPAnimations() {
    gsap.from('.hero-reveal', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.05
    });

    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
        gsap.from(header, {
            y: 25,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 88%'
            }
        });
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
        gsap.from(card, {
            y: 35,
            opacity: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 88%'
            }
        });
    });

    const stepCards = document.querySelectorAll('.process-step');
    if (stepCards.length) {
        gsap.from(stepCards, {
            y: 25,
            opacity: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#process-grid',
                start: 'top 88%'
            }
        });
    }
}

/* --------------------------------------------------------
   6. Mobile Menu & Navigation
   -------------------------------------------------------- */
function initMobileMenu() {
    const openBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-nav-link');

    if (!openBtn || !closeBtn || !menu) return;

    const openMenu = () => {
        menu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
        if (lenis) lenis.stop();
    };

    const closeMenu = () => {
        menu.classList.add('translate-x-full');
        document.body.style.overflow = '';
        if (lenis) lenis.start();
    };

    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    links.forEach(l => l.addEventListener('click', closeMenu));
}

/* --------------------------------------------------------
   7. Scroll to Top
   -------------------------------------------------------- */
function initScrollToTop() {
    const btn = document.getElementById('scroll-top-btn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.remove('opacity-0', 'pointer-events-none');
            btn.classList.add('opacity-100');
        } else {
            btn.classList.add('opacity-0', 'pointer-events-none');
            btn.classList.remove('opacity-100');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.2 });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

/* --------------------------------------------------------
   8. Case Studies Data & Modal Logic
   -------------------------------------------------------- */
const projectsData = {
    recruitersys: {
        badge: "B2B SaaS | ATS & Recrutamento",
        title: "RecruiterSys — ATS de Alta Performance",
        subtitle: "Reduzindo o tempo de triagem de candidatos em 42% através de uma interface orientada a foco e dados",
        role: "Lead Product Designer & Design Engineer",
        coverImage: "capa-recruiter.webp",
        gallery: ["mock-1.webp"],
        problem: {
            title: "01. O Problema & Oportunidade",
            items: [
                "Recrutadores gastavam média de 3.5 minutos por currículo navegando em interfaces fragmentadas e lentas.",
                "Falta de visibilidade clara do pipeline de talentos, gerando perda de candidatos qualificados no funil.",
                "Sobrecarga cognitiva com tabelas densas e ausência de atalhos de teclado para triagem em lote."
            ]
        },
        process: {
            title: "02. Processo & Decisões de Design",
            fase1: "Imersão & Discovery: 14 entrevistas com tech recruiters para mapear a jornada de avaliação de perfis.",
            fase2: "Design System & Densidade de Informação: Criação de componentes ultra-compactos com tipografia legível.",
            fase3: "Micro-interações de Decisão Rápida: Atalhos de teclado (A/R/H) para Aprovar, Reprovar ou Hold em segundos."
        },
        solutions: [
            {
                title: "Painel de Triagem em Modo Foco",
                desc: "Visualização dividida entre currículo renderizado e scorecard de avaliação, eliminando alternância de abas."
            },
            {
                title: "Kanban Interativo de Vagas",
                desc: "Pipeline visual drag-and-drop com filtros dinâmicos instantâneos e indicadores de tempo em cada etapa."
            }
        ],
        results: "42% de redução no tempo médio de triagem, NPS dos recrutadores subiu de +18 para +64 no primeiro trimestre pós-lançamento.",
        tags: ["B2B SaaS", "Design System", "Design Engineering", "ATS", "Data Density"]
    },
    diario: {
        badge: "HealthTech & Produtividade",
        title: "Diário EDB — Gestão & Bem-Estar Clínico",
        subtitle: "Simplificando registros clínicos diários para profissionais de saúde com interface humanizada e rápida",
        role: "Senior Product Designer",
        coverImage: "diario-edb-horuz.webp",
        gallery: ["diario-cockpit.webp"],
        problem: {
            title: "01. O Cenário & Complexidade",
            items: [
                "Profissionais de saúde dedicavam até 2h extras por dia preenchendo prontuários burocráticos.",
                "Interfaces legadas sobrecarregadas com dezenas de campos obrigatórios descontextualizados."
            ]
        },
        process: {
            title: "02. Arquitetura de Informação & UX",
            fase1: "Mapeamento Clínico: Redução dos passos de registro de 9 telas para um fluxo progressivo de 2 etapas.",
            fase2: "Design Focado no Cuidador: Paleta calmante e tipografia otimizada para longas jornadas de uso.",
            fase3: "Templates Inteligentes: Pré-preenchimento contextual baseado no histórico recente do paciente."
        },
        solutions: [
            {
                title: "Cockpit Diário Unificado",
                desc: "Resumo executivo do dia do paciente com status de evolução, medicações e alertas em cards objetivos."
            }
        ],
        results: "Economia estimada de 45 minutos diários por profissional e 99.4% de adesão voluntária à ferramenta.",
        tags: ["HealthTech", "UX Research", "Mobile First", "Clinical Workflows"]
    },
    petplant: {
        badge: "B2C IoT & Sustentabilidade",
        title: "Pet Plant — Cultivo Inteligente",
        subtitle: "Conectando pessoas à natureza através de sensores IoT e uma interface botânica gamificada e acolhedora",
        role: "Product Designer & UI Specialist",
        coverImage: "mock-pet-plant.webp",
        gallery: ["petplant1.webp", "petplant2.webp"],
        problem: {
            title: "01. Desafio de Engajamento",
            items: [
                "Amantes de plantas urbanas perdem cultivos por falta de conhecimento sobre rega e iluminação ideais.",
                "Apps de jardinagem existentes focavam em excesso de gráficos técnicos desestimulantes."
            ]
        },
        process: {
            title: "02. Decisões de Arquitetura & UX",
            fase1: "Dashboard de Status Vital: Leitura rápida e visual das métricas biológicas da planta em tempo real.",
            fase2: "Alertas Baseados no Status do Sensor: Lembretes inteligentes ativados apenas quando os sensores detectam necessidade real.",
            fase3: "Histórico & Diário de Cultivo: Registro cronológico de saúde e crescimento para acompanhamento da evolução."
        },
        solutions: [
            {
                title: "Ecossistema de Monitoramento",
                desc: "Dashboard vital completo, gestão de tarefas de irrigação/adubação, catálogo integrado de espécies botânicas e gestão multidisciplinar de sensores."
            }
        ],
        results: "Redução do desperdício de água e insumos, aumento na taxa de sobrevivência das plantas e transição do cultivo para uma rotina educativa e gratificante.",
        tags: ["IoT B2C", "Product Design", "UX Botânica", "Mobile App", "Sensors Interface"]
    },
    ailab: {
        badge: "IoT & Automação Residencial",
        title: "VentHome — Além do Vento",
        subtitle: "Transformando um eletrodoméstico analógico em um serviço personalizado de ventilação inteligente",
        role: "Product Designer (UX/UI)",
        coverImage: "ventihome.webp",
        gallery: ["mockupventihome.webp"],
        problem: {
            title: "01. O Desafio: Humanizando a IoT",
            items: [
                "Como um ventilador convencional poderia se adaptar organicamente ao ritmo de vida moderno no clima desafiador de Manaus?",
                "Controles físicos tradicionais oferecem níveis rígidos (Fraco, Médio, Forte) que raramente atendem às necessidades reais dos usuários."
            ]
        },
        process: {
            title: "02. UX Strategy & Abordagem Contextual",
            fase1: "Imersão & Empatia: Entendimento de que a ventilação é situacional (dormir, praticar exercícios indoor, trabalhar em home office).",
            fase2: "Design Centrado no Contexto: Criação de perfis automatizados como 'Modo Gamer' e 'Modo Bike' para adequar a curva de ar ao ambiente.",
            fase3: "Minimalismo Visual: Layout limpo com uso estratégico de whitespace para operação sem esforço visual em ambientes escuros."
        },
        solutions: [
            {
                title: "Controle Inteligente & Curva de Ventilação",
                desc: "Módulo mobile via Bluetooth com status onipresente, presets situacionais e modo noturno focado na preservação do ciclo circadiano."
            }
        ],
        results: "Elevou o valor percebido de um produto commoditizado, oferecendo autonomia ao usuário e criando um diferencial competitivo claro no mercado de hardware.",
        tags: ["IoT UX Strategy", "Hardware to Software", "Contextual Design", "Mobile UI"]
    }
};

function openCaseModal(id) {
    const modal = document.getElementById('case-modal');
    const content = document.getElementById('modal-content');
    const data = projectsData[id];

    if (!modal || !content || !data) return;

    let solutionsHTML = data.solutions.map(s => `
        <div class="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <h4 class="text-base font-heading font-bold text-white">${s.title}</h4>
            <p class="text-slate-300 text-sm leading-relaxed">${s.desc}</p>
        </div>
    `).join('');

    let problemItemsHTML = data.problem.items.map(item => `
        <li class="flex items-start gap-2 text-slate-300 text-sm">
            <span class="text-brand-400 font-bold mt-0.5">•</span>
            <span>${item}</span>
        </li>
    `).join('');

    let galleryHTML = data.gallery ? data.gallery.map(imgSrc => `
        <div class="rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <img src="${imgSrc}" alt="Interface Showcase" class="w-full h-auto object-cover" loading="lazy" decoding="async">
        </div>
    `).join('') : '';

    content.innerHTML = `
        <div class="space-y-6">
            <div class="flex flex-wrap gap-2">
                <span class="px-3.5 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-semibold">${data.badge}</span>
                <span class="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold">${data.role}</span>
            </div>
            
            <div class="space-y-2">
                <h2 class="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">${data.title}</h2>
                <p class="text-cyan-400 text-base font-medium">${data.subtitle}</p>
            </div>

            <div class="rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <img src="${data.coverImage}" alt="${data.title}" class="w-full h-auto object-cover" loading="lazy" decoding="async">
            </div>

            <div class="h-px bg-white/10 w-full"></div>

            <div class="space-y-4">
                <h3 class="text-lg font-heading font-bold text-white">${data.problem.title}</h3>
                <ul class="space-y-2">
                    ${problemItemsHTML}
                </ul>
            </div>

            <div class="space-y-4">
                <h3 class="text-lg font-heading font-bold text-white">${data.process.title}</h3>
                <div class="space-y-2 text-sm text-slate-300">
                    <p>${data.process.fase1}</p>
                    <p>${data.process.fase2}</p>
                    <p>${data.process.fase3}</p>
                </div>
            </div>

            <div class="space-y-4">
                <h3 class="text-lg font-heading font-bold text-white">Soluções Entregues</h3>
                <div class="grid gap-3">
                    ${solutionsHTML}
                </div>
            </div>

            ${galleryHTML ? `
            <div class="space-y-4 pt-2">
                <h3 class="text-lg font-heading font-bold text-white">Visual & Screenshots</h3>
                <div class="grid gap-4">
                    ${galleryHTML}
                </div>
            </div>
            ` : ''}

            <div class="p-5 rounded-2xl bg-brand-950/40 border border-brand-500/30 space-y-2">
                <h3 class="text-base font-heading font-bold text-brand-300">Resultados & Impacto</h3>
                <p class="text-slate-300 text-sm leading-relaxed">${data.results}</p>
            </div>

            <div class="flex flex-wrap gap-2 pt-2">
                ${data.tags.map(t => `<span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-mono">${t}</span>`).join('')}
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);

    if (lenis) lenis.stop();
}

function closeCaseModal() {
    const modal = document.getElementById('case-modal');
    if (!modal) return;

    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300);

    if (lenis) lenis.start();
}

function initCaseModalListeners() {
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-case-id], [onclick*="openCaseModal"]');
        if (trigger) {
            e.preventDefault();
            const caseId = trigger.getAttribute('data-case-id') || 
                           (trigger.getAttribute('onclick') ? trigger.getAttribute('onclick').match(/'([^']+)'/)?.[1] : null);
            if (caseId) openCaseModal(caseId);
        }

        const closeBtn = e.target.closest('#close-modal-btn, #case-modal-backdrop, [onclick="closeCaseModal()"]');
        if (closeBtn) {
            e.preventDefault();
            closeCaseModal();
        }
    });

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('input[type="text"]')?.value || '';
            const email = form.querySelector('input[type="email"]')?.value || '';
            const message = form.querySelector('textarea')?.value || '';

            const subject = encodeURIComponent(`Contato de ${name} via Portfólio`);
            const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);

            window.location.href = `mailto:danielleitedesign@gmail.com?subject=${subject}&body=${body}`;

            const feedback = document.getElementById('form-feedback');
            if (feedback) {
                feedback.classList.remove('hidden');
            }
        });
    }
}

window.openCaseModal = openCaseModal;
window.closeCaseModal = closeCaseModal;
