import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 40, height: 40 },
  md: { width: 48, height: 48 },
  lg: { width: 64, height: 64 },
};

export function Logo({ className, size = "md" }: LogoProps) {
  const { width, height } = sizes[size];

  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)} aria-label="PB Clean — Página inicial">
      <Image
        src="/logo.svg"
        alt="PB Clean — Limpeza especializada"
        width={width}
        height={height}
        priority
        className="shrink-0"
      />
      <span className="hidden font-bold tracking-tight text-dark sm:inline-block">
        PB <span className="text-brand-red">Clean</span>
      </span>
    </Link>
  );
}
