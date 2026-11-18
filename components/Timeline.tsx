type TimelineItem = {
  role: string;
  company: string;
  dates: string;
  highlights: string[];
};

const timelineData: TimelineItem[] = [
  {
    role: "Power Platform Developer",
    company: "Bravissimo Resourcing, Inc.",
    dates: "June 2026 – Present",
    highlights: [
      "Created a code-app starter kit adopted by 50+ developers, with shared application structure, branding and reusable components.",
      "Built Time Tracker, Training Curriculum, and Roll On/Off Checklist on Dataverse.",
      "Helped establish deployment and access standards: service accounts, Microsoft Entra ID groups, and appropriate security roles.",
      "Gather requirements, improve applications, and support users in production.",
    ],
  },
  {
    role: "Power Platform Specialist",
    company: "BruntWork",
    dates: "January 2026 – June 2026",
    highlights: [
      "Reduced branded Word report preparation from about eight hours to one hour, supporting 18 client templates through Power Apps, Power Automate and a C# Azure Function.",
      "Built a Copilot Studio agent for rule-based ticket checks, violation tracking, Teams notifications and daily summaries.",
      "Delivered canvas apps for field technicians and model-driven apps with C# plugins and JavaScript form scripts.",
      "Led requirements discovery, advised on licensing, and applied least-privilege access and Solutions-based ALM.",
    ],
  },
  {
    role: "Power Platform Developer",
    company: "FutureAbility",
    dates: "August 2023 – July 2025",
    highlights: [
      "Developed Power Apps and Power Pages solutions, including model-driven apps with C# plugins and JavaScript form scripts.",
      "Implemented application interfaces, workflows and data integrations, and resolved defects across client applications.",
      "Configured Dataverse security roles and SharePoint item-level permissions to restrict access by user role.",
    ],
  },
  {
    role: "Power Apps Developer",
    company: "Peak Support",
    dates: "May 2023 – August 2023",
    highlights: [
      "Developed Power Apps features and interfaces, with Dataverse data models and integrations.",
      "Improved application performance and prepared technical documentation and user guides.",
    ],
  },
  {
    role: "Application Development Associate",
    company: "Accenture Inc.",
    dates: "November 2021 – May 2023",
    highlights: [
      "Built proof-of-concept applications from client requirements and Figma designs.",
      "Performed regression testing, resolved defects, and optimized Power Automate flows.",
    ],
  },
];

export function Timeline() {
  return (
    <div className="relative space-y-10 mt-6 border-l border-slate-200 ml-1.5">
      {timelineData.map((item, index) => (
        <article key={item.company} className="relative pl-6">
          <div className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 ${index === 0 ? "border-indigo-500 bg-indigo-500" : "border-slate-300 bg-white"}`} />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
            <h3 className="font-semibold text-lg">{item.role}</h3>
            <p className="text-sm text-slate-500 shrink-0">{item.dates}</p>
          </div>
          <p className="text-indigo-600 mt-1">{item.company}</p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-600 leading-relaxed">
            {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
