import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "UiPath Automation Associate Developer",
      issuer: "UiPath Academy",
      date: "January 2025",
      description: "Advanced certification in robotic process automation, workflow design, and intelligent automation solutions.",
      link: "https://drive.google.com/file/d/1BgsI3To0vvq3Fwix-lwpF3-eUYd_MHy5/view",
      badge: "RPA"
    },
    {
      title: "Data Analytics and Visualization",
      issuer: "Accenture",
      date: "March 2024",
      description: "Comprehensive training in data analysis techniques, visualization tools, and business intelligence solutions.",
      link: "https://drive.google.com/file/d/1DXiiFnC7Zgu4LOb76Be9lMb_S3M33-dk/view",
      badge: "Analytics"
    },
    {
      title: "Introduction To Data Science",
      issuer: "CISCO",
      date: "October 2023",
      description: "Foundation course covering data science methodologies, statistical analysis, and machine learning principles.",
      link: "https://drive.google.com/file/d/1DXiiFnC7Zgu4LOb76Be9lMb_S3M33-dk/view",
      badge: "Data Science"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Professional certifications demonstrating expertise in key technologies and methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.title} 
              className="group hover:shadow-luxury transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-md border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="bg-gradient-sunset text-secondary-foreground">
                    {cert.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <span className="font-medium">{cert.issuer}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <Button 
                  variant="outline-glow" 
                  size="sm" 
                  className="w-full group"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  View Certificate
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;