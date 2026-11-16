import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Instagram, MapPin, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import alebrijeArt from "@/assets/eterno/alebrije-art.jpg.asset.json";
import blackworkTattoo from "@/assets/eterno/blackwork-tattoo.jpg.asset.json";
import cafeCocktail from "@/assets/eterno/cafe-cocktail.jpg.asset.json";
import cafeDrink from "@/assets/eterno/cafe-drink.jpg.asset.json";
import coffeeLatte from "@/assets/eterno/coffee-latte.jpg.asset.json";
import daggerTattoo from "@/assets/eterno/dagger-tattoo.jpg.asset.json";
import earPiercing from "@/assets/eterno/ear-piercing.jpg.asset.json";
import floralTattoo from "@/assets/eterno/floral-tattoo.jpg.asset.json";
import interior from "@/assets/eterno/interior.jpg.asset.json";
import studioSession from "@/assets/eterno/studio-session.jpg.asset.json";
import turtleTattoo from "@/assets/eterno/turtle-tattoo.jpg.asset.json";
import wingsTattoo from "@/assets/eterno/wings-tattoo.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Estudio Eterno — Tattoo · Café · Arte en Tulum" },
      {
        name: "description",
        content:
          "Tattoo, piercing, café, tarot y arte en el corazón de Tulum. Visítanos de lunes a sábado en Estudio Eterno.",
      },
      { property: "og:title", content: "Estudio Eterno — Tattoo · Café · Arte en Tulum" },
      {
        property: "og:description",
        content: "Un estudio para tatuarte, tomar un café y encontrar inspiración en Tulum.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const gallery = [
    { image: wingsTattoo.url, alt: "Tatuaje de alas detallado en el pecho", label: "Tatuaje" },
    { image: earPiercing.url, alt: "Composición de piercings en la oreja", label: "Piercing" },
    { image: coffeeLatte.url, alt: "Café con latte art servido en el estudio", label: "Café" },
    { image: turtleTattoo.url, alt: "Tatuaje ornamental de tortuga marina", label: "Tatuaje" },
    { image: cafeCocktail.url, alt: "Bebida de café servida en vaso con hielo", label: "Café" },
    { image: daggerTattoo.url, alt: "Diseño de daga alada tatuado", label: "Tatuaje" },
    { image: alebrijeArt.url, alt: "Figura de alebrije pintada a mano", label: "Arte" },
    { image: floralTattoo.url, alt: "Tatuaje floral de líneas finas", label: "Tatuaje" },
    { image: blackworkTattoo.url, alt: "Tatuaje ornamental de estilo blackwork", label: "Tatuaje" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="border-b border-border bg-studio-green text-studio-green-foreground">
        <p className="px-4 py-2 text-center text-xs font-medium tracking-[0.12em] sm:text-sm">
          TATTOO <span aria-hidden="true">·</span> PIERCING <span aria-hidden="true">·</span> CAFÉ{" "}
          <span aria-hidden="true">·</span> TAROT — TULUM, Q. ROO
        </p>
      </div>

      <header className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 px-4 py-4 sm:flex sm:justify-between sm:px-8">
          <a href="#inicio" className="min-w-0 leading-none" aria-label="Estudio Eterno, inicio">
            <span className="block truncate font-display text-2xl sm:text-3xl">estudio eterno</span>
            <span className="mt-1 block text-[9px] font-semibold tracking-[0.2em] text-muted-foreground sm:text-[10px]">
              TATTOO · CAFÉ · ARTE
            </span>
          </a>
          <Button asChild size="sm" className="shrink-0 bg-studio-red text-studio-red-foreground hover:bg-studio-red/90">
            <a href="https://www.instagram.com/estudio.eterno/" target="_blank" rel="noreferrer">
              <Instagram aria-hidden="true" />
              <span className="hidden sm:inline">Escríbenos</span>
              <span className="sm:hidden">Contacto</span>
            </a>
          </Button>
          <nav aria-label="Navegación principal" className="col-span-2 -mx-4 mt-4 flex gap-6 overflow-x-auto border-t border-border px-4 pt-3 text-xs font-semibold sm:mx-0 sm:mt-0 sm:border-0 sm:px-0 sm:pt-0 sm:text-sm">
            <a className="shrink-0 transition-colors hover:text-studio-red" href="#estudio">El estudio</a>
            <a className="shrink-0 transition-colors hover:text-studio-red" href="#servicios">Servicios</a>
            <a className="shrink-0 transition-colors hover:text-studio-red" href="#galeria">Galería</a>
            <a className="shrink-0 transition-colors hover:text-studio-red" href="#visitanos">Visítanos</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="relative isolate min-h-[620px] overflow-hidden bg-studio-green sm:min-h-[690px]">
        <img
          src={interior.url}
          alt="Interior de Estudio Eterno, un espacio creativo en Tulum"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-studio-overlay" />
        <div className="mx-auto flex min-h-[620px] max-w-7xl flex-col justify-between px-5 pb-8 pt-16 text-studio-hero-foreground sm:min-h-[690px] sm:px-10 sm:pb-12 sm:pt-20">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-studio-highlight sm:text-sm">
              <Sparkles size={16} aria-hidden="true" /> Un espacio creativo en Tulum
            </p>
            <h1 className="max-w-3xl font-display text-6xl leading-[0.98] sm:text-8xl">
              Tinta, café <span className="text-studio-highlight">y alma.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-studio-hero-muted sm:text-lg">
              Un estudio para expresarte, hacer una pausa y conectar con el arte. Te esperamos en el corazón de Tulum.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-studio-red text-studio-red-foreground hover:bg-studio-red/90">
                <a href="https://www.instagram.com/estudio.eterno/" target="_blank" rel="noreferrer">
                  Agenda tu visita <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-studio-outline bg-studio-glass text-studio-hero-foreground hover:bg-studio-glass-hover hover:text-studio-hero-foreground">
                <a href="#servicios">Conoce el estudio <ArrowDownRight aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-studio-outline pt-5 text-sm sm:flex sm:items-end sm:justify-between">
            <p className="max-w-xs text-studio-hero-muted">Av. Tulum, entre Alfa Sur y Júpiter Sur</p>
            <p className="text-right font-semibold">Lun — Sáb <span className="ml-2 font-normal text-studio-hero-muted">10:00 — 21:00</span></p>
          </div>
        </div>
      </section>

      <section id="estudio" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:grid-cols-[0.9fr_1.1fr] sm:items-center sm:px-10 sm:py-28">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-studio-red">Más que un estudio</p>
          <h2 className="max-w-lg font-display text-5xl leading-[1.05] sm:text-6xl">Un rincón para crear y conectar.</h2>
        </div>
        <div className="max-w-xl sm:justify-self-end">
          <p className="text-lg leading-8 text-muted-foreground">
            Estudio Eterno reúne tatuaje, piercing, café, tarot y arte bajo un mismo techo. Pasa por una pieza nueva, encuentra inspiración o simplemente disfruta algo rico.
          </p>
          <a href="#visitanos" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-studio-red">
            Encuentra el estudio <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="servicios" className="border-y border-border bg-studio-soft">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-24">
          <div className="mb-12 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-studio-red">Lo que hacemos</p>
              <h2 className="font-display text-5xl sm:text-6xl">Arte para llevar contigo.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">Ven por una idea, quédate por todo lo demás.</p>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2">
            <article className="border-t border-border py-6">
              <span className="text-xs font-semibold text-studio-red">01</span>
              <h3 className="mt-3 font-display text-3xl">Tatuaje</h3>
              <p className="mt-2 max-w-sm leading-7 text-muted-foreground">Piezas pensadas contigo, desde una idea pequeña hasta un diseño que cuenta tu historia.</p>
            </article>
            <article className="border-t border-border py-6">
              <span className="text-xs font-semibold text-studio-red">02</span>
              <h3 className="mt-3 font-display text-3xl">Piercing</h3>
              <p className="mt-2 max-w-sm leading-7 text-muted-foreground">Encuentra tu siguiente detalle y una composición que se sienta tuya.</p>
            </article>
            <article className="border-t border-border py-6">
              <span className="text-xs font-semibold text-studio-red">03</span>
              <h3 className="mt-3 font-display text-3xl">Café</h3>
              <p className="mt-2 max-w-sm leading-7 text-muted-foreground">Haz una pausa, pide algo rico y disfruta el ambiente del estudio.</p>
            </article>
            <article className="border-t border-border py-6">
              <span className="text-xs font-semibold text-studio-red">04</span>
              <h3 className="mt-3 font-display text-3xl">Tarot & arte</h3>
              <p className="mt-2 max-w-sm leading-7 text-muted-foreground">Un espacio abierto a la curiosidad, la inspiración y las expresiones locales.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-24">
        <div className="mb-10 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-studio-red">Desde el estudio</p>
            <h2 className="font-display text-5xl sm:text-6xl">Hecho con intención.</h2>
          </div>
          <a className="inline-flex items-center gap-2 text-sm font-bold hover:text-studio-red" href="https://www.instagram.com/estudio.eterno/" target="_blank" rel="noreferrer">
            <Instagram size={17} aria-hidden="true" /> Síguenos en Instagram <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {gallery.map((item, index) => (
            <a
              key={item.image}
              href="https://www.instagram.com/estudio.eterno/"
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.label}: ${item.alt}. Ver Estudio Eterno en Instagram`}
              className={`group relative block aspect-square overflow-hidden bg-studio-soft ${index === 0 ? "col-span-2 aspect-[2/1] sm:col-span-1 sm:aspect-square" : ""}`}
            >
              <img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-studio-caption px-3 py-2 text-xs font-semibold text-studio-caption-foreground opacity-0 transition-opacity group-hover:opacity-100 sm:px-4 sm:py-3">
                {item.label} <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="visitanos" className="bg-studio-green text-studio-green-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:grid-cols-[1fr_0.8fr] sm:px-10 sm:py-24">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-studio-highlight">Aquí te esperamos</p>
            <h2 className="max-w-xl font-display text-5xl leading-[1.04] sm:text-7xl">Nos vemos en Tulum.</h2>
            <p className="mt-5 max-w-md leading-7 text-studio-hero-muted">Pasa a conocernos o escríbenos para conversar sobre tu próxima visita.</p>
            <Button asChild size="lg" className="mt-7 bg-studio-red text-studio-red-foreground hover:bg-studio-red/90">
              <a href="https://www.instagram.com/estudio.eterno/" target="_blank" rel="noreferrer">
                <Instagram aria-hidden="true" /> Contactar por Instagram <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="grid content-start gap-7 border-t border-studio-outline pt-6 sm:border-l sm:border-t-0 sm:pl-9 sm:pt-0">
            <div>
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-studio-highlight"><MapPin size={15} aria-hidden="true" /> Dirección</h3>
              <a className="mt-3 inline-block text-lg leading-7 hover:text-studio-highlight" href="https://maps.google.com/?q=Av+Tulum+entre+Alfa+Sur+y+Jupiter+Sur,+Tulum,+Quintana+Roo,+Mexico" target="_blank" rel="noreferrer">
                Av. Tulum, entre Alfa Sur y Júpiter Sur<br />Tulum, Quintana Roo, México <ArrowUpRight className="inline" size={15} aria-hidden="true" />
              </a>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-studio-highlight">Horario</h3>
              <p className="mt-3 text-lg">Lunes a sábado</p>
              <p className="mt-1 text-sm text-studio-hero-muted">10:00 am — 09:00 pm</p>
            </div>
            <p className="text-xs leading-5 text-studio-hero-muted">Ubicación de referencia: 6G6P+69, Tulum, Quintana Roo, México</p>
          </div>
        </div>
      </section>

      <footer className="bg-studio-green px-5 pb-7 text-studio-hero-muted sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-studio-outline pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl text-studio-green-foreground">estudio eterno</p>
          <p>Tattoo · Café · Arte — Tulum, México</p>
          <a className="inline-flex items-center gap-1 hover:text-studio-highlight" href="https://www.instagram.com/estudio.eterno/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}
