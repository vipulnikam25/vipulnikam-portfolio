import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { certifications, education, publication } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export function CredentialsSection() {
  return (
    <>
      <section id="education" className="section-shell">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12">
            <SectionHeading
              eyebrow="Education"
              title="Academic foundation behind the engineering journey."
              description="From school-level science foundations to Information Technology engineering, this path shaped my interest in data, software, and intelligent systems."
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {education.map((item, index) => (
              <Reveal key={`${item.level}-${item.school}`} delay={index * 0.06}>
                <article className="flex h-full min-h-[24rem] flex-col rounded-lg border border-border/70 bg-card/75 p-6 shadow-sm backdrop-blur-xl">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-semibold uppercase text-primary">{item.level}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">{item.school}</h3>
                  <p className="mt-2 text-muted-foreground">{item.stream}</p>
                  <div className="mt-auto grid gap-3 rounded-md border border-border/70 bg-background/60 p-4 text-sm text-muted-foreground">
                    <span>{item.board}</span>
                    <span>{item.location}</span>
                    <span>{item.period}</span>
                    <span className="font-semibold text-foreground">{item.detail}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section-shell bg-muted/25">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12">
            <SectionHeading
              eyebrow="Certifications"
              title="Credentials across data, AI/ML, automation, Python, and analytics."
              description="Certifications are grouped as practical signals for the roles I am targeting."
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert, index) => (
              <Reveal key={`${cert.title}-${cert.issuer}`} delay={index * 0.035}>
                <article className="group h-full rounded-lg border border-border/70 bg-card/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase text-primary">{cert.badge}</p>
                      <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{cert.title}</h3>
                    </div>
                    {cert.featured ? (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        Core
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{cert.date}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="publication" className="section-shell">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <article className="overflow-hidden rounded-lg border border-border/70 bg-card/75 p-6 shadow-sm backdrop-blur-xl md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:items-center">
                <div>
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                    <publication.icon className="h-7 w-7" />
                  </div>
                  <p className="text-xs font-semibold uppercase text-primary">Publication</p>
                  <p className="mt-3 text-sm font-medium text-muted-foreground">
                    {publication.publisher} - {publication.date}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">{publication.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">{publication.description}</p>
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    View Paper
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
