import { SiteChrome } from "@/components/common/site-shell";
import { SmoothScroll } from "@/components/common/smooth-scroll";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { CredentialsSection } from "@/components/sections/proof";
import { profile } from "@/data/portfolio";
import { lazy, Suspense } from "react";

const SkillsSection = lazy(() =>
  import("@/components/sections/skills").then((module) => ({ default: module.SkillsSection })),
);
const ProjectsSection = lazy(() =>
  import("@/components/sections/projects").then((module) => ({ default: module.ProjectsSection })),
);

function SectionFallback() {
  return <div className="section-shell bg-muted/20" aria-hidden="true" />;
}

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-clip bg-background text-foreground">
        <SiteChrome />
        <HeroSection />
        <AboutSection />
        <Suspense fallback={<SectionFallback />}>
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>
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
    </SmoothScroll>
  );
};

export default Index;
