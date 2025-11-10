import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export default function ExperiencePage() {
  return (
    <section className="section container">
      <SectionHeader eyebrow="Experience" title="Roles & Impact" />
      <Timeline />
    </section>
  );
}
