import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { projects } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const accentClass: Record<string, string> = {
  cyan: "from-cyan-400/20 to-blue-500/10 text-cyan-300",
  teal: "from-teal-400/20 to-emerald-500/10 text-teal-300",
  lime: "from-lime-300/20 to-teal-500/10 text-lime-300",
  blue: "from-blue-400/20 to-cyan-500/10 text-blue-300",
  slate: "from-slate-400/20 to-slate-700/10 text-slate-300",
};

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Featured Work"
            title="Projects presented like product proof, not resume footnotes."
            description="The strongest projects lead with problem, impact, stack, and the engineering decisions behind them."
          />
        </div>

        <div className="grid auto-rows-[minmax(19rem,auto)] gap-5 lg:grid-cols-6">
          {projects.map((project, index) => {
            const isLarge = index === 0;
            const className = isLarge
              ? "lg:col-span-4 lg:row-span-2"
              : index < 3
                ? "lg:col-span-2"
                : "lg:col-span-3";

            return (
              <Reveal key={project.title} delay={index * 0.05} className={className}>
                <motion.article
                  className="project-card group"
                  whileHover={reduceMotion ? undefined : { y: -8, rotateX: 1.5, rotateY: -1.5 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${accentClass[project.accent]} opacity-80`} />
                  <div className="spotlight absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl transition group-hover:bg-primary/20" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                          {project.eyebrow}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{project.period}</p>
                      </div>
                      {project.featured ? (
                        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                          Featured
                        </span>
                      ) : null}
                    </div>

                    <p className="text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
                      {project.description}
                    </p>
                    <p className="mt-5 rounded-2xl border border-border/70 bg-background/55 p-4 text-sm font-medium leading-7 text-foreground">
                      {project.impact}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs font-semibold text-foreground">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-3 pt-7">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
