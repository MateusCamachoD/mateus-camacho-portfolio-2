"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  m,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/components/project-visual";
import type { Project } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

interface ProjectCardVisualWrapProps {
  project: Project;
  index: number;
  status: string;
}

export function ProjectCardVisualWrap({
  project,
  index,
  status,
}: ProjectCardVisualWrapProps) {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showCursorBtn, setShowCursorBtn] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 480, mass: 0.12 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Subtle scroll parallax on the visual.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-26, 26]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Determine direction of mouse entry
    const distTop = y;
    const distBottom = rect.height - y;
    const distLeft = x;
    const distRight = rect.width - x;
    const minDist = Math.min(distTop, distBottom, distLeft, distRight);

    let startX = x;
    let startY = y;
    const offset = 35; // start offset distance in pixels

    if (minDist === distLeft) {
      startX = x - offset;
    } else if (minDist === distRight) {
      startX = x + offset;
    } else if (minDist === distTop) {
      startY = y - offset;
    } else {
      startY = y + offset;
    }

    // Set underlying motion values to mouse position
    mouseX.set(x);
    mouseY.set(y);

    // Force spring initial position to be offset on the side of entry
    cursorX.set(startX);
    cursorY.set(startY);

    setShowCursorBtn(true);
  };

  const handleMouseLeave = () => {
    setShowCursorBtn(false);
  };

  return (
    <div
      ref={containerRef}
      className={`project-visual-wrap relative overflow-hidden rounded-[22px] ${showCursorBtn ? "is-cursor-active" : ""
        }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={project.liveUrl || `/projects/${project.slug}`}
        target={project.liveUrl ? "_blank" : undefined}
        rel={project.liveUrl ? "noreferrer" : undefined}
        className="block"
      >
        <m.div className="project-parallax" style={{ y: parallaxY }}>
          <ProjectVisual project={project} />
        </m.div>
        <span className="project-visual-overlay" aria-hidden />
      </Link>

      <AnimatePresence>
        {showCursorBtn && (
          <m.div
            className="custom-cursor-btn pointer-events-none absolute z-50 flex items-center gap-2 rounded-full border border-white/25 bg-foreground/95 px-6 py-3 font-sans text-xs text-[#101112] font-bold uppercase tracking-widest text-background shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md"
            style={{
              left: 0,
              top: 0,
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 420,
                damping: 24,
                mass: 0.35,
              },
            }}
            exit={{
              scale: 0.7,
              opacity: 0,
              transition: {
                duration: 0.16,
                ease: [0.32, 0, 0.67, 0],
              },
            }}
          >
            <span className="font-bold tracking-widest">
              {language === "en" ? "View Case" : "Ver Case"}
            </span>
            <ArrowUpRight className="size-4" />
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
