import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { ProjectLinks } from "@/components/ProjectLinks";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center px-6 py-12 sm:py-16">
      <div className="flex w-full max-w-[560px] flex-1 flex-col">
        <FadeIn className="flex flex-col items-center text-center">
          <Image
            src="/isa.jpg"
            alt="Isa Guarache"
            width={140}
            height={140}
            priority
            className="h-[112px] w-[112px] rounded-full object-cover sm:h-[140px] sm:w-[140px]"
          />

          <h1 className="mt-7 font-serif text-[clamp(2.25rem,8vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-ink">
            Isa Guarache
          </h1>

          <p className="mt-4 max-w-[28ch] text-balance font-sans text-base leading-relaxed text-ink sm:max-w-[34ch] sm:text-lg">
            Traduzco tu propósito en contenido que conecta y vende.
          </p>

          <p className="mt-3 font-sans text-sm tracking-wide text-muted">
            Marca personal · Moda · Marketing con alma 🧚🏻‍♀️
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-10 sm:mt-12">
          <p className="text-center font-sans text-[0.95rem] leading-relaxed text-muted sm:text-base">
            Ayudo a marcas y personas a encontrar la esencia de lo que quieren
            decir, y a convertirla en presencia digital con propósito. Esto es
            lo que estoy construyendo:
          </p>
        </FadeIn>

        <FadeIn delay={0.22} className="mt-8 sm:mt-10">
          <ProjectLinks />
        </FadeIn>

        <FadeIn
          delay={0.32}
          className="mt-auto flex flex-col items-center gap-3 pt-12 pb-2 text-center"
        >
          <p className="font-sans text-xs tracking-wide text-muted">
            © 2026 Isa Guarache
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/isagbeauty/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Isa Guarache"
              className="text-muted transition-colors duration-200 hover:text-accent"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/584126259276"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              +58 412-6259276
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
