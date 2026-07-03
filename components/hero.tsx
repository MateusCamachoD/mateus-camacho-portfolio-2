"use client";

import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CodeXml,
  Mail,
  MoveRight,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { Magnetic } from "@/components/magnetic";
import { HeroParticles } from "@/components/hero-particles";

export function Hero() {
  const { t } = useLanguage();
  const titleWords = t.hero.titleWords;

  return (
    <section className="hero" id="top">
      <div className="hero-orb hero-orb-one" aria-hidden />
      <div className="hero-orb hero-orb-two" aria-hidden />
      <div className="hero-aurora" aria-hidden />
      <HeroParticles />

      <div className="container hero-grid">
        <div className="hero-copy">
          <m.div
            className="availability-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="status-dot" />
            <span>{t.hero.openToRemote}</span>
            <span className="availability-divider" />
            <span>{t.hero.openToRelocation}</span>
          </m.div>

          <h1 className="hero-title">
            <span className="sr-only">{t.hero.titleSrOnly}</span>
            <span aria-hidden>
              {t.hero.titlePrefix}{" "}
              {titleWords.map((word, index) => (
                <m.span
                  key={word}
                  className={index === 2 ? "accent-word" : ""}
                  initial={{ opacity: 0, y: 50, filter: "blur(16px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1 + index * 0.11,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                  {index < titleWords.length - 1 ? " " : ""}
                </m.span>
              ))}
            </span>
          </h1>

          <m.p
            className="hero-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
            dangerouslySetInnerHTML={{ __html: t.hero.intro }}
          />

          <m.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58 }}
          >
            <Magnetic>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "primary" }), "btn-shine")}
              >
                {t.hero.viewResume}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "ghost" }), "hero-icon-link")}
              aria-label="GitHub"
            >
              <CodeXml className="size-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "ghost" }), "hero-icon-link")}
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness className="size-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={cn(buttonVariants({ variant: "ghost" }), "hero-icon-link")}
              aria-label="Email"
            >
              <Mail className="size-4" />
              Contact
            </a>
          </m.div>
        </div>

        <m.div
          className="hero-product"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          aria-label="A visual map connecting product strategy, design, engineering, and growth"
        >
          <div className="product-window">
            <div className="product-topbar">
              <div className="window-dots" aria-hidden>
                <span />
                <span />
                <span />
              </div>
              <span className="window-label">Product system / 01</span>
              <span className="window-live">
                <span className="status-dot" style={{ width: 7, height: 7 }} />
                {t.hero.live}
              </span>
            </div>

            <div className="product-canvas">
              <m.div
                className="map-node node-strategy"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>01</span>
                <strong>{t.hero.strategy}</strong>
                <small>{t.hero.strategySmall}</small>
              </m.div>
              <m.div
                className="map-node node-design"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>02</span>
                <strong>{t.hero.experience}</strong>
                <small>{t.hero.experienceSmall}</small>
              </m.div>
              <m.div
                className="map-node node-build"
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>03</span>
                <strong>{t.hero.build}</strong>
                <small>{t.hero.buildSmall}</small>
              </m.div>

              <div className="map-center is-floating">
                <span className="center-pulse" />
                <div className="center-logo">
                  <Image
                    src="/profile.jpg"
                    alt="Mateus Camacho"
                    width={360}
                    height={360}
                    quality={100}
                    priority
                    unoptimized
                    className="center-logo-photo"
                  />
                </div>
              </div>

              <m.div
                className="signal-card"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <div>
                  <span>{t.hero.systemSignal}</span>
                  <strong>{t.hero.readyToScale}</strong>
                </div>
                <div className="signal-bars" aria-hidden>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </m.div>
            </div>

            <div className="product-footer">
              <span>{t.hero.think}</span>
              <MoveRight className="size-3.5" />
              <span>{t.hero.design}</span>
              <MoveRight className="size-3.5" />
              <span>{t.hero.build}</span>
              <MoveRight className="size-3.5" />
              <span>{t.hero.grow}</span>
            </div>
          </div>
        </m.div>
      </div>

      <div className="container hero-bottom">
        <Link href="/#about" className="scroll-cue">
          <span className="scroll-mouse" aria-hidden>
            <span className="scroll-mouse-wheel" />
          </span>
          <span>{t.hero.scrollToExplore}</span>
          <span className="scroll-cue-line" aria-hidden />
        </Link>
        <p>{t.hero.basedIn}</p>
      </div>
    </section>
  );
}
