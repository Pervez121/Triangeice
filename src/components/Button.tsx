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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-sky-700 text-white hover:bg-sky-800 shadow-sm",
    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:border-sky-600 hover:text-sky-700",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
