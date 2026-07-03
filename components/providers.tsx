"use client";

import { ThemeProvider } from "next-themes";
import { LazyMotion, domMax, MotionConfig } from "framer-motion";
import { LanguageProvider } from "@/lib/language-context";
import { SmoothScroll } from "@/components/smooth-scroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <LazyMotion features={domMax}>
          <MotionConfig reducedMotion="never">
            <SmoothScroll>{children}</SmoothScroll>
          </MotionConfig>
        </LazyMotion>
      </ThemeProvider>
    </LanguageProvider>
  );
}
