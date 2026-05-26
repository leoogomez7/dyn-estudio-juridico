import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo inicio un divorcio?",
    a: "Coordinamos una consulta inicial para evaluar tu situación, recopilar la documentación necesaria (acta de matrimonio, DNI, datos patrimoniales) e iniciar el trámite. Ofrecemos divorcios express con resolución ágil.",
  },
  {
    q: "¿Cuánto cuesta una consulta?",
    a: "La primera consulta tiene un valor accesible y orientativo. El honorario final depende de la complejidad del caso y se acuerda por escrito antes de iniciar cualquier gestión.",
  },
  {
    q: "¿Cuánto tarda una sucesión?",
    a: "El tiempo promedio es de 6 a 12 meses, dependiendo de la cantidad de herederos, bienes y eventuales conflictos. Trabajamos para acortar plazos al máximo.",
  },
  {
    q: "¿Atienden consultas virtuales?",
    a: "Sí. Brindamos asesoramiento por videollamada en todo el país, con la misma calidad y respaldo que la atención presencial en nuestro estudio.",
  },
  {
    q: "¿Atienden urgencias penales?",
    a: "Sí. En materia penal contamos con disponibilidad extendida para situaciones de detención, allanamientos o imputaciones que requieran defensa inmediata.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`glass rounded-2xl overflow-hidden transition-all duration-500 ${
              isOpen ? "ring-gold" : ""
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5"
            >
              <span className="font-serif text-base sm:text-lg text-foreground">
                {f.q}
              </span>
              <span
                className={`shrink-0 grid place-items-center h-9 w-9 rounded-full border border-gold/40 text-gold transition-transform duration-500 ${
                  isOpen ? "rotate-45 bg-gold/15" : ""
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
