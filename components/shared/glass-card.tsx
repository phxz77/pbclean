import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  dark = false,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-8",
        dark ? "glass-dark" : "glass bg-white/60 backdrop-blur-glass border border-white/40 shadow-soft",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-medium",
        className
      )}
    >
      {children}
    </div>
  );
}
