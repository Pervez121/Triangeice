import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:px-8 lg:flex-row lg:justify-between lg:px-12">
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold text-white">Triangeice Institute</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            A community-driven NGO focused on glacier conservation, climate awareness, and resilient mountain communities.
          </p>
        </div>
        <div className="grid gap-8 text-sm sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-white">Explore</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/about" className="hover:text-sky-400">About</Link></li>
              <li><Link href="/projects" className="hover:text-sky-400">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Take Action</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/volunteer" className="hover:text-sky-400">Volunteer</Link></li>
              <li><Link href="/donate" className="hover:text-sky-400">Donate</Link></li>
              <li><Link href="/research" className="hover:text-sky-400">Research</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
