"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Only initialize on devices with a fine pointer (ignores touchscreens)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Center the cursor elements on the mouse coordinates
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    // Use quickTo for high-frequency mousemove updates
    const xDotTo = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const yDotTo = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });

    const xRingTo = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" });
    const yRingTo = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xDotTo(e.clientX);
      yDotTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
    };

    // Scale up ring when hovering over interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        gsap.to(ring, { scale: 1.8, duration: 0.25, ease: "power2.out" });
        gsap.to(dot, { scale: 0, duration: 0.25 });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        gsap.to(ring, { scale: 1, duration: 0.25, ease: "power2.out" });
        gsap.to(dot, { scale: 1, duration: 0.25 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-cyan-500 mix-blend-difference"
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 h-8 w-8 rounded-full border-[1.4px] border-cyan-500 mix-blend-difference"
      />
    </div>
  );
}
