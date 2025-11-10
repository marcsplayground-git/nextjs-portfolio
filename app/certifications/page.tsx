import { SectionHeader } from "@/components/SectionHeader";
import { Certifications } from "@/components/Certifications";

export default function CertificationsPage() {
  return (
    <section className="section container">
      <SectionHeader eyebrow="Learning" title="Certifications" />
      <Certifications />
    </section>
  );
}
