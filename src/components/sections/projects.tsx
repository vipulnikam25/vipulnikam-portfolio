import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Github, Layers3 } from "lucide-react";

const accentClass: Record<string, string> = {
  cyan: "text-cyan-700 dark:text-cyan-300",
  teal: "text-teal-700 dark:text-teal-300",
  lime: "text-lime-700 dark:text-lime-300",
  blue: "text-blue-700 dark:text-blue-300",
  slate: "text-slate-700 dark:text-slate-300",
};

type Project = (typeof projects)[number];

function ArchitectureFlow({ flow }: { flow: string[] }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center" aria-label="Project architecture flow">
      {flow.map((step, index) => (
        <div key={step} className="contents">
          <span className="border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground">
            {step}
          </span>
          {index < flow.length - 1 ? (
            <ChevronRight className="h-4 w-4 rotate-90 self-center text-primary sm:rotate-0" aria-hidden="true" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center text-sm font-bold text-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Explore case study
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-border bg-background p-0 sm:rounded-lg">
        <div className="relative min-h-64 overflow-hidden border-b border-border bg-card">
          <img src={project.image} alt={project.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-x-0 bottom-0 bg-background/92 p-6 backdrop-blur sm:p-8">
            <p className={`text-xs font-semibold uppercase ${accentClass[project.accent]}`}>{project.eyebrow}</p>
            <DialogHeader className="mt-2 pr-8 text-left">
              <DialogTitle className="font-display text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                {project.title}
              </DialogTitle>
              <DialogDescription>{project.period}</DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <section>
              <p className="text-xs font-semibold uppercase text-primary">The challenge</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.caseStudy.challenge}</p>
            </section>
            <section>
              <p className="text-xs font-semibold uppercase text-primary">Engineering approach</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.caseStudy.approach}</p>
            </section>
          </div>

          <section className="border-y border-border py-6">
            <div className="mb-4 flex items-center gap-2">
              <Layers3 className="h-4 w-4 text-primary" />
              <p className="text-xs font-semibold uppercase text-primary">Architecture flow</p>
            </div>
            <ArchitectureFlow flow={project.caseStudy.flow} />
          </section>

          <section>
            <p className="text-xs font-semibold uppercase text-primary">Outcome</p>
            <p className="mt-3 text-base font-medium leading-7 text-foreground">{project.impact}</p>
          </section>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                {item}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Github className="mr-2 h-4 w-4" />
            {"repositoryIsProfile" in project && project.repositoryIsProfile ? "View GitHub profile" : "View source code"}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="project-card group h-full min-w-0 flex-col p-0 md:p-0"
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.24 }}
    >
      <div className="relative aspect-video w-full shrink-0 overflow-hidden border-b border-border bg-background">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" aria-hidden="true" />
        <span className="absolute right-5 top-5 font-display text-sm font-semibold text-white/80">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="grid min-w-0 flex-1 grid-rows-[auto_1fr_auto_auto] p-6 md:p-7">
        <header className="min-w-0 border-b border-border/70 pb-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className={`text-xs font-semibold uppercase ${accentClass[project.accent]}`}>{project.eyebrow}</p>
            <p className="text-xs font-medium text-muted-foreground">{project.period}</p>
          </div>
          <h3 className="mt-3 break-words font-display text-2xl font-semibold leading-tight text-foreground sm:min-h-16">
            {project.title}
          </h3>
        </header>

        <div className="min-w-0 py-5">
          <p className="line-clamp-5 text-sm leading-7 text-muted-foreground">{project.description}</p>

          <div className="mt-5 border-l-2 border-primary/60 pl-4">
            <p className="text-sm font-medium leading-6 text-foreground">{project.impact}</p>
          </div>
        </div>

        <div className="flex min-h-20 flex-wrap content-start gap-2 border-t border-border/70 py-5">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="border border-border/70 bg-background/70 px-2.5 py-1.5 text-xs font-semibold text-muted-foreground">
              {item}
            </span>
          ))}
          {project.stack.length > 4 ? (
            <span className="px-2 py-1.5 text-xs font-semibold text-primary">+{project.stack.length - 4}</span>
          ) : null}
        </div>

        <div className="flex min-w-0 items-center justify-between gap-3 border-t border-border pt-5">
          <ProjectCaseStudy project={project} />
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Open GitHub for ${project.title}`}
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects explained as engineering decisions, not thumbnail links."
            description="Every project gets the same visual weight, with an expandable view of its challenge, architecture, approach, and outcome."
          />
          {/* <p className="max-w-sm text-sm leading-6 text-muted-foreground xl:text-right">
            Explore all {projects.length} projects, each with its architecture, approach, and outcome.
          </p> */}
        </div>

        <Reveal>
          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3" aria-label="Portfolio projects">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
