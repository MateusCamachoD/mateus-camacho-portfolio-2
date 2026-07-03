import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CodeXml,
  LockKeyhole,
} from "lucide-react";
import { ProjectVisual } from "@/components/project-visual";
import { Footer } from "@/components/footer";
import { projects } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.oneLiner,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  if (project.liveUrl || project.slug === "ruralizai") {
    redirect(project.liveUrl || "https://ruralizai.com.br");
  }

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className={`case-study case-${project.accent}`}>
      <div className="case-hero container">
        <Link href="/#work" className="case-back">
          <ArrowLeft className="size-4" />
          Selected work
        </Link>

        <div className="case-heading">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1>{project.name}</h1>
          </div>
          <p>{project.oneLiner}</p>
        </div>

        <div className="case-meta">
          <div>
            <span>Role</span>
            <strong>Product · Design · Engineering</strong>
          </div>
          <div>
            <span>Scope</span>
            <strong>0 → 1 product development</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>{project.status}</strong>
          </div>
        </div>

        <ProjectVisual project={project} compact />

        <div className="case-actions">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "primary" })}
          >
            <CodeXml className="size-4" />
            View GitHub
            <ArrowUpRight className="size-4" />
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary" })}
            >
              Live demo
              <ArrowUpRight className="size-4" />
            </a>
          ) : (
            <span
              className={cn(buttonVariants({ variant: "secondary" }), "private-demo")}
              title="The live product is not publicly available"
            >
              <LockKeyhole className="size-4" />
              Live demo · Private
            </span>
          )}
        </div>
      </div>

      <section className="case-body container">
        <div className="case-intro">
          <p className="case-label">Overview</p>
          <h2>{project.description}</h2>
        </div>

        <div className="case-chapters">
          <article>
            <span>01</span>
            <div>
              <p className="case-label">The challenge</p>
              <h3>Make complexity useful.</h3>
              <p>{project.challenge}</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <p className="case-label">The solution</p>
              <h3>Design the system and the experience together.</h3>
              <p>{project.solution}</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <p className="case-label">Product outcomes</p>
              <h3>A foundation built to compound.</h3>
              <ul>
                {project.results.map((result) => (
                  <li key={result}>
                    <Check className="size-4" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className="case-stack">
          <p className="case-label">Tools & disciplines</p>
          <div>
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        <Link href={`/projects/${nextProject.slug}`} className="next-project">
          <span>Next SaaS Platform</span>
          <strong>{nextProject.name}</strong>
          <ArrowRight />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
