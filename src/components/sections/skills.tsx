import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { skillGroups } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { Network, RotateCcw } from "lucide-react";
import { useState, type CSSProperties, type ComponentType } from "react";
import { DiMsqlServer } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiDatabricks,
  SiDjango,
  SiFastapi,
  SiGo,
  SiLangchain,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiScikitlearn,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { TbBrandAzure, TbChartHistogram } from "react-icons/tb";

type TechnologyIcon = {
  name: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
};

const technologyIcons: TechnologyIcon[] = [
  { name: "Python", icon: SiPython, color: "#ffd43b" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Django", icon: SiDjango, color: "#44b78b" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Go", icon: SiGo, color: "#00add8" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "SQL Server", icon: DiMsqlServer, color: "#ef4444" },
  { name: "Azure Data Factory", icon: TbBrandAzure, color: "#38bdf8" },
  { name: "Databricks", icon: SiDatabricks, color: "#ff3621" },
  { name: "Synapse Analytics", icon: Network, color: "#60a5fa" },
  { name: "LangChain", icon: SiLangchain, color: "#14b8a6" },
  { name: "Scikit-Learn", icon: SiScikitlearn, color: "#f59e0b" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#ff8f00" },
  { name: "AWS", icon: FaAws, color: "#ff9900" },
  { name: "Azure", icon: TbBrandAzure, color: "#0089d6" },
  { name: "Power BI", icon: TbChartHistogram, color: "#f2c811" },
];

function getMotionPath(index: number) {
  const point = (multiplier: number, offset: number) => 9 + ((index * multiplier + offset) % 82);

  return {
    left: [point(31, 7), point(47, 29), point(19, 61), point(53, 11), point(31, 7)].map((value) => `${value}%`),
    top: [point(43, 17), point(23, 67), point(59, 37), point(37, 79), point(43, 17)].map((value) => `${value}%`),
  };
}

export function SkillsSection() {
  const reduceMotion = useReducedMotion();
  const [poppedIcons, setPoppedIcons] = useState<Set<string>>(() => new Set());

  const popIcon = (iconName: string) => {
    setPoppedIcons((current) => {
      if (current.has(iconName)) return current;
      const next = new Set(current);
      next.add(iconName);
      return next;
    });
  };

  const resetGame = () => setPoppedIcons(new Set());

  return (
    <section id="skills" className="section-shell bg-muted/25">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Technical Arsenal"
            title="A stack built for APIs, pipelines, cloud data, and automation."
            description="Skills are grouped by how they show up in production work, then brought together in an interactive technology field."
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.05}>
              <article className="skill-card group">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                      <group.icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground">{group.title}</h3>
                  </div>
                  <span className="text-xs font-semibold uppercase text-muted-foreground">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="border border-border/70 bg-background/70 px-3 py-2 text-sm font-medium text-foreground shadow-sm"
                      initial={reduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.025, duration: 0.35 }}
                      whileHover={reduceMotion ? undefined : { y: -3, borderColor: "hsl(var(--primary) / 0.55)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="skill-icon-arena">
            <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase text-primary">Interactive skill field</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Pop the tools behind my skills.
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">Every icon is local, keyboard accessible, and ready to play.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="border border-border/70 bg-background/75 px-4 py-2 text-sm" aria-live="polite">
                  <span className="font-display text-lg font-semibold text-primary">{poppedIcons.size}</span>
                  <span className="ml-1 text-muted-foreground">/ {technologyIcons.length}</span>
                </div>
                <button
                  type="button"
                  onClick={resetGame}
                  disabled={poppedIcons.size === 0}
                  className="inline-flex h-10 w-10 items-center justify-center border border-border bg-background/75 text-muted-foreground transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Reset skill icons"
                  title="Reset skill icons"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="skill-icon-field" aria-label="Interactive floating technology icons">
              {technologyIcons.map((item, index) => {
                const isPopped = poppedIcons.has(item.name);
                const Icon = item.icon;
                const path = getMotionPath(index);

                return (
                  <motion.div
                    key={item.name}
                    className="tech-icon-mover"
                    style={{ left: path.left[0], top: path.top[0] }}
                    animate={reduceMotion ? undefined : { left: path.left, top: path.top }}
                    transition={{
                      duration: 16 + (index % 6) * 2.2,
                      delay: index * -0.85,
                      ease: "easeInOut",
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <button
                      title={item.name}
                      type="button"
                      aria-label={`Pop ${item.name} skill icon`}
                      aria-pressed={isPopped}
                      disabled={isPopped}
                      className={`tech-icon ${isPopped ? "is-popped" : ""}`}
                      onClick={() => popIcon(item.name)}
                      style={{ "--icon-color": item.color } as CSSProperties}
                    >
                      <Icon className="h-full w-full" />
                      <span className="pop-burst" aria-hidden="true" />
                    </button>
                  </motion.div>
                );
              })}

              {poppedIcons.size === technologyIcons.length ? (
                <div className="absolute inset-0 z-20 grid place-items-center bg-background/80 p-6 text-center backdrop-blur-sm">
                  <div>
                    <p className="font-display text-3xl font-semibold text-foreground">System cleared.</p>
                    <p className="mt-2 text-sm text-muted-foreground">You found every tool in the stack.</p>
                    <button
                      type="button"
                      onClick={resetGame}
                      className="mt-5 inline-flex items-center bg-primary px-4 py-2 text-sm font-bold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Play again
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
