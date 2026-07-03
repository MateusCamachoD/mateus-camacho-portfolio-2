"use client";

import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const links = [
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.experience, href: "/#experience" },
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.skills, href: "/#skills" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
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
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <LanguageToggle />
            <ThemeToggle />
            <Link href="/#contact" className="nav-cta">
              {t.nav.letsTalk}
            </Link>
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
