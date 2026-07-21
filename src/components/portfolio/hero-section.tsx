import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Download, Phone, Facebook, Instagram } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-luxury opacity-40" />
      <div className="absolute inset-0 bg-gradient-glass backdrop-blur-sm" />
      
      {/* Floating animation elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-float" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-40 right-16 w-24 h-24 bg-accent/20 rounded-full animate-float" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary/20 rounded-full animate-float" 
           style={{ animationDelay: '2s' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main heading with staggered animations */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold animate-slide-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Vipul
            </span>
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold animate-slide-up" 
              style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Nikam
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mt-8 mb-4 animate-fade-in" 
           style={{ animationDelay: '0.6s' }}>
          Passionate Data Engineer building scalable backend systems & automating data workflows
        </p>

        {/* Experience Metrics */}
        <div className="flex flex-wrap justify-center gap-8 text-center mb-12 animate-fade-in" 
             style={{ animationDelay: '0.7s' }}>
          <div className="bg-card/60 backdrop-blur-md border border-border/30 rounded-lg px-4 py-2">
            <span className="text-2xl font-bold text-primary">1+</span>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="bg-card/60 backdrop-blur-md border border-border/30 rounded-lg px-4 py-2">
            <span className="text-2xl font-bold text-primary">10+</span>
            <p className="text-sm text-muted-foreground">Technologies</p>
          </div>
          <div className="bg-card/60 backdrop-blur-md border border-border/30 rounded-lg px-4 py-2">
            <span className="text-2xl font-bold text-primary">5+</span>
            <p className="text-sm text-muted-foreground">Major Projects</p>
          </div>
          <div className="bg-card/60 backdrop-blur-md border border-border/30 rounded-lg px-4 py-2">
            <span className="text-2xl font-bold text-primary">3</span>
            <p className="text-sm text-muted-foreground">Certifications</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" 
             style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="luxury" 
            size="lg" 
            className="group"
            onClick={() => scrollToSection('projects')}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="outline-glow" 
            size="lg" 
            className="group"
            onClick={() => window.open('https://drive.google.com/file/d/1Y4xqgGYHRw4kqSUXqU_CipzECtQIVVKc/view?usp=drive_link', '_blank')}
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mt-12 animate-fade-in" 
             style={{ animationDelay: '1.0s' }}>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:scale-110 transition-transform"
            onClick={() => window.open('https://github.com/vipulnikam25', '_blank')}
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:scale-110 transition-transform"
            onClick={() => window.open('https://www.linkedin.com/in/vipul-nikam-b06ab8212/', '_blank')}
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:scale-110 transition-transform"
            onClick={() => window.open('mailto:vipulnikam0925@gmail.com', '_blank')}
          >
            <Mail className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:scale-110 transition-transform"
            onClick={() => window.open('https://wa.me/918208106900', '_blank')}
          >
            <Phone className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:scale-110 transition-transform"
            onClick={() => window.open('https://www.facebook.com/vipul.nikam.526', '_blank')}
          >
            <Facebook className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:scale-110 transition-transform"
            onClick={() => window.open('https://www.instagram.com/_.skipperrr._?igsh=MXd4Mnd1ZjQ5NmdnZA==', '_blank')}
          >
            <Instagram className="h-6 w-6" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="rounded-full"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;