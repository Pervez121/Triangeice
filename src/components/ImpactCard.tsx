interface ImpactCardProps {
  title: string;
  description: string;
  metric: string;
}

export default function ImpactCard({ title, description, metric }: ImpactCardProps) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-8">
      <p className="text-4xl font-semibold text-sky-700">{metric}</p>
      <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}
