export type Language = 'pt' | 'en' | 'es';

export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      portfolio: 'Portfólio',
      process: 'Processo',
      contact: 'Contato',
      cta: 'Fale Comigo'
    },
    hero: {
      badge: 'Design Engineer | Senior Product Designer',
      title1: 'MOLDANDO O FUTURO',
      title2: 'COM UX, ESTRATÉGIA',
      title3: 'E IA.',
      description: 'Da ideia ao produto: criando experiências digitais <strong>significativas e escaláveis.</strong>',
      btnPortfolio: 'Ver Portfólio',
      btnHire: 'Fale Comigo',
      clients: 'Clientes Satisfeitos'
    },
    about: {
      badge: 'Sobre Mim',
      years: 'anos',
      experience: 'de experiência',
      description1: 'Transformando complexidade em simplicidade através do design estratégico e focado no usuário.',
      title: 'Projetando experiências encantadoras que realmente funcionam',
      description2: 'Sou Product Designer baseado em Manaus, Brasil, focado em <strong class="font-bold text-brand-accent">transformar problemas complexos em produtos digitais simples, úteis e bem pensados.</strong> Trabalho na interseção entre <strong class="font-bold text-brand-accent">UX, interface, tecnologia e estratégia de produto</strong>, ajudando ideias a se tornarem soluções reais para pessoas e negócios.\n\nAo longo da minha trajetória venho desenvolvendo produtos digitais e projetos autorais, explorando desde <strong class="font-bold text-brand-accent">pesquisa e experiência do usuário até prototipação e lançamento de MVPs.</strong> Entre esses projetos estão aplicações voltadas para recrutamento, serviços digitais e novos modelos de produto.\n\nTambém contribuo com o ecossistema de tecnologia e inovação atuando como <strong class="font-bold text-brand-accent">mentor em hackathons e iniciativas colaborativas,</strong> apoiando equipes na criação de soluções digitais e no desenvolvimento de produtos centrados no usuário.\n\nAlém da carreira em design e tecnologia, sou pai, e acredito que criar bons produtos também significa pensar em <strong class="font-bold text-brand-accent">impacto, responsabilidade e no futuro</strong> das próximas gerações.',
      skills: ['Especialista em user-friendly', 'Wireframing', 'Colaborativo', 'Integração de IA']
    },
    skills: {
      badge: 'Especialidades',
      title: 'Habilidades Técnicas',
      categories: {
        ux: 'UX Design',
        ui: 'UI Design',
        product: 'Product Design',
        ai: 'AI e Tecnologia',
        empathy: {
          title: 'Empatia',
          text: 'Design é sobre pessoas, não apenas pixels. Se não entendermos as dores e necessidades reais do cliente, a técnica perde o sentido. Minha prioridade é traduzir sentimentos em soluções úteis.'
        }
      }
    },
    portfolio: {
      badge: 'Portfólio',
      title: 'Projetos Selecionados',
      description: 'Uma seleção de trabalhos que demonstram minha abordagem para resolver problemas complexos através do design.',
      viewCase: 'Ver Case Study',
      back: 'Voltar',
      sections: {
        challenges: 'Desafios',
        solution: 'Solução',
        results: 'Resultados'
      },
      projects: {
        recruitersys: {
          title: 'RecruiterSys – O Ecossistema de Recrutamento Tech',
          description: 'Eliminando o gap de comunicação e a ineficiência técnica no recrutamento de profissionais de TI.',
          fullDescription: 'Como Senior Product Designer & Lead de UX/UI, meu objetivo foi redesenhar a experiência de contratação técnica. O mercado de tecnologia enfrenta um paradoxo: há milhares de vagas e milhares de candidatos, mas o Time-to-Hire é extremamente alto. Identificamos que recruiters sofrem com fadiga na triagem e candidatos sentem que seus currículos caem em um "buraco negro".',
          role: 'Senior Product Designer & Lead de UX/UI',
          objective: 'Eliminar o gap de comunicação e a ineficiência técnica no recrutamento de profissionais de TI.',
          problem: {
            title: '01. O Problema: O "Abismo" no Recrutamento Tech',
            description: 'Através de pesquisas, identificamos três dores principais:',
            items: [
              'Para o Recrutador: Excesso de candidatos sem o stack técnico necessário, gerando fadiga na triagem manual.',
              'Para o Candidato (TI): Falta de transparência. O sentimento de "enviar currículos para um buraco negro".',
              'Contexto de Mercado: Plataformas genéricas não falam a língua do desenvolvedor (GitHub, portfólio, stack).'
            ]
          },
          process: {
            title: '02. O Processo (Double Diamond)',
            fase1: 'Fase 1: Descobrir (Imersão) - Entrevistas com Tech Recruiters para entender o fluxo de decisão. Descobrimos que a decisão depende de visualização rápida de: Stack Principal, Anos de Experiência e Localização.',
            fase2: 'Fase 2: Definir (Estratégia) - Convergimos os dados em uma estratégia de Ecossistema Dual: Dashboard ATS para recrutadores e App Mobile para candidatos.',
            fase3: 'Fase 3: Desenvolver (Ideação e Prototyping) - Criação de um Design System robusto com Dark Theme e Neon Green para gerar conexão emocional com o público (vibe coding).',
            northStar: 'North Star Metric: Reduzir a fricção na aplicação e garantir feedback em cada etapa.'
          },
          solutionA: {
            title: '03. Recruiter Dashboard (B2B)',
            description: 'Foco: Alta Densidade de Dados e Gestão Ágil. Uma interface que funciona como um centro de comando.',
            features: [
              'Pipeline Visual: Kanban customizado para o fluxo tech.',
              'Card de Candidato Inteligente: Informações críticas visíveis sem necessidade de clique.',
              'Analytics de Vaga: Gráficos em tempo real sobre a saúde do funil.'
            ]
          },
          solutionB: {
            title: '04. App de Candidatos (B2C)',
            description: 'Foco: Experiência Premium, Engajamento e Carreira. O companheiro de carreira do profissional de TI.',
            features: [
              'Perfil Tech-Centric: Destaque para portfólio e conexões com repositórios.',
              'Feedback em Tempo Real (The Tracker): Linha do tempo interativa mostrando o progresso do processo.'
            ]
          },
          results: {
            title: '05. Resultados e Conclusão',
            description: 'O RecruiterSys entrega uma solução onde o design atua como mediador de conflitos de mercado.',
            items: [
              'Para o negócio: Uma ferramenta escalável que organiza o caos do recrutamento.',
              'Para o usuário: Uma interface que respeita seu tempo e sua profissão.'
            ]
          },
          challenges: 'O principal desafio era consolidar dados complexos de múltiplos canais de recrutamento em uma única visão coerente sem sobrecarregar o usuário.',
          solution: 'Implementamos um ecossistema dual (Dashboard + App) com um Design System focado na legibilidade técnica e agilidade de decisão.',
          resultsSummary: 'Aumento na eficiência do time de RH e redução da ansiedade do candidato através de feedbacks em tempo real.',
          media: []
        },
        diario: {
          title: 'Diário de Bordo Aeronáutico',
          description: 'Plataforma estratégica de dados para modernizar o diário de bordo da aviação geral no Brasil.',
          fullDescription: 'O Hóruz eDB nasceu para transformar um processo manual e crítico em uma operação digital, segura e escalável. No lugar de apenas digitalizar formulários, o projeto foi desenhado como um ecossistema de dados para conformidade regulatória, eficiência operacional e impacto socioambiental.',
          challenges: 'O setor de aviação geral no Brasil, especialmente na Região Norte, ainda operava com processos analógicos e ineficientes. O principal ponto de fricção era o Diário de Bordo preenchido manualmente, gerando riscos de conformidade, lentidão operacional e alto custo de papel e armazenamento físico. Também havia impacto ambiental sem mecanismos de metrificação de GEE e ausência de comunicação efetiva entre aeronaves privadas e governo em cenários de emergência, como incêndios florestais.',
          solution: 'Como Product Designer e CDO, defini uma estratégia além da digitalização do papel: conformidade como experiência com validações em tempo real segundo normas da ANAC; decisão de uso em Tablet 10.4 para legibilidade e ergonomia em cabine; abordagem Green UX com metrificação de carbono no fluxo do diário para converter dado operacional em ativo ambiental; e arquitetura de informação orientada a hiperautomação para evoluir ao Sistema Oziris de gestão completa.',
          results: 'A solução final foi o Hóruz eDB, uma plataforma simples e intuitiva com autenticação segura, armazenamento centralizado e operação autorizada pela ANAC. O produto integrou impacto social e ambiental com suporte ao combate a queimadas na Amazônia via mensagens em tempo real para mobilizar aeronaves privadas, além de modelo SaaS B2B escalável por horas voadas. Como impacto, houve diferenciação de mercado como startup pioneira da Região Norte em eDB, eliminação total de papel, redução de custos logísticos e planejamento de expansão nacional com integração futura de Blockchain e banco de talentos (Programa Turnover).',
          media: [
            { type: 'image', url: 'diario-edb-horuz.png', caption: 'Interface do Hóruz eDB em tablet, otimizada para uso operacional em cabine e preenchimento com foco em conformidade.' },
            { type: 'image', url: 'diario-cockpit.png', caption: 'simulação do uso do EDB no cockpit do piloto' }
          ]
        },
        petplant: {
          title: 'Pet Plant App',
          description: 'Case Study: Pet Plant – Monitoramento Inteligente e UX Botânica',
          fullDescription: 'O Pet Plant consolida a tecnologia IoT com uma interface de gestão completa, atendendo às necessidades de controle biológico em um ecossistema digital.',
          role: 'Product Designer Sênior',
          objective: 'Criar uma interface que elimine a adivinhação, centralizando o controle biológico em um ecossistema digital.',
          problem: {
            title: 'O Desafio (O Problema)',
            description: 'O principal obstáculo para o sucesso no cultivo doméstico é a natureza "invisível" das necessidades das plantas. Sem dados concretos, o utilizador depende da tentativa e erro, o que gera frustração e a perda frequente de espécimes por cuidados inadequados (excesso de rega ou falta de nutrientes).',
            items: []
          },
          process: {
            title: 'Minha Atuação e Tomada de Decisão',
            fase1: 'Sincronização e Monitoramento: Desenhei a arquitetura de informação para garantir que os dados de Humidade, Luz, Fertilidade e Temperatura fossem o núcleo da interface, permitindo uma leitura técnica mas acessível.',
            fase2: 'Sistemas de Lembretes Inteligentes: Implementei um sistema de notificações baseado em necessidades reais. Em vez de lembretes fixos por tempo, o design foca em alertas baseados no status do sensor.',
            fase3: 'Memória de Cultivo (Logs e Histórico): Tomei a decisão de incluir uma seção de histórico para que o utilizador possa visualizar a evolução da planta e transformar o app num diário de bordo.',
            northStar: 'Curadoria e Catálogo: Projetei um repositório de espécies para carregar automaticamente parâmetros ideais.'
          },
          solutionA: {
            title: 'A Solução (Requisitos do Produto)',
            description: 'O Pet Plant consolida a tecnologia IoT com uma interface de gestão completa, atendendo aos seguintes requisitos fundamentais:',
            features: [
              'Dashboard de Monitoramento Vital: Controle em tempo real de luminosidade, temperatura ambiente, fertilidade do solo e níveis de humidade.',
              'Gestão de Tarefas e Lembretes: Interface dedicada para visualização de regas pendentes, adubação e manutenção geral.',
              'Histórico de Saúde: Registro cronológico de dados para análise de tendências e crescimento.',
              'Catálogo de Espécies: Biblioteca integrada para consulta de requisitos específicos e identificação botânica.',
              'Gestão Multidispositivo: Capacidade de monitorar e alternar entre diferentes sensores e plantas dentro do mesmo ambiente digital.'
            ]
          },
          results: {
            title: 'Resultados e Impacto',
            description: 'O design incentiva o aprendizado sobre botânica através da interação direta com os dados, elevando a confiança do utilizador.',
            items: [
              'Eficiência Operacional Doméstica: Redução do desperdício de água e insumos através de uma rotina de cuidados baseada em métricas precisas.',
              'Melhoria na Taxa de Sobrevivência: Acompanhamento contínuo que permite identificar problemas ambientais antes que se tornem letais para a planta.',
              'Experiência Educativa: O design incentiva o aprendizado sobre botânica através da interação direta com os dados, elevando a confiança do utilizador.'
            ]
          },
          challenges: 'O principal obstáculo para o sucesso no cultivo doméstico é a natureza "invisível" das necessidades das plantas. Sem dados concretos, o utilizador depende da tentativa e erro.',
          solution: 'O Pet Plant consolida a tecnologia IoT com uma interface de gestão completa, transformando a manutenção de plantas em um fluxo de trabalho organizado e gratificante.',
          resultsSummary: 'Eficiência operacional, melhoria na taxa de sobrevivência das plantas e uma experiência educativa botânica.',
          media: [
            { type: 'image', url: 'petplant1.png', caption: 'Telas do Pet Plant App: Login, Dashboard e Adicionar Planta' },
            { type: 'image', url: 'petplant2.png', caption: 'Variações de status da planta baseadas nos sensores (Feliz, Com Sede, Morto, Com Medo)' }
          ]
        },
        ailab: {
          title: 'VentHome – Além do Vento',
          description: 'O VentHome surgiu do questionamento de como um ventilador poderia se adaptar organicamente ao nosso ritmo de vida moderno.',
          fullDescription: 'O VentHome não nasceu apenas como um controle remoto Bluetooth; ele surgiu do questionamento de como um objeto tão analógico quanto um ventilador poderia se adaptar organicamente ao nosso ritmo de vida moderno, especialmente no clima desafiador que conhecemos bem em Manaus.',
          role: 'Product Designer (UX/UI)',
          objective: 'O VentHome entrega mais que um controle: ele entrega autonomia. Ao permitir que o usuário crie sua própria curva de ventilação, transformamos um produto de prateleira em um serviço personalizado.',
          problem: {
            title: 'O Desafio: Humanizando a IoT',
            description: 'Como designer que transita entre a arquitetura e o digital, sempre me fascinou como a tecnologia pode transformar nossa percepção do ambiente. Identificamos que a frustração do usuário comum vinha da falta de personalização — o "médio" de um aparelho raramente é o "médio" ideal para todos.',
            items: []
          },
          process: {
            title: 'Minha Atuação e Tomada de Decisão',
            fase1: 'Imersão e Empatia: Apliquei o Double Diamond não apenas como metodologia, mas como lente investigativa. Observei que a ventilação é situacional. Queria que o app entendesse o contexto.',
            fase2: 'Estratégia e Arquitetura: Minha bagagem em Design Systems influenciou a criação de uma estrutura escalável. O objetivo era criar uma hierarquia visual onde o status da conexão Bluetooth fosse onipresente, mas não intrusivo.',
            fase3: 'Craft e Interface: No desenvolvimento da UI, utilizei o Figma para prototipar interações que transmitissem leveza, usando whitespace para operar sem esforço.',
            northStar: 'Design Centrado no Contexto'
          },
          solutionA: {
            title: 'Decisões de Produto e Arquitetura',
            description: 'A base para uma interface conectada, escalável e não intrusiva.',
            features: [
              'Design Centrado no Contexto: Definimos categorias claras: Velocidades para controle direto, e Modos para automação.',
              'Foco no Usuário: Introduzimos o "Modo Gamer" e o "Modo Bike", entendendo que o público tech e entusiastas de esportes indoor demandam uma experiência diferenciada de fluxo de ar.',
              'O Visual: Optei por um layout limpo, onde o uso de espaços em branco (whitespace) permite que o usuário opere o app sem esforço visual, mesmo em ambientes com pouca luz.',
              'Componentização: Cada modo foi tratado como um módulo independente, facilitando a implementação de novos contextos de uso no futuro.'
            ]
          },
          results: {
            title: 'Entrega, Visão de Futuro e Toolbox',
            description: 'O VentHome entrega autonomia. Este projeto reforçou minha capacidade de traduzir necessidades complexas de hardware para interfaces mobile intuitivas.',
            items: [
              'Transformação de um hardware comum em um ecossistema inteligente, elevando o valor percebido do produto e criando um diferencial competitivo claro em um mercado de commodities (ventiladores convencionais).',
              'Entrega de uma interface intuitiva e adaptativa que elimina a frustração com controles remotos físicos limitados, oferecendo precisão no ajuste ambiental, customização e um modo noturno que preserva o ciclo circadiano do usuário.'
            ]
          },
          challenges: 'Como um objeto tão analógico quanto um ventilador poderia se adaptar organicamente ao nosso ritmo de vida moderno?',
          solution: 'O VentHome entrega mais que um controle: ele entrega autonomia. Transformamos um produto de prateleira em um serviço personalizado.',
          resultsSummary: 'UX Strategy, Double Diamond, UI Design e Prototipagem de alta fidelidade.',
          media: []
        }
      }
    },
    process: {
      badge: 'Metodologia',
      title: 'Processo de Design',
      steps: [
        { title: 'Descoberta', description: 'Entendimento do problema, stakeholders e objetivos de negócio.' },
        { title: 'Pesquisa', description: 'Pesquisa com usuários, análise competitiva e levantamento de dados.' },
        { title: 'Ideação', description: 'Brainstorming, fluxos de usuário e rascunhos de solução.' },
        { title: 'Design', description: 'Interface de alta fidelidade, prototipagem e sistemas de design.' },
        { title: 'Validação', description: 'Testes de usabilidade, iteração e acompanhamento de métricas.' }
      ]
    },
    contact: {
      badge: 'Contato',
      title1: 'Vamos construir algo',
      title2: 'extraordinário',
      description: 'Estou sempre aberto a novos desafios e colaborações em projetos inovadores.',
      form: {
        name: 'Nome',
        namePlaceholder: 'Seu nome',
        email: 'E-mail',
        emailPlaceholder: 'seu@email.com',
        message: 'Mensagem',
        messagePlaceholder: 'Conte-me sobre seu projeto...',
        submit: 'Enviar Mensagem'
      }
    },
    footer: {
      rights: 'Todos os direitos reservados.'
    }
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      portfolio: 'Portfolio',
      process: 'Process',
      contact: 'Contact',
      cta: 'Get in Touch'
    },
    hero: {
      badge: 'Design Engineer | Senior Product Designer',
      title1: 'MOLDANDO O FUTURO',
      title2: 'COM UX, ESTRATEGY',
      title3: 'AND AI.',
      description: 'From idea to product: creating meaningful and scalable digital experiences.',
      btnPortfolio: 'View Portfolio',
      btnHire: 'Hire Me',
      clients: 'Satisfied Clients'
    },
    about: {
      badge: 'About Me',
      years: 'years',
      experience: 'of experience',
      description1: 'Transforming complexity into simplicity through strategic and user-focused design.',
      title: 'Designing delightful user experiences that truly work',
      description2: 'I am a Product Designer based in Manaus, Brazil, focused on transforming complex problems into simple, useful, and well-thought-out digital products. I work at the intersection of UX, interface, technology, and product strategy, helping ideas become real solutions for people and businesses.\n\nThroughout my career, I have been developing digital products and personal projects, exploring everything from user research and experience to prototyping and launching MVPs. These projects include applications focused on recruitment, digital services, and new product models.\n\nI also contribute to the technology and innovation ecosystem by acting as a mentor in hackathons and collaborative initiatives, supporting teams in creating digital solutions and developing user-centered products.\n\nBeyond my career in design and technology, I am a father, and I believe that creating good products also means thinking about impact, responsibility, and the future of the next generations.',
      skills: ['User-friendly expert', 'Wireframing', 'Collaborative', 'AI Integration']
    },
    skills: {
      badge: 'Specialties',
      title: 'Technical Skills',
      categories: {
        ux: 'UX Design',
        ui: 'UI Design',
        product: 'Product Design',
        ai: 'AI & Technology',
        empathy: {
          title: 'Empathy',
          text: 'Design is about people, not just pixels. If we don\'t understand the real pains and needs of the client, the technique loses its meaning. My priority is to translate feelings into useful solutions.'
        }
      }
    },
    portfolio: {
      badge: 'Portfolio',
      title: 'Selected Projects',
      description: 'A selection of works that demonstrate my approach to solving complex problems through design.',
      viewCase: 'View Case Study',
      back: 'Back',
      sections: {
        challenges: 'Challenges',
        solution: 'Solution',
        results: 'Results'
      },
      projects: {
        recruitersys: {
          title: 'RecruiterSys',
          description: 'Intelligent system for optimizing large-scale recruitment and selection processes.',
          fullDescription: 'RecruiterSys is a corporate platform designed to transform how large companies manage talent. The focus was on creating an intuitive dashboard that reduces screening time by 40%.',
          challenges: 'The main challenge was to consolidate complex data from multiple recruitment channels into a single coherent view without overwhelming the user.',
          solution: 'We implemented an advanced AI-driven filtering system and a clear visual hierarchy, prioritizing conversion metrics and hiring quality.',
          results: '25% increase in HR team efficiency and a significant reduction in cost per hire.',
          media: [
            { type: 'image', url: 'https://picsum.photos/seed/recruitersys-1/1200/800', caption: 'Main dashboard with recruitment metrics' },
            { type: 'gif', url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJ6eXp6eXp6eXp6eXp6eXp6eXp6eXp6eXp6eXp6eXp6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxx66d3t9XW/giphy.gif', caption: 'Candidate screening flow' },
            { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', caption: 'Approval workflow demonstration' }
          ]
        },
        diario: {
          title: 'Aeronautical Logbook',
          description: 'Digitization of critical processes for air taxi companies, ensuring safety and compliance.',
          fullDescription: 'A robust mobile app for pilots and ground crews, replacing paper logs with a secure digital solution in compliance with ANAC regulations.',
          challenges: 'Ensuring the app worked offline in remote areas and that data entry was extremely fast and error-proof.',
          solution: 'Design focused on high-performance inputs and intelligent background data synchronization.',
          results: 'Total elimination of manual transcription errors and 100% digital regulatory compliance.',
          media: [
            { type: 'image', url: 'diario-edb-horuz.png', caption: 'Hóruz eDB tablet interface optimized for in-cockpit operation and compliant data entry.' },
            { type: 'image', url: 'diario-cockpit.png', caption: 'Real cockpit usage context highlighting critical mobility and workflow integration.' }
          ]
        },
        petplant: {
          title: 'Pet Plant App',
          description: 'Digital ecosystem for registration, identification, and specialized services for pets and plants.',
          fullDescription: 'A B2C platform connecting pet owners and plant enthusiasts to a network of services, from veterinarians to botanical specialists.',
          challenges: 'Creating a unified experience for two distinct niches while maintaining a friendly and fun interface.',
          solution: 'Use of gamification and an information architecture based on "life profiles" to facilitate navigation.',
          results: 'Over 50,000 active users in the first month and a high retention rate.'
        },
        ailab: {
          title: 'AI Product Design Project',
          description: 'Exploration of generative interfaces and AI-powered workflows.',
          fullDescription: 'An experimental lab focused on how Generative AI can be natively integrated into productivity tools.',
          challenges: 'Defining new interaction patterns for AI prompts and responses that don\'t feel invasive.',
          solution: 'Contextual interfaces that appear only when necessary, using the "Invisible Design" concept.',
          results: 'Development of a UI framework for AI applications that is being adopted by partner startups.'
        }
      }
    },
    process: {
      badge: 'Methodology',
      title: 'Design Process',
      steps: [
        { title: 'Discovery', description: 'Understanding the problem, stakeholders, and business goals.' },
        { title: 'Research', description: 'User research, competitive analysis, and data gathering.' },
        { title: 'Ideation', description: 'Brainstorming, user flows, and solution sketches.' },
        { title: 'Design', description: 'High-fidelity interface, prototyping, and design systems.' },
        { title: 'Validation', description: 'Usability testing, iteration, and metric tracking.' }
      ]
    },
    contact: {
      badge: 'Contact',
      title1: "Let's build something",
      title2: 'extraordinary',
      description: 'I am always open to new challenges and collaborations on innovative projects.',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send Message'
      }
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  es: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      portfolio: 'Portafolio',
      process: 'Proceso',
      contact: 'Contacto',
      cta: 'Hablemos'
    },
    hero: {
      badge: 'Design Engineer | Senior Product Designer',
      title1: 'MOLDANDO O FUTURO',
      title2: 'COM UX, ESTRATÉGIA',
      title3: 'E IA.',
      description: 'De la idea al producto: creando experiencias digitales significativas y escalables.',
      btnPortfolio: 'Ver Portafolio',
      btnHire: 'Contrátame',
      clients: 'Clientes Satisfechos'
    },
    about: {
      badge: 'Sobre Mí',
      years: 'años',
      experience: 'de experiencia',
      description1: 'Transformando la complejidad en simplicidad a través de un diseño estratégico y centrado en el usuario.',
      title: 'Diseñando experiencias de usuario encantadoras que realmente funcionen',
      description2: 'Soy Diseñador de Producto basado en Manaus, Brasil, enfocado en transformar problemas complejos em produtos digitales simples, útiles y bien pensados. Trabajo en la intersección entre UX, interfaz, tecnología y estrategia de producto, ayudando a que as ideas se conviertan en soluciones reales para personas y negocios.\n\nA lo largo de mi trayectoria he venido desarrollando productos digitales y proyectos de autor, explorando desde la investigación y experiencia del usuario hasta la prototipación y lanzamiento de MVPs. Entre estos proyectos se encuentran aplicaciones orientadas al reclutamiento, servicios digitales y nuevos modelos de producto.\n\nTambién contribuyo con el ecosistema de tecnología e innovación actuando como mentor en hackathons e iniciativas colaborativas, apoyando a equipos en la creación de soluciones digitales y en el desarrollo de productos centrados en el usuario.\n\nAdemás de mi carrera en diseño y tecnología, soy padre, y creo que crear buenos productos también significa pensar en el impacto, la responsabilidad y en el futuro de las próximas generaciones.',
      skills: ['Experto en usabilidad', 'Wireframing', 'Colaborativo', 'Integración de IA']
    },
    skills: {
      badge: 'Especialidades',
      title: 'Habilidades Técnicas',
      categories: {
        ux: 'UX Design',
        ui: 'UI Design',
        product: 'Diseño de Producto',
        ai: 'IA y Tecnología',
        empathy: {
          title: 'Empatía',
          text: 'El diseño trata sobre personas, no solo píxeles. Si no entendemos los dolores y necesidades reales del cliente, la técnica pierde el sentido. Mi prioridad es traducir sentimientos en soluciones útiles.'
        }
      }
    },
    portfolio: {
      badge: 'Portafolio',
      title: 'Proyectos Seleccionados',
      description: 'Una selección de trabajos que demuestran mi enfoque para resolver problemas complejos a través del diseño.',
      viewCase: 'Ver Caso de Estudio',
      back: 'Volver',
      sections: {
        challenges: 'Desafíos',
        solution: 'Solución',
        results: 'Resultados'
      },
      projects: {
        recruitersys: {
          title: 'RecruiterSys',
          description: 'Sistema inteligente para optimizar procesos de reclutamiento y selección a gran escala.',
          fullDescription: 'RecruiterSys es una plataforma corporativa diseñada para transformar la forma en que las grandes empresas gestionan el talento. El enfoque fue crear un tablero intuitivo que reduce el tiempo de selección en un 40%.',
          challenges: 'El principal desafío fue consolidar datos complejos de múltiples canales de reclutamiento en una sola vista coherente sin abrumar al usuario.',
          solution: 'Implementamos un sistema de filtrado avanzado impulsado por IA y una jerarquía visual clara, priorizando las métricas de conversión y la calidad de la contratación.',
          results: 'Aumento del 25% en la eficiencia del equipo de RR.HH. y una reducción significativa en el costo por contratación.'
        },
        diario: {
          title: 'Diario de Bordo Aeronáutico',
          description: 'Digitalización de procesos críticos para empresas de taxi aéreo, garantizando seguridad y cumplimiento.',
          fullDescription: 'Una aplicación móvil robusta para pilotos y tripulaciones de tierra, que reemplaza los diarios de papel con una solución digital segura que cumple con las regulaciones de la ANAC.',
          challenges: 'Garantizar que la aplicación funcionara sin conexión en áreas remotas y que la entrada de datos fuera extremadamente rápida y a prueba de errores.',
          solution: 'Diseño enfocado en entradas de alto rendimiento y sincronización inteligente de datos en segundo plano.',
          results: 'Eliminación total de errores de transcripción manual y cumplimiento normativo 100% digital.',
          media: [
            { type: 'image', url: 'diario-edb-horuz.png', caption: 'Interfaz del Hóruz eDB en tablet, optimizada para cabina y cumplimiento operacional.' },
            { type: 'image', url: 'diario-cockpit.png', caption: 'Contexto real de uso en cockpit, reforzando movilidad crítica e integración al vuelo.' }
          ]
        },
        petplant: {
          title: 'Pet Plant App',
          description: 'Ecosistema digital para registro, identificación y servicios especializados para mascotas y plantas.',
          fullDescription: 'Una plataforma B2C que conecta a dueños de mascotas y entusiastas de las plantas con una red de servicios, desde veterinarios hasta especialistas en botánica.',
          challenges: 'Crear una experiencia unificada para dos nichos distintos manteniendo una interfaz amigable y divertida.',
          solution: 'Uso de gamificación y una arquitectura de información basada en "perfiles de vida" para facilitar la navegación.',
          results: 'Más de 50.000 usuarios activos en el primer mes y una alta tasa de retención.'
        },
        ailab: {
          title: 'AI Product Design Project',
          description: 'Exploración de interfaces generativas y flujos de trabajo potenciados por IA.',
          fullDescription: 'Un laboratorio experimental enfocado en cómo la IA generativa puede integrarse de forma nativa en las herramientas de productividad.',
          challenges: 'Definir nuevos patrones de interacción para indicaciones y respuestas de IA que no parezcan invasivos.',
          solution: 'Interfaces contextuales que aparecen solo cuando es necesario, utilizando el concepto de "Diseño Invisible".',
          results: 'Desarrollo de un framework de UI para aplicaciones de IA que está siendo adoptado por startups asociadas.'
        }
      }
    },
    process: {
      badge: 'Metodología',
      title: 'Proceso de Diseño',
      steps: [
        { title: 'Descubrimiento', description: 'Comprensión del problema, partes interesadas y objetivos comerciales.' },
        { title: 'Investigación', description: 'Investigación de usuarios, análisis competitivo y recopilación de datos.' },
        { title: 'Ideación', description: 'Lluvia de ideas, flujos de usuarios y bocetos de soluciones.' },
        { title: 'Diseño', description: 'Interfaz de alta fidelidad, creación de prototipos y sistemas de diseño.' },
        { title: 'Validación', description: 'Pruebas de usabilidad, iteración y seguimiento de métricas.' }
      ]
    },
    contact: {
      badge: 'Contacto',
      title1: 'Construyamos algo',
      title2: 'extraordinario',
      description: 'Siempre estoy abierto a nuevos desafíos y colaboraciones en proyectos innovadores.',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Correo electrónico',
        emailPlaceholder: 'tu@email.com',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        submit: 'Enviar Mensaje'
      }
    },
    footer: {
      rights: 'Todos los direitos reservados.'
    }
  }
};
