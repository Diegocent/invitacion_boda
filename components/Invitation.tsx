"use client";

import {
  Camera,
  ExternalLink,
  Gift,
  MapPin,
  Music2,
  PartyPopper,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  ALBUM,
  COUPLE,
  GIFT,
  ITINERARY,
  PHOTOS,
  RSVP,
  VENUE,
  WEDDING_DATE,
} from "@/lib/constants";
import {
  FloatingLeaf,
  GoldenRing,
  OliveSprig,
  VineDivider,
  WavyEdge,
} from "./Decorations";
import { Reveal } from "./Reveal";

function OutLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative z-20 ${className ?? ""}`}
      onClick={(event) => {
        event.stopPropagation();
        const popup = window.open(href, "_blank", "noopener,noreferrer");
        if (popup) event.preventDefault();
      }}
    >
      {children}
    </a>
  );
}

export function Invitation() {
  return (
    <div className="relative bg-cream">
      <Hero />
      <MarriedPhoto />
      <QuoteCream />
      <VineDivider invert />
      <QuoteSage />
      <VineDivider />
      <Venue item={VENUE} tone="cream" />
      <VineDivider invert />
      <DressCode />
      {/* Sin autobús ni alojamiento para esta boda.
      <VineDivider invert />
      <BusSection />
      <VineDivider />
      <Hotels />
      */}
      <VineDivider />
      <Rsvp />
      <VineDivider />
      <Itinerary />
      <Gallery />
      <VineDivider invert />
      <GiftSection />
      <VineDivider />
      <Album />
      <VineDivider invert />
      <Countdown />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-[#FAFAF8] px-6 py-16">
      <img
        src="/hoja.png"
        alt=""
        className="pointer-events-none absolute -left-6 top-2 h-36 w-24 origin-[30%_80%] animate-wind object-contain mix-blend-multiply"
      />
      <div className="pointer-events-none absolute -right-8 bottom-2 h-64 w-40 -scale-x-100">
        <img
          src="/hoja.png"
          alt=""
          className="h-full w-full origin-[40%_90%] animate-wind object-contain mix-blend-multiply opacity-95"
          style={{ animationDelay: "0.7s" }}
        />
      </div>
      <GoldenRing className="absolute h-[280px] w-[280px] animate-pulse-ring" />
      <Reveal className="relative z-10 flex flex-col items-center text-center">
        <h1 className="font-serif text-7xl font-medium leading-[0.92] text-[#879696]">
          {COUPLE.first}
        </h1>
        <p className="my-1 font-script text-6xl text-[#B8976C]">&</p>
        <h1 className="font-serif text-7xl font-medium leading-[0.92] text-[#879696]">
          {COUPLE.second}
        </h1>
        <p className="mt-8 font-script text-[2.4rem] leading-none text-[#B8976C]">
          ¡Nos casamos!
        </p>
        <p className="mt-4 font-sans text-xs tracking-[0.42em] text-[#212121]">
          — &nbsp; {COUPLE.dateLabel} &nbsp; —
        </p>
      </Reveal>
    </section>
  );
}

function MarriedPhoto() {
  return (
    <section className="relative bg-cream pb-2">
      <Reveal>
        <div className="relative">
          <img
            src={PHOTOS.couple}
            alt="Ilse y Jose"
            className="h-[430px] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_40px_55px_rgba(0,0,0,0.2),inset_0_-40px_55px_rgba(0,0,0,0.25)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0">
            <WavyEdge fill="#FAFAF8" className="h-9" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0">
            <WavyEdge fill="#FAFAF8" flip className="h-9" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function QuoteCream() {
  return (
    <section className="relative overflow-hidden bg-cream px-10 py-16 text-center">
      <FloatingLeaf className="absolute left-2 top-4 h-24 w-16 opacity-85" />
      <Reveal>
        <p className="font-script text-[2.15rem] leading-snug text-[#B8976C]">
          Todos los días pueden ser el comienzo de algo nuevo
        </p>
      </Reveal>
    </section>
  );
}

function QuoteSage() {
  return (
    <section className="relative overflow-hidden bg-sage px-10 py-16 text-center">
      <Reveal>
        <p className="font-script text-[2.15rem] leading-snug text-white">
          Queremos que sean testigos de nuestro amor acompañándonos en este día
          tan especial
        </p>
      </Reveal>
    </section>
  );
}

function Venue({
  item,
  tone,
}: {
  item: typeof VENUE;
  tone: "cream" | "sage";
}) {
  const sage = tone === "sage";

  return (
    <section className={`relative overflow-hidden px-8 py-16 ${sage ? "bg-sage" : "bg-cream"}`}>
      <OliveSprig
        className={`absolute -right-10 top-2 h-44 w-32 ${sage ? "opacity-30" : "opacity-80"}`}
        flip
        delay={0.25}
      />
      <Reveal className="text-center">
        <h2 className={`font-serif text-5xl ${sage ? "text-white" : "text-[#879696]"}`}>
          {item.title}
        </h2>
        <p
          className={`mt-4 font-sans text-[11px] font-semibold uppercase tracking-[0.3em] ${
            sage ? "text-[#FAFAF8]" : "text-[#212121]"
          }`}
        >
          {item.place}
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-8">
        <img
          src={item.image}
          alt={item.place}
          className="h-52 w-full rounded-3xl object-cover shadow-lg"
        />
      </Reveal>
      <Reveal delay={0.16} className="mt-8 text-center">
        <p className={`font-sans text-sm tracking-widest ${sage ? "text-[#FAFAF8]" : "text-[#212121]"}`}>
          {item.address}
        </p>
        {item.city ? (
          <p className={`mt-1 font-sans text-sm tracking-widest ${sage ? "text-[#FAFAF8]" : "text-[#212121]"}`}>
            {item.city}
          </p>
        ) : null}
        {item.time ? (
          <p className={`mt-5 font-sans text-lg font-bold tracking-widest ${sage ? "text-white" : "text-[#212121]"}`}>
            {item.time}
          </p>
        ) : null}
        <OutLink
          href={item.maps}
          className={`mt-6 inline-flex flex-col items-center gap-2 ${sage ? "text-[#FAFAF8]" : "text-[#B8976C]"}`}
        >
          <MapPin className="h-8 w-8 animate-bounce" strokeWidth={1.5} />
          <span className="font-sans text-[11px] tracking-widest">
            (Toca para ver en Maps)
          </span>
        </OutLink>
      </Reveal>
    </section>
  );
}

function DressCode() {
  return (
    <section className="relative overflow-hidden bg-cream px-8 py-16 text-center">
      <OliveSprig className="absolute -left-10 top-4 h-44 w-32 opacity-75" />
      <OliveSprig className="absolute -right-10 bottom-4 h-40 w-28 opacity-75" flip delay={0.4} />
      <Reveal>
        <h2 className="font-serif text-5xl text-[#879696]">Tenida</h2>
        <p className="mx-auto mt-6 max-w-xs font-script text-3xl leading-snug text-[#B8976C]">
          Tengan en cuenta que la decoración será verde.
        </p>
        <p className="mx-auto mt-4 max-w-xs font-sans text-sm leading-relaxed tracking-wide text-[#212121]">
          El blanco está reservado para la novia. ¡Nos encantará verte en otros
          colores!
        </p>
        <div className="mt-10 flex items-end justify-center gap-10 text-[#879696]">
          <Tuxedo />
          <Gown />
        </div>
      </Reveal>
    </section>
  );
}

function Tuxedo() {
  return (
    <svg viewBox="0 0 80 130" className="h-28 w-16" fill="none">
      <circle cx="40" cy="16" r="12" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 42 L40 36 L62 42 L58 118 H22 Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M40 36 L40 118" stroke="currentColor" strokeWidth="1.2" />
      <path d="M40 48 L32 62 L40 58 L48 62 Z" fill="#B8976C" />
    </svg>
  );
}

function Gown() {
  return (
    <svg viewBox="0 0 80 130" className="h-28 w-16" fill="none">
      <circle cx="40" cy="16" r="12" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M28 40 L40 36 L52 40 L60 118 H20 Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M32 52 H48" stroke="#B8976C" strokeWidth="1.4" />
    </svg>
  );
}

/* Sin autobús ni alojamiento para esta boda.
function BusSection() { ... }
function Hotels() { ... }
*/

function Rsvp() {
  return (
    <section className="relative overflow-hidden bg-sage px-8 py-16 text-center">
      <Reveal>
        <p className="text-3xl">🌿</p>
        <h2 className="mt-4 font-serif text-5xl leading-tight text-white">
          Confirmar
          <br />
          Asistencia
        </h2>
        <p className="mt-5 font-script text-4xl text-[#FAFAF8]">¿Nos acompañan?</p>
        <p className="mx-auto mt-4 max-w-sm font-sans text-sm leading-relaxed tracking-wide text-[#FAFAF8]">
          Para organizarnos bien, completa esta breve encuesta.
        </p>
        <div className="mt-8 flex w-full flex-col items-center">
          <OutLink
            href={RSVP.formUrl}
            className="inline-flex items-center gap-2 rounded-full bg-[#FAFAF8] px-5 py-2.5 font-sans text-[11px] uppercase tracking-[0.22em] text-[#879696]"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Completar formulario
          </OutLink>
        </div>
      </Reveal>
    </section>
  );
}

function LatinCross({
  className,
  strokeWidth = 1.3,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M12 3.5 V20.5 M7.5 8.5 H16.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

function Itinerary() {
  const icons = {
    start: Sparkles,
    celebration: LatinCross,
    vals: Music2,
    food: UtensilsCrossed,
    party: PartyPopper,
  };

  return (
    <section className="relative overflow-hidden bg-cream px-8 py-16 text-center">
      <OliveSprig className="absolute -left-10 top-4 h-44 w-32 opacity-75" />
      <OliveSprig className="absolute -right-10 bottom-4 h-44 w-32 opacity-75" flip delay={0.4} />
      <Reveal>
        <h2 className="font-serif text-5xl text-[#879696]">Itinerario</h2>
        <ol className="mt-12 space-y-8">
          {ITINERARY.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title} className="flex flex-col items-center">
                <Icon className="h-8 w-8 text-[#B8976C]" strokeWidth={1.3} />
                {item.time ? (
                  <p className="mt-2 font-sans text-sm font-bold tracking-[0.28em] text-[#212121]">
                    {item.time}
                  </p>
                ) : null}
                <p className="mt-1 font-serif text-2xl text-[#879696]">{item.title}</p>
              </li>
            );
          })}
        </ol>
      </Reveal>
    </section>
  );
}

function Gallery() {
  return (
    <section className="relative bg-cream pb-4">
      <Reveal>
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10">
            <WavyEdge fill="#FAFAF8" className="h-8" />
          </div>
          <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto no-scrollbar">
            {PHOTOS.gallery.map((src) => (
              <img
                key={src}
                src={src}
                alt="Ilse y Jose"
                className="h-64 w-full min-w-full snap-center object-cover"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
            <WavyEdge fill="#FAFAF8" flip className="h-8" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function GiftSection() {
  return (
    <section className="relative overflow-hidden bg-sage px-8 py-16 text-center">
      <Reveal>
        <h2 className="font-serif text-5xl text-white">Regalo</h2>
        <Gift className="mx-auto mt-6 h-10 w-10 text-[#FAFAF8]" strokeWidth={1.3} />
        <p className="mx-auto mt-5 max-w-sm font-sans text-sm leading-relaxed tracking-wide text-[#FAFAF8]">
          Si quieren hacernos un obsequio, pueden elegir algo de la lista y marcar
          el check para que los demás sepan que ya está cubierto.
        </p>
        <OutLink
          href={GIFT.listUrl}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FAFAF8] px-5 py-2.5 font-sans text-[11px] uppercase tracking-[0.22em] text-[#879696]"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Ver lista de regalos
        </OutLink>
      </Reveal>
    </section>
  );
}

function Album() {
  return (
    <section className="relative overflow-hidden bg-cream px-8 py-16 text-center">
      <Reveal className="flex flex-col items-center">
        <h2 className="font-serif text-5xl text-[#879696]">Álbum de fotos</h2>
        <Camera className="mx-auto mt-6 h-10 w-10 text-[#B8976C]" strokeWidth={1.3} />
        <p className="mx-auto mt-5 max-w-sm font-script text-3xl leading-snug text-[#B8976C]">
          ¡Ayúdanos a inmortalizar cada momento!
        </p>
        <p className="mx-auto mt-4 max-w-sm font-sans text-sm leading-relaxed tracking-wide text-[#212121]">
          Escanea este QR o tócalo y comparte las fotos que tomes durante la
          boda. ¡Nos va a hacer muchísima ilusión verlas!
        </p>
        <div className="mt-8 flex w-full flex-col items-center">
          <OutLink href={ALBUM.url} className="block">
            <img
              src={ALBUM.qr}
              alt="QR del álbum de fotos"
              className="block h-44 w-44 rounded-xl bg-white object-contain p-2 shadow-md"
            />
          </OutLink>
          <OutLink
            href={ALBUM.url}
            className="mt-4 flex items-center gap-2 font-sans text-[11px] tracking-widest text-[#879696]"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Abrir carpeta de fotos
          </OutLink>
        </div>
      </Reveal>
    </section>
  );
}

function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = useMemo(() => {
    const diff = now === null ? 0 : Math.max(0, WEDDING_DATE.getTime() - now);
    const days = now === null ? 0 : Math.floor(diff / 86400000);
    const hours = now === null ? 0 : Math.floor((diff % 86400000) / 3600000);
    const mins = now === null ? 0 : Math.floor((diff % 3600000) / 60000);
    const secs = now === null ? 0 : Math.floor((diff % 60000) / 1000);
    return [
      { n: days, l: "Días" },
      { n: hours, l: "Horas" },
      { n: mins, l: "Mins" },
      { n: secs, l: "Segs" },
    ];
  }, [now]);

  return (
    <section className="relative overflow-hidden bg-sage px-6 py-20 text-center">
      <OliveSprig className="absolute -left-8 top-6 h-40 w-28 opacity-30" />
      <OliveSprig className="absolute -right-8 bottom-4 h-40 w-28 opacity-30" flip delay={0.5} />
      <Reveal>
        <h2 className="font-serif text-5xl text-white">Nos vemos en</h2>
        <div className="mt-10 grid grid-cols-4 gap-2">
          {parts.map((part) => (
            <div key={part.l} className="rounded-2xl bg-[#FAFAF8]/15 px-1 py-4">
              <p className="font-serif text-3xl text-white" suppressHydrationWarning>
                {part.n}
              </p>
              <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[#FAFAF8]">
                {part.l}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
