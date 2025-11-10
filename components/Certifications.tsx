const certs = [
  "Microsoft 365 Certified: Fundamentals",
  "Microsoft Certified: Azure Fundamentals",
  "Microsoft Certified: Azure Administrator Associate",
  "Microsoft Certified: Azure Solutions Architect Expert",
  "Microsoft Certified: Power Platform Fundamentals",
  "Microsoft Certified: Power Platform Developer Associate",
  "Microsoft Certified: Power Platform Solution Architect Expert",
  "Microsoft Certified: Dynamics 365 Customer Insights (Journeys) Functional Consultant Associate",
];

export function Certifications() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {certs.map((c) => (
        <div
          key={c}
          className="card rounded-lg p-4 space-y-2 flex flex-col justify-between"
        >
          <h3 className="font-semibold">{c}</h3>
          <p className="text-sm text-slate-600">Issued by Microsoft</p>
        </div>
      ))}
    </div>
  );
}
