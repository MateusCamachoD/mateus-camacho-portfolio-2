export type Language = "en" | "pt";

export const translations = {
  en: {
    // Nav
    nav: {
      about: "About",
      experience: "Experience",
      work: "Work",
      skills: "Skills",
      letsTalk: "Let's talk",
      startConversation: "Start a conversation",
      openNav: "Open navigation",
      closeNav: "Close navigation",
    },

    // Hero
    hero: {
      openToRemote: "Open to remote",
      openToRelocation: "Open to relocation",
      titlePrefix: "I turn",
      titleWords: ["Ideas.", "Systems.", "Products."],
      titleSrOnly: "I turn ideas into systems and products.",
      intro:
        "I'm <strong>Mateus D. Camacho</strong>, a graduated software engineer, product builder, and founder. I combine engineering, AI, design, and business strategy to take digital products from first principles to production.",
      viewResume: "View resume",
      scrollToExplore: "Scroll to explore",
      basedIn: "Based in São Paulo · Working worldwide",
      strategy: "Strategy",
      strategySmall: "Find the right problem",
      experience: "Experience",
      experienceSmall: "Make it feel obvious",
      build: "Build",
      buildSmall: "Ship with confidence",
      systemSignal: "System signal",
      readyToScale: "Ready to scale",
      think: "Think",
      design: "Design",
      grow: "Grow",
      live: "Live",
    },

    // About
    about: {
      eyebrow: "More than a job title",
      title: "One builder. The complete product lifecycle.",
      description:
        "The best products happen when technology, experience, and commercial reality are designed together. That intersection is where I do my strongest work.",
      principle: "My operating principle",
      principleText:
        "Understand the business. Respect the user. Build the right system.",
    },

    // Stats
    stats: {
      careerChapters: "Career chapters",
      connectedDisciplines: "Connected disciplines",
      endToEndOwnership: "End-to-end ownership",
      fromWhatIf: "From",
      whatIf: '"What if?"',
      toShipped: "to shipped.",
    },

    // Experience
    experience: {
      eyebrow: "Experience",
      title: "A career built across the whole equation.",
      description:
        "Engineering shaped how I solve problems. Product, design, growth, and entrepreneurship expanded which problems I can solve.",
      visitCompany: "Visit official website",
      companySite: "Company site",
    },

    // Work / Projects
    work: {
      eyebrow: "Selected work",
      title: "Products, not just projects.",
      description:
        "Each SaaS platform looks beyond the interface: the problem, the product decision, the system underneath, and the real business outcome running in production.",
      viewCaseStudy: "View SaaS",
      productCaseStudy: "Live SaaS platform",
    },

    // Skills
    skills: {
      eyebrow: "Capabilities",
      title: "A toolkit built for product outcomes.",
      description:
        "Deep enough to build. Broad enough to ask why. Structured to bring the right discipline into the room at the right moment.",
    },

    // Certifications
    certifications: {
      eyebrow: "Continuous Mastery",
      title: "Executive Certifications & Specialized Learning",
      description:
        "A rigorous technical and strategic curriculum spanning architecture principles, conversion-driven design, and advanced software engineering.",
      status: "29 Verified Credentials",
      filters: {
        all: "All (29)",
        tech: "Engineering & Code",
        design: "Design & UI",
        marketing: "Growth & LP",
        language: "Languages",
      },
      list: [
        {
          id: "utfpr-degree",
          title: "Bachelor of Computer Software Engineering",
          issuer: "Federal University of Technology – Paraná (UTFPR)",
          date: "Aug 2020 – Aug 2025",
          details:
            "5-year formal engineering degree covering software architecture, distributed systems, data structures, algorithms, and clean design.",
          skills: "Software Engineering · Distributed Systems · Architecture",
          category: "tech",
        },
        {
          id: "clean-code",
          title: "Clean Code",
          issuer: "Rocketseat",
          date: "Apr 2024",
          details:
            "Advanced practices in writing clean code, refactoring complex systems, and eliminating code smells.",
          skills: "Refactoring · SOLID Principles · Maintainability",
          category: "tech",
        },
        {
          id: "spring-boot",
          title: "Spring Boot Fundamentals",
          issuer: "Rocketseat",
          date: "Aug 2024",
          details:
            "Building robust, secure REST APIs in the Java ecosystem with dependency injection and JPA.",
          skills: "Java · Spring Boot · REST APIs · JPA",
          category: "tech",
        },
        {
          id: "spec-fullstack",
          title: "Fullstack Specialization (React, Node, Web Ecosystem)",
          issuer: "Rocketseat",
          date: "Feb 2024 – Feb 2025",
          details:
            "End-to-end training combining reactive front-end interfaces with scalable cloud backends.",
          skills: "React · Node.js · TypeScript · Fullstack Arch",
          category: "tech",
        },
        {
          id: "spec-java",
          title: "Java & Spring Ecosystem Specialization",
          issuer: "Rocketseat",
          date: "Feb 2024 – Feb 2025",
          details:
            "Enterprise Java specialization focused on microservices architecture, DDD modeling, and automated testing.",
          skills: "Java 17+ · Spring Boot · Microservices · Docker",
          category: "tech",
        },
        {
          id: "spec-python",
          title: "Python & AI Specialization",
          issuer: "Rocketseat",
          date: "Feb 2024 – Feb 2025",
          details:
            "Developing high-concurrency APIs and intelligent process automation integrated with AI models.",
          skills: "Python · FastAPI · Automation · AI & LLMs",
          category: "tech",
        },
        {
          id: "spec-devops",
          title: "DevOps & Cloud Specialization",
          issuer: "Rocketseat",
          date: "Feb 2024 – Feb 2025",
          details:
            "Building automated CI/CD delivery pipelines, containerization, and scalable cloud infrastructure.",
          skills: "Docker · CI/CD · AWS · Linux Server",
          category: "tech",
        },
        {
          id: "spec-react",
          title: "React & Next.js Specialization",
          issuer: "Rocketseat",
          date: "Feb 2024 – Feb 2025",
          details:
            "Mastering SSR, SSG, and global state management with Next.js for high-performance applications.",
          skills: "React · Next.js · SSR/SSG · Zustand",
          category: "tech",
        },
        {
          id: "spec-node",
          title: "Node.js & Backend Architecture Specialization",
          issuer: "Rocketseat",
          date: "Feb 2024 – Feb 2025",
          details:
            "Building asynchronous, event-driven backends using Clean Architecture and SQL/NoSQL databases.",
          skills: "Node.js · Fastify · PostgreSQL · Clean Arch",
          category: "tech",
        },
        {
          id: "spec-react-native",
          title: "React Native & Mobile Specialization",
          issuer: "Rocketseat",
          date: "Feb 2024 – Feb 2025",
          details:
            "Creating fluid 60fps native mobile applications for iOS and Android with full native device API access.",
          skills: "React Native · Expo · Mobile UI/UX · iOS/Android",
          category: "tech",
        },
        {
          id: "spec-csharp",
          title: "C# & .NET Architecture Specialization",
          issuer: "Rocketseat",
          date: "Feb 2024 – Feb 2025",
          details:
            "Developing high-availability enterprise APIs with .NET 8, Entity Framework Core, and clean OOP architecture.",
          skills: "C# · .NET 8 · Entity Framework · Web APIs",
          category: "tech",
        },
        {
          id: "discover",
          title: "Discover (Web Essentials)",
          issuer: "Rocketseat",
          date: "Jan 2024",
          details:
            "Technical foundation in web engineering, semantic HTML5, modern CSS3 styling, and vanilla JavaScript.",
          skills: "HTML5 · CSS3 · JavaScript ES6+ · Git",
          category: "tech",
        },
        {
          id: "social-positioning",
          title: "Social Media Positioning",
          issuer: "Rocketseat",
          date: "Apr 2024",
          details:
            "Strategic personal branding for developers, technical value communication, and professional networking.",
          skills: "Personal Branding · LinkedIn · Technical Authority",
          category: "marketing",
        },
        {
          id: "lp-conversion",
          title: "Landing Page Conversion Strategies & Variations",
          issuer: "Staage",
          date: "Apr 2025",
          details:
            "Conversion rate optimization (CRO), A/B testing, and visual architecture designed for user conversion.",
          skills: "CRO · A/B Testing · Persuasive Design",
          category: "marketing",
        },
        {
          id: "landing-pages",
          title: "Landing Pages",
          issuer: "Staage",
          date: "Apr 2025",
          details:
            "Strategic development of high-performance landing pages combining persuasive copywriting and speed optimization.",
          skills: "Landing Pages · Copywriting · High Conversion",
          category: "marketing",
        },
        {
          id: "v4-onboarding",
          title: "V4 Company Onboarding",
          issuer: "V4 Company",
          date: "Mar 2025",
          details:
            "Executive growth marketing methodology (TECR) and analysis of vital business metrics like CAC and LTV.",
          skills: "V4 Method · Growth Marketing · CAC/LTV",
          category: "marketing",
        },
        {
          id: "smartphone-photo",
          title: "Professional Smartphone Photography",
          issuer: "Staage",
          date: "Apr 2025",
          details:
            "Art direction, visual composition, and lighting control for producing corporate advertising media.",
          skills: "Visual Composition · Lighting · Premium Aesthetic",
          category: "design",
        },
        {
          id: "canva-creatives",
          title: "Creatives with Canva",
          issuer: "Staage",
          date: "Apr 2025",
          details:
            "Creating high click-through rate (CTR) advertising creatives and scaling visual brand consistency.",
          skills: "Ad Design · High CTR · Brand Identity",
          category: "design",
        },
        {
          id: "creative-production",
          title: "Creative Production",
          issuer: "Staage",
          date: "Mar 2025",
          details:
            "Producing high-impact advertising assets with Adobe Photoshop, focusing on grid, masking, and manipulation.",
          skills: "Photoshop · Art Direction · Manipulation",
          category: "design",
        },
        {
          id: "design-fundamentals",
          title: "Design Fundamentals",
          issuer: "Staage",
          date: "Mar 2025",
          details:
            "Universal UI design principles: color theory, advertising typography, visual hierarchy, and aesthetic balance.",
          skills: "UI Design · Color Theory · Typography",
          category: "design",
        },
        {
          id: "cambridge",
          title: "Cambridge Assessment English",
          issuer: "Cambridge University Press & Assessment",
          date: "Jan 2022",
          details:
            "International English language proficiency (B2 First) achieved through 5 years of continuous, immersive study.",
          skills: "B2 Grade · 5 Years Continuous · Global Proficiency",
          category: "language",
        },
        {
          id: "rs-html-css-2019",
          title: "HTML & CSS Intensive — Web Foundations",
          issuer: "Rocketseat",
          date: "2019",
          details:
            "Daily intensive study of semantic HTML5 and advanced CSS3, including Flexbox, Grid, animations, and responsive design from scratch.",
          skills: "HTML5 · CSS3 · Flexbox · Grid · Responsive Design",
          category: "tech",
        },
        {
          id: "rs-js-2019",
          title: "JavaScript Fundamentals — Intensive Track",
          issuer: "Rocketseat",
          date: "2019",
          details:
            "Deep dive into JavaScript ES6+: closures, prototypes, async/await, fetch API, and DOM manipulation with daily hands-on projects.",
          skills: "JavaScript ES6+ · DOM · Async/Await · Fetch API",
          category: "tech",
        },
        {
          id: "rs-node-2020",
          title: "Node.js — Backend Development Intensive",
          issuer: "Rocketseat",
          date: "2020",
          details:
            "Building complete REST APIs with Node.js, Express, JWT authentication, and PostgreSQL/MongoDB databases in daily study sessions.",
          skills: "Node.js · Express · REST APIs · JWT · PostgreSQL",
          category: "tech",
        },
        {
          id: "rs-react-2020",
          title: "React.js — Frontend Development Intensive",
          issuer: "Rocketseat",
          date: "2020",
          details:
            "Mastering React hooks, component architecture, Context API, and consuming REST APIs. Daily coding challenges and real projects.",
          skills: "React · Hooks · Context API · Component Architecture",
          category: "tech",
        },
        {
          id: "rs-react-native-2021",
          title: "React Native — Mobile Development Intensive",
          issuer: "Rocketseat",
          date: "2021",
          details:
            "Cross-platform mobile development for iOS and Android using React Native and Expo, with daily practice on navigation, device APIs, and animations.",
          skills: "React Native · Expo · Mobile UI · Navigation",
          category: "tech",
        },
        {
          id: "rs-typescript-2021",
          title: "TypeScript — Strong Typing Intensive",
          issuer: "Rocketseat",
          date: "2021",
          details:
            "Applying TypeScript across full-stack projects: interfaces, generics, strict types, and advanced patterns applied to Node.js and React codebases.",
          skills: "TypeScript · Generics · Interfaces · Type Safety",
          category: "tech",
        },
        {
          id: "rs-api-rest-2021",
          title: "API Design & REST Architecture Intensive",
          issuer: "Rocketseat",
          date: "2021",
          details:
            "Deep dive into REST best practices, API versioning, error handling patterns, documentation with Swagger, and integration testing.",
          skills: "REST Design · API Versioning · Swagger · Testing",
          category: "tech",
        },
        {
          id: "rs-fullstack-2022",
          title: "Full Stack — End-to-End Project Intensive",
          issuer: "Rocketseat",
          date: "2022",
          details:
            "Final intensive year bringing together front-end, back-end, databases, and deployment into complete production-ready SaaS and web applications.",
          skills: "Full Stack · SaaS · Deployment · End-to-End Projects",
          category: "tech",
        },
      ],
    },

    // Contact
    contact: {
      eyebrow: "Start a conversation",
      title: "Have an ambitious product to build?",
      subtitle: "Let's make it real.",
      description:
        "I'm open to product engineering roles, leadership opportunities, and thoughtful collaborations where technology can create genuine leverage.",
    },

    // Footer
    footer: {
      tagline: "Software engineering with product perspective.",
      designedBy: "Designed and built with intent",
      backToTop: "Back to top ↑",
    },

    // Strengths
    strengths: {
      "Software Engineering": {
        title: "Software Engineering",
        copy: "I build reliable systems with the whole product in view—from data and APIs to the final interaction.",
      },
      "Product Thinking": {
        title: "Product Thinking",
        copy: "I turn uncertainty into a clear problem, a deliberate bet, and a path to learning.",
      },
      "UX/UI Design": {
        title: "UX/UI Design",
        copy: "I make complex workflows feel obvious, with interfaces that earn trust through clarity.",
      },
      "AI Automation": {
        title: "AI Automation",
        copy: "I apply AI where it changes the workflow—not where it merely decorates the pitch.",
      },
      "Business Strategy": {
        title: "Business Strategy",
        copy: "I connect technical choices to positioning, growth, operating leverage, and commercial reality.",
      },
      Leadership: {
        title: "Leadership",
        copy: "I create momentum through ownership, sharp priorities, and calm communication across disciplines.",
      },
    },

    // Skill groups
    skillGroups: {
      Frontend: "Frontend",
      Backend: "Backend",
      Databases: "Databases",
      Cloud: "Cloud",
      DevOps: "DevOps",
      AI: "AI",
      "UX/UI": "UX/UI",
      Product: "Product",
      Business: "Business",
      Leadership: "Leadership",
    },

    // Experience data
    experienceData: {
      Desperte: {
        chapter: "Venture building",
        period: "Jan 2025 — Present · 1 yr 7 mos",
        location: "Francisco Beltrão, Brazil · Remote",
        summary:
          "Leading the development of scalable growth systems for companies by strengthening their business strategy, commercial operations, and technology infrastructure. Operating at the intersection of marketing, sales, and engineering to transform fragmented workflows into predictable, data-driven growth engines.",
        impact: [
          "Diagnosing strategic bottlenecks and designing custom software solutions to drive operational intelligence",
          "Optimizing customer journeys, sales funnels, and market positioning for sustainable revenue growth",
          "Implementing end-to-end process automation and KPI tracking to support data-driven decision making",
          "Aligning branding, user experience (UX), and commercial strategy from first principles to execution",
        ],
      },
      "V4 Company Senior": {
        chapter: "Growth & strategy",
        period: "Aug 2025 — Dec 2025 · 5 mos",
        location: "Rio de Janeiro, Brazil · Remote",
        summary:
          "Led the strategic management of high-value client accounts, coordinating cross-functional teams across paid media, content, design, and technology to execute integrated growth strategies and deliver measurable business outcomes.",
        impact: [
          "Conducted strategic discovery and alignment using the SMART framework to translate business goals into actionable roadmaps",
          "Managed complex workflows and cross-departmental delivery via eKyte, ensuring operational efficiency and on-time execution",
          "Optimized sales funnels, paid advertising campaigns, and brand positioning to maximize client ROI and conversion rates",
          "Analyzed core KPIs and performance metrics to uncover actionable insights for continuous growth and client retention",
        ],
      },
      "V4 Company Project": {
        chapter: "Product experience",
        period: "Mar 2025 — Jul 2025 · 5 mos",
        location: "Francisco Beltrão, Brazil · On-site",
        summary:
          "Served as Project Lead and Design Specialist, delivering high-impact visual and strategic design solutions while managing digital projects focused on brand differentiation, user experience, and measurable conversion growth.",
        impact: [
          "Designed and developed high-converting, responsive landing pages applying advanced UX/UI best practices and speed optimization",
          "Created comprehensive brand identity systems including logos, typography, and visual assets across digital and print channels",
          "Led agile project workflows in eKyte, balancing high aesthetic standards with strict delivery timelines",
          "Collaborated with paid media teams to design, execute, and analyze A/B tests that significantly improved campaign conversion rates",
        ],
      },
      "Ellon Technology": {
        chapter: "Engineering",
        period: "Feb 2025 — Mar 2025 · 2 mos",
        location: "Francisco Beltrão, Brazil · On-site",
        summary:
          "Developed and maintained robust full-stack web applications using React for the frontend and GoLang for the backend, focusing on high-performance architecture, database optimization, and seamless end-to-end integration.",
        impact: [
          "Architected and shipped responsive frontend interfaces in React paired with highly performant GoLang backend services",
          "Designed and optimized PostgreSQL database schemas and complex queries to support mission-critical application features",
          "Diagnosed and resolved complex full-stack support tickets, deploying timely patches to maintain system stability in production",
          "Actively contributed to daily sprint planning, code versioning workflows, and cross-team synchronization to streamline delivery",
        ],
      },
      "Assessoria 74": {
        chapter: "Delivery leadership",
        period: "Jan 2025 — Feb 2025 · 2 mos",
        location: "Dois Vizinhos, Brazil · On-site",
        summary:
          "Led the end-to-end delivery of custom digital products—including an NLP-powered AI WhatsApp assistant, an internal CRM system, and conversion-optimized landing pages—bridging UX design, technical architecture, and business metrics.",
        impact: [
          "Built an automated WhatsApp assistant with natural language processing (NLP) using Node.js and React, drastically reducing response times",
          "Structured product backlogs and developed a full-stack internal CRM (React/Node.js) to optimize internal workflows and client management",
          "Designed intuitive user interfaces and prototypes in Figma, prioritizing usability, clarity, and rapid feature adoption",
          "Combined persuasive copywriting, SEO techniques, and React/TailwindCSS to launch high-speed, high-converting landing pages",
        ],
      },
      RevEx: {
        chapter: "Product engineering",
        period: "Jan 2023 — Dec 2024 · 2 yrs",
        location: "Remote",
        summary:
          "Engaged in the full software development lifecycle of enterprise web applications using React and Java with Spring Boot, actively combining product discovery, UX collaboration, and rigorous engineering practices.",
        impact: [
          "Conducted stakeholder interviews and user journey mapping to translate complex requirements into structured product backlogs",
          "Built responsive, scalable web applications with React on the frontend and robust Java/Spring Boot REST APIs on the backend",
          "Collaborated closely with UX/UI designers on wireframing, prototyping, and usability testing to ensure user-centered interfaces",
          "Implemented automated testing and validation workflows, significantly reducing production defects and improving system reliability",
        ],
      },
      "SS Systems": {
        chapter: "Foundation",
        period: "Jan 2022 — Dec 2022 · 1 yr",
        location: "Dois Vizinhos, Brazil · On-site",
        summary:
          "Participated in the full software delivery lifecycle—from requirements analysis and implementation to QA handoff and technical support—solving complex database and business logic challenges for enterprise systems.",
        impact: [
          "Resolved over 80 software development and support requests while maintaining strict compliance with quality and architecture standards",
          "Worked extensively with PostgreSQL databases, complex reporting engines, and legacy business software maintenance",
          "Established issue prioritization criteria and resolution metrics, contributing to faster response times and documented support workflows",
          "Collaborated closely with cross-functional developers and QA engineers during integration and testing to accelerate delivery cycles",
        ],
      },
    },

    // Projects data
    projectsData: {
      ruralizai: {
        eyebrow: "Dairy & Livestock Intelligence SaaS · Live Platform",
        oneLiner:
          "A specialized SaaS for dairy producers featuring real-time herd tracking, gain forecasting, financial management, and milk pricing — expanding into livestock, large-animal veterinary, and dairy processing modules.",
        description:
          "RuralizAI is a live SaaS platform built specifically for dairy producers. The current live module provides real-time herd monitoring with smart alerts, profit and yield forecasting, financial management, and live milk pricing analytics. Long-term, the ecosystem is expanding into specialized modules for beef producers, large-animal veterinarians, and dairy processing plants (laticínios).",
        challenge:
          "Dairy producers face volatile milk prices, complex herd management, and tight profit margins. Existing tools are either outdated spreadsheets or overly complex systems that don't provide real-time alerts or predictive financial gain forecasting.",
        solution:
          "An all-in-one live SaaS module where dairy producers track herd health and milk yield in real time, receive predictive gain forecasts and automated alerts, manage farm financials, and monitor milk pricing trends to maximize profitability.",
        results: [
          "Live SaaS module with real-time herd tracking, automated alerts, and financial management",
          "Predictive yield and gain forecasting combined with live milk market pricing",
          "Clear product roadmap expanding to beef cattle, veterinary, and dairy plant modules",
        ],
        status: "Live SaaS · Active Platform",
      },
      telou: {
        eyebrow: "Cloud Digital Signage SaaS · Built by 3 Co-Founders",
        oneLiner:
          "An indoor digital media SaaS that eliminates USB flash drives — manage cloud playlists, schedule remote screens in 3 seconds, and run native Play Store TV apps across 125+ active monthly subscribers.",
        description:
          "Telou is a live digital signage SaaS built by 3 co-founders that completely eliminates the need for USB drives in indoor media. Users create playlists, upload cloud media, and schedule campaigns across screens remotely — updating any TV anywhere in just 3 seconds. Featuring a native app available on the Play Store for smart TVs, Telou already powers over 125 active monthly paying subscribers.",
        challenge:
          "Traditional indoor media providers waste hours physically updating displays with flash drives (pen drives) or dealing with clunky software. They needed an instant, remote cloud scheduling tool with a seamless TV app.",
        solution:
          "A high-speed cloud platform and Play Store TV app where indoor media operators create playlists, schedule broadcast times, and push remote content updates to hundreds of screens in under 3 seconds.",
        results: [
          "Over 125 active monthly recurring subscribers (clientes mensalistas ativos) using the platform",
          "Eliminated physical USB drives with 3-second remote cloud content scheduling",
          "Native TV app published on the Google Play Store for instant display onboarding",
        ],
        status: "Live SaaS · 125+ Subscribers",
      },
    },
  },

  pt: {
    // Nav
    nav: {
      about: "Sobre",
      experience: "Experiência",
      work: "Trabalhos",
      skills: "Habilidades",
      letsTalk: "Vamos conversar",
      startConversation: "Iniciar conversa",
      openNav: "Abrir navegação",
      closeNav: "Fechar navegação",
    },

    // Hero
    hero: {
      openToRemote: "Aberto a remoto",
      openToRelocation: "Aberto a realocação",
      titlePrefix: "Eu transformo",
      titleWords: ["Ideias.", "Sistemas.", "Produtos."],
      titleSrOnly: "Eu transformo ideias em sistemas e produtos.",
      intro:
        "Sou <strong>Mateus Camacho</strong>, engenheiro de software, construtor de produtos e fundador. Combino engenharia, IA, design e estratégia de negócios para levar produtos digitais dos primeiros princípios até a produção.",
      viewResume: "Ver currículo",
      scrollToExplore: "Role para explorar",
      basedIn: "Baseado em São Paulo · Trabalhando no mundo todo",
      strategy: "Estratégia",
      strategySmall: "Encontrar o problema certo",
      experience: "Experiência",
      experienceSmall: "Tornar óbvio",
      build: "Construir",
      buildSmall: "Entregar com confiança",
      systemSignal: "Sinal do sistema",
      readyToScale: "Pronto para escalar",
      think: "Pensar",
      design: "Projetar",
      grow: "Crescer",
      live: "Ao vivo",
    },

    // About
    about: {
      eyebrow: "Mais do que um título",
      title: "Um construtor. O ciclo completo do produto.",
      description:
        "Os melhores produtos acontecem quando tecnologia, experiência e realidade comercial são projetados juntos. É nessa interseção que faço meu trabalho mais forte.",
      principle: "Meu princípio operacional",
      principleText:
        "Entender o negócio. Respeitar o usuário. Construir o sistema certo.",
    },

    // Stats
    stats: {
      careerChapters: "Capítulos de carreira",
      connectedDisciplines: "Disciplinas conectadas",
      endToEndOwnership: "Responsabilidade ponta a ponta",
      fromWhatIf: "De",
      whatIf: '"E se?"',
      toShipped: "até entregue.",
    },

    // Experience
    experience: {
      eyebrow: "Experiência",
      title: "Uma carreira construída em toda a equação.",
      description:
        "A engenharia moldou como resolvo problemas. Produto, design, crescimento e empreendedorismo expandiram quais problemas posso resolver.",
      visitCompany: "Visitar site oficial",
      companySite: "Site da empresa",
    },

    // Work / Projects
    work: {
      eyebrow: "Trabalhos selecionados",
      title: "Produtos, não apenas projetos.",
      description:
        "Cada plataforma SaaS vai além da interface: o problema, a decisão de produto, a arquitetura por trás e o resultado de negócio operando em produção.",
      viewCaseStudy: "Ver SaaS",
      productCaseStudy: "Plataforma SaaS ativa",
    },

    // Skills
    skills: {
      eyebrow: "Capacidades",
      title: "Um conjunto de ferramentas construído para resultados.",
      description:
        "Fundo o suficiente para construir. Amplo o suficiente para perguntar por quê. Estruturado para trazer a disciplina certa no momento certo.",
    },

    // Certifications
    certifications: {
      eyebrow: "Mestria Contínua",
      title: "Certificações Executivas & Aprendizado Especializado",
      description:
        "Um currículo rigoroso técnico e estratégico abrangendo princípios de arquitetura, design voltado a conversão e engenharia de software avançada.",
      status: "29 Credenciais Verificadas",
      filters: {
        all: "Todas (29)",
        tech: "Engenharia & Código",
        design: "Design & UI",
        marketing: "Growth & LP",
        language: "Idiomas",
      },
      list: [
        {
          id: "utfpr-degree",
          title: "Bacharelado em Engenharia de Software",
          issuer: "Universidade Tecnológica Federal do Paraná (UTFPR)",
          date: "ago de 2020 – ago de 2025",
          details:
            "Formação acadêmica superior de 5 anos em Engenharia de Software, abordando algoritmos, arquitetura de sistemas e sistemas distribuídos.",
          skills: "Engenharia de Software · Sistemas Distribuídos · Arquitetura",
          category: "tech",
        },
        {
          id: "clean-code",
          title: "Clean Code",
          issuer: "Rocketseat",
          date: "abr de 2024",
          details:
            "Práticas avançadas de escrita de código limpo, refatoração de sistemas e eliminação de code smells.",
          skills: "Refatoração · Princípios SOLID · Manutenibilidade",
          category: "tech",
        },
        {
          id: "spring-boot",
          title: "Fundamentos do Spring Boot",
          issuer: "Rocketseat",
          date: "ago de 2024",
          details:
            "Criação de APIs REST robustas e seguras no ecossistema Java, abordando injeção de dependências e JPA.",
          skills: "Java · Spring Boot · APIs REST · JPA",
          category: "tech",
        },
        {
          id: "spec-fullstack",
          title: "Especialização Fullstack (React, Node, Ecossistema Web)",
          issuer: "Rocketseat",
          date: "fev de 2024 – fev de 2025",
          details:
            "Formação completa unindo interfaces reativas modernas no front-end a back-ends escaláveis em nuvem.",
          skills: "React · Node.js · TypeScript · Arquitetura",
          category: "tech",
        },
        {
          id: "spec-java",
          title: "Especialização em Java & Ecossistema Spring",
          issuer: "Rocketseat",
          date: "fev de 2024 – fev de 2025",
          details:
            "Especialização corporativa em Java focado em microsserviços, modelagem DDD e testes automatizados.",
          skills: "Java 17+ · Spring Boot · Microsserviços · Docker",
          category: "tech",
        },
        {
          id: "spec-python",
          title: "Especialização em Python & Inteligência Artificial",
          issuer: "Rocketseat",
          date: "fev de 2024 – fev de 2025",
          details:
            "Desenvolvimento de APIs de alta concorrência e automação de processos integrados a modelos de IA.",
          skills: "Python · FastAPI · Automação · IA & LLMs",
          category: "tech",
        },
        {
          id: "spec-devops",
          title: "Especialização em DevOps & Cloud Infrastructure",
          issuer: "Rocketseat",
          date: "fev de 2024 – fev de 2025",
          details:
            "Construção de pipelines automáticos de CI/CD, conteinerização avançada e infraestrutura escalável.",
          skills: "Docker · CI/CD · AWS · Linux Server",
          category: "tech",
        },
        {
          id: "spec-react",
          title: "Especialização em React & Next.js",
          issuer: "Rocketseat",
          date: "fev de 2024 – fev de 2025",
          details:
            "Mergulho em SSR, SSG e gestão de estado global com Next.js para aplicações de altíssimo desempenho.",
          skills: "React · Next.js · SSR/SSG · Zustand",
          category: "tech",
        },
        {
          id: "spec-node",
          title: "Especialização em Node.js & Arquitetura Backend",
          issuer: "Rocketseat",
          date: "fev de 2024 – fev de 2025",
          details:
            "Desenvolvimento de back-ends assíncronos e performáticos aplicando Clean Architecture e bancos SQL/NoSQL.",
          skills: "Node.js · Fastify · PostgreSQL · Clean Arch",
          category: "tech",
        },
        {
          id: "spec-react-native",
          title: "Especialização em React Native & Mobile",
          issuer: "Rocketseat",
          date: "fev de 2024 – fev de 2025",
          details:
            "Criação de aplicativos móveis nativos e híbridos a 60fps para iOS e Android com acesso a APIs do dispositivo.",
          skills: "React Native · Expo · Mobile UI/UX · iOS/Android",
          category: "tech",
        },
        {
          id: "spec-csharp",
          title: "Especialização em C# & .NET Architecture",
          issuer: "Rocketseat",
          date: "fev de 2024 – fev de 2025",
          details:
            "Desenvolvimento de APIs corporativas de alta disponibilidade com a plataforma .NET 8 e Entity Framework.",
          skills: "C# · .NET 8 · Entity Framework · APIs Web",
          category: "tech",
        },
        {
          id: "discover",
          title: "Discover",
          issuer: "Rocketseat",
          date: "jan de 2024",
          details:
            "Alicerce técnico na engenharia web, semântica HTML5, estilização moderna e lógica com JavaScript puro.",
          skills: "HTML5 · CSS3 · JavaScript ES6+ · Git",
          category: "tech",
        },
        {
          id: "social-positioning",
          title: "Posicionamento nas redes sociais",
          issuer: "Rocketseat",
          date: "abr de 2024",
          details:
            "Estratégias de posicionamento técnico, Personal Branding para desenvolvedores e networking qualificado.",
          skills: "Personal Branding · LinkedIn · Autoridade Tech",
          category: "marketing",
        },
        {
          id: "lp-conversion",
          title: "Variações e Estratégias de Conversão para LP",
          issuer: "Staage",
          date: "abr de 2025",
          details:
            "Otimização de taxa de conversão (CRO), testes A/B e arquitetura visual orientada para decisão do usuário.",
          skills: "CRO · Testes A/B · Design Persuasivo",
          category: "marketing",
        },
        {
          id: "landing-pages",
          title: "Landing Pages",
          issuer: "Staage",
          date: "abr de 2025",
          details:
            "Criação estratégica de páginas de alta performance com copywriting persuasivo e otimização de velocidade.",
          skills: "Landing Pages · Copywriting · Alta Conversão",
          category: "marketing",
        },
        {
          id: "v4-onboarding",
          title: "OnBoarding",
          issuer: "V4 Company",
          date: "mar de 2025",
          details:
            "Metodologia executiva de marketing de crescimento (TECR) e análise de métricas vitais como CAC e LTV.",
          skills: "Metodologia V4 · Growth Marketing · CAC/LTV",
          category: "marketing",
        },
        {
          id: "smartphone-photo",
          title: "Fotos Profissionais com o Smartphone",
          issuer: "Staage",
          date: "abr de 2025",
          details:
            "Direção de arte, composição visual e controle de iluminação para criação de mídias publicitárias corporativas.",
          skills: "Composição Visual · Iluminação · Estética Premium",
          category: "design",
        },
        {
          id: "canva-creatives",
          title: "Criativos com o Canva",
          issuer: "Staage",
          date: "abr de 2025",
          details:
            "Criação de criativos publicitários de alto clique (CTR) e consistência visual de marcas em escala.",
          skills: "Design Publicitário · Alto CTR · Identidade Visual",
          category: "design",
        },
        {
          id: "creative-production",
          title: "Produção de Criativos",
          issuer: "Staage",
          date: "mar de 2025",
          details:
            "Produção de peças visuais de impacto com Adobe Photoshop, foco em grid, recortes e manipulação digital.",
          skills: "Photoshop · Direção de Arte · Manipulação",
          category: "design",
        },
        {
          id: "design-fundamentals",
          title: "Fundamentos em Design",
          issuer: "Staage",
          date: "mar de 2025",
          details:
            "Princípios universais de UI Design: teoria das cores, tipografia, hierarquia visual e equilíbrio estético.",
          skills: "UI Design · Teoria das Cores · Tipografia",
          category: "design",
        },
        {
          id: "cambridge",
          title: "Cambridge Assessment English",
          issuer: "Cambridge University Press & Assessment",
          date: "jan de 2022",
          details:
            "Proficiência na língua inglesa (B2 First) conquistada através de 5 anos de aprendizado contínuo e imersão.",
          skills: "Nota B2 · 5 Anos Contínuos · Proficiência Global",
          category: "language",
        },
        {
          id: "rs-html-css-2019",
          title: "HTML & CSS Intensivo — Fundamentos Web",
          issuer: "Rocketseat",
          date: "2019",
          details:
            "Estudo intensivo diário de HTML5 semântico e CSS3 avançado: Flexbox, Grid, animações e design responsivo do zero.",
          skills: "HTML5 · CSS3 · Flexbox · Grid · Design Responsivo",
          category: "tech",
        },
        {
          id: "rs-js-2019",
          title: "JavaScript Fundamentals — Trilha Intensiva",
          issuer: "Rocketseat",
          date: "2019",
          details:
            "Mergulho profundo em JavaScript ES6+: closures, protótipos, async/await, Fetch API e manipulação de DOM com projetos práticos diários.",
          skills: "JavaScript ES6+ · DOM · Async/Await · Fetch API",
          category: "tech",
        },
        {
          id: "rs-node-2020",
          title: "Node.js — Intensivo de Backend",
          issuer: "Rocketseat",
          date: "2020",
          details:
            "Construção de APIs REST completas com Node.js, Express, autenticação JWT e bancos de dados PostgreSQL/MongoDB em sessões diárias de estudo.",
          skills: "Node.js · Express · REST APIs · JWT · PostgreSQL",
          category: "tech",
        },
        {
          id: "rs-react-2020",
          title: "React.js — Intensivo de Frontend",
          issuer: "Rocketseat",
          date: "2020",
          details:
            "Domínio de hooks React, arquitetura de componentes, Context API e consumo de APIs REST. Desafios diários de código e projetos reais.",
          skills: "React · Hooks · Context API · Arquitetura de Componentes",
          category: "tech",
        },
        {
          id: "rs-react-native-2021",
          title: "React Native — Intensivo de Mobile",
          issuer: "Rocketseat",
          date: "2021",
          details:
            "Desenvolvimento mobile multiplataforma para iOS e Android com React Native e Expo, com prática diária em navegação, APIs de dispositivo e animações.",
          skills: "React Native · Expo · Mobile UI · Navegação",
          category: "tech",
        },
        {
          id: "rs-typescript-2021",
          title: "TypeScript — Intensivo de Tipagem Forte",
          issuer: "Rocketseat",
          date: "2021",
          details:
            "Aplicação de TypeScript em projetos full-stack: interfaces, genéricos, tipos estritos e padrões avançados aplicados a codebases Node.js e React.",
          skills: "TypeScript · Genéricos · Interfaces · Segurança de Tipos",
          category: "tech",
        },
        {
          id: "rs-api-rest-2021",
          title: "Design de APIs & Arquitetura REST Intensiva",
          issuer: "Rocketseat",
          date: "2021",
          details:
            "Mergulho nas melhores práticas REST, versionamento de APIs, padrões de tratamento de erros, documentação com Swagger e testes de integração.",
          skills: "REST Design · Versionamento · Swagger · Testes",
          category: "tech",
        },
        {
          id: "rs-fullstack-2022",
          title: "Full Stack — Intensivo de Projeto Completo",
          issuer: "Rocketseat",
          date: "2022",
          details:
            "Ano final intensivo unindo front-end, back-end, bancos de dados e deploy em aplicações web completas e prontas para produção.",
          skills: "Full Stack · SaaS · Deploy · Projetos Completos",
          category: "tech",
        },
      ],
    },

    // Contact
    contact: {
      eyebrow: "Iniciar uma conversa",
      title: "Tem um produto ambicioso para construir?",
      subtitle: "Vamos torná-lo real.",
      description:
        "Estou aberto a vagas de engenharia de produto, oportunidades de liderança e colaborações cuidadosas onde a tecnologia pode criar alavancagem genuína.",
    },

    // Footer
    footer: {
      tagline: "Engenharia de software com perspectiva de produto.",
      designedBy: "Projetado e construído com intenção",
      backToTop: "Voltar ao topo ↑",
    },

    // Strengths
    strengths: {
      "Software Engineering": {
        title: "Engenharia de Software",
        copy: "Construo sistemas confiáveis com o produto inteiro em vista—de dados e APIs até a interação final.",
      },
      "Product Thinking": {
        title: "Pensamento de Produto",
        copy: "Transformo incerteza em um problema claro, uma aposta deliberada e um caminho de aprendizado.",
      },
      "UX/UI Design": {
        title: "Design UX/UI",
        copy: "Faço fluxos complexos parecerem óbvios, com interfaces que ganham confiança através da clareza.",
      },
      "AI Automation": {
        title: "Automação com IA",
        copy: "Aplico IA onde ela muda o fluxo de trabalho—não onde ela apenas decora o pitch.",
      },
      "Business Strategy": {
        title: "Estratégia de Negócios",
        copy: "Conecto escolhas técnicas ao posicionamento, crescimento, alavancagem operacional e realidade comercial.",
      },
      Leadership: {
        title: "Liderança",
        copy: "Crio momentum através de responsabilidade, prioridades afiadas e comunicação tranquila entre disciplinas.",
      },
    },

    // Skill groups
    skillGroups: {
      Frontend: "Frontend",
      Backend: "Backend",
      Databases: "Bancos de Dados",
      Cloud: "Cloud",
      DevOps: "DevOps",
      AI: "IA",
      "UX/UI": "UX/UI",
      Product: "Produto",
      Business: "Negócios",
      Leadership: "Liderança",
    },

    // Experience data
    experienceData: {
      Desperte: {
        chapter: "Construção de venture",
        period: "Jan de 2025 — Presente · 1 ano 7 meses",
        location: "Francisco Beltrão, Brasil · Remoto",
        summary:
          "Liderando o desenvolvimento de sistemas de crescimento escaláveis para empresas, fortalecendo sua estratégia de negócios, operações comerciais e infraestrutura tecnológica. Atuando na interseção de marketing, vendas e engenharia para transformar fluxos fragmentados em motores de crescimento previsíveis e orientados por dados.",
        impact: [
          "Diagnosticando gargalos estratégicos e desenvolvendo soluções de software sob medida para inteligência operacional",
          "Otimizando jornadas de clientes, funis de vendas e posicionamento de mercado para crescimento sustentável de receita",
          "Implementando automação de processos de ponta a ponta e rastreamento de KPIs para tomada de decisão baseada em dados",
          "Alinhando branding, experiência do usuário (UX) e estratégia comercial desde os primeiros princípios até a execução",
        ],
      },
      "V4 Company Senior": {
        chapter: "Crescimento e estratégia",
        period: "Ago de 2025 — Dez de 2025 · 5 meses",
        location: "Rio de Janeiro, Brasil · Remoto",
        summary:
          "Liderou a gestão estratégica de contas de clientes de alto valor, coordenando equipes multidisciplinares de mídia paga, conteúdo, design e tecnologia para executar estratégias de crescimento integradas e gerar resultados de negócios mensuráveis.",
        impact: [
          "Conduziu reuniões de alinhamento e descoberta estratégica usando o framework SMART para traduzir metas em planos de ação",
          "Gerenciou fluxos complexos e entregas multidisciplinares via eKyte, garantindo eficiência operacional e prazos cumpridos",
          "Otimizou funis de vendas, campanhas de publicidade paga e posicionamento de marca para maximizar o ROI e taxas de conversão",
          "Analisou KPIs fundamentais e métricas de desempenho para extrair insights acionáveis de crescimento contínuo e retenção",
        ],
      },
      "V4 Company Project": {
        chapter: "Experiência de produto",
        period: "Mar de 2025 — Jul de 2025 · 5 meses",
        location: "Francisco Beltrão, Brasil · Presencial",
        summary:
          "Atuou como Líder de Projetos e Especialista em Design, entregando soluções visuais e estratégicas de alto impacto enquanto gerenciava projetos digitais focados em diferenciação de marca, experiência do usuário e crescimento de conversão.",
        impact: [
          "Projetou e desenvolveu landing pages responsivas e de alta conversão, aplicando melhores práticas de UX/UI e otimização de velocidade",
          "Criou sistemas completos de identidade de marca, incluindo logotipos, tipografia e ativos visuais para canais digitais e impressos",
          "Liderou fluxos de trabalho ágeis no eKyte, equilibrando padrões estéticos elevados com cronogramas de entrega rigorosos",
          "Colaborou com equipes de mídia paga para planejar, executar e analisar testes A/B que aumentaram significativamente as taxas de conversão",
        ],
      },
      "Ellon Technology": {
        chapter: "Engenharia",
        period: "Fev de 2025 — Mar de 2025 · 2 meses",
        location: "Francisco Beltrão, Brasil · Presencial",
        summary:
          "Desenvolveu e manteve aplicações web full-stack robustas usando React no frontend e GoLang no backend, com foco em arquitetura de alto desempenho, otimização de banco de dados e integração fluida de ponta a ponta.",
        impact: [
          "Arquitetou e entregou interfaces responsivas em React integradas a serviços de backend de alto desempenho em GoLang",
          "Projetou e otimizou esquemas de banco de dados PostgreSQL e consultas complexas para suportar funcionalidades críticas",
          "Diagnosticou e resolveu chamados complexos de suporte full-stack, implantando correções rápidas para manter a estabilidade em produção",
          "Contribuiu ativamente no planejamento de sprints diárias, fluxos de versionamento de código e sincronização da equipe",
        ],
      },
      "Assessoria 74": {
        chapter: "Liderança de entrega",
        period: "Jan de 2025 — Fev de 2025 · 2 meses",
        location: "Dois Vizinhos, Brasil · Presencial",
        summary:
          "Liderou a entrega de ponta a ponta de produtos digitais sob medida — incluindo um assistente de IA com PNL para WhatsApp, um sistema CRM interno e landing pages otimizadas para conversão — unindo design UX, arquitetura técnica e métricas de negócios.",
        impact: [
          "Desenvolveu um assistente automatizado de WhatsApp com Processamento de Linguagem Natural (PNL) usando Node.js e React, reduzindo drasticamente o tempo de resposta",
          "Estruturou backlogs de produto e desenvolveu um CRM interno full-stack (React/Node.js) para otimizar fluxos de trabalho e gestão de clientes",
          "Projetou interfaces intuitivas e protótipos no Figma, priorizando usabilidade, clareza e rápida adoção do sistema",
          "Combinou copywriting persuasivo, técnicas de SEO e React/TailwindCSS para lançar landing pages rápidas e de alta conversão",
        ],
      },
      RevEx: {
        chapter: "Engenharia de produto",
        period: "Jan de 2023 — Dez de 2024 · 2 anos",
        location: "Remoto",
        summary:
          "Atuou no ciclo completo de desenvolvimento de aplicações web corporativas usando React e Java com Spring Boot, combinando ativamente discovery de produto, colaboração em UX e práticas rigorosas de engenharia.",
        impact: [
          "Conduziu entrevistas com stakeholders e mapeamento de jornadas de usuários para traduzir requisitos em backlogs estruturados",
          "Construiu aplicações web responsivas e escaláveis com React no frontend e APIs REST robustas em Java/Spring Boot no backend",
          "Colaborou estreitamente com designers UX/UI em wireframes, protótipos e testes de usabilidade para garantir interfaces centradas no usuário",
          "Implementou fluxos de teste e validação automatizados, reduzindo significativamente defeitos em produção e melhorando a confiabilidade",
        ],
      },
      "SS Systems": {
        chapter: "Fundação",
        period: "Jan de 2022 — Dez de 2022 · 1 ano",
        location: "Dois Vizinhos, Brasil · Presencial",
        summary:
          "Participou do ciclo completo de entrega de software — desde a análise de requisitos e implementação até o repasse para QA e suporte técnico — resolvendo desafios complexos de banco de dados e regras de negócio.",
        impact: [
          "Resolveu mais de 80 chamados de desenvolvimento e suporte de software mantendo rigorosa conformidade com padrões de qualidade e arquitetura",
          "Trabalhou intensamente com bancos de dados PostgreSQL, motores complexos de relatórios e manutenção de software corporativo",
          "Estabeleceu critérios de priorização de problemas e métricas de resolução, contribuindo para tempos de resposta mais rápidos",
          "Colaborou estreitamente com desenvolvedores e engenheiros de QA durante integrações e testes para acelerar os ciclos de entrega",
        ],
      },
    },

    // Projects data
    projectsData: {
      ruralizai: {
        eyebrow: "SaaS para Pecuária Leiteira · Em Expansão Multi-Módulo",
        oneLiner:
          "SaaS para produtores de leite com acompanhamento de rebanho em tempo real, avisos inteligentes, financeiro, preço do leite e previsões de ganho — com expansão para pecuária de corte, veterinários e laticínios.",
        description:
          "O RuralizAI é um SaaS real e em produção focado em produtores de leite. O módulo atual já permite realizar previsões de ganho, acompanhamento do rebanho em tempo real com alertas automáticos, gestão financeira completa e cotação do preço do leite. A longo prazo, a plataforma se expandirá em módulos especializados para pecuária de corte, veterinários de grande porte e laticínios.",
        challenge:
          "Produtores de leite lidam com oscilações no preço do leite, margens apertadas e controle informal de rebanho. O mercado precisava de uma plataforma intuitiva capaz de prever lucros e monitorar o gado em tempo real sem complexidade.",
        solution:
          "Uma plataforma SaaS ativa onde o produtor gerencia finanças, acompanha cotações de leite em tempo real, monitora o rebanho com alertas preventivos e visualiza previsões claras de ganho e rentabilidade da fazenda.",
        results: [
          "Módulo ativo para produtores de leite com monitoramento em tempo real e gestão financeira",
          "Sistema de avisos automáticos e previsões de ganho baseadas no preço do leite",
          "Expansão planejada para produtores de carne, veterinários de grande porte e laticínios",
        ],
        status: "SaaS em Produção · Plataforma Ativa",
      },
      telou: {
        eyebrow: "SaaS de Mídia Indoor em Nuvem · Criado por 3 Sócios",
        oneLiner:
          "SaaS de mídia indoor que elimina o uso de PenDrive — crie playlists em nuvem, agende telas e atualize tudo em 3 segundos à distância, com app na Play Store e 125+ clientes mensalistas.",
        description:
          "O Telou é um sistema SaaS de mídia indoor desenvolvido em sociedade por 3 fundadores que faz com que prestadores de serviço nunca mais precisem usar PenDrive. Na plataforma, você cria playlists, adiciona mídias em nuvem e agenda exibições nas telas, conseguindo alterar qualquer display à distância em apenas 3 segundos. Com aplicativo próprio já disponível na Play Store para instalação direta em TVs, o Telou conta com mais de 125 clientes mensalistas ativos.",
        challenge:
          "Quem presta serviços de mídia indoor perdia muito tempo atualizando telas presencialmente com PenDrives ou sistemas lentos. O mercado precisava de controle remoto instantâneo em nuvem e instalação simples em TVs.",
        solution:
          "Um sistema SaaS completo com app nativo na Play Store onde operadores criam playlists, agendam horários e atualizam terminais de mídia à distância em menos de 3 segundos, eliminando hardware externo.",
        results: [
          "Mais de 125 clientes mensalistas ativos pagando recorrência na base do sistema",
          "Fim do uso de PenDrive com atualizações remotas de playlists em apenas 3 segundos",
          "Aplicativo nativo publicado na Google Play Store para instalação direta em Smart TVs",
        ],
        status: "SaaS em Produção · 125+ Clientes",
      },
    },
  },
} as const;

export type Translations = (typeof translations)[keyof typeof translations];
