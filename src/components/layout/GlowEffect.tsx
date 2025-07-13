"use client";

import { useEffect, useRef } from "react";

export default function GlowEffect({
  children,
}: {
  children: React.ReactNode;
}) {
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isLargeScreen = () => window.innerWidth >= 1024;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isLargeScreen()) return;

      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
      updateGlowEffect();
    };

    const handleScroll = () => {
      if (!isLargeScreen()) return;

      updateGlowEffect();
    };

    const updateGlowEffect = () => {
      if (glowRef.current && isLargeScreen()) {
        const { x, y } = mousePosition.current;
        const scrollY = window.scrollY;
        glowRef.current.style.background = `radial-gradient(600px at ${x}px ${
          y + scrollY
        }px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    const handleResize = () => {
      if (!isLargeScreen() && glowRef.current) {
        glowRef.current.style.background = "";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={glowRef}>{children}</div>;
}
