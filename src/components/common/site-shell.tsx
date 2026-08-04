import { ThemeToggle } from "@/components/common/theme-toggle";
import { navItems, profile, socialLinks } from "@/data/portfolio";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function scrollToHref(href: string) {
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const isMovingDown = currentY > lastY + 6;
      const isMovingUp = currentY < lastY - 6;
      let nextActiveHref = "#home";

      for (const item of navItems) {
        const section = document.querySelector(item.href) as HTMLElement | null;
        if (section && section.offsetTop <= currentY + 170) {
          nextActiveHref = item.href;
        }
      }

      setIsScrolled(currentY > 16);
      setActiveHref(nextActiveHref);
      if (currentY > 80 && isMovingDown) setIsOpen(false);
      if (currentY < 140 || isMovingUp) setIsHidden(false);
      if (currentY > 220 && isMovingDown) setIsHidden(true);
      lastY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerState = isHidden && !isOpen ? "-translate-y-16 hover:translate-y-0 focus-within:translate-y-0" : "translate-y-0";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${headerState}`}
      onMouseEnter={() => setIsHidden(false)}
    >
      <div className="mx-auto mt-3 max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex min-h-16 items-center justify-between rounded-full border px-4 py-2 transition-all duration-300 sm:px-5 ${
            isScrolled
              ? "border-border/80 bg-background/85 shadow-xl backdrop-blur-xl"
              : "border-border/40 bg-background/50 backdrop-blur-md"
          }`}
          aria-label="Primary navigation"
        >
          <button
            type="button"
            className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={() => scrollToHref("#home")}
          >
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-primary/40 bg-primary/10">
              <img src={profile.imageUrl} alt="" className="h-full w-full object-cover" />
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:block">
              {profile.name}
            </span>
          </button>

          <div className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                className={`rounded-full px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeHref === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                onClick={() => scrollToHref(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground backdrop-blur transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 xl:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <div className="fixed inset-x-4 top-24 z-50 rounded-3xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur-xl xl:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeHref === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => {
                  scrollToHref(item.href);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function FixedActionRail() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let idleTimer: ReturnType<typeof window.setTimeout>;

    const onScroll = () => {
      const currentY = window.scrollY;
      const isMovingDown = currentY > lastY + 6;

      window.clearTimeout(idleTimer);
      setIsVisible(currentY > 160 && !isMovingDown);
      idleTimer = window.setTimeout(() => {
        setIsVisible(window.scrollY > 160);
      }, 360);

      lastY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(idleTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <aside
      className={`fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-full border border-border/70 bg-background/80 p-2 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-out md:flex ${
        isVisible ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-8 opacity-0"
      }`}
      aria-label="Social and theme actions"
    >
      {socialLinks.slice(0, 5).map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <item.icon className="h-4 w-4" />
        </a>
      ))}
      <span className="my-1 h-px w-6 bg-border" />
      <ThemeToggle />
    </aside>
  );
}
