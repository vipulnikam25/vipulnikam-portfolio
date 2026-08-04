import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { skillGroups } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { useState, type CSSProperties } from "react";

const technologyIcons = [
  { name: "HTML5", label: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", label: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", label: "JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Python", label: "PY", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Go", label: "GO", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
  { name: "SQL", label: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { name: "FastAPI", label: "API", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Django", label: "DJ", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "LangChain", label: "LC", src: "https://cdn.simpleicons.org/langchain/1c3c3c" },
  { name: "Node.js", label: "ND", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", label: "EX", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Fastify", label: "FY", src: "" },
  { name: "TypeScript", label: "TS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "AWS", label: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", label: "AZ", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
  { name: "MongoDB", label: "MDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", label: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", label: "PG", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "SQL Server", label: "SQLS", src: "" },
  { name: "Pandas", label: "PD", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "NumPy", label: "NP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: "Matplotlib", label: "MPL", src: "https://cdn.simpleicons.org/plotly/3f4f75" },
  { name: "Scikit-Learn", label: "SK", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "PyTorch", label: "PT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", label: "TF", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "Jupyter", label: "JP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
  { name: "UiPath", label: "UI", src: "https://cdn.simpleicons.org/uipath/fa4616" },
  { name: "Power BI", label: "PBI", src: "" },
  { name: "VS Code", label: "VS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "npm", label: "npm", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
  { name: "Git", label: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "React", label: "RCT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "REST API", label: "REST", src: "https://cdn.simpleicons.org/swagger/85ea2d" },
  { name: "LLMs", label: "LLM", src: "" },
  { name: "RAG", label: "RAG", src: "" },
  { name: "Azure Data Factory", label: "ADF", src: "" },
  { name: "Databricks", label: "DBX", src: "https://cdn.simpleicons.org/databricks/ff3621" },
  { name: "Synapse", label: "SYN", src: "" },
  { name: "AWS Glue", label: "GLUE", src: "" },
  { name: "Redshift", label: "RS", src: "" },
  { name: "Athena", label: "ATH", src: "" },
];

const movementPaths = [
  ["4%", "8%", "48%", "22%", "82%", "12%"],
  ["12%", "68%", "56%", "8%", "86%", "72%"],
  ["24%", "16%", "8%", "76%", "66%", "44%"],
  ["36%", "78%", "72%", "58%", "14%", "28%"],
  ["48%", "10%", "84%", "34%", "28%", "72%"],
  ["60%", "56%", "30%", "6%", "6%", "50%"],
  ["72%", "18%", "44%", "80%", "88%", "38%"],
  ["84%", "66%", "62%", "36%", "18%", "82%"],
  ["6%", "42%", "54%", "70%", "92%", "18%"],
  ["18%", "84%", "74%", "20%", "42%", "54%"],
  ["30%", "48%", "82%", "84%", "10%", "14%"],
  ["42%", "26%", "18%", "60%", "78%", "76%"],
  ["54%", "84%", "28%", "36%", "68%", "12%"],
  ["66%", "8%", "90%", "62%", "24%", "44%"],
  ["78%", "38%", "34%", "16%", "52%", "84%"],
  ["90%", "78%", "46%", "46%", "12%", "68%"],
  ["7%", "20%", "64%", "74%", "38%", "8%"],
  ["16%", "52%", "86%", "24%", "58%", "80%"],
  ["25%", "72%", "52%", "34%", "4%", "12%"],
  ["34%", "8%", "70%", "64%", "90%", "48%"],
  ["43%", "58%", "12%", "18%", "76%", "8%"],
  ["52%", "30%", "88%", "78%", "22%", "64%"],
  ["61%", "82%", "26%", "48%", "82%", "22%"],
  ["70%", "44%", "8%", "8%", "40%", "78%"],
  ["79%", "10%", "58%", "86%", "16%", "36%"],
  ["88%", "56%", "38%", "14%", "62%", "70%"],
  ["11%", "80%", "44%", "52%", "86%", "30%"],
  ["21%", "34%", "76%", "10%", "6%", "84%"],
  ["31%", "12%", "52%", "76%", "88%", "58%"],
  ["41%", "72%", "14%", "40%", "70%", "16%"],
  ["51%", "46%", "92%", "28%", "22%", "86%"],
  ["64%", "22%", "36%", "82%", "82%", "50%"],
  ["74%", "76%", "18%", "24%", "54%", "10%"],
  ["86%", "28%", "70%", "66%", "12%", "46%"],
];

export function SkillsSection() {
  const reduceMotion = useReducedMotion();
  const [poppedIcon, setPoppedIcon] = useState<string | null>(null);

  const handleIconClick = (iconName: string) => {
    setPoppedIcon(iconName);
    window.setTimeout(() => setPoppedIcon((current) => (current === iconName ? null : current)), 620);
  };

  return (
    <section id="skills" className="section-shell bg-muted/25">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Technical Arsenal"
            title="A stack built for APIs, pipelines, cloud data, and automation."
            description="Skills are grouped by how they show up in production work, not as a flat resume dump."
          />
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

        <Reveal className="mt-8">
          <div className="skill-icon-arena">
            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">100+ REST APIs delivered across business modules</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Tools moving together inside one production-ready skill system.
              </h3>
            </div>
            <div className="skill-icon-field" aria-label="Floating technology icons">
              {technologyIcons.map((icon, index) => (
                <button
                  key={icon.name}
                  title={icon.name}
                  type="button"
                  aria-label={`${icon.name} skill icon`}
                  className={`tech-icon ${poppedIcon === icon.name ? "is-popping" : ""}`}
                  onClick={() => handleIconClick(icon.name)}
                  style={
                    {
                      "--sx": movementPaths[index % movementPaths.length][0],
                      "--sy": movementPaths[index % movementPaths.length][1],
                      "--mx": movementPaths[index % movementPaths.length][2],
                      "--my": movementPaths[index % movementPaths.length][3],
                      "--ex": movementPaths[index % movementPaths.length][4],
                      "--ey": movementPaths[index % movementPaths.length][5],
                      "--duration": `${35 + (index % 10)}s`,
                      "--delay": `${-(index % 7) * 1.15}s`,
                      animationPlayState: reduceMotion ? "paused" : "running",
                    } as CSSProperties
                  }
                >
                  {icon.src ? (
                    <img
                      src={icon.src}
                      alt=""
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                  ) : null}
                  <span className={icon.src ? "hidden" : ""}>{icon.label}</span>
                  {poppedIcon === icon.name ? <span className="pop-burst" aria-hidden="true" /> : null}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
