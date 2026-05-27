import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Shield,
  Users,
  Scroll,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Instagram,
  AlertTriangle,
  Award,
  Lock,
  Zap,
  HeartHandshake,
  Sparkles,
  ChevronRight,
  X,
  ExternalLink,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Counter } from "@/components/site/Counter";
import { FAQ } from "@/components/site/FAQ";
import { ContactForm } from "@/components/site/ContactForm";
import { useReveal } from "@/hooks/use-reveal";
import { Toaster } from "@/components/ui/sonner";

import lawyerImg from "@/assets/abogada.jpeg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

const WA = "https://wa.me/5491161117841?text=Hola,%20quisiera%20coordinar%20cita";
const TEL = "tel:+5491161117841";
const EMAIL_PRIMARY = "1131165252a@gmail.com";
const IG_URL = "https://www.instagram.com/dra.moloneantonella";
const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/gyN2Wm99wT6iYzrj8";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "D&N Estudio Jurídico Integral — Abogados en Merlo | Dra. Moloñe" },
      {
        name: "description",
        content:
          "Estudio jurídico premium en Merlo: derecho penal, familia y civil. Defensa técnica, divorcios, sucesiones y asesoramiento estratégico. Atención personalizada por la Dra. Moloñe Carla Antonella.",
      },
      {
        name: "keywords",
        content:
          "abogado en Merlo, estudio jurídico Merlo, abogada penalista Merlo, divorcios Merlo, sucesiones Merlo, abogado civil Merlo, defensa penal, asesoramiento jurídico",
      },
      { property: "og:title", content: "D&N Estudio Jurídico Integral — Abogados en Merlo" },
      {
        property: "og:description",
        content:
          "Derecho con compromiso Soluciones con estrategía.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_AR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "D&N Estudio Jurídico Integral",
          description:
            "Estudio jurídico integral en Merlo. Derecho penal, familia y civil.",
          telephone: "+54 9 11 6111-7841",
          areaServed: "Merlo, Buenos Aires, Argentina",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gaboto 441",
            addressLocality: "Merlo",
            addressRegion: "Buenos Aires",
            addressCountry: "AR",
          },
          openingHours: "Mo-Fr 09:00-18:00",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  useEffect(() => {
    document.documentElement.classList.remove("light");
  }, []);

  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Trust />
      <Areas />
      <Estudio />
      <Honorarios />
      <Schedule />
      <UrgenciaBanner />
      <Blog />
      <Opiniones />
      <FAQSection />
      <Contacto />
      <Footer />
      <FloatingActions />
      <Toaster />
    </main>
  );
}

/* ------------------------------- HERO ------------------------------- */

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-28 pb-20">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at 15% 20%, rgba(255,205,100,0.12), transparent 24%), radial-gradient(circle at 85% 15%, rgba(255,215,120,0.08), transparent 26%), linear-gradient(180deg, #050816 0%, #081022 100%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep/85 via-deep/75 to-deep" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_30%,oklch(0.3_0.07_252/0.55),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-gold/30 mb-8">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/85">
              Estudio Jurídico Integral · Merlo
            </span>
          </div>

          <h1 className="reveal font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            <span className="block text-foreground/90">D&N</span>
            <span className="block gradient-text-gold mt-2">Estudio Jurídico</span>
            <span className="block text-foreground/85 text-3xl sm:text-4xl lg:text-5xl mt-4 font-serif italic">
              Integral
            </span>
          </h1>

          <div className="reveal flex items-center justify-center my-8">
            <span className="divider-gold" />
          </div>

          <p className="reveal text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
            <span className="text-gold font-medium">Dra. Moloñe Carla Antonella</span>
            <span className="block mt-3 font-serif italic text-foreground/85 text-lg sm:text-xl">
              "Derecho con compromiso"
            </span>
            <span className="block mt-1 text-sm text-muted-foreground tracking-wide">
              Soluciones con estrategía.
            </span>
          </p>

          <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium btn-gold"
            >
              Solicitar Asesoramiento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium btn-outline-gold"
            >
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-[10px] uppercase tracking-[0.3em] flex flex-col items-center gap-2 animate-pulse">
        <span>Descubrir</span>
        <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}

/* ------------------------------ TRUST ------------------------------ */

function Trust() {
  const items = [
    { icon: Lock, label: "Confidencialidad absoluta" },
    { icon: Clock, label: "Atención 24/7" },
    { icon: Zap, label: "Respuestas rápidas" },
    { icon: Award, label: "Compromiso profesional" },
  ];
  return (
    <section className="py-16 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((it, i) => (
            <div
              key={i}
              className="reveal flex items-center gap-3 sm:gap-4 px-4 py-4 rounded-2xl glass hover-lift"
            >
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-gold/10 border border-gold/30 text-gold shrink-0">
                <it.icon className="h-5 w-5" />
              </span>
              <span className="text-sm sm:text-[15px] text-foreground/85">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ AREAS ------------------------------ */

const areas = [
  {
    id: "penal",
    icon: Shield,
    title: "Área Penal",
    tag: "Defensa Estratégica",
    desc: "Defensa técnica avanzada y protección integral de derechos.",
    items: [
      "Delitos penales",
      "Excarcelaciones",
      "Defensa técnica integral",
      "Asesoramiento urgente 24/7",
    ],
  },
  {
    id: "familia",
    icon: Users,
    title: "Área de Familia",
    tag: "Soluciones Humanas",
    desc: "Soluciones rápidas y humanas para conflictos familiares.",
    items: [
      "Divorcios",
      "Cuota alimentaria",
      "Sucesiones y herencias",
      "Régimen de visitas",
    ],
  },
  {
    id: "civil",
    icon: Scroll,
    title: "Área Civil",
    tag: "Asesoramiento Integral",
    desc: "Asesoramiento estratégico y resolución de litigios complejos.",
    items: [
      "Redacción de contratos",
      "Derecho societario",
      "Daños y perjuicios",
      "Mediaciones",
      "Conflictos patrimoniales",
    ],
  },
];

function Areas() {
  return (
    <section className="py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Áreas de Especialidad"
          title={<>Práctica jurídica <span className="gradient-text-gold italic">de élite</span></>}
          sub="Tres pilares de práctica, una sola filosofía: excelencia técnica al servicio de cada cliente."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {areas.map((a) => (
            <article
              key={a.id}
              id={a.id}
              className="reveal group relative glass rounded-3xl p-8 hover-lift overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <span className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 text-gold">
                    <a.icon className="h-6 w-6" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold/80 mt-2">
                    {a.tag}
                  </span>
                </div>

                <h3 className="font-serif text-3xl mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-7">
                  {a.desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {a.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                      <span className="text-foreground/85">{it}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm text-gold font-medium group/link"
                >
                  Consultar especialidad
                  <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- ESTUDIO ----------------------------- */

function Estudio() {
  return (
    <section id="estudio" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 via-transparent to-deep-2 rounded-[2rem] blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden ring-gold glow-soft">
              <img
                src={lawyerImg}
                alt="Dra. Moloñe Carla Antonella"
                width={896}
                height={1152}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-deep via-deep/70 to-transparent">
                <div className="text-xs uppercase tracking-widest text-gold/90">
                  Abogada
                </div>
                <div className="font-serif text-xl mt-1">
                  Dra. Moloñe Carla Antonella
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 hidden sm:block">
              <div className="flex items-center gap-3">
                <Clock className="h-7 w-7 text-gold" />
                <div>
                  <div className="font-serif text-2xl gradient-text-gold leading-none">
                    <Counter to={24} suffix=" horas" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    7 días atendiendo
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <SectionEyebrow>El Estudio</SectionEyebrow>
            <h2 className="font-serif text-4xl sm:text-5xl mt-4 leading-tight">
              Estrategia, ética y{" "}
              <span className="gradient-text-gold italic">resultados</span>.
            </h2>
            <div className="divider-gold my-6" />
            <p className="text-muted-foreground leading-relaxed mb-5">
              En D&N Estudio Jurídico Integral combinamos rigor técnico, mirada
              estratégica y un trato profundamente humano. Cada caso recibe la
              atención personalizada que merece, con compromiso real y
              comunicación transparente en cada etapa del proceso.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestra misión es simple: <span className="text-foreground/90">defender
              tus derechos con la solidez técnica de una firma internacional</span>,
              cerca tuyo, cuando más lo necesitás.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Experiencia comprobada",
                "Ética profesional",
                "Atención personalizada",
                "Estrategia ganadora",
              ].map((v) => (
                <div
                  key={v}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl glass"
                >
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                  <span className="text-sm">{v}</span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium btn-gold"
            >
              Agendar una consulta
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- HONORARIOS ---------------------------- */

function Honorarios() {
  const items = [
    {
      title: "Consulta Profesional",
      desc: "Atención presencial o virtual con análisis de tu caso y plan de acción.",
      bullets: ["Evaluación integral", "Diagnóstico legal", "Recomendaciones claras"],
    },
    {
      title: "Asesoramiento en Contratos",
      desc: "Redacción, revisión y negociación de contratos civiles y comerciales.",
      bullets: ["Contratos a medida", "Cláusulas de protección", "Revisión técnica"],
    },
    {
      title: "Divorcios y Sucesiones",
      desc: "Trámites de familia con acompañamiento humano y resolución ágil.",
      bullets: ["Divorcio express", "Sucesiones", "Acuerdos extrajudiciales"],
    },
  ];
  return (
    <section id="honorarios" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Honorarios"
          title={<>Transparencia <span className="gradient-text-gold italic">premium</span></>}
          sub="Valores orientativos. El honorario final se acuerda por escrito, según la complejidad del caso."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <div
              key={p.title}
              className="reveal relative rounded-3xl p-8 hover-lift overflow-hidden glass"
            >
              <h3 className="font-serif text-2xl">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {p.desc}
              </p>
              <ul className="mt-6 space-y-2.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    <span className="text-foreground/85">{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium btn-outline-gold"
              >
                Consultar
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-xs text-muted-foreground mt-10 max-w-2xl mx-auto">
          Los valores son orientativos y pueden variar según la complejidad del caso.
          Solicitá tu presupuesto personalizado sin compromiso.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------- SCHEDULE ---------------------------- */

function Schedule() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="reveal glass-strong rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative grid md:grid-cols-[auto_1fr_auto] items-center gap-8">
            <span className="grid place-items-center h-16 w-16 rounded-2xl bg-gold/10 border border-gold/30 text-gold mx-auto md:mx-0">
              <Clock className="h-7 w-7" />
            </span>
            <div className="text-center md:text-left">
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold/85">
                Horarios de atención
              </div>
              <div className="font-serif text-2xl sm:text-3xl mt-2">
                Los 7 días de la semana ·{" "}
                <span className="gradient-text-gold">Las 24 hs del día</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Atención presencial y virtual con cita previa.
              </p>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium btn-gold"
            >
              <MessageCircle className="h-4 w-4" />
              Reservar cita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- URGENCIA BANNER -------------------------- */

function UrgenciaBanner() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal relative block rounded-3xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-deep-2 via-deep to-deep-2" />
          <div className="absolute inset-0 opacity-40 shimmer" />
          <div className="relative p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gold/30 rounded-3xl">
            <div className="flex items-center gap-5">
              <span className="grid place-items-center h-14 w-14 rounded-2xl bg-destructive/20 border border-destructive/40 text-gold relative">
                <AlertTriangle className="h-6 w-6" />
                <span className="absolute inset-0 rounded-2xl animate-ping bg-gold/10" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-gold">
                  Urgencias jurídicas
                </div>
                <div className="font-serif text-2xl sm:text-3xl mt-1">
                  Atención jurídica urgente en materia penal
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Detenciones, allanamientos e imputaciones — contactanos ahora.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium btn-gold whitespace-nowrap">
              <MessageCircle className="h-4 w-4" />
              WhatsApp inmediato
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

/* ---------------------------- OPINIONES ---------------------------- */

function Opiniones() {
  return (
    <section id="opiniones" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Opiniones · Google"
          title={<>Lo que dicen nuestros <span className="gradient-text-gold italic">clientes</span></>}
          sub="Reseñas reales del Estudio Jurídico Integral — Dra. Moloñe (D&N) en Google."
        />

        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium btn-outline-gold"
          >
            Ver todas las reseñas en Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ BLOG ------------------------------ */

const posts = [
  {
    img: blog2,
    cat: "Familia",
    title: "¿Cómo iniciar un divorcio en Argentina?",
    desc: "Guía práctica: requisitos, documentación y plazos para iniciar el trámite.",
    body: [
      "Desde la reforma del Código Civil y Comercial, el divorcio en Argentina es incausado: no se exige expresar motivos ni esperar plazos previos. Puede ser solicitado por una o ambas partes.",
      "Documentación necesaria: DNI de los cónyuges, acta de matrimonio actualizada, partidas de nacimiento de los hijos (si los hubiera) y, en caso de existir, convenio regulador (división de bienes, alimentos, régimen de comunicación).",
      "El procedimiento se inicia ante el Juzgado de Familia con jurisdicción en el último domicilio conyugal. Si hay acuerdo, los tiempos se acortan notablemente. Si no, se resolverán por separado los efectos del divorcio.",
      "Recomendamos siempre asesoramiento legal previo: un buen convenio regulador evita litigios futuros y protege tus derechos patrimoniales y personales.",
    ],
  },
  {
    img: blog1,
    cat: "Penal",
    title: "Qué hacer ante una denuncia penal",
    desc: "Pasos clave para proteger tus derechos desde el primer momento.",
    body: [
      "Si recibís una citación o tomás conocimiento de una denuncia en tu contra, lo primero es mantener la calma y NO declarar sin abogado defensor presente. Tenés derecho constitucional a negarte a declarar.",
      "Contactá de inmediato a un abogado penalista para que pueda acceder al expediente y conocer la imputación concreta. La estrategia de defensa se construye sobre la prueba existente.",
      "Conservá todo elemento que pueda servir como prueba a tu favor: mensajes, correos, testigos, registros. No alteres ni elimines información de tus dispositivos.",
      "Ante una detención o allanamiento, exigí la presencia de tu abogado y no firmes ningún acta sin asesoramiento. En materia penal el tiempo es crítico — las primeras 48 horas son determinantes.",
    ],
  },
  {
    img: blog3,
    cat: "Sucesiones",
    title: "Cómo realizar una sucesión paso a paso",
    desc: "Documentación, herederos y tiempos estimados del proceso sucesorio.",
    body: [
      "La sucesión es el proceso judicial mediante el cual se transmiten los bienes y obligaciones de una persona fallecida a sus herederos. Es obligatoria para poder disponer de los bienes (inmuebles, vehículos, cuentas).",
      "Documentación: partida de defunción, partida de matrimonio, partidas de nacimiento de los herederos, DNI, títulos de propiedad y constancias bancarias. Si hay testamento, debe presentarse el original.",
      "Etapas: apertura del proceso, declaratoria de herederos, denuncia y avalúo de bienes, partición y adjudicación, e inscripción registral de los bienes a nombre de los herederos.",
      "Duración estimada: entre 6 y 12 meses cuando hay acuerdo entre herederos. Con conflictos o bienes complejos puede extenderse. Un buen asesoramiento ahorra meses y costos.",
    ],
  },
  {
    img: blog4,
    cat: "Civil",
    title: "Derechos laborales básicos que deberías conocer",
    desc: "Marco legal esencial para empleados y empleadores en Argentina.",
    body: [
      "Toda relación laboral en blanco debe estar registrada ante AFIP desde el primer día. La falta de registración (trabajo \"en negro\") genera derecho a indemnizaciones agravadas para el trabajador.",
      "Derechos básicos: salario mínimo vital y móvil, jornada máxima de 8 horas diarias o 48 semanales, descanso semanal, vacaciones pagas, aguinaldo (SAC), licencias especiales y obra social.",
      "Ante un despido sin causa corresponde una indemnización por antigüedad (Art. 245 LCT), preaviso e integración del mes de despido. Si hubo registración deficiente, se suman multas.",
      "Plazo de prescripción: 2 años desde el hecho que generó el reclamo. No demores — la prueba se vuelve más difícil con el tiempo. Consultá siempre antes de firmar telegramas o acuerdos.",
    ],
  },
];

function Blog() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? posts[openIdx] : null;

  return (
    <section id="blog" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Blog Jurídico"
          title={<>Conocimiento <span className="gradient-text-gold italic">accesible</span></>}
          sub="Artículos para entender tus derechos y tomar mejores decisiones."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, i) => (
            <article
              key={i}
              onClick={() => setOpenIdx(i)}
              className="reveal group glass rounded-3xl overflow-hidden hover-lift cursor-pointer text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-widest rounded-full glass-strong text-gold border border-gold/40">
                  {p.cat}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg leading-snug group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {p.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-gold uppercase tracking-widest font-medium">
                  Leer más <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-deep/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl border border-gold/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Cerrar"
              onClick={() => setOpenIdx(null)}
              className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full bg-deep/70 border border-white/10 text-foreground/80 hover:text-gold transition-colors z-10"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative aspect-[16/8] overflow-hidden rounded-t-3xl">
              <img src={active.img} alt={active.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-widest rounded-full glass-strong text-gold border border-gold/40">
                {active.cat}
              </span>
            </div>
            <div className="p-6 sm:p-10">
              <h3 className="font-serif text-2xl sm:text-3xl leading-tight">{active.title}</h3>
              <div className="divider-gold my-5" />
              <div className="space-y-4">
                {active.body.map((par, i) => (
                  <p key={i} className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                    {par}
                  </p>
                ))}
              </div>
              <a
                href="#contacto"
                onClick={() => setOpenIdx(null)}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium btn-gold"
              >
                Consultar mi caso
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------------------------- FAQ ------------------------------- */

function FAQSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Preguntas frecuentes"
          title={<>Antes de tu <span className="gradient-text-gold italic">consulta</span></>}
          sub="Respuestas claras a las dudas más comunes."
        />
        <div className="mt-14 reveal">
          <FAQ />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CONTACTO ----------------------------- */

const mapEmbed =
  "https://www.google.com/maps?q=Gaboto+441,+Merlo,+Buenos+Aires&output=embed";
const mapsLink =
  "https://www.google.com/maps/dir/?api=1&destination=Gaboto+441+Merlo+Buenos+Aires";

function Contacto() {
  return (
    <section id="contacto" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Contacto Premium"
          title={<>Coordinemos tu <span className="gradient-text-gold italic">consulta</span></>}
          sub="Estamos para asesorarte. Elegí el canal que prefieras."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {/* Info column */}
          <div className="reveal lg:col-span-1 space-y-4">
            <InfoCard
              icon={Phone}
              label="Teléfono"
              value="+54 9 11 6111-7841"
              ctaLabel="Llamar ahora"
              href={TEL}
            />
            <InfoCard
              icon={MessageCircle}
              label="WhatsApp"
              value="Respuesta inmediata"
              ctaLabel="Mandar WhatsApp"
              href={WA}
              external
            />
            <InfoCard
              icon={Mail}
              label="Email"
              value={EMAIL_PRIMARY}
              ctaLabel="Escribir un email"
              href={`mailto:${EMAIL_PRIMARY}`}
            />
            <InfoCard
              icon={MapPin}
              label="Dirección"
              value="Gaboto 441, entre Dumas y Payró"
              ctaLabel="Cómo llegar"
              href={mapsLink}
              external
            />
            <InfoCard
              icon={Clock}
              label="Horario"
              value="Todos los días, 24 horas"
            />
            <InfoCard
              icon={Instagram}
              label="Instagram"
              value="@dra.moloneantonella"
              ctaLabel="Seguir"
              href={IG_URL}
              external
            />
          </div>

          {/* Form */}
          <div className="reveal lg:col-span-1 glass-strong rounded-3xl p-8">
            <h3 className="font-serif text-2xl mb-1">Solicitar Asesoramiento</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Completá tus datos y te contactamos a la brevedad.
            </p>
            <ContactForm />
          </div>

          {/* Map */}
          <div className="reveal lg:col-span-1 rounded-3xl overflow-hidden ring-gold glow-soft relative min-h-[420px]">
            <iframe
              title="Mapa D&N Estudio Jurídico"
              src={mapEmbed}
              className="absolute inset-0 h-full w-full"
              style={{ filter: "grayscale(0.4) contrast(1.05) brightness(0.85)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium btn-gold"
            >
              Cómo llegar <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  ctaLabel,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  ctaLabel?: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <div className="glass rounded-2xl p-5 hover-lift">
      <div className="flex items-start gap-4">
        <span className="grid place-items-center h-11 w-11 rounded-xl bg-gold/10 border border-gold/30 text-gold shrink-0">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </div>
          <div className="text-sm sm:text-base text-foreground mt-1 break-words">
            {value}
          </div>
          {ctaLabel && href && (
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="mt-2 inline-flex items-center gap-1 text-xs text-gold font-medium uppercase tracking-widest"
            >
              {ctaLabel} <ChevronRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- FOOTER ----------------------------- */

function Footer() {
  return (
    <footer className="relative pt-24 pb-10 border-t border-white/5 bg-deep/70">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="font-serif text-2xl">
              <span className="gradient-text-gold">D&N</span> Estudio Jurídico Integral
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
              Firma jurídica de élite con sede en Merlo. Defensa técnica, soluciones
              de familia y asesoramiento civil con estándares premium.
            </p>
            <div className="divider-gold mt-6" />
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-gold/85 mb-4">
              Enlaces
            </div>
            <ul className="space-y-2.5 text-sm">
              {[
                ["#penal", "Área Penal"],
                ["#familia", "Área de Familia"],
                ["#civil", "Área Civil"],
                ["#honorarios", "Honorarios"],
                ["#blog", "Blog Jurídico"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a
                    href={h}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-gold/85 mb-4">
              Contacto
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>Gaboto 441, Merlo</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <a href={TEL} className="hover:text-gold transition-colors">
                  +54 9 11 6111-7841
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <a href={`mailto:${EMAIL_PRIMARY}`} className="hover:text-gold transition-colors break-all">
                  {EMAIL_PRIMARY}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  @dra.moloneantonella
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>Todos los días, las 24 horas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} D&N Estudio Jurídico Integral · Todos los derechos reservados.
          </span>
          <span>Dra. Moloñe Carla Antonella · Matrícula profesional</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------- helpers ---------------------------- */

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border-gold/30">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/85">
        {children}
      </span>
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="reveal text-center max-w-2xl mx-auto">
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="font-serif text-4xl sm:text-5xl mt-5 leading-tight">{title}</h2>
      {sub && (
        <p className="text-muted-foreground mt-5 leading-relaxed">{sub}</p>
      )}
      <div className="mx-auto mt-6 divider-gold" />
    </div>
  );
}
