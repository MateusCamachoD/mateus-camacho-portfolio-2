import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";
import { CustomCursor } from "@/components/custom-cursor";
import { AmbientBackground } from "@/components/ambient-background";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mateuscamacho.dev"),
  title: {
    default: "Mateus Camacho — Software Engineer, Product Builder & Founder",
    template: "%s — Mateus Camacho",
  },
  description:
    "Mateus Camacho builds scalable digital products by combining software engineering, AI, UX/UI, and business strategy.",
  keywords: [
    "Mateus Camacho",
    "Software Engineer",
    "Product Builder",
    "Product Engineer",
    "UX/UI",
    "AI",
    "Founder",
  ],
  authors: [{ name: "Mateus Camacho" }],
  creator: "Mateus Camacho",
  openGraph: {
    title: "Mateus Camacho — Software Engineer, Product Builder & Founder",
    description:
      "Engineering, product thinking, design, AI, and business strategy—connected from idea to production.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Camacho — Software Engineer, Product Builder & Founder",
    description:
      "Engineering, product thinking, design, AI, and business strategy—connected from idea to production.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body>
        <Providers>
          <AmbientBackground />
          <ScrollProgress />
          <CursorGlow />
          <CustomCursor />
          <SiteHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
