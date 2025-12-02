const groups = [
  {
    name: "Web Application Development",
    items: [
      "JAVA",
      "C#",
      "ASP.NET",
      "HTML/CSS",
      "JavaScript/TypeScript",
      "Liquid",
    ],
  },
  {
    name: "Database",
    items: [
      "Azure SQL",
      "Cosmos DB",
      "MSSQL",
      "PostgreSQL",
      "Dataverse",
      "SharePoint",
    ],
  },
  { name: "Project Management", items: ["Azure DevOps", "Jira"] },
  {
    name: "Power Platform",
    items: [
      "Power Apps",
      "Power Automate",
      "Power Pages",
      "Power BI",
      "Copilot Studio",
    ],
  },
  {
    name: "Azure Services",
    items: ["App Service", "Synapse", "Storage Account"],
  },
];

export function Skills() {
  return (
    <div className="space-y-8">
      {groups.map((g) => (
        <div key={g.name}>
          <h3 className="font-semibold mb-3">{g.name}</h3>
          <div className="flex flex-wrap gap-2">
            {g.items.map((i) => (
              <span key={i} className="badge">
                {i}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
