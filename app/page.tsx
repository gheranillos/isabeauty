"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { ProjectLinks } from "@/components/ProjectLinks";
import { Dimensions } from "@/components/Dimensions";

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

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .55.04.81.1v-3.5a6.37 6.37 0 0 0-.81-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.2 8.2 0 0 0 4.76 1.52V6.8a4.85 4.85 0 0 1-1-.11z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center overflow-hidden px-6 py-10 sm:py-14">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-blush/35 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, 12, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        animate={{ x: [0, -14, 0], y: [0, -18, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex w-full max-w-[520px] flex-1 flex-col">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <motion.div
              className="relative"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                aria-hidden
                className="absolute -inset-2 rounded-full bg-gradient-to-br from-blush/50 to-accent/30 blur-md"
                animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.04, 1] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Image
                src="/isa.jpg"
                alt="Isa Guarache"
                width={160}
                height={160}
                priority
                className="relative h-[120px] w-[120px] rounded-full object-cover ring-2 ring-white/70 sm:h-[148px] sm:w-[148px]"
              />
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 font-serif text-[clamp(2.4rem,9vw,3.4rem)] font-medium leading-[1.05] tracking-tight text-ink">
              Isa Guarache
            </h1>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="mt-2 font-sans text-sm text-muted">
              Directora creativa · Fundadora de Colorsgift
            </p>
          </FadeIn>

          <FadeIn delay={0.26}>
            <p className="mt-3 max-w-[26ch] text-balance font-sans text-base leading-snug text-ink sm:max-w-[32ch] sm:text-lg">
              Traduzco tu propósito en contenido que conecta y vende.
            </p>
          </FadeIn>

          <FadeIn delay={0.34}>
            <p className="mt-2.5 font-sans text-sm text-muted">
              Marca personal · Moda · Marketing con alma 🧚🏻‍♀️
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.42} className="mt-9 sm:mt-10">
          <div className="space-y-3 text-center font-sans text-sm leading-relaxed text-muted sm:text-[0.95rem]">
            <p>
              Me formé para ser traductora. Hoy no traduzco idiomas: traduzco la
              esencia de marcas conscientes en estrategias digitales que
              resuenan y venden.
            </p>
            <p>
              Tres años impulsando proyectos desde la estrategia y el contenido,
              para que las dueñas de negocio recuperen su activo más valioso: el
              tiempo.
            </p>
            <p>
              En Colorsgift no creemos en fórmulas vacías. Tu marca es un ser
              vivo — la guío en cuatro dimensiones:
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} className="mt-6">
          <Dimensions />
        </FadeIn>

        <FadeIn delay={0.58} className="mt-10">
          <p className="text-center font-sans text-sm text-muted">
            Esto es lo que estoy construyendo:
          </p>
        </FadeIn>

        <FadeIn delay={0.64} className="mt-5">
          <ProjectLinks />
        </FadeIn>

        <FadeIn
          delay={0.75}
          className="mt-auto flex flex-col items-center gap-3 pt-10 pb-1 text-center"
        >
          <p className="font-sans text-xs tracking-wide text-muted/80">
            © 2026 Isa Guarache
          </p>
          <div className="flex items-center gap-5">
            <motion.a
              href="https://www.instagram.com/isagbeauty/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Isa Guarache"
              className="text-muted transition-colors duration-200 hover:text-accent"
              whileHover={{ scale: 1.12, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
            >
              <InstagramIcon className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@isagbeauty"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Isa Guarache"
              className="text-muted transition-colors duration-200 hover:text-accent"
              whileHover={{ scale: 1.12, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
            >
              <TikTokIcon className="h-5 w-5" />
            </motion.a>
            <a
              href="https://wa.me/584126259276"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
