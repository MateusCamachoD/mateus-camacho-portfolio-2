"use client";

import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { useLanguage } from "@/lib/language-context";

const SECTION_IDS = ["about", "experience", "work", "skills"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const lastY = useRef(0);
  const activeSectionRef = useRef<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  const links = [
    { label: t.nav.about, href: "/#about", id: "about" },
    { label: t.nav.experience, href: "/#experience", id: "experience" },
    { label: t.nav.work, href: "/#work", id: "work" },
    { label: t.nav.skills, href: "/#skills", id: "skills" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      // Smart hide/show: hide when scrolling down deep, reveal on scroll up.
      const delta = y - lastY.current;
      if (y < 140) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }
      lastY.current = y;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          } else if (
            entry.target.id === activeSectionRef.current &&
            entry.boundingClientRect.top > 0
          ) {
            setActiveSection(null);
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`site-header ${scrolled ? "is-scrolled" : ""} ${
          hidden && !open ? "is-hidden" : ""
        }`}
      >
        <div className="header-inner">
          <Link
            href="/"
            className="brand-mark brand-name"
            aria-label="Mateus Camacho, home"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.pushState(null, "", "/");
              }
            }}
          >
            <span className="brand-name-text">Mateus D. Camacho</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={activeSection === link.id ? "is-active" : ""}
                aria-current={activeSection === link.id ? "true" : undefined}
              >
                <span className="nav-link-label">{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <LanguageToggle />
            <ThemeToggle />
            <Magnetic strength={0.22}>
              <Link href="/#contact" className="nav-cta btn-shine">
                {t.nav.letsTalk}
              </Link>
            </Magnetic>
            <Button
              variant="ghost"
              size="icon"
              className="menu-button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? t.nav.closeNav : t.nav.openNav}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <m.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Mobile navigation">
              {links.map((link, index) => (
                <m.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    <span>0{index + 1}</span>
                    {link.label}
                  </Link>
                </m.div>
              ))}
              <Link
                href="/#contact"
                className="mobile-contact"
                onClick={() => setOpen(false)}
              >
                {t.nav.startConversation}
              </Link>
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
