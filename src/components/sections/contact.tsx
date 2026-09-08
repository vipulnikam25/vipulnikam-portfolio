import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { contactCards, profile } from "@/data/portfolio";
import { CheckCircle2, Download, LoaderCircle, MessageCircle, Send, TriangleAlert } from "lucide-react";
import { useState, type FormEvent } from "react";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderEmail: senderEmail.trim(),
          subject: subject.trim(),
          message: message.trim(),
          website,
        }),
      });
      const payload = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.message || "Your message could not be sent. Please try again.");
      }

      setSenderEmail("");
      setSubject("");
      setMessage("");
      setWebsite("");
      setStatus("success");
      setFeedback(payload?.message || "Message sent successfully. I will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Your message could not be sent. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-shell bg-muted/25 pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build intelligent data, AI, Python, and software systems."
              description="Open to Data Engineering, AI/ML Engineering, Python Development, Backend Engineering, Backend Developer, and Software Development opportunities."
            />
            <Reveal delay={0.08} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={profile.gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
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

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card, index) => (
                <Reveal key={card.label} delay={index * 0.045}>
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex h-full gap-4 rounded-lg border border-border/70 bg-card/75 p-5 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
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

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-border/70 bg-card/80 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
            >
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase text-primary">Message Form</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">Send a quick enquiry</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Share the opportunity or project details here and the message will be delivered directly to my inbox.
                </p>
              </div>

              <div className="grid gap-5">
                <label className="grid gap-2 text-sm font-semibold text-foreground">
                  Your Email
                  <input
                    required
                    type="email"
                    maxLength={254}
                    value={senderEmail}
                    onChange={(event) => setSenderEmail(event.target.value)}
                    placeholder="hr@example.com"
                    className="h-12 rounded-md border border-border bg-background/70 px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-foreground">
                  Subject
                  <input
                    required
                    type="text"
                    minLength={3}
                    maxLength={160}
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    placeholder="Opportunity for Data Engineer role"
                    className="h-12 rounded-md border border-border bg-background/70 px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-foreground">
                  Description
                  <textarea
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={7}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell me about the role, project, interview process, or collaboration."
                    className="resize-none rounded-md border border-border bg-background/70 px-4 py-3 text-sm leading-7 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </label>

                <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  Website
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              {feedback ? (
                <div
                  className={`mt-5 flex items-start gap-3 rounded-md border px-4 py-3 text-sm ${
                    status === "success"
                      ? "border-emerald-500/35 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                      : "border-destructive/35 bg-destructive/10 text-destructive"
                  }`}
                  role={status === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {status === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                  )}
                  <span>{feedback}</span>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_20px_60px_hsl(var(--primary)/0.25)] transition hover:-translate-y-1 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {status === "submitting" ? (
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {status === "submitting" ? "Sending..." : status === "error" ? "Try Again" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
