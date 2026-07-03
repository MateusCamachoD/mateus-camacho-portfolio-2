export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  oneLiner: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  accent: "green" | "violet";
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  status: string;
};

export type Experience = {
  company: string;
  role: string;
  chapter: string;
  period: string;
  location?: string;
  companyUrl?: string;
  summary: string;
  impact: string[];
};

export const profile = {
  name: "Mateus Dias Camacho",
  title: "Software Engineer · Product Builder · Founder",
  email: "mateus.camacho@live.com",
  github: "https://github.com/MateusCamachoD",
  linkedin: "https://www.linkedin.com/in/mateuscamacho/",
  resume: "https://canva.link/mateusdcamacho",
  phone: "https://wa.me/5546991258351",
};

export const projects: Project[] = [
  {
    slug: "ruralizai",
    name: "RuralizAI",
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
    technologies: [
      "Next.js",
      "TypeScript",
      "AI workflows",
      "PostgreSQL",
      "Product design",
    ],
    accent: "green",
    image: "/projects/ruralizai.png",
    liveUrl: "https://ruralizai.com.br",
    status: "Live SaaS · Active Platform",
  },
  {
    slug: "telou",
    name: "Telou",
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
    technologies: [
      "React",
      "TypeScript",
      "Digital Signage",
      "Node.js",
      "SaaS Architecture",
    ],
    accent: "violet",
    image: "/projects/telou.png",
    liveUrl: "https://telou.com.br",
    status: "Live SaaS · 125+ Subscribers",
  },
];

export const experience: Experience[] = [
  {
    company: "Desperte",
    role: "Founder & CEO",
    chapter: "Venture building",
    period: "Jan 2025 — Present · 1 yr 7 mos",
    location: "Francisco Beltrão, Brazil · Remote",
    companyUrl: "https://despertemkt.com",
    summary:
      "Leading the development of scalable growth systems for companies by strengthening their business strategy, commercial operations, and technology infrastructure. Operating at the intersection of marketing, sales, and engineering to transform fragmented workflows into predictable, data-driven growth engines.",
    impact: [
      "Diagnosing strategic bottlenecks and designing custom software solutions to drive operational intelligence",
      "Optimizing customer journeys, sales funnels, and market positioning for sustainable revenue growth",
      "Implementing end-to-end process automation and KPI tracking to support data-driven decision making",
      "Aligning branding, user experience (UX), and commercial strategy from first principles to execution",
    ],
  },
  {
    company: "V4 Company",
    role: "Senior Account Manager",
    chapter: "Growth & strategy",
    period: "Aug 2025 — Dec 2025 · 5 mos",
    location: "Rio de Janeiro, Brazil · Remote",
    companyUrl: "https://v4company.com",
    summary:
      "Led the strategic management of high-value client accounts, coordinating cross-functional teams across paid media, content, design, and technology to execute integrated growth strategies and deliver measurable business outcomes.",
    impact: [
      "Conducted strategic discovery and alignment using the SMART framework to translate business goals into actionable roadmaps",
      "Managed complex workflows and cross-departmental delivery via eKyte, ensuring operational efficiency and on-time execution",
      "Optimized sales funnels, paid advertising campaigns, and brand positioning to maximize client ROI and conversion rates",
      "Analyzed core KPIs and performance metrics to uncover actionable insights for continuous growth and client retention",
    ],
  },
  {
    company: "V4 Company",
    role: "Project Lead & Design Specialist",
    chapter: "Product experience",
    period: "Mar 2025 — Jul 2025 · 5 mos",
    location: "Francisco Beltrão, Brazil · On-site",
    companyUrl: "https://v4company.com",
    summary:
      "Served as Project Lead and Design Specialist, delivering high-impact visual and strategic design solutions while managing digital projects focused on brand differentiation, user experience, and measurable conversion growth.",
    impact: [
      "Designed and developed high-converting, responsive landing pages applying advanced UX/UI best practices and speed optimization",
      "Created comprehensive brand identity systems including logos, typography, and visual assets across digital and print channels",
      "Led agile project workflows in eKyte, balancing high aesthetic standards with strict delivery timelines",
      "Collaborated with paid media teams to design, execute, and analyze A/B tests that significantly improved campaign conversion rates",
    ],
  },
  {
    company: "Ellon Technology",
    role: "Senior Full Stack Developer",
    chapter: "Engineering",
    period: "Feb 2025 — Mar 2025 · 2 mos",
    location: "Francisco Beltrão, Brazil · On-site",
    companyUrl: "https://somosellon.com/",
    summary:
      "Developed and maintained robust full-stack web applications using React for the frontend and GoLang for the backend, focusing on high-performance architecture, database optimization, and seamless end-to-end integration.",
    impact: [
      "Architected and shipped responsive frontend interfaces in React paired with highly performant GoLang backend services",
      "Designed and optimized PostgreSQL database schemas and complex queries to support mission-critical application features",
      "Diagnosed and resolved complex full-stack support tickets, deploying timely patches to maintain system stability in production",
      "Actively contributed to daily sprint planning, code versioning workflows, and cross-team synchronization to streamline delivery",
    ],
  },
  {
    company: "Assessoria 74",
    role: "Project Lead",
    chapter: "Delivery leadership",
    period: "Jan 2025 — Feb 2025 · 2 mos",
    location: "Dois Vizinhos, Brazil · On-site",
    companyUrl: "https://assessoria74.com",
    summary:
      "Led the end-to-end delivery of custom digital products—including an NLP-powered AI WhatsApp assistant, an internal CRM system, and conversion-optimized landing pages—bridging UX design, technical architecture, and business metrics.",
    impact: [
      "Built an automated WhatsApp assistant with natural language processing (NLP) using Node.js and React, drastically reducing response times",
      "Structured product backlogs and developed a full-stack internal CRM (React/Node.js) to optimize internal workflows and client management",
      "Designed intuitive user interfaces and prototypes in Figma, prioritizing usability, clarity, and rapid feature adoption",
      "Combined persuasive copywriting, SEO techniques, and React/TailwindCSS to launch high-speed, high-converting landing pages",
    ],
  },
  {
    company: "RevEx",
    role: "Full Stack Developer",
    chapter: "Product engineering",
    period: "Jan 2023 — Dec 2024 · 2 yrs",
    location: "Remote",
    companyUrl: "https://revex.digital",
    summary:
      "Engaged in the full software development lifecycle of enterprise web applications using React and Java with Spring Boot, actively combining product discovery, UX collaboration, and rigorous engineering practices.",
    impact: [
      "Conducted stakeholder interviews and user journey mapping to translate complex requirements into structured product backlogs",
      "Built responsive, scalable web applications with React on the frontend and robust Java/Spring Boot REST APIs on the backend",
      "Collaborated closely with UX/UI designers on wireframing, prototyping, and usability testing to ensure user-centered interfaces",
      "Implemented automated testing and validation workflows, significantly reducing production defects and improving system reliability",
    ],
  },
  {
    company: "SS Systems",
    role: "Software Developer",
    chapter: "Foundation",
    period: "Jan 2022 — Dec 2022 · 1 yr",
    location: "Dois Vizinhos, Brazil · On-site",
    companyUrl: "http://www.sssistemas.com/",
    summary:
      "Participated in the full software delivery lifecycle—from requirements analysis and implementation to QA handoff and technical support—solving complex database and business logic challenges for enterprise systems.",
    impact: [
      "Resolved over 80 software development and support requests while maintaining strict compliance with quality and architecture standards",
      "Worked extensively with PostgreSQL databases, complex reporting engines, and legacy business software maintenance",
      "Established issue prioritization criteria and resolution metrics, contributing to faster response times and documented support workflows",
      "Collaborated closely with cross-functional developers and QA engineers during integration and testing to accelerate delivery cycles",
    ],
  },
];

export const skillGroups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Accessibility"] },
  { title: "Backend", items: ["Node.js", "REST APIs", "PHP", "System design", "Integrations"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "Redis"] },
  { title: "Cloud", items: ["Vercel", "AWS", "Serverless", "Object storage", "Observability"] },
  { title: "DevOps", items: ["Docker", "CI/CD", "GitHub", "GitLab", "Release workflows"] },
  { title: "AI", items: ["LLM products", "AI automation", "Prompt systems", "RAG", "Evaluation"] },
  { title: "UX/UI", items: ["Figma", "Design systems", "Prototyping", "Interaction design", "Research"] },
  { title: "Product", items: ["Discovery", "Roadmaps", "Prioritization", "Analytics", "Experimentation"] },
  { title: "Business", items: ["Positioning", "Growth strategy", "Go-to-market", "Unit economics", "Sales"] },
  { title: "Leadership", items: ["Team direction", "Stakeholder alignment", "Mentoring", "Delivery", "Ownership"] },
];

export const strengths = [
  {
    title: "Software Engineering",
    number: "01",
    copy: "I build reliable systems with the whole product in view—from data and APIs to the final interaction.",
  },
  {
    title: "Product Thinking",
    number: "02",
    copy: "I turn uncertainty into a clear problem, a deliberate bet, and a path to learning.",
  },
  {
    title: "UX/UI Design",
    number: "03",
    copy: "I make complex workflows feel obvious, with interfaces that earn trust through clarity.",
  },
  {
    title: "AI Automation",
    number: "04",
    copy: "I apply AI where it changes the workflow—not where it merely decorates the pitch.",
  },
  {
    title: "Business Strategy",
    number: "05",
    copy: "I connect technical choices to positioning, growth, operating leverage, and commercial reality.",
  },
  {
    title: "Leadership",
    number: "06",
    copy: "I create momentum through ownership, sharp priorities, and calm communication across disciplines.",
  },
];
