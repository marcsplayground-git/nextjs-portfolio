import { SectionHeader } from "@/components/SectionHeader";
import { Skills } from "@/components/Skills";

export default function AboutPage() {
  return (
    <section className="section container grid lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5 space-y-4">
        <SectionHeader eyebrow="About" title="Marc Jason Yu" />
        <p className="text-slate-600">
          Software Engineer with 4 years hands-on experience in full-stack
          development and low-code platform solutions. Specializing in Power
          Platform development with strong background in designing data models,
          optimizing application performance, and collaborating with
          cross-functional teams. Adept at solving complex problems, improving
          processes, and delivering reliable, user-focused software across
          various technology stacks
        </p>
        <ul className="text-sm text-slate-600 space-y-1">
          <li>Cebu City, Philippines 6000</li>
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
