"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Isa Beauty",
    description: "Moda, marketing y contenido con propósito",
    href: "https://www.instagram.com/isagbeauty/",
  },
  {
    title: "Metamonarca 🦋",
    description: "Moda con intención. Piezas únicas.",
    href: "https://www.instagram.com/metamonarca/",
  },
  {
    title: "D'Colors Gift",
    description: "Arte, estrategia e identidad visual",
    href: "https://www.instagram.com/dcolorsgift/",
  },
] as const;

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ProjectLinks() {
  return (
    <nav aria-label="Proyectos" className="w-full">
      <motion.ul
        className="divide-y divide-rule/80 border-y border-rule/80"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.li key={project.href} variants={itemVariants}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-14 items-center justify-between gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              <span className="flex min-w-0 flex-col gap-0.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5">
                <span className="font-serif text-xl tracking-tight text-ink sm:text-2xl">
                  {project.title}
                </span>
                <span className="font-sans text-sm text-muted">
                  {project.description}
                </span>
              </span>
              <span
                aria-hidden
                className="shrink-0 font-sans text-lg text-blush transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-blush transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
