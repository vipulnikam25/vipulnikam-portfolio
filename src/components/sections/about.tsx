import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { focusAreas, profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="About"
            title="Engineering useful systems where backend, data, and automation meet."
            description={profile.summary}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.06}>
                <article className="group h-full rounded-3xl border border-border/70 bg-card/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_80px_hsl(var(--primary)/0.12)]">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                    <area.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{area.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{area.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
