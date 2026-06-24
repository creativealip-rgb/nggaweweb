import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_16px_44px_rgba(37,99,235,0.34)] hover:-translate-y-0.5 hover:shadow-[0_20px_56px_rgba(37,99,235,0.42)]",
  secondary:
    "border-2 border-white/40 bg-white/20 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/30",
  ghost: "text-blue-700 hover:text-slate-900 hover:bg-white/[0.06]",
};

const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:pointer-events-none disabled:opacity-50";

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({ variant = "primary", className, children, href, ...props }: LinkButtonProps) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a className={cn(base, variants[variant], className)} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={cn(base, variants[variant], className)} href={href} {...props}>
      {children}
    </Link>
  );
}
