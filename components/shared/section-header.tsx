import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "mb-4 inline-flex rounded-full border border-white/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em]",
            dark
              ? "bg-white/8 text-white/90 border-white/20"
              : "bg-surface text-brand-navy border-border"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-balance text-[2.8rem] leading-[1.02] tracking-[-0.03em] sm:text-[3.4rem] md:text-[3.8rem]",
          dark ? "text-white" : "text-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-balance text-lg leading-8",
            dark ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
