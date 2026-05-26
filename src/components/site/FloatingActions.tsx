import { MessageCircle, Phone, Instagram, Mail } from "lucide-react";

const wa = "https://wa.me/5491161117841?text=Hola,%20quisiera%20coordinar%20cita";
const ig = "https://www.instagram.com/dra.moloneantonella";
const tel = "tel:+5491161117841";
const mail = "mailto:1131165252a@gmail.com";

export function FloatingActions() {
  const cls =
    "glass-strong h-12 w-12 grid place-items-center rounded-full text-foreground/85 hover:text-gold hover:glow-soft transition-all hover:-translate-y-1";
  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex flex-col gap-3">
      <a href={ig} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={cls}>
        <Instagram className="h-5 w-5" />
      </a>
      <a href={mail} aria-label="Email" className={cls}>
        <Mail className="h-5 w-5" />
      </a>
      <a href={tel} aria-label="Llamar" className={cls}>
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="relative h-14 w-14 grid place-items-center rounded-full btn-gold shadow-elegant"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-gold/40" />
        <MessageCircle className="h-6 w-6 relative" />
      </a>
    </div>
  );
}
