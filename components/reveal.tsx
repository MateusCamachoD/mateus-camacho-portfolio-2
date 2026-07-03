"use client";

import { m, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export type RevealVariant =
  | "default"
  | "blur-up"
  | "clip-up"
  | "mask-left"
  | "zoom-soft"
  | "rotate-in"
  | "fade";

const variantMap: Record<RevealVariant, Variants> = {
  default: {
    hidden: { opacity: 0, y: 48, scale: 0.93, filter: "blur(12px)", rotateX: 8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      rotateX: 0,
      transition: { duration: 0.9, ease: EASE_OUT_EXPO },
    },
  },
  "blur-up": {
    hidden: { opacity: 0, y: 36, filter: "blur(14px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.95, ease: EASE_OUT_EXPO },
    },
  },
  "clip-up": {
    hidden: {
      opacity: 0,
      y: 28,
      clipPath: "inset(18% 6% 18% 6% round 22px)",
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0% round 22px)",
      filter: "blur(0px)",
      transition: { duration: 1.05, ease: EASE_OUT_EXPO },
    },
  },
  "mask-left": {
    hidden: {
      opacity: 0,
      x: -36,
      clipPath: "inset(0% 100% 0% 0%)",
    },
    visible: {
      opacity: 1,
      x: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1, ease: EASE_OUT_EXPO },
    },
  },
  "zoom-soft": {
    hidden: { opacity: 0, scale: 0.88, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: EASE_OUT_EXPO },
    },
  },
  "rotate-in": {
    hidden: {
      opacity: 0,
      y: 42,
      rotate: -1.5,
      scale: 0.96,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.95, ease: EASE_OUT_EXPO },
    },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.1, ease: "easeOut" } },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  style,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
  variant?: RevealVariant;
}) {
  return (
    <m.div
      className={className}
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      transition={{ delay }}
      style={{ perspective: 1000, ...style }}
    >
      {children}
    </m.div>
  );
}

export function Stagger({
  children,
  className,
  style,
  stagger = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: 0.05,
          },
        },
      }}
      style={style}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: RevealVariant;
}) {
  return (
    <m.div className={cn(className)} variants={variantMap[variant]} style={style}>
      {children}
    </m.div>
  );
}
