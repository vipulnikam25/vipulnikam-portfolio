import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { contactCards, profile } from "@/data/portfolio";
import { Download, MessageCircle, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell bg-muted/25 pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build reliable systems with a little visual electricity."
              description="Open to backend, data engineering, cloud, automation, and full-stack backend-heavy opportunities."
            />
            <Reveal delay={0.08} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_20px_60px_hsl(var(--primary)/0.25)] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Send className="mr-2 h-4 w-4" />
                Email Me
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-1 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-1 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((card, index) => (
              <Reveal key={card.label} delay={index * 0.045}>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex h-full gap-4 rounded-3xl border border-border/70 bg-card/75 p-5 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                    <card.icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">{card.label}</span>
                    <span className="mt-2 block break-words text-sm leading-6 text-muted-foreground group-hover:text-foreground">
                      {card.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
