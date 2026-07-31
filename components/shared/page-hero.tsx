import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  current,
}: {
  eyebrow: string;
  title: string;
  description: string;
  current: string;
}) {
  return (
    <section className="corp-page-hero">
      <Reveal className="corp-container" eager>
        <div className="corp-breadcrumb">
          <Link href="/" aria-label="Home"><Home /></Link>
          <ChevronRight />
          <span>{current}</span>
        </div>
        <p className="corp-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="corp-page-hero__description">{description}</p>
      </Reveal>
    </section>
  );
}
