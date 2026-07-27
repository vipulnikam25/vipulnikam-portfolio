import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { projects } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const accentClass: Record<string, string> = {
  cyan: "from-cyan-400/22 to-blue-500/10",
  teal: "from-teal-400/22 to-emerald-500/10",
  lime: "from-lime-300/22 to-teal-500/10",
  blue: "from-blue-400/22 to-cyan-500/10",
  slate: "from-slate-400/22 to-slate-700/10",
};

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Projects"
            title="Equal spotlight for data, AI/ML, Python, and backend project work."
            description="Each project is shown with context, technical approach, impact, stack, and a visual system that hints at what the project does."
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <motion.article
                className="project-card group min-h-[36rem]"
                whileHover={reduceMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${accentClass[project.accent]} opacity-90`} />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="relative -mx-6 -mt-6 mb-6 min-h-52 overflow-hidden rounded-t-[1.75rem] border-b border-border/70 md:-mx-7 md:-mt-7">
                    <img
                      src={project.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-88 transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/15 to-background/88" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                        {project.eyebrow}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{project.period}</p>
                    </div>
                  </div>

                  <p className="text-pretty text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-5 rounded-2xl border border-border/70 bg-background/55 p-4 text-sm font-medium leading-7 text-foreground">
                    {project.impact}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs font-semibold text-foreground"
                      >
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
          ))}
        </div>
      </div>
    </section>
  );
}
