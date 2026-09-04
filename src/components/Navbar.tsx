import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/climate-change", label: "Climate Change" },
  { href: "/projects", label: "Projects" },
  { href: "/communities", label: "Communities" },
  { href: "/research", label: "Research" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="text-lg font-semibold tracking-wide text-slate-900">
          Triangeice Institute
        </Link>
        <nav aria-label="Primary navigation" className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-sky-700">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
