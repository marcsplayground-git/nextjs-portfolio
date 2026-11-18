const groups = [
  { name: "Power Platform", items: ["Canvas apps", "Model-driven apps", "Code apps", "Power Automate", "Power Pages", "Copilot Studio", "Power BI"] },
  { name: "Custom development", items: ["C#", ".NET", "TypeScript", "JavaScript", "React", "HTML/CSS", "Liquid", "Open XML SDK"] },
  { name: "Data", items: ["Dataverse", "SharePoint", "Azure SQL", "SQL Server", "Azure Cosmos DB", "PostgreSQL"] },
  { name: "Azure", items: ["Azure Functions", "App Service", "Storage Accounts"] },
  { name: "Security and delivery", items: ["Dataverse security roles", "Microsoft Entra ID groups", "Solutions and ALM", "Git", "Azure DevOps", "Jira"] },
];

export function Skills() {
  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <div key={group.name}>
          <h3 className="font-semibold mb-3">{group.name}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => <span key={item} className="badge">{item}</span>)}
          </div>
        </div>
      ))}
    </div>
  );
}
