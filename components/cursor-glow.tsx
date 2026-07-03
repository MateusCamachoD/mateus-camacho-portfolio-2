"use client";

import { useEffect } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const smoothX = useSpring(x, { stiffness: 60, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 22 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 220);
      y.set(event.clientY - 220);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <m.div
      aria-hidden
      className="cursor-glow"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
