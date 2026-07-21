import { ThemeToggle } from "@/components/common/theme-toggle";
import { navItems, profile, socialLinks } from "@/data/portfolio";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function scrollToHref(href: string) {
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "border-b border-border/70 bg-background/80 shadow-sm backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            type="button"
            className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={() => scrollToHref("#home")}
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 bg-primary/10 text-sm font-bold text-primary shadow-[0_0_24px_hsl(var(--primary)/0.18)]">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:block">
              {profile.name}
            </span>
          </button>

          <div className="hidden items-center gap-2 rounded-full border border-border/70 bg-card/70 px-2 py-2 shadow-sm backdrop-blur-xl lg:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => scrollToHref(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden rounded-full border border-primary/40 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_hsl(var(--primary)/0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_hsl(var(--primary)/0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:inline-flex"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
            <ThemeToggle />
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground backdrop-blur transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:hidden"
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {isOpen ? (
        <div className="fixed inset-x-4 top-24 z-50 rounded-3xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => {
                  scrollToHref(item.href);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setIsOpen(false)}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function FloatingDock() {
  return (
    <aside className="fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 rounded-full border border-border/70 bg-background/75 px-3 py-2 shadow-2xl backdrop-blur-xl md:flex">
      <div className="flex items-center gap-1">
        {navItems.slice(0, 5).map((item) => (
          <button
            key={item.href}
            type="button"
            className="rounded-full px-3 py-2 text-xs font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => scrollToHref(item.href)}
          >
            {item.label}
          </button>
        ))}
        <span className="mx-1 h-5 w-px bg-border" />
        {socialLinks.slice(0, 2).map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <item.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </aside>
  );
}
