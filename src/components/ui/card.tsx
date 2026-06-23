import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.28)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-cyan-300/30",
        className,
      )}
      {...props}
    />
  );
}
