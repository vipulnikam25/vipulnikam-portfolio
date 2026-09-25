import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { experiences } from "@/data/portfolio";
import { BriefcaseBusiness, Calendar, ExternalLink, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell bg-muted/25">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Experience"
            title="Achievement-led timeline across backend modernization and data platforms."
            description="The story is not just tools used; it is systems shipped, APIs built, databases migrated, and workflows automated."
          />
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-border to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Reveal key={`${experience.role}-${experience.period}`} delay={index * 0.08}>
                <article className="relative rounded-lg border border-border/70 bg-card/75 p-6 shadow-sm backdrop-blur-xl md:ml-16 md:p-8">
                  <div className="absolute -left-[4.15rem] top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_0_32px_hsl(var(--primary)/0.2)] md:flex">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase text-primary">
                        {experience.type}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                        {experience.role}
                      </h3>
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-3 rounded-md border border-border/70 bg-background/60 px-4 py-3 text-left transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-md border border-border bg-white p-1.5">
                          <img
                            src={experience.companyLogo}
                            alt="Plainsurf Solutions logo"
                            className="h-full w-full object-contain"
                          />
                        </span>
                        <span>
                          <span className="block text-base font-semibold text-foreground">{experience.company}</span>
                          <span className="mt-1 inline-flex items-center text-sm text-muted-foreground">
                            plainsurf.com
                            <ExternalLink className="ml-2 h-3.5 w-3.5" />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="grid gap-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {experience.period}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-4 lg:grid-cols-[1fr_0.34fr]">
                    <ul className="space-y-3">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary))]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md border border-border/70 bg-background/60 p-4">
                      <p className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.stack.map((item) => (
                          <span key={item} className="rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-foreground">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
