import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { skillGroups } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-shell bg-muted/25">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Technical Arsenal"
            title="A stack built for APIs, pipelines, cloud data, and automation."
            description="Skills are grouped by how they show up in production work, not as a flat resume dump."
          />
          <Reveal className="skill-orbit-panel">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.18),transparent_42%)]" />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Skill Motion Map</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Data, AI/ML, Python, backend, cloud, and automation tools moving together as one working stack.
              </p>
            </div>
            <div className="relative mt-6 h-56 overflow-hidden rounded-2xl border border-border/70 bg-background/55">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  className={`skill-float skill-float-${index}`}
                  animate={reduceMotion ? undefined : { x: [0, index % 2 ? 18 : -18, 0], y: [0, index % 2 ? -14 : 14, 0] }}
                  transition={{ duration: 4 + index * 0.45, repeat: Infinity, ease: "easeInOut" }}
                >
                  <group.icon className="h-5 w-5" />
                  <span>{group.title}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.05}>
              <article className="skill-card group">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                      <group.icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="rounded-full border border-border/70 bg-background/70 px-3 py-2 text-sm font-medium text-foreground shadow-sm"
                      initial={reduceMotion ? undefined : { opacity: 0, scale: 0.92 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.025, duration: 0.35 }}
                      whileHover={reduceMotion ? undefined : { y: -4, borderColor: "hsl(var(--primary) / 0.55)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
