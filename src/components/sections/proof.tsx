import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { certifications, education, publication } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export function ProofSection() {
  return (
    <section id="proof" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Proof"
            title="Education, certifications, and research that support the engineering story."
            description="A compact credibility layer for recruiters who want evidence without digging through a PDF."
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <article className="h-full rounded-3xl border border-border/70 bg-card/75 p-6 shadow-sm backdrop-blur-xl">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                <education.icon className="h-6 w-6" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Education</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">{education.school}</h3>
              <p className="mt-2 text-muted-foreground">{education.degree}</p>
              <div className="mt-6 grid gap-3 rounded-2xl border border-border/70 bg-background/60 p-4 text-sm text-muted-foreground">
                <span>{education.location}</span>
                <span>{education.period}</span>
                <span className="font-semibold text-foreground">{education.detail}</span>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="h-full rounded-3xl border border-border/70 bg-card/75 p-6 shadow-sm backdrop-blur-xl">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                <publication.icon className="h-6 w-6" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Publication</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">{publication.title}</h3>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                {publication.publisher} - {publication.date}
              </p>
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
            </article>
          </Reveal>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={`${cert.title}-${cert.issuer}`} delay={index * 0.035}>
              <article className="group h-full rounded-3xl border border-border/70 bg-card/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{cert.badge}</p>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">{cert.title}</h3>
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
  );
}
