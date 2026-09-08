import "lenis/dist/lenis.css";
import type Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

let activeLenis: Lenis | null = null;

export function scrollToSection(href: string) {
  const target = document.querySelector<HTMLElement>(href);
  if (!target) return;

  if (activeLenis) {
    activeLenis.scrollTo(target, { duration: 1.05 });
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
    let hashFrame = 0;

    const settleInitialHash = (attempt = 0) => {
      const hash = window.location.hash;
      if (!hash || hash === "#home" || isDisposed) return;

      const target = document.querySelector<HTMLElement>(hash);
      if (target) {
        const distanceFromHeader = target.getBoundingClientRect().top - 96;
        if (Math.abs(distanceFromHeader) > 2) {
          if (activeLenis) {
            activeLenis.scrollTo(target, { immediate: true });
          } else {
            window.scrollTo({ top: Math.max(target.offsetTop - 96, 0) });
          }
        }
      }

      if (attempt < 120) {
        hashFrame = window.requestAnimationFrame(() => settleInitialHash(attempt + 1));
      }
    };

    const configureScroll = async () => {
      activeLenis?.destroy();
      activeLenis = null;

      if (reduceMotion.matches) {
        settleInitialHash();
        return;
      }

      const { default: LenisController } = await import("lenis");
      if (isDisposed || reduceMotion.matches) return;

      activeLenis = new LenisController({
        autoRaf: true,
        duration: 1.05,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
        anchors: true,
      });
      settleInitialHash();
    };

    configureScroll();
    reduceMotion.addEventListener("change", configureScroll);

    return () => {
      isDisposed = true;
      if (hashFrame) window.cancelAnimationFrame(hashFrame);
      reduceMotion.removeEventListener("change", configureScroll);
      activeLenis?.destroy();
      activeLenis = null;
    };
  }, []);

  return children;
}
