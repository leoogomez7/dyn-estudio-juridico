import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresá tu nombre").max(80),
  telefono: z.string().trim().min(6, "Teléfono inválido").max(30),
  email: z.string().trim().email("Email inválido").max(120),
  especialidad: z.string().min(1, "Seleccioná un área"),
  mensaje: z.string().trim().min(10, "Contanos brevemente").max(1000),
});

const DEST_EMAIL = "leorgomez7@gmail.com";
const INPUT_CLS = "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-gold/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_color-mix(in_oklab,var(--gold)_15%,transparent)]";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [textoMensaje, setTextoMensaje] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    
    fd.set("mensaje", textoMensaje);
    
    const parsed = schema.safeParse(Object.fromEntries(fd));
    
    if (!parsed.success) {
      // Solución al error de tipado estricto: accedemos de forma segura al array de errores
      const firstIssue = parsed.error.issues[0];
      const errorMsg = firstIssue ? firstIssue.message : "Revisá los datos";
      toast.error(errorMsg);
      return;
    }
    
    setLoading(true);
    const { nombre, telefono, email, especialidad, mensaje } = parsed.data;

    try {
      const body = new FormData();
      body.append("Nombre", nombre);
      body.append("Email", email);
      body.append("Teléfono", telefono);
      body.append("Área de Especialidad", especialidad);
      body.append("Consulta", mensaje);
      body.append("_subject", `Nueva consulta — ${especialidad} — ${nombre}`);
      body.append("_captcha", "false");

      const res = await fetch(`https://formsubmit.co{DEST_EMAIL}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });

      if (!res.ok) throw new Error("Send failed");
      
      toast.success("Consulta enviada. Te respondemos a la brevedad.");
      form.reset();
      setTextoMensaje(""); 
    } catch (error) {
      console.error(error);
      const subject = encodeURIComponent(`Consulta web — ${especialidad}`);
      const bodyTxt = encodeURIComponent(
        `Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nÁrea: ${especialidad}\n\n${mensaje}`,
      );
      window.location.href = `mailto:${DEST_EMAIL}?subject=${subject}&body=${bodyTxt}`;
      toast.message("Abrimos tu correo para completar el envío.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
            Nombre
          </label>
          <input name="nombre" placeholder="Tu nombre completo" className={INPUT_CLS} required />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
            Teléfono
          </label>
          <input name="telefono" placeholder="+54 9 11 ..." className={INPUT_CLS} required />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
          Email
        </label>
        <input name="email" type="email" placeholder="tu@email.com" className={INPUT_CLS} required />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
          Especialidad
        </label>
        <select name="especialidad" defaultValue="" className={INPUT_CLS} required>
          <option value="" disabled>
            Seleccionar área
          </option>
          <option className="bg-deep" value="Penal">Penal</option>
          <option className="bg-deep" value="Familia">Familia</option>
          <option className="bg-deep" value="Civil">Civil</option>
          <option className="bg-deep" value="Societario">Societario</option>
          <option className="bg-deep" value="Laboral">Laboral</option>
          <option className="bg-deep" value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
          Consulta
        </label>
        <textarea
          name="mensaje"
          rows={4}
          placeholder="Contanos brevemente tu caso..."
          className={INPUT_CLS}
          value={textoMensaje}
          onChange={(e) => setTextoMensaje(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3.5 rounded-full font-medium btn-gold disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {loading ? "Enviando..." : "Enviar consulta"}
        {!loading && <ChevronRight className="h-4 w-4" />}
      </button>
      <p className="text-[11px] text-muted-foreground/80 text-center">
        Tu información es tratada con absoluta confidencialidad.
      </p>
    </form>
  );
}
