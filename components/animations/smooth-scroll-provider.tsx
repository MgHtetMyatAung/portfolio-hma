"use client";

import { createContext, useContext, useEffect, useMemo, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

type LenisContextValue = {
  lenis: () => Lenis | null; // the instance, for scrollTo and friends
  stopScroll: () => void; // call when a modal or menu opens
  startScroll: () => void; // call when it closes
};

const LenisContext = createContext<LenisContextValue>({
  lenis: () => null,
  stopScroll: () => {},
  startScroll: () => {},
});

export function useLenis(): LenisContextValue {
  return useContext(LenisContext);
}

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: false }); // 1. no separate loop
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update); // 2. keep ScrollTrigger in sync

    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update); // 3. GSAP's ticker drives Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const value = useMemo<LenisContextValue>(
    () => ({
      lenis: () => lenisRef.current,
      stopScroll: () => lenisRef.current?.stop(),
      startScroll: () => lenisRef.current?.start(),
    }),
    [],
  );

  return (
    <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
  );
}
