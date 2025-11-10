// components/FutureIdeas.tsx
import { SectionHeader } from "@/components/SectionHeader";

type Idea = {
  title: string;
  summary: string;
  focus: string[];
  impact: string;
  status?: "Planned" | "Researching" | "Concept";
  eta?: string;
};

const ideas: Idea[] = [
  {
    title: "AI-Powered Employee Copilot",
    summary:
      "A conversational Copilot integrated with Microsoft Teams and Dataverse that assists HR and managers with requests, onboarding steps, and analytics. It understands company policies and automates form submissions using natural language.",
    focus: ["Azure OpenAI", "Copilot Studio", "Teams", "Power Automate"],
    impact: "Reduce HR response time and manual task handling by 60%.",
    status: "Researching",
    eta: "Q2 2026",
  },
  {
    title: "Azure Foundry App Generator",
    summary:
      "A low-code platform accelerator that uses Azure Foundry models to generate app scaffolds, form logic, and security roles from schema definitions. Aims to merge AI-assisted code with Power Platform extensibility.",
    focus: ["Azure Foundry", "Next.js", "Power Platform", "DevOps Pipelines"],
    impact: "Cut app prototyping time from weeks to days.",
    status: "Concept",
    eta: "Q3 2026",
  },
  {
    title: "Smart Form Optimizer",
    summary:
      "An AI service that analyzes form submissions and usage telemetry, identifies redundant steps, and recommends improvements. Integrates into Power Apps or web apps as a feedback Copilot.",
    focus: ["Cognitive Services", "Telemetry", "Power Apps"],
    impact: "Increase user completion rate and improve UX via adaptive design.",
    status: "Planned",
    eta: "Q1 2026",
  },
  {
    title: "AI-Driven Knowledge Portal",
    summary:
      "A web app combining RAG (retrieval-augmented generation) with Azure AI Search to surface company policies, FAQs, and workflow instructions through chat. Powered by vector search and contextual grounding.",
    focus: ["Azure AI Search", "OpenAI Embeddings", "Next.js", "RAG"],
    impact: "Turn documentation into an interactive Copilot experience.",
    status: "Researching",
    eta: "Q2 2026",
  },
  {
    title: "Adaptive Workflow Orchestrator",
    summary:
      "A framework that predicts next best actions in multistage approvals using ML models trained on historical workflow data. Integrates insights back into Power Automate or Logic Apps for dynamic routing.",
    focus: ["Azure ML", "Power Automate", "Dataverse", "Predictive AI"],
    impact: "Reduce bottlenecks and balance reviewer workload automatically.",
    status: "Concept",
    eta: "Q4 2026",
  },
];

export function Projects() {
  return (
    <section className="section container">
      <SectionHeader
        eyebrow="Innovation"
        title="Future Ideas Projects"
        description="Exploring the intersection of Azure AI, Copilot, and cloud engineering to design the next generation of intelligent applications."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {ideas.map((i) => (
          <div
            key={i.title}
            className="card rounded-2xl flex flex-col justify-between p-5 space-y-3 hover:border-indigo-300 transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-indigo-600">{i.title}</h3>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full border
                ${
                  i.status === "Planned"
                    ? "bg-indigo-100 border-indigo-300 text-indigo-700"
                    : i.status === "Researching"
                    ? "bg-sky-100 border-sky-300 text-sky-700"
                    : "bg-slate-100 border-slate-200 text-slate-600"
                }`}
              >
                {i.status}
              </span>
            </div>

            <p className="text-sm text-slate-600">{i.summary}</p>

            <div className="flex flex-wrap gap-2">
              {i.focus.map((f) => (
                <span key={f} className="badge">
                  {f}
                </span>
              ))}
            </div>

            <p className="text-xs text-slate-500 italic">{i.impact}</p>

            <div className="flex justify-between items-center text-xs text-slate-500">
              <span>ETA {i.eta ?? "TBD"}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
