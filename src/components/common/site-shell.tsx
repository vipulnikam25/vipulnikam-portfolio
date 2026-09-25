import { scrollToSection } from "@/components/common/smooth-scroll";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { navItems, profile, socialLinks } from "@/data/portfolio";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ScrollChromeState = {
  activeHref: string;
  controlsVisible: boolean;
  isScrolled: boolean;
  progress: number;
};

function useScrollChrome(): ScrollChromeState {
  const [state, setState] = useState<ScrollChromeState>({
    activeHref: "#home",
    controlsVisible: true,
    isScrolled: false,
    progress: 0,
  });
  const directionRef = useRef<"up" | "down">("up");
  const controlsVisibleRef = useRef(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let directionAnchor = lastY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const currentY = Math.max(window.scrollY, 0);
      const delta = currentY - lastY;
      const nextDirection = delta > 1 ? "down" : delta < -1 ? "up" : directionRef.current;

      if (nextDirection !== directionRef.current) {
        directionRef.current = nextDirection;
        directionAnchor = currentY;
      }

      let controlsVisible = controlsVisibleRef.current;
      if (currentY < 120) {
        controlsVisible = true;
      } else if (nextDirection === "down" && currentY - directionAnchor > 20) {
        controlsVisible = false;
      } else if (nextDirection === "up" && directionAnchor - currentY > 10) {
        controlsVisible = true;
      }
      controlsVisibleRef.current = controlsVisible;

      const activationLine = Math.min(190, window.innerHeight * 0.32);
      let activeHref = "#home";

      for (const item of navItems) {
        const section = document.querySelector<HTMLElement>(item.href);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          activeHref = item.href;
        }
      }

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? Math.min(currentY / scrollableHeight, 1) : 0;

      setState((current) => {
        const nextState = {
          activeHref,
          controlsVisible,
          isScrolled: currentY > 16,
          progress,
        };

        return current.activeHref === nextState.activeHref &&
          current.controlsVisible === nextState.controlsVisible &&
          current.isScrolled === nextState.isScrolled &&
          Math.abs(current.progress - nextState.progress) < 0.001
          ? current
          : nextState;
      });

      lastY = currentY;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return state;
}

type SiteNavProps = ScrollChromeState;

function SiteNav({ activeHref, controlsVisible, isScrolled, progress }: SiteNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPeeked, setIsPeeked] = useState(false);
  const isVisible = controlsVisible || isOpen || isPeeked;

  useEffect(() => {
    if (!controlsVisible) setIsOpen(false);
  }, [controlsVisible]);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const navigate = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <>
      {!isVisible ? (
        <div
          className="fixed inset-x-0 top-0 z-[60] h-4"
          onMouseEnter={() => setIsPeeked(true)}
          aria-hidden="true"
        />
      ) : null}

      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ease-out ${
          isVisible ? "translate-y-0" : "-translate-y-[calc(100%+1rem)]"
        }`}
        onMouseEnter={() => setIsPeeked(true)}
        onMouseLeave={() => setIsPeeked(false)}
        onFocusCapture={() => setIsPeeked(true)}
      >
        <div className="mx-auto mt-3 max-w-7xl px-4 sm:px-6">
          <nav
            className={`relative flex min-h-16 items-center justify-between overflow-hidden rounded-full border px-4 py-2 transition-all duration-300 sm:px-5 ${
              isScrolled
                ? "border-border/80 bg-background/88 shadow-xl backdrop-blur-xl"
                : "border-border/40 bg-background/55 backdrop-blur-md"
            }`}
            aria-label="Primary navigation"
          >
            <span
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary"
              style={{ transform: `scaleX(${progress})` }}
              aria-hidden="true"
            />

            <a
              href="#home"
              className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={(event) => {
                event.preventDefault();
                navigate("#home");
              }}
            >
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-primary/40 bg-primary/10">
                <img src={profile.imageUrl} alt="" className="h-full w-full object-cover" />
              </span>
              <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:block">
                {profile.name}
              </span>
            </a>

            <div className="hidden items-center gap-1 xl:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeHref === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground backdrop-blur transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 xl:hidden"
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>

        {isOpen ? (
          <div
            id="mobile-navigation"
            className="fixed inset-x-4 top-24 z-50 rounded-3xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur-xl xl:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeHref === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      {isOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-background/35 backdrop-blur-sm xl:hidden"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
        />
      ) : null}
    </>
  );
}

function FixedActionRail({ controlsVisible }: Pick<ScrollChromeState, "controlsVisible">) {
  const [isPeeked, setIsPeeked] = useState(false);
  const isVisible = controlsVisible || isPeeked;

  return (
    <>
      {!isVisible ? (
        <div
          className="fixed right-0 top-1/2 z-40 hidden h-64 w-4 -translate-y-1/2 xl:block"
          onMouseEnter={() => setIsPeeked(true)}
          aria-hidden="true"
        />
      ) : null}

      <aside
        className={`fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-full border border-border/70 bg-background/82 p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out xl:flex ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-[calc(100%+1.5rem)] opacity-0"
        }`}
        aria-label="Social and theme actions"
        onMouseEnter={() => setIsPeeked(true)}
        onMouseLeave={() => setIsPeeked(false)}
        onFocusCapture={() => setIsPeeked(true)}
      >
        {socialLinks.slice(0, 5).map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            title={item.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <item.icon className="h-4 w-4" />
          </a>
        ))}
        <span className="my-1 h-px w-6 bg-border" />
        <ThemeToggle />
      </aside>
    </>
  );
}

export function SiteChrome() {
  const scrollState = useScrollChrome();

  return (
    <>
      <SiteNav {...scrollState} />
      <FixedActionRail controlsVisible={scrollState.controlsVisible} />
    </>
  );
}
