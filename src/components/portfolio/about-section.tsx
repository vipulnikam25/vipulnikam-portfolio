
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Zap, Eye } from "lucide-react";
import { useVisitorCounter } from "@/hooks/use-visitor-counter";

const AboutSection = () => {
  const visitorCount = useVisitorCounter();
  
  const highlights = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Expert in Python, Node.js, FastAPI and RESTful APIs"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust data pipelines and ETL workflows"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      description: "Experience with AWS, Azure and microservices"
    },
    {
      icon: Zap,
      title: "Automation & ML",
      description: "Intelligent automation bots and machine learning solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            I'm a passionate Data Engineer with over 1 year of expertise in building scalable backend systems, 
            developing APIs, and automating data workflows. I specialize in creating intelligent solutions 
            that solve real-world problems using cutting-edge technologies.
          </p>
          
          {/* Visitor Counter */}
          <div className="flex items-center justify-center gap-2 mt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Eye className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold text-primary">{visitorCount.toLocaleString()}</span>
            <span className="text-muted-foreground">portfolio views</span>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <Card 
              key={item.title} 
              className="group hover:shadow-luxury transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-md border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
