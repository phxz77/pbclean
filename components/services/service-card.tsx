import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types/content";
import { ContentIcon } from "@/components/shared/content-icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="corp-service-card">
      <div className="corp-service-card__icon">
        <ContentIcon name={service.icon} />
      </div>
      <p>{service.eyebrow}</p>
      <h3>{service.title}</h3>
      <span>{service.shortDescription}</span>
      <div className="corp-service-card__audiences">
        {service.audiences.slice(0, 3).map((audience) => (
          <small key={audience}>{audience}</small>
        ))}
      </div>
      <Link href={`/servicos/${service.slug}`}>
        Conhecer serviço <ArrowUpRight />
      </Link>
    </article>
  );
}
