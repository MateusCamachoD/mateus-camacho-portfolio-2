import Image from "next/image";
import { Bot, CloudSun, Leaf, Sparkles, TrendingUp, Users } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  if (project.image) {
    return (
      <div className={`project-visual image-visual ${compact ? "is-compact" : ""}`}>
        <Image
          src={project.image}
          alt={project.name}
          fill
          quality={100}
          unoptimized
          className="object-cover object-top"
        />
      </div>
    );
  }

  if (project.accent === "green") {
    return (
      <div className={`project-visual rural-visual ${compact ? "is-compact" : ""}`}>
        <div className="visual-noise" />
        <div className="rural-brand">
          <span>
            <Leaf className="size-4" />
          </span>
          RuralizAI
        </div>
        <div className="rural-dashboard">
          <div className="rural-sidebar">
            <span className="sidebar-active">
              <Sparkles />
            </span>
            <span>
              <CloudSun />
            </span>
            <span>
              <TrendingUp />
            </span>
          </div>
          <div className="rural-main">
            <div className="rural-greeting">
              <div>
                <small>Good morning, Mateus</small>
                <strong>Your operation, made clearer.</strong>
              </div>
              <span className="weather-pill">
                <CloudSun className="size-4" />
                24° · Clear
              </span>
            </div>
            <div className="rural-grid">
              <div className="insight-card">
                <span className="card-kicker">
                  <Bot className="size-3.5" /> AI insight
                </span>
                <strong>Conditions look favorable for the next action.</strong>
                <div className="confidence">
                  <span />
                  <small>High confidence</small>
                </div>
              </div>
              <div className="metric-card">
                <small>Field signal</small>
                <strong>Healthy</strong>
                <div className="mini-chart" aria-hidden>
                  {[42, 62, 52, 76, 68, 88, 82].map((height, index) => (
                    <span key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
              <div className="action-card">
                <small>Recommended next</small>
                <strong>Review today&apos;s plan</strong>
                <span className="action-button">Open brief →</span>
              </div>
            </div>
          </div>
        </div>
        <span className="visual-caption">Intelligence, grounded in context</span>
      </div>
    );
  }

  return (
    <div className={`project-visual telou-visual ${compact ? "is-compact" : ""}`}>
      <div className="visual-noise" />
      <div className="telou-copy">
        <span className="telou-logo">telou/</span>
        <p>A clearer path from question to outcome.</p>
      </div>
      <div className="telou-phone phone-back">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-status">
            <span>9:41</span>
            <span>•••</span>
          </div>
          <div className="phone-welcome">
            <small>Welcome back</small>
            <strong>What do you need today?</strong>
          </div>
          <div className="service-list">
            <div>
              <span className="service-icon violet">
                <Sparkles />
              </span>
              <p>
                <strong>Start a request</strong>
                <small>We&apos;ll guide each step</small>
              </p>
              <span>→</span>
            </div>
            <div>
              <span className="service-icon coral">
                <Users />
              </span>
              <p>
                <strong>Talk to a specialist</strong>
                <small>Get the right help</small>
              </p>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
      <div className="telou-phone phone-front">
        <div className="phone-notch" />
        <div className="phone-screen phone-progress">
          <div className="phone-status">
            <span>9:41</span>
            <span>•••</span>
          </div>
          <small>Request progress</small>
          <strong>Everything in one place.</strong>
          <div className="progress-ring">
            <span>72%</span>
          </div>
          <div className="progress-step">
            <span className="done">✓</span>
            <p>
              <strong>Details confirmed</strong>
              <small>Today, 09:24</small>
            </p>
          </div>
          <div className="progress-step">
            <span>2</span>
            <p>
              <strong>Specialist review</strong>
              <small>In progress</small>
            </p>
          </div>
        </div>
      </div>
      <span className="visual-caption">Service, designed around people</span>
    </div>
  );
}
