import Link from "next/link";

export function BrandLogo({
  muted = false,
  className = "",
}: {
  muted?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`pb-logo ${muted ? "pb-logo--muted" : ""} ${className}`}
      aria-label="PB Clean — página inicial"
    >
      <span className="pb-logo__monogram">PB</span>
      <span className="pb-logo__clean">CLEAN</span>
      <span className="pb-logo__site">www.pbclean.com.br</span>
    </Link>
  );
}
