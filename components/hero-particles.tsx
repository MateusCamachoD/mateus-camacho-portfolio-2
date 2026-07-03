"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  pulse: number;
  pulseSpeed: number;
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    if (reducedMotion.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = false;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const count = finePointer.matches ? 26 : 14;
    let particles: Particle[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 0.8 + Math.random() * 1.7,
      vx: (Math.random() - 0.5) * 0.14,
      vy: -0.04 - Math.random() * 0.12,
      alpha: 0.12 + Math.random() * 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.004 + Math.random() * 0.008,
    });

    const init = () => {
      resize();
      particles = Array.from({ length: count }, spawn);
    };

    const isDark = () =>
      document.documentElement.classList.contains("dark");

    const frame = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      const base = isDark() ? "173, 160, 255" : "109, 93, 252";

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.y < -6 || p.x < -6 || p.x > width + 6) {
          Object.assign(p, spawn(), { y: height + 4 });
        }

        const twinkle = 0.65 + Math.sin(p.pulse) * 0.35;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${base}, ${(p.alpha * twinkle).toFixed(3)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    init();

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    observer.observe(canvas);

    const onVisibility = () =>
      document.hidden ? stop() : start();
    document.addEventListener("visibilitychange", onVisibility);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 150);
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden />;
}
