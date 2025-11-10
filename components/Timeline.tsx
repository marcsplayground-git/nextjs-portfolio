"use client";

type TimelineItem = {
  role: string;
  company: string;
  dates: string;
  description?: string;
  isAccent?: boolean;
};

const timelineData: TimelineItem[] = [
  {
    role: "Power Platform Developer",
    company: "FutureAbility",
    dates: "Aug 2023 - July 2025",
    description:
      "Created and implemented tailored business applications aligned with client project specifications, with a strong focus on improving user interfaces, streamlining workflows, and ensuring seamless data integration using Power Apps and Power Pages. Actively engaged in identifying, diagnosing, and resolving bugs to enhance application stability and overall user experience. Additionally, implemented security models by configuring Dataverse security roles and applying item-level permissions in SharePoint to control access based on user roles, ensuring sensitive data was protected across all environments.",
    isAccent: true,
  },
  {
    role: "Power Apps Developer",
    company: "Peak Support",
    dates: "May 2023 - Aug 2023",
    description:
      "Developed and optimized business applications by implementing features and UI/UX designs based on client requirements. Leveraged data modeling and integration within Dataverse to ensure seamless data flow. Continuously enhanced application performance, while also providing detailed technical documentation and user guides to support end-users.",
  },
  {
    role: "Application Development Associate",
    company: "Accenture Inc.",
    dates: "Nov 2021 - May 2023",
    description:
      "Designed and built proof-of-concept (POC) applications based on client requirements, implementing user interfaces as designed in Figma. Conducted regression testing to ensure stability and resolved bugs reported by users and developers. Additionally, optimized existing flows to better scale with evolving business needs.",
  },
];

export function Timeline() {
  return (
    <div className="relative space-y-4 mt-6">
      {/* Vertical line */}
      <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-slate-200 dark:bg-slate-700" />

      {timelineData.map((item, idx) => (
        <div key={idx} className="relative pl-6 group">
          {/* Pin */}
          <div
            className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 transition-colors ${
              item.isAccent
                ? "border-indigo-500 bg-indigo-500"
                : "border-slate-300 bg-white dark:bg-slate-950 group-hover:bg-indigo-500 group-hover:border-indigo-500"
            }`}
          />

          {/* Content */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h3
                className={`font-semibold transition-colors ${
                  item.isAccent
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "group-hover:text-indigo-500"
                }`}
              >
                {item.role}
              </h3>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full border text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 ${
                  item.isAccent
                    ? "bg-indigo-100 border-indigo-300 text-indigo-700"
                    : ""
                }`}
              >
                {item.dates}
              </span>
            </div>

            <span
              className={`text-sm ${
                item.isAccent
                  ? "text-indigo-600/70"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {item.company}
            </span>

            <p className="mt-2 pl-5 text-justify text-slate-600 space-y-1">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
