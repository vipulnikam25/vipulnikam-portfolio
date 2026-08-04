import { FixedActionRail, SiteNav } from "@/components/common/site-shell";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { CredentialsSection } from "@/components/sections/proof";
import { SkillsSection } from "@/components/sections/skills";
import { profile } from "@/data/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteNav />
      <FixedActionRail />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CredentialsSection />
      <ContactSection />

      <footer className="border-t border-border/70 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <p>{profile.name} - Data, AI/ML, Python & Backend Portfolio</p>
          <span>Built with React, TypeScript, Tailwind, and Framer Motion.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
