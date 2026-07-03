"use client";

import { useLanguage } from "@/lib/language-context";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/reveal";

function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="stats-section" aria-label="Career overview">
      <div className="container">
        <Reveal className="stats-panel">
          <div className="stat">
            <strong>
              <Counter target={7} />
            </strong>
            <span>{t.stats.careerChapters}</span>
          </div>
          <div className="stat">
            <strong>
              <Counter target={4} />
            </strong>
            <span>{t.stats.connectedDisciplines}</span>
          </div>
          <div className="stat">
            <strong>
              <Counter target={100} suffix="%" />
            </strong>
            <span>{t.stats.endToEndOwnership}</span>
          </div>
          <div className="stat stat-statement">
            <span>{t.stats.fromWhatIf}</span>
            <strong>{t.stats.whatIf}</strong>
            <span>{t.stats.toShipped}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
