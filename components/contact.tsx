"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CodeXml,
  Mail,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
  const { t } = useLanguage();

  const links = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "Mateus D. Camacho",
      href: profile.linkedin,
      icon: BriefcaseBusiness,
    },
    {
      label: "GitHub",
      value: "MateusCamachoD",
      href: profile.github,
      icon: CodeXml,
    },
    {
      label: "Phone",
      value: "+55 (46) 99125-8351",
      href: profile.phone,
      icon: Smartphone,
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <Reveal className="contact-panel" variant="clip-up">
          <div className="contact-copy">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>
              {t.contact.title}
              <span>{t.contact.subtitle}</span>
            </h2>
            <p>{t.contact.description}</p>
          </div>
          <div className="contact-links">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="contact-link-icon">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <small>{link.label}</small>
                    <strong>{link.value}</strong>
                  </span>
                  <ArrowUpRight className="contact-arrow size-5" />
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
