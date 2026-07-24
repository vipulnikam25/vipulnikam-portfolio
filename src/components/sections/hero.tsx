import { Reveal } from "@/components/common/reveal";
import { heroRoles, metrics, profile, socialLinks } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import { lazy, Suspense } from "react";

const DataNetworkScene = lazy(() => import("@/components/visuals/data-network-scene"));

function scrollToContact() {
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8">
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="absolute left-1/2 top-20 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-4xl">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary))]" />
                Available for backend, data, and cloud engineering roles
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xl font-semibold text-muted-foreground sm:text-3xl">
                <span>{profile.role}</span>
                <span className="hidden h-8 w-px bg-border sm:block" />
                <span className="relative inline-flex h-10 min-w-[17rem] overflow-hidden text-primary">
                  <span className={reduceMotion ? "" : "role-rotator"}>
                    {heroRoles.map((role) => (
                      <span key={role} className="block h-10">
                        {role}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
                {profile.headline}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_20px_60px_hsl(var(--primary)/0.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_hsl(var(--primary)/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-bold text-foreground backdrop-blur transition hover:-translate-y-1 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Start a Conversation
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition hover:-translate-y-1 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="relative min-h-[26rem] lg:min-h-[38rem]">
            <div className="absolute inset-0 rounded-[2rem] border border-border/70 bg-card/50 shadow-2xl backdrop-blur-xl" />
            <div className="absolute inset-3 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,hsl(var(--primary)/0.22),transparent_38%),linear-gradient(145deg,hsl(var(--card)),hsl(var(--muted)))]">
              <div className="absolute left-5 top-5 z-10 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 z-10 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Live system map</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  APIs, pipelines, databases, and automation flows connected into one production story.
                </p>
              </div>
              {reduceMotion ? (
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-48 w-48 rounded-full border border-primary/40 bg-primary/10 shadow-[0_0_80px_hsl(var(--primary)/0.22)]" />
                </div>
              ) : (
                <Suspense fallback={<div className="absolute inset-0 animate-pulse bg-primary/5" />}>
                  <DataNetworkScene />
                </Suspense>
              )}
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={0.1 + index * 0.05}>
              <div className="rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm backdrop-blur-xl">
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-muted-foreground md:block">
        <motion.button
          type="button"
          aria-label="Scroll to about section"
          className="rounded-full border border-border bg-card/60 p-3 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.button>
      </div>
    </section>
  );
}
