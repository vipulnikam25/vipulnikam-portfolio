import { Reveal } from "@/components/common/reveal";
import { heroRoles, metrics, profile, socialLinks } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mic2, Send, Volume2 } from "lucide-react";
import { useState } from "react";

const heroTags = ["Python", "AI/ML", "Data Pipelines", "FastAPI", "AWS", "Azure", "Backend APIs", "Automation"];

function scrollToContact() {
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function speakSummary() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(profile.speechSummary);
  utterance.rate = 0.92;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [hasSpoken, setHasSpoken] = useState(false);

  const handleSpeak = () => {
    speakSummary();
    setHasSpoken(true);
  };

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8">
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="absolute left-1/2 top-20 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-4xl">
            <Reveal>
              <div className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary))]" />
                <span className="text-pretty">
                  Open to Data Engineering, AI/ML Engineering, Python Development, Backend Engineering, Backend Developer, and Software Development roles.
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 flex flex-col gap-3 text-xl font-semibold text-muted-foreground sm:text-3xl">
                <span>{profile.role}</span>
                <span className="relative inline-flex h-10 max-w-full overflow-hidden text-primary">
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

          <Reveal delay={0.18} className="relative min-h-[31rem] lg:min-h-[38rem]">
            <div className="absolute inset-0 rounded-[2rem] border border-border/70 bg-card/50 shadow-2xl backdrop-blur-xl" />
            <div className="avatar-stage absolute inset-3 overflow-hidden rounded-[1.6rem] border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,hsl(var(--primary)/0.24),transparent_34%),linear-gradient(145deg,hsl(var(--card)),hsl(var(--muted)))]" />
              <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur">
                <Mic2 className="h-4 w-4" />
                Profile Intro
              </div>

              {heroTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className={`floating-tag tag-${index}`}
                  animate={reduceMotion ? undefined : { y: [0, index % 2 ? 8 : -8, 0] }}
                  transition={{ duration: 3 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                >
                  {tag}
                </motion.span>
              ))}

              <div className="absolute inset-x-0 bottom-24 top-20 z-10 grid place-items-center">
                <motion.div
                  className="avatar-card relative h-72 w-72 rounded-[2rem] border border-primary/30 bg-background/40 p-3 shadow-[0_34px_90px_hsl(var(--primary)/0.22)] backdrop-blur md:h-80 md:w-80"
                  animate={reduceMotion ? undefined : { rotateY: [-4, 4, -4], rotateX: [2, -2, 2] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src={profile.imageUrl}
                    alt="Vipul Nikam"
                    className="h-full w-full rounded-[1.45rem] object-cover"
                  />
                  <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-semibold text-foreground shadow-xl backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Data + AI + Python
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl border border-border/70 bg-background/80 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Interactive Summary</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hear a short intro based on my resume. Audio starts only when you choose it.
                </p>
                <button
                  type="button"
                  onClick={handleSpeak}
                  className="mt-4 inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Volume2 className="mr-2 h-4 w-4" />
                  {hasSpoken ? "Replay Summary" : "Hear My Summary"}
                </button>
              </div>
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
