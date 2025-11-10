import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { HeroCodeOverlay } from "@/components/HeroCodeOverlay";

export default function HomePage() {
  return (
    <>
      <HeroCodeOverlay />
      <Projects />
      <section className="section container">
        <SectionHeader eyebrow="Learning" title="Certifications" />
        <Certifications />
      </section>
    </>
  );
}
