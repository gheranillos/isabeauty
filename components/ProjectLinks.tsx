"use client";

const projects = [
  {
    title: "Isa Beauty",
    description:
      "Mi marca personal: moda, marketing y contenido con propósito",
    href: "https://www.instagram.com/isagbeauty/",
  },
  {
    title: "Metamonarca 🦋",
    description: "Moda con intención. Piezas únicas, honrando raíces.",
    href: "https://www.instagram.com/metamonarca/",
  },
  {
    title: "D'Colors Gift",
    description: "Estudio creativo: arte, estrategia e identidad visual",
    href: "https://www.instagram.com/dcolorsgift/",
  },
] as const;

export function ProjectLinks() {
  return (
    <nav aria-label="Proyectos" className="w-full">
      <ul className="divide-y divide-rule border-y border-rule">
        {projects.map((project) => (
          <li key={project.href}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-12 flex-col gap-1 py-5 transition-transform duration-300 ease-out hover:translate-x-1 focus-visible:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              <span className="font-sans text-lg font-medium tracking-tight text-ink sm:text-xl">
                {project.title}
              </span>
              <span className="max-w-[34ch] font-sans text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                {project.description}
              </span>
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-4 left-0 h-px w-12 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
