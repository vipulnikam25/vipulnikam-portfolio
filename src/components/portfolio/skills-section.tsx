
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["HTML", "CSS", "JavaScript", "Python", "SQL", "Go"]
    },
    {
      icon: Database,
      title: "Frameworks & Back-End",
      skills: ["FastAPI", "Django", "LangChain", "Express.js", "Fastify", "Node.js", "MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      icon: Cloud,
      title: "Platforms & AI/NLP",
      skills: ["Microsoft Azure", "Amazon Web Service", "Jupyter Notebook", "UiPath Orchestrator", "RAG", "LLMs", "Predictive Analytics", "Intelligent Automation"]
    },
    {
      icon: Wrench,
      title: "Libraries & Tools",
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "PyTorch", "TensorFlow", "UiPath studio", "Power BI", "MySQL Workbench", "VS Code", "NPM", "GIT"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            A comprehensive overview of my technical expertise and the technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-luxury transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-md border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm bg-muted/60 border-border/30 hover:scale-105 transition-transform duration-300 text-foreground"
                      style={{ animationDelay: `${skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
