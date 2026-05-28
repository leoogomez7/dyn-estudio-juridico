import { useState } from "react";
import type { FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";

const schema = z.object({
  nombre: z.string().trim().min(2),
  telefono: z.string().trim().min(6),
  email: z.string().trim().email(),
  especialidad: z.string().min(1),
  mensaje: z.string().trim().min(10),
});

const DEST_EMAIL = "leorgomez7@gmail.com";

const INPUT_CLS =
  "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-foreground";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [textoMensaje, setTextoMensaje] = useState("");

  async function onSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const form = e.currentTarget;

    const fd = new FormData(form);

    fd.set("mensaje", textoMensaje);

    const parsed = schema.safeParse(
      Object.fromEntries(fd.entries())
    );

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message || "Error");
      return;
    }

    setLoading(true);

    const {
      nombre,
      telefono,
      email,
      especialidad,
      mensaje,
    } = parsed.data;

    try {
      const body = new FormData();

      body.append("Nombre", nombre);
      body.append("Email", email);
      body.append("Telefono", telefono);
      body.append("Area", especialidad);
      body.append("Consulta", mensaje);

      body.append(
        "_subject",
        `Nueva consulta - ${especialidad}`
      );

      body.append("_captcha", "false");

      const res = await fetch(
        `https://formsubmit.co/${DEST_EMAIL}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body,
        }
      );

      if (!res.ok) {
        throw new Error("Send failed");
      }

      toast.success("Consulta enviada");

      form.reset();

      setTextoMensaje("");
    } catch (error) {
      console.error(error);

      toast.error("No se pudo enviar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        name="nombre"
        placeholder="Nombre"
        className={INPUT_CLS}
        required
      />

      <input
        name="telefono"
        placeholder="Telefono"
        className={INPUT_CLS}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        className={INPUT_CLS}
        required
      />

      <select
        name="especialidad"
        defaultValue=""
        className={INPUT_CLS}
        required
      >
        <option value="" disabled>
          Seleccionar
        </option>

        <option value="Penal">Penal</option>
        <option value="Familia">Familia</option>
        <option value="Civil">Civil</option>
      </select>

      <textarea
        name="mensaje"
        rows={4}
        value={textoMensaje}
        onChange={(e) =>
          setTextoMensaje(e.target.value)
        }
        className={INPUT_CLS}
        placeholder="Consulta"
        required
      />

      <button
        type="submit"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}

        {!loading && (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>
    </form>
  );
}