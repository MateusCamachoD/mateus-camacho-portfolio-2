import { About } from "@/components/about";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { FeaturedProjects } from "@/components/featured-projects";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Stats } from "@/components/stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <ExperienceTimeline />
      <FeaturedProjects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
