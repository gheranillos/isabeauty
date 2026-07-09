"use client";

import { motion } from "framer-motion";

const dimensions = [
  {
    name: "Alma",
    text: "Rescatamos el propósito y el valor real de tu historia.",
  },
  {
    name: "Mente",
    text: "Estructura estratégica y planificación que te da orden.",
  },
  {
    name: "Cuerpo",
    text: "Estética y coherencia visual de todo lo que el mundo ve.",
  },
  {
    name: "Espíritu",
    text: "Crecimiento orgánico, alianzas e impacto real.",
  },
] as const;

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Dimensions() {
  return (
    <motion.ul
      className="grid gap-4 sm:grid-cols-2"
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      {dimensions.map((item) => (
        <motion.li
          key={item.name}
          variants={itemVariants}
          className="border-l-2 border-blush/70 pl-3 text-left"
        >
          <p className="font-serif text-lg text-ink">{item.name}</p>
          <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
            {item.text}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
