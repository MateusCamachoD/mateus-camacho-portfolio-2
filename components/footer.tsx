"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link href="/#top" className="footer-brand">
            MC<span>.</span>
          </Link>
          <p>{t.footer.tagline}</p>
        </div>
        <p>{t.footer.designedBy} · {new Date().getFullYear()}</p>
        <Link href="/#top" className="back-to-top">
          {t.footer.backToTop}
        </Link>
      </div>
    </footer>
  );
}
