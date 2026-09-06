import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-emerald-800 text-white hover:bg-emerald-900",
    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:border-sky-600 hover:text-sky-700",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
