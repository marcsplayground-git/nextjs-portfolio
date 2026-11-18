const groups = [
  { name: "Power Platform", items: ["Power Apps", "Power Automate", "Power Pages", "Copilot Studio", "Power BI"] },
  { name: "Development", items: ["C#", ".NET", "HTML/CSS", "JavaScript/TypeScript", "Liquid"] },
  { name: "Data", items: ["Dataverse", "SharePoint", "Azure SQL", "SQL Server", "Cosmos DB", "PostgreSQL"] },
  { name: "Azure", items: ["Azure Functions", "App Service", "Storage Accounts"] },
  { name: "Tools and delivery", items: ["Git", "Azure DevOps", "Jira", "Solutions/ALM", "Microsoft Entra ID"] },
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
