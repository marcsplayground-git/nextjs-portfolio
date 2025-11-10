export function SectionHeader({ eyebrow, title, description } : { eyebrow: string; title: string; description?: string; }) {
  return (
    <div className="space-y-2 mb-8">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="h2">{title}</h2>
      {description && <p className="text-slate-600">{description}</p>}
    </div>
  );
}
