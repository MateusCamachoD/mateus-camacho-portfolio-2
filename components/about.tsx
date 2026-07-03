"use client";

import React, { useRef, useState } from "react";
import { m, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import {
  Bot,
  BriefcaseBusiness,
  Code2,
  Compass,
  Layers3,
  UsersRound,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";
import { strengths } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

const icons = [Code2, Compass, Layers3, Bot, BriefcaseBusiness, UsersRound];

const accentColors = [
  "#8a63ff", // Violet
  "#00cec9", // Cyan
  "#ff6b81", // Pink
  "#00b894", // Green
  "#ff9f43", // Amber
  "#54a0ff", // Blue
];

function InteractiveStrengthCard({
  strength,
  index,
  Icon,
  translated,
}: {
  strength: (typeof strengths)[0];
  index: number;
  Icon: React.ElementType;
  translated?: { title: string; copy: string };
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 22, stiffness: 280, mass: 0.5 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const accent = accentColors[index % accentColors.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set(((y - centerY) / centerY) * -8);
    rotateY.set(((x - centerX) / centerX) * 8);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <StaggerItem
      className={`strength-card strength-card-${index + 1}`}
      style={{ perspective: 1000 }}
    >
      <m.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="strength-card-inner relative overflow-hidden transition-all duration-300"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { type: "spring", stiffness: 320, damping: 24 },
        }}
      >
        <m.div
          className="pointer-events-none absolute -inset-px rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, ${accent}28, transparent 80%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        <m.div
          className="pointer-events-none absolute -inset-px rounded-[22px] border-2 opacity-0 transition-all duration-300"
          style={{
            borderColor: accent,
            boxShadow: isHovered
              ? `0 24px 60px -10px ${accent}45, inset 0 0 24px -6px ${accent}25`
              : "none",
            opacity: isHovered ? 1 : 0,
          }}
        />

        <div className="strength-meta relative z-10 flex items-center justify-between">
          <span
            className="font-mono text-sm font-bold tracking-widest transition-colors duration-300"
            style={{ color: isHovered ? accent : undefined }}
          >
            {strength.number}
          </span>
          <div
            className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300"
            style={{
              color: isHovered ? accent : undefined,
              transform: isHovered ? "scale(1.18) rotate(8deg)" : "scale(1) rotate(0deg)",
              boxShadow: isHovered ? `0 8px 25px -4px ${accent}55` : "none",
              borderColor: isHovered ? accent : undefined,
            }}
          >
            <Icon className="size-5" strokeWidth={1.8} />
          </div>
        </div>
        <div className="relative z-10 mt-6">
          <h3 className="mb-2 text-xl font-bold tracking-tight transition-colors duration-300">
            {translated?.title ?? strength.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300">
            {translated?.copy ?? strength.copy}
          </p>
        </div>
      </m.div>
    </StaggerItem>
  );
}

export function About() {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />

        <Stagger className="strength-grid">
          {strengths.map((strength, index) => {
            const Icon = icons[index];
            const translated =
              t.strengths[strength.title as keyof typeof t.strengths];
            return (
              <InteractiveStrengthCard
                key={strength.title}
                strength={strength}
                index={index}
                Icon={Icon}
                translated={translated}
              />
            );
          })}
        </Stagger>

        <div className="philosophy-strip">
          <p>
            <span>{t.about.principle}</span>
            {t.about.principleText}
          </p>
          <div className="philosophy-marks" aria-hidden>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
