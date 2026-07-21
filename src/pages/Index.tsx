import { FloatingDock, SiteNav } from "@/components/common/site-shell";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ProofSection } from "@/components/sections/proof";
import { SkillsSection } from "@/components/sections/skills";
import { profile } from "@/data/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ProofSection />
      <ContactSection />
      <FloatingDock />

      <footer className="border-t border-border/70 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{profile.name} - Backend & Data Engineering Portfolio</p>
          <p>Built with React, TypeScript, Tailwind, Framer Motion, and Three.js.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
