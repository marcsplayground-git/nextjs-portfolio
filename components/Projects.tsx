// components/FutureIdeas.tsx
import { SectionHeader } from "@/components/SectionHeader";

type Idea = {
  title: string;
  summary: string;
  focus: string[];
  impact: string;
  status?: "Planned" | "Researching" | "Concept" | "In Progress";
  eta?: string;
};

const ideas: Idea[] = [
  {
    title: "AI-Driven Knowledge Portal",
    summary:
      "A web app combining RAG (retrieval-augmented generation) with Azure AI Search to surface company policies, FAQs, and workflow instructions through chat. Powered by vector search and contextual grounding.",
    focus: ["Azure AI Search", "OpenAI Embeddings", "Next.js", "RAG"],
    impact: "Turn documentation into an interactive Copilot experience.",
    status: "In Progress",
    eta: "Q1 2026",
  },
  {
    title: "Intelligent Helpdesk Copilot",
    summary:
      "A multi-turn support agent that answers IT questions and performs real actions (password resets, ticket creation) via function calling, grounded on an internal knowledge index.",
    focus: ["Function Calling", "Teams Bot", "Azure Functions", "AI Search"],
    impact: "Deflects L1 tickets and accelerates IT support.",
    status: "Planned",
    eta: "Q2 2026",
  },
  {
    title: "AI Code Reviewer & Pair Programmer",
    summary:
      "A CI-native, tenant-hosted reviewer that uses RAG over your repo and org policies to produce SARIF and structured PR comments. Integrates with GitHub/Azure DevOps and enforces quality gates.",
    focus: ["RAG on Code", "SARIF", "Azure Functions", "DevOps API"],
    impact: "Improves review quality while reducing time-to-merge.",
    status: "Planned",
    eta: "Q2 2026",
  },
  {
    title: "Compliance Policy Copilot",
    summary:
      "A Teams-based assistant that answers policy/audit questions using RAG over SharePoint and Dataverse, with citations and evidence links.",
    focus: ["SharePoint", "AI Search", "Teams", "RAG"],
    impact: "Cuts policy lookup from hours to minutes.",
    status: "Planned",
    eta: "Q3 2026",
  },
  {
    title: "CloudOps Copilot Agent",
    summary:
      "An agent that analyzes Azure Monitor logs, explains incidents in plain English, and can trigger safe remediations with approval.",
    focus: ["Azure Monitor", "Function Calling", "Agents", "App Insights"],
    impact: "Reduces MTTR and on-call fatigue.",
    status: "Planned",
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
