import { prisma } from "@/src/lib/prisma";

export default async function DashboardPage() {
  const [userCount, teamCount, volunteerCount, postCount] = await Promise.all([
    prisma.user.count(),
    prisma.teamMember.count(),
    prisma.volunteer.count(),
    prisma.post.count(),
  ]);

  const stats = [
    { label: "Total Volunteers", value: volunteerCount },
    { label: "Team Members", value: teamCount },
    { label: "Posts", value: postCount },
    { label: "Users", value: userCount },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Overview</p>
        <h1 className="mt-2 text-3xl font-semibold">NGO dashboard overview</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-black/20">
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">Foundation ready</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          The backend foundation is now in place with Prisma-backed data models, role-based access controls, and a protected dashboard shell.
        </p>
      </div>
    </div>
  );
}
