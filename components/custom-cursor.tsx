"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, .skill-pill, .project-tags span, .meta-badge, .lang-btn';
const MEDIA_SELECTOR = ".project-visual-wrap, .product-window, img";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rippleLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const rippleLayer = rippleLayerRef.current;
    if (!dot || !ring || !rippleLayer) return;

    document.documentElement.classList.add("has-custom-cursor");

    let targetX = -100;
    let targetY = -100;
    let dotX = targetX;
    let dotY = targetY;
    let ringX = targetX;
    let ringY = targetY;
    let ringScale = 1;
    let targetRingScale = 1;
    let dotScale = 1;
    let targetDotScale = 1;
    let visible = false;
    let pressed = false;
    let raf = 0;

    const setVisible = (value: boolean) => {
      if (visible === value) return;
      visible = value;
      dot.style.opacity = value ? "1" : "0";
      ring.style.opacity = value ? "1" : "0";
    };

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setVisible(true);

      const target = event.target as HTMLElement | null;
      const overMedia = !!target?.closest(MEDIA_SELECTOR);
      const overInteractive = !!target?.closest(INTERACTIVE_SELECTOR);

      // The project visuals render their own "View case" chip — step aside.
      const overProjectChip = !!target?.closest(".project-visual-wrap");
      dot.style.opacity = overProjectChip ? "0" : "1";
      ring.style.opacity = overProjectChip ? "0" : "1";

      if (overInteractive) {
        targetRingScale = 1.7;
        targetDotScale = 0.45;
        ring.classList.add("is-active");
      } else if (overMedia) {
        targetRingScale = 1.35;
        targetDotScale = 0.7;
        ring.classList.remove("is-active");
      } else {
        targetRingScale = 1;
        targetDotScale = 1;
        ring.classList.remove("is-active");
      }
    };

    const onDown = (event: PointerEvent) => {
      pressed = true;
      const ripple = document.createElement("span");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      rippleLayer.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), {
        once: true,
      });
    };

    const onUp = () => {
      pressed = false;
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const tick = () => {
      // Dot tracks tightly, ring trails with inertia.
      dotX += (targetX - dotX) * 0.4;
      dotY += (targetY - dotY) * 0.4;
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;

      const pressFactor = pressed ? 0.85 : 1;
      ringScale += (targetRingScale * pressFactor - ringScale) * 0.18;
      dotScale += (targetDotScale * pressFactor - dotScale) * 0.25;

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={rippleLayerRef} className="cursor-ripple-layer" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
