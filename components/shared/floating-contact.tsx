import Link from "next/link";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { whatsappUrl } from "@/lib/contact";

export function FloatingContact() {
  return (
    <div className="corp-floating">
      <Link href="/contato">Orçamento</Link>
      <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  );
}
