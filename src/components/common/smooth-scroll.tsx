import "lenis/dist/lenis.css";
import type Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

let activeLenis: Lenis | null = null;

export function scrollToSection(href: string) {
  const target = document.querySelector<HTMLElement>(href);
  if (!target) return;

  if (activeLenis) {
    activeLenis.scrollTo(target, { offset: -96, duration: 1.05 });
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isDisposed = false;

    const configureScroll = async () => {
      activeLenis?.destroy();
      activeLenis = null;

      if (reduceMotion.matches) return;

      const { default: LenisController } = await import("lenis");
      if (isDisposed || reduceMotion.matches) return;

      activeLenis = new LenisController({
        autoRaf: true,
        duration: 1.05,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
        anchors: { offset: -96 },
      });
    };

    configureScroll();
    reduceMotion.addEventListener("change", configureScroll);

    return () => {
      isDisposed = true;
      reduceMotion.removeEventListener("change", configureScroll);
      activeLenis?.destroy();
      activeLenis = null;
    };
  }, []);

  return children;
}
