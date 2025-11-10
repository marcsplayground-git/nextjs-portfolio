import { SectionHeader } from "@/components/SectionHeader";
import { Skills } from "@/components/Skills";

export default function SkillsPage() {
  return (
    <section className="section container">
      <SectionHeader eyebrow="Skills" title="Core Competencies" />
      <Skills />
    </section>
  );
}
