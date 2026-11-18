import { SectionHeader } from "@/components/SectionHeader";
import { Skills } from "@/components/Skills";
import { profile } from "@/lib/profile";

export default function AboutPage() {
  return (
    <section className="section container grid lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5 space-y-4">
        <SectionHeader eyebrow="About" title="Marc Jason Yu" />
        <p className="text-slate-600">
          {profile.summary}
        </p>
        <p className="text-slate-600">
          My work spans canvas, model-driven and code apps, Power Pages,
          Copilot Studio, and custom integrations. Alongside delivery, I help
          establish operating standards for deployment identities, group-based
          access and security roles.
        </p>
        <ul className="text-sm text-slate-600 space-y-1">
          <li>{profile.location}</li>
          <li>
            <a className="link" href="mailto:yu.marcjason@outlook.com">
              yu.marcjason@outlook.com
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-7">
        <Skills />
      </div>
    </section>
  );
}
