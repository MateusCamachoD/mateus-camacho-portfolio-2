"use client";

import { AnimatePresence, m, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { Building2, Calendar, Check, ExternalLink, MapPin, Minus, Plus } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

// Map portfolio data keys to translation keys
const experienceKeyMap: Record<string, string> = {
  "Desperte-Founder & CEO": "Desperte",
  "V4 Company-Senior Account Manager": "V4 Company Senior",
  "V4 Company-Project Lead & Design Specialist": "V4 Company Project",
  "Ellon Technology-Senior Full Stack Developer": "Ellon Technology",
  "Assessoria 74-Project Lead": "Assessoria 74",
  "RevEx-Full Stack Developer": "RevEx",
  "SS Systems-Software Developer": "SS Systems",
};

export function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState(0);
  const [reachedIndices, setReachedIndices] = useState<number[]>([0]);
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.45"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const updateReachedMarkers = useCallback((scale: number) => {
    if (!timelineRef.current) return;
    const trackEl = timelineRef.current.querySelector(".timeline-track") as HTMLElement;
    if (!trackEl) return;

    const trackHeight = trackEl.clientHeight;
    const lineTipY = 44 + scale * trackHeight;

    const items = timelineRef.current.querySelectorAll(".timeline-item");
    const newReached: number[] = [];

    items.forEach((item, idx) => {
      const el = item as HTMLElement;
      const triggerY = el.offsetTop + 25;
      if (idx === 0 || lineTipY >= triggerY) {
        newReached.push(idx);
      }
    });

    setReachedIndices((prev) => {
      if (prev.length !== newReached.length || prev.some((val, i) => val !== newReached[i])) {
        return newReached;
      }
      return prev;
    });
  }, []);

  useMotionValueEvent(lineScale, "change", (latest) => {
    updateReachedMarkers(latest);
  });

  useEffect(() => {
    const handleScrollOrResize = () => {
      updateReachedMarkers(lineScale.get());
    };
    window.addEventListener("resize", handleScrollOrResize);
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });

    const timer1 = setTimeout(handleScrollOrResize, 50);
    const timer2 = setTimeout(handleScrollOrResize, 200);
    const timer3 = setTimeout(handleScrollOrResize, 400);

    return () => {
      window.removeEventListener("resize", handleScrollOrResize);
      window.removeEventListener("scroll", handleScrollOrResize);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [updateReachedMarkers, lineScale, openIndex]);

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-track" aria-hidden />
          <m.div
            className="timeline-progress"
            style={{ scaleY: lineScale }}
            aria-hidden
          />

          {experience.map((item, index) => {
            const isOpen = openIndex === index;
            const mapKey = `${item.company}-${item.role}`;
            const translationKey = experienceKeyMap[mapKey] as keyof typeof t.experienceData | undefined;
            const translated = translationKey
              ? t.experienceData[translationKey]
              : null;

            return (
              <m.article
                key={`${item.company}-${item.role}`}
                className={`timeline-item ${isOpen ? "is-open" : ""} ${reachedIndices.includes(index) ? "is-reached" : ""}`}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.94,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                  delay: Math.min(index * 0.08, 0.35),
                }}
              >
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-header-block">
                  <button
                    className="timeline-trigger"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="timeline-chapter">
                        {translated?.chapter ?? item.chapter}
                      </span>
                      <h3>{item.role}</h3>
                    </div>
                    <span className="timeline-toggle" aria-hidden>
                      {isOpen ? <Minus /> : <Plus />}
                    </span>
                  </button>

                  <div className="timeline-meta-bar">
                    <div className="timeline-meta-badges">
                      <span className="meta-badge date-badge" title="Período trabalhado">
                        <Calendar className="size-3.5" />
                        <span>{(translated as { period?: string })?.period ?? item.period}</span>
                      </span>
                      {item.location && (
                        <span className="meta-badge location-badge">
                          <MapPin className="size-3.5" />
                          <span>{(translated as { location?: string })?.location ?? item.location}</span>
                        </span>
                      )}
                    </div>

                    {item.companyUrl && (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-visit-link"
                        title={`${t.experience.visitCompany}: ${item.company}`}
                      >
                        <Building2 className="size-3.5" />
                        <span>{item.company}</span>
                        <ExternalLink className="size-3 inline-arrow" />
                      </a>
                    )}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <m.div
                      className="timeline-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="timeline-content-inner">
                        <div>
                          <p>{translated?.summary ?? item.summary}</p>
                          {item.companyUrl && (
                            <div className="timeline-content-action">
                              <a
                                href={item.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-visit-company"
                              >
                                <span>
                                  {t.experience.visitCompany}: <strong>{item.company}</strong>
                                </span>
                                <ExternalLink className="size-4" />
                              </a>
                            </div>
                          )}
                        </div>
                        <ul>
                          {(translated?.impact ?? item.impact).map((impact) => (
                            <li key={impact}>
                              <Check className="size-4" />
                              {impact}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </m.div>
                  ) : null}
                </AnimatePresence>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
