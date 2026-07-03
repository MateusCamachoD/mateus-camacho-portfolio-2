"use client";

import React, { useRef, useState } from "react";
import { m, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Terminal,
  BrainCircuit,
  Palette,
  Compass,
  TrendingUp,
  Users,
  Sparkles,
  GitBranch,
  Target,
  Award,
  Briefcase,
  CheckCircle2,
  Activity,
  Layers,
  Search,
  Map,
  DollarSign,
  Handshake,
  LayoutGrid,
  Smartphone,
  MousePointerClick,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";
import { skillGroups } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

const categoryMeta: Record<
  string,
  { icon: React.ReactNode; descEn: string; descPt: string }
> = {
  Frontend: {
    icon: <Code2 className="size-5" />,
    descEn: "Modern, reactive & accessible interfaces",
    descPt: "Interfaces modernas, reativas e acessíveis",
  },
  Backend: {
    icon: <Server className="size-5" />,
    descEn: "Scalable APIs & robust architecture",
    descPt: "APIs escaláveis e arquitetura robusta",
  },
  Databases: {
    icon: <Database className="size-5" />,
    descEn: "Data modeling & high-speed queries",
    descPt: "Modelagem de dados e consultas rápidas",
  },
  Cloud: {
    icon: <Cloud className="size-5" />,
    descEn: "Serverless deployments & cloud storage",
    descPt: "Deploys serverless e armazenamento em nuvem",
  },
  DevOps: {
    icon: <Terminal className="size-5" />,
    descEn: "CI/CD pipelines & containerized delivery",
    descPt: "Pipelines CI/CD e entrega em containers",
  },
  AI: {
    icon: <BrainCircuit className="size-5" />,
    descEn: "Applied LLMs, RAG & workflow automation",
    descPt: "LLMs aplicados, RAG e automação inteligente",
  },
  "UX/UI": {
    icon: <Palette className="size-5" />,
    descEn: "Figma prototypes & design systems",
    descPt: "Protótipos no Figma e design systems",
  },
  Product: {
    icon: <Compass className="size-5" />,
    descEn: "Discovery, roadmaps & metrics-driven growth",
    descPt: "Discovery, roadmaps e crescimento via métricas",
  },
  Business: {
    icon: <TrendingUp className="size-5" />,
    descEn: "Go-to-market strategy & unit economics",
    descPt: "Estratégia Go-to-market e unit economics",
  },
  Leadership: {
    icon: <Users className="size-5" />,
    descEn: "Team direction & stakeholder alignment",
    descPt: "Direção de times e alinhamento estratégico",
  },
};

function SkillPillIcon({ name, className }: { name: string; className: string }) {
  switch (name) {
    case "React":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse rx="10" ry="4.5" cx="12" cy="12" />
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" />
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" />
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="10" />
          <path d="M15 12V9 M9 15V9l7.5 9" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M11 9H7M9 9v6M14 13.5s.5-1 1.5-1 1.5.5 1.5 1.2-.5 1.3-1.5 1.3c-1 0-1.5-.5-1.5-.5" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M12 6c-2.5 0-4 1.5-4 4 1-1.5 2.5-2 4-1.5 1 .3 1.5 1.3 2.1 2.3 0.9 1.5 2.2 3.7 5.9 3.7 2.5 0 4-1.5 4-4-1 1.5-2.5 2-4 1.5-1-.3-1.5-1.3-2.1-2.3C17 8.2 15.7 6 12 6zM4 12c-2.5 0-4 1.5-4 4 1-1.5 2.5-2 4-1.5 1 .3 1.5 1.3 2.1 2.3 0.9 1.5 2.2 3.7 5.9 3.7 2.5 0 4-1.5 4-4-1 1.5-2.5 2-4 1.5-1-.3-1.5-1.3-2.1-2.3C9 14.2 7.7 12 4 12z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M12 3L4 7.5v9L12 21l8-4.5v-9L12 3z" />
          <path d="M12 12v9 M12 12L4 7.5 M12 12l8-4.5" />
        </svg>
      );
    case "PHP":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <ellipse cx="12" cy="12" rx="10" ry="6" />
          <path d="M7.5 14.5l1.5-5h2c1 0 1.5.5 1.5 1.5s-.5 1.5-1.5 1.5h-1.5" />
          <path d="M13.5 14.5l1.5-5h2c1 0 1.5.5 1.5 1.5s-.5 1.5-1.5 1.5h-1.5" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M7 10v4c0 2.8 2.2 5 5 5h3v-2M18 10a6 6 0 0 0-12 0v2c0 1.1.9 2 2 2h2 M15 7a3 3 0 0 0-6 0" />
          <circle cx="10" cy="10" r="1" fill="currentColor" />
        </svg>
      );
    case "MySQL":
    case "SQL Server":
    case "Oracle":
    case "Redis":
    case "Object storage":
      return <Database className={className} strokeWidth={1.8} />;
    case "Docker":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M3 15h18v3c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-3z" />
          <path d="M5 12h3v2H5z M10 12h3v2h-3z M15 12h3v2h-3z M10 9h3v2h-3z" />
          <path d="M20 12c1 0 2 .5 2 1.5V15h-2" />
        </svg>
      );
    case "Vercel":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 3L2 21h20L12 3z" />
        </svg>
      );
    case "AWS":
    case "Serverless":
      return <Cloud className={className} strokeWidth={1.8} />;
    case "GitHub":
    case "GitLab":
    case "CI/CD":
    case "Release workflows":
      return <GitBranch className={className} strokeWidth={1.8} />;
    case "Figma":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="15" cy="12" r="3" />
          <circle cx="9" cy="6" r="3" />
          <circle cx="15" cy="6" r="3" />
          <circle cx="9" cy="12" r="3" />
          <path d="M9 15a3 3 0 1 0 3 3V15H9z" />
        </svg>
      );
    case "LLM products":
    case "AI automation":
    case "Prompt systems":
    case "RAG":
    case "Evaluation":
      return <BrainCircuit className={className} strokeWidth={1.8} />;
    case "REST APIs":
    case "Integrations":
    case "System design":
      return <Server className={className} strokeWidth={1.8} />;
    case "Accessibility":
    case "Observability":
      return <Activity className={className} strokeWidth={1.8} />;
    case "Design systems":
      return <LayoutGrid className={className} strokeWidth={1.8} />;
    case "Prototyping":
      return <Smartphone className={className} strokeWidth={1.8} />;
    case "Interaction design":
      return <MousePointerClick className={className} strokeWidth={1.8} />;
    case "Research":
    case "Discovery":
      return <Search className={className} strokeWidth={1.8} />;
    case "Roadmaps":
      return <Map className={className} strokeWidth={1.8} />;
    case "Prioritization":
    case "Positioning":
      return <Target className={className} strokeWidth={1.8} />;
    case "Analytics":
    case "Growth strategy":
      return <TrendingUp className={className} strokeWidth={1.8} />;
    case "Go-to-market":
    case "Sales":
      return <Briefcase className={className} strokeWidth={1.8} />;
    case "Unit economics":
      return <DollarSign className={className} strokeWidth={1.8} />;
    case "Team direction":
    case "Stakeholder alignment":
      return <Users className={className} strokeWidth={1.8} />;
    case "Mentoring":
    case "Ownership":
      return <Award className={className} strokeWidth={1.8} />;
    case "Delivery":
      return <CheckCircle2 className={className} strokeWidth={1.8} />;
    default:
      return <Layers className={className} strokeWidth={1.8} />;
  }
}

function InteractiveSkillCard({
  group,
  index,
  meta,
  translatedTitle,
  language,
}: {
  group: (typeof skillGroups)[0];
  index: number;
  meta: { icon: React.ReactNode; descEn: string; descPt: string };
  translatedTitle: string;
  language: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 22, stiffness: 280, mass: 0.5 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set(((y - centerY) / centerY) * -7);
    rotateY.set(((x - centerX) / centerX) * 7);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <StaggerItem key={group.title} className="skill-card-wrapper" style={{ perspective: 1000 }}>
      <m.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="skill-card relative flex flex-col overflow-hidden rounded-[22px] border border-border/80 bg-surface/90 p-7 transition-all duration-300"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{
          y: -6,
          scale: 1.015,
          transition: { type: "spring", stiffness: 320, damping: 24 },
        }}
      >
        {/* Sleek Monochromatic Spotlight Glow */}
        <m.div
          className="pointer-events-none absolute -inset-px rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.07), transparent 80%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Subtle Professional Border Light */}
        <m.div
          className="pointer-events-none absolute -inset-px rounded-[22px] border border-foreground/25 opacity-0 transition-all duration-300 dark:border-zinc-500/60"
          style={{
            boxShadow: isHovered ? "0 20px 50px -10px rgba(0, 0, 0, 0.18)" : "none",
            opacity: isHovered ? 1 : 0,
          }}
        />

        <div className="skill-card-header relative z-10 mb-6 flex items-center justify-between">
          <div
            className="skill-card-icon-box flex size-11 items-center justify-center rounded-xl border border-border/80 bg-secondary/50 text-foreground transition-all duration-300"
            style={{
              transform: isHovered ? "scale(1.12) rotate(6deg)" : "scale(1) rotate(0deg)",
              boxShadow: isHovered ? "0 8px 20px -4px rgba(0,0,0,0.15)" : "none",
              borderColor: isHovered ? "var(--border-strong)" : undefined,
            }}
          >
            {meta.icon}
          </div>
          <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground/80">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="skill-card-body relative z-10 flex flex-1 flex-col">
          <h3 className="mb-1.5 text-xl font-bold tracking-tight text-foreground">
            {translatedTitle}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {language === "pt" ? meta.descPt : meta.descEn}
          </p>

          <div className="skill-pills-cloud mt-auto flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="skill-pill inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3.5 py-1.5 text-xs font-semibold text-foreground/90 transition-all duration-300 hover:border-foreground/35 hover:bg-secondary/80"
              >
                <SkillPillIcon name={item} className="size-3.5 shrink-0 opacity-80 transition-opacity hover:opacity-100" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </m.div>
    </StaggerItem>
  );
}

export function Skills() {
  const { t, language } = useLanguage();

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />
        <Stagger className="skills-grid">
          {skillGroups.map((group, index) => {
            const translatedTitle =
              t.skillGroups[group.title as keyof typeof t.skillGroups] ??
              group.title;
            const meta = categoryMeta[group.title] ?? {
              icon: <Sparkles className="size-5" />,
              descEn: "Core capability",
              descPt: "Capacidade essencial",
            };

            return (
              <InteractiveSkillCard
                key={group.title}
                group={group}
                index={index}
                meta={meta}
                translatedTitle={translatedTitle}
                language={language}
              />
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
