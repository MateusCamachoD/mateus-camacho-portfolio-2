"use client";

import { useState } from "react";
import {
  Award,
  ShieldCheck,
  Code,
  Palette,
  TrendingUp,
  Globe,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/lib/language-context";
import { m, AnimatePresence } from "framer-motion";

type Category = "all" | "tech" | "design" | "marketing" | "language";

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  details?: string;
  skills?: string;
}

export function Certifications() {
  const { t, language } = useLanguage();
  const isPt = language === "pt";
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const certificationsList =
    (t.certifications.list as unknown as CertificationItem[]) || [];

  const filteredList =
    activeFilter === "all"
      ? certificationsList
      : certificationsList.filter((item) => item.category === activeFilter);

  const getIssuerStyle = (issuer: string) => {
    if (issuer.includes("Universidade") || issuer.includes("UTFPR") || issuer.includes("Federal")) {
      return "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30";
    }
    if (issuer.includes("Rocketseat")) {
      return "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30";
    }
    if (issuer.includes("Staage")) {
      return "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/30";
    }
    if (issuer.includes("Cambridge")) {
      return "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30";
    }
    if (issuer.includes("V4")) {
      return "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    }
    return "bg-secondary text-muted-foreground border-border";
  };

  const getCategoryIcon = (cat: Category) => {
    switch (cat) {
      case "tech":
        return <Code className="size-3.5" />;
      case "design":
        return <Palette className="size-3.5" />;
      case "marketing":
        return <TrendingUp className="size-3.5" />;
      case "language":
        return <Globe className="size-3.5" />;
      default:
        return <Award className="size-3.5" />;
    }
  };

  return (
    <section className="section certifications-section py-20">
      <div className="container">
        {/* Header */}
        <Reveal variant="mask-left">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-border/60 pb-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  <Sparkles className="size-3.5" />
                  {t.certifications.eyebrow}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
                  <ShieldCheck className="size-3.5" />
                  {t.certifications.status}
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {t.certifications.title}
              </h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                {t.certifications.description}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-surface/50 p-1.5 backdrop-blur-md">
              {(["all", "tech", "design", "marketing", "language"] as Category[]).map(
                (cat) => {
                  const isActive = activeFilter === cat;
                  const label = t.certifications.filters[cat] || cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-foreground text-background shadow-md"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {getCategoryIcon(cat)}
                      <span>{label}</span>
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </Reveal>

        {/* Grid of Certifications (4 per row) */}
        <m.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredList.map((item) => (
              <m.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -16 }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 26,
                  mass: 0.4,
                }}
                className="group relative flex flex-col justify-between rounded-[20px] border border-border bg-surface/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-border-strong hover:bg-surface hover:shadow-xl dark:bg-surface-solid/40 dark:hover:bg-surface-solid"
              >
                <div>
                  {/* Top Bar: Issuer Badge & Date */}
                  <div className="mb-3.5 flex flex-col items-start gap-2 w-full">
                    <span
                      className={`inline-flex w-full items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-bold tracking-wide leading-snug ${getIssuerStyle(
                        item.issuer
                      )}`}
                    >
                      <Award className="size-3.5 shrink-0" />
                      <span>{item.issuer}</span>
                    </span>
                    <div className="flex w-full items-center justify-between px-0.5">
                      <span className="font-mono text-[11px] font-medium text-muted-foreground/80">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-accent line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Details / What was learned */}
                  {item.details && (
                    <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                      {item.details}
                    </p>
                  )}

                  {/* Skills */}
                  {item.skills && (
                    <div className="mt-3.5 flex items-center gap-1.5 rounded-lg bg-secondary/60 dark:bg-secondary/40 px-2.5 py-1.5 text-[11px] text-foreground/90 border border-border/40 font-medium">
                      <Sparkles className="size-3 text-accent shrink-0" />
                      <span className="line-clamp-2">{item.skills}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Bar: Status */}
                <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-3 text-[11px] font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold truncate">
                    <ShieldCheck className="size-3.5 shrink-0" />
                    {item.id === "utfpr-degree"
                      ? isPt
                        ? "5 Anos · Bacharelado"
                        : "5 Years · Bachelor's Degree"
                      : item.category === "language"
                        ? isPt
                          ? "5 Anos · Contínuo (B2)"
                          : "5 Years · Continuous (B2)"
                        : isPt
                          ? "Formação Prática"
                          : "Verified Mastery"}
                  </span>
                  <span className="font-mono text-[10px] opacity-70 shrink-0">
                    {item.id === "utfpr-degree"
                      ? isPt
                        ? "Formado"
                        : "Graduated"
                      : isPt
                        ? "Concluído"
                        : "Completed"}
                  </span>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}
