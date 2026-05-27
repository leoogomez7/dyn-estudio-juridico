import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#penal", label: "Área Penal" },
  { href: "#familia", label: "Área de Familia" },
  { href: "#civil", label: "Área Civil" },
  { href: "#estudio", label: "El Estudio" },
  { href: "#honorarios", label: "Honorarios" },
  { href: "#blog", label: "Blog" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled
            ? "glass-strong rounded-2xl border border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center h-10 w-10 rounded-lg border border-gold/30 bg-gradient-to-br from-deep-2 to-deep glow-soft overflow-hidden">
              <img src={logo} alt="Logo D&N Estudio Jurídico" className="h-full w-full object-cover" />
            </span>
            <span className="font-serif text-base sm:text-lg tracking-tight">
              <span className="gradient-text-gold">D&N</span>
              <span className="text-foreground/90"> Estudio Jurídico</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] uppercase tracking-wider text-foreground/75 hover:text-gold transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium btn-gold"
          >
            Asesoramiento
          </a>

          <button
            aria-label="Menu"
            className="lg:hidden p-2 text-gold"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/10 py-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2.5 text-sm text-foreground/80 hover:text-gold hover:bg-white/5 rounded-md transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-3 text-center px-5 py-3 rounded-full text-sm font-medium btn-gold"
              >
                Solicitar Asesoramiento
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
