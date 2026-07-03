"use client";

import { useLanguage } from "@/lib/language-context";
import type { Language } from "@/lib/i18n";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggle = (lang: Language) => {
    if (lang !== language) setLanguage(lang);
  };

  return (
    <div className="lang-toggle" role="group" aria-label="Language selector">
      <button
        className={`lang-btn ${language === "en" ? "is-active" : ""}`}
        onClick={() => toggle("en")}
        aria-pressed={language === "en"}
        title="Switch to English"
      >
        EN
      </button>
      <span className="lang-divider" aria-hidden>
        /
      </span>
      <button
        className={`lang-btn ${language === "pt" ? "is-active" : ""}`}
        onClick={() => toggle("pt")}
        aria-pressed={language === "pt"}
        title="Mudar para Português"
      >
        PT
      </button>
    </div>
  );
}
