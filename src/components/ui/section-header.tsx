import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-5", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="font-heading text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
        {title}
      </h2>
      {description ? <p className="text-base leading-8 text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}
