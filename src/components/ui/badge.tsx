import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-800 border-blue-300",
        className,
      )}
      {...props}
    />
  );
}
