import { HeroSection } from '@/components/sections/hero-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { AboutSection } from '@/components/sections/about-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { GitHubActivitySection } from '@/components/sections/github-activity-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <GitHubActivitySection />
      <ContactSection />
    </>
  )
}