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

// Cargamos la clave de forma segura desde tu .env.local
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Revisá los datos");
      return;
    }
    
    setLoading(true);
    const { nombre, telefono, email, especialidad, mensaje } = parsed.data;

    try {
      if (!BREVO_API_KEY) {
        throw new Error("Falta la clave API de Brevo en las variables de entorno");
      }

      // Envío directo a los servidores de Brevo usando la URL oficial
      const res = await fetch("https://brevo.com", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "api-key": BREVO_API_KEY,
          "content-type": "application/json"
        },
        body: JSON.stringify({
          sender: { 
            name: "D&N Web Form", 
            email: "leorgomez7@gmail.com" // Tu correo verificado en Brevo
          },
          to: [
            { 
              email: DEST_EMAIL, 
              name: "D&N Estudio Jurídico" 
            }
          ],
          subject: `Nueva consulta — ${especialidad} — ${nombre}`,
          htmlContent: `
            <div style="font-family: sans-serif; padding: 20px; color: #111;">
              <h2 style="color: #c5a880; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nueva consulta recibida</h2>
              <p><strong>Nombre:</strong> ${nombre}</p>
              <p><strong>Teléfono:</strong> ${telefono}</p>
              <p><strong>Email del cliente:</strong> ${email}</p>
              <p><strong>Área de consulta:</strong> ${especialidad}</p>
              <br/>
              <p><strong>Mensaje:</strong></p>
              <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #c5a880;">
                ${mensaje.replace(/\n/g, '<br/>')}
              </div>
            </div>
          `
        })
      });

      if (!res.ok) throw new Error("Brevo API error");

      toast.success("Consulta enviada. Te respondemos a la brevedad.");
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      
      // Respaldo (Fallback): Si la API falla, abre el gestor de correo local
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

  const inputCls =
    "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-gold/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_color-mix(in_oklab,var(--gold)_15%,transparent)]";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
            Nombre
          </label>
          <input name="nombre" placeholder="Tu nombre completo" className={inputCls} required />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
            Teléfono
          </label>
          <input name="telefono" placeholder="+54 9 11 ..." className={inputCls} required />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
          Email
        </label>
        <input name="email" type="email" placeholder="tu@email.com" className={inputCls} required />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
          Especialidad
        </label>
        <select name="especialidad" defaultValue="" className={inputCls} required>
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
          className={inputCls}
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
