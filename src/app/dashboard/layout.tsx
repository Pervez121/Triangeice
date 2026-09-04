import Link from "next/link";
import { redirect } from "next/navigation";
import { requireDashboardAccess } from "@/src/lib/session";

async function handleLogout() {
  "use server";

  await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/auth/logout`, {
    method: "POST",
  });
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const canAccess = await requireDashboardAccess();

  if (!canAccess) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <aside className="fixed inset-y-0 left-0 w-72 border-r border-white/10 bg-slate-900/95 p-6">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Triangeice</p>
          <h2 className="mt-2 text-2xl font-semibold">Admin Dashboard</h2>
        </div>
        <nav className="space-y-2 text-sm">
          <Link className="block rounded-xl px-4 py-3 hover:bg-white/10" href="/dashboard">Overview</Link>
          <Link className="block rounded-xl px-4 py-3 hover:bg-white/10" href="/dashboard/users">Users</Link>
          <Link className="block rounded-xl px-4 py-3 hover:bg-white/10" href="/dashboard/teams">Teams</Link>
          <Link className="block rounded-xl px-4 py-3 hover:bg-white/10" href="/dashboard/volunteers">Volunteers</Link>
          <Link className="block rounded-xl px-4 py-3 hover:bg-white/10" href="/dashboard/content">Content</Link>
          <Link className="block rounded-xl px-4 py-3 hover:bg-white/10" href="/dashboard/badges">Badges</Link>
        </nav>

        <form action={handleLogout} className="mt-8">
          <button type="submit" className="w-full rounded-xl border border-white/10 px-4 py-3 text-left text-sm hover:bg-white/10">
            Sign out
          </button>
        </form>
      </aside>
      <main className="ml-72 p-8">{children}</main>
    </div>
  );
}
