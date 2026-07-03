"use client";

import { ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { LanguageProvider } from "@/lib/language-context";
import { SmoothScroll } from "@/components/smooth-scroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <LazyMotion features={domAnimation}>
          <MotionConfig reducedMotion="user">
            <SmoothScroll>{children}</SmoothScroll>
          </MotionConfig>
        </LazyMotion>
      </ThemeProvider>
    </LanguageProvider>
  );
}
