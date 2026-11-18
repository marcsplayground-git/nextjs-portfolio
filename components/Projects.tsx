import { SectionHeader } from "@/components/SectionHeader";

const projects = [
  {
    id: "client-branded-reports",
    title: "Client-branded Word reports",
    summary: "Generate a client-branded Word report directly from a canvas app. Power Automate retrieves the client's SharePoint template, and a C# Azure Function assembles the document for download.",
    outcome: "18 client templates. Report preparation reduced from about eight hours to one hour.",
    stack: ["Power Apps", "Power Automate", "SharePoint", "Azure Functions", "Open XML SDK"],
    diagram: "client-branded-report-generator",
    alt: "Canvas app sends report data to Power Automate, which retrieves a SharePoint template and calls an Azure Function to return a branded Word document.",
  },
  {
    id: "helpdesk-reporting",
    title: "Automated helpdesk ticket monitoring",
    summary: "A Copilot Studio agent checks active, aging and at-risk tickets against a defined violation matrix. It records violations, notifies assigned helpdesk agents through Teams, and produces daily summaries.",
    outcome: "Automates checks and notifications previously handled by a manager as part of a 1–2-hour daily review.",
    stack: ["Copilot Studio", "Power Automate", "Dataverse", "Microsoft Teams"],
    diagram: "copilot-studio-reporting-agent",
    alt: "Ticket data and a violation matrix feed automated checks; violations are recorded in a tracker, assigned agents receive Teams notifications, and managers receive daily summaries.",
  },
  {
    id: "unified-request-management",
    title: "Unified Request Management",
    summary: "One intake process connects a canvas request portal, a model-driven operations app and Dataverse. Power Automate handles routing and approvals, with linked Azure DevOps work items for engineering requests.",
    outcome: "Replaces scattered request channels with a traceable process from submission through approval and delivery.",
    stack: ["Power Apps", "Dataverse", "Power Automate", "Azure DevOps", "Power Platform Pipelines"],
    diagram: "urm",
    alt: "Canvas and model-driven apps share Dataverse records; Power Automate manages assignments, approvals and notifications, and links engineering requests to Azure DevOps work items.",
  },
  {
    id: "code-apps-starter-kit",
    title: "A shared foundation for code apps",
    summary: "A Git-based starter kit provides shared application structure, branding and reusable components for Dataverse-backed code apps. Delivery also includes Time Tracker, Training Curriculum, and Roll On/Off Checklist.",
    outcome: "Adopted by 50+ developers to standardize code-app development.",
    stack: ["Power Apps code apps", "TypeScript", "React", "Dataverse", "Git"],
  },
];

export function Projects() {
  return (
    <section className="section container">
      <SectionHeader
        eyebrow="Portfolio"
        title="Selected projects"
        description="Business applications and automation built for everyday operations. Project descriptions and diagrams are anonymized."
      />
      <div className="grid lg:grid-cols-2 items-start gap-8 mt-8">
        {projects.map((project) => (
          <article key={project.id} id={project.id} className="card rounded-2xl p-5 sm:p-7 space-y-5 scroll-mt-24">
            <h3 className="text-xl font-semibold text-indigo-600">{project.title}</h3>
            <p className="text-slate-600 leading-relaxed">{project.summary}</p>
            <p className="font-medium text-slate-900">{project.outcome}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tool) => <span key={tool} className="badge">{tool}</span>)}
            </div>
            {project.diagram && (
              <figure className="border-t border-slate-200 pt-5">
                <a href={`/projects/diagrams/${project.diagram}.svg`} className="block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600" aria-label={`Open ${project.title} workflow diagram at full size`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/projects/diagrams/${project.diagram}.svg`} alt={project.alt} width={480} height={520} className="w-full h-auto" loading="lazy" />
                  <span className="link text-sm mt-2 inline-block">View workflow diagram</span>
                </a>
              </figure>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
