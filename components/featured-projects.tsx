"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowUpRight, CodeXml } from "lucide-react";
import { ProjectCardVisualWrap } from "@/components/project-card-visual-wrap";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

export function FeaturedProjects() {
  const { t } = useLanguage();

  return (
    <section className="section projects-section" id="work">
      <div className="container">
        <SectionHeading
          eyebrow={t.work.eyebrow}
          title={t.work.title}
          description={t.work.description}
        />

        <div className="projects-list">
          {projects.map((project, index) => {
            const translatedProject =
              t.projectsData[project.slug as keyof typeof t.projectsData];

            return (
              <m.article
                key={project.slug}
                className={`project-card project-${project.accent}`}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.92,
                  filter: "blur(14px)",
                  rotateX: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  rotateX: 0,
                }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                style={{ perspective: 1200 }}
              >
                <ProjectCardVisualWrap
                  project={project}
                  index={index}
                  status={translatedProject?.status ?? project.status}
                />

                <div className="project-info">
                  <div className="project-title-block">
                    <p className="eyebrow">
                      {translatedProject?.eyebrow ?? project.eyebrow}
                    </p>
                    <h3>
                      <Link
                        href={project.liveUrl || `/projects/${project.slug}`}
                        target={project.liveUrl ? "_blank" : undefined}
                        rel={project.liveUrl ? "noreferrer" : undefined}
                        className="hover:underline"
                      >
                        {project.name}
                      </Link>
                    </h3>
                  </div>
                  <div className="project-summary">
                    <p>{translatedProject?.oneLiner ?? project.oneLiner}</p>
                    <div className="project-tags">
                      {project.technologies.slice(0, 4).map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-actions">
                    <Link
                      href={project.liveUrl || `/projects/${project.slug}`}
                      target={project.liveUrl ? "_blank" : undefined}
                      rel={project.liveUrl ? "noreferrer" : undefined}
                      className={buttonVariants({ variant: "primary" })}
                    >
                      {t.work.viewCaseStudy}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(buttonVariants({ variant: "secondary" }), "project-github")}
                      >
                        <CodeXml className="size-4" />
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
