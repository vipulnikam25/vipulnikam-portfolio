import { Reveal } from "@/components/common/reveal";
import { scrollToSection } from "@/components/common/smooth-scroll";
import { InteractiveAvatar } from "@/components/visuals/interactive-avatar";
import { heroRoles, metrics, profile } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, MapPin, Send } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [hasSpoken, setHasSpoken] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const handleSpeak = () => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(profile.speechSummary);
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setHasSpoken(true);
  };

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
      <div className="hero-grid absolute inset-0 -z-20" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="min-w-0 max-w-4xl">
            <Reveal delay={0.03}>
              <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-muted-foreground">
                <span className="inline-flex items-center gap-2 text-primary">
                  <span className="h-2 w-2 bg-primary" />
                  Available for opportunities
                </span>
                <span className="h-px w-8 bg-border" />
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Pune, India
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="font-display text-balance text-5xl font-semibold text-foreground sm:text-7xl lg:text-8xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 grid min-w-0 gap-1 text-xl font-semibold text-muted-foreground sm:flex sm:items-center sm:gap-3 sm:text-3xl">
                <span className="shrink-0">Open to:</span>
                <span className="relative block h-10 w-full min-w-0 overflow-hidden text-primary sm:w-auto sm:min-w-[18rem]">
                  <span className={reduceMotion ? "" : "role-rotator"}>
                    {heroRoles.map((role) => (
                      <span key={role} className="block h-10 whitespace-nowrap">
                        {role}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
                {profile.headline}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_20px_60px_hsl(var(--primary)/0.24)] transition hover:-translate-y-1 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection("#contact")}
                  className="inline-flex items-center justify-center border border-border bg-card/75 px-6 py-3 text-sm font-bold text-foreground backdrop-blur transition hover:-translate-y-1 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Start a Conversation
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="min-w-0">
            <InteractiveAvatar hasSpoken={hasSpoken} isSpeaking={isSpeaking} onSpeak={handleSpeak} />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={0.08 + index * 0.04}>
              <div className="h-full bg-card/90 p-5 backdrop-blur-xl">
                <p className="font-display text-3xl font-semibold text-foreground">{metric.value}</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-muted-foreground md:block">
        <motion.button
          type="button"
          aria-label="Scroll to about section"
          className="border border-border bg-card/70 p-3 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          onClick={() => scrollToSection("#about")}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.button>
      </div>
    </section>
  );
}
