interface ProjectCardProps {
  title: string;
  description: string;
  tag: string;
}

export default function ProjectCard({ title, description, tag }: ProjectCardProps) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{tag}</p>
      <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
    </article>
  );
}
