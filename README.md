# Isa Guarache

Tarjeta de presentación digital (one-pager) — reemplazo de link-in-bio.

## Local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Reemplazar la foto

Sustituye el archivo:

```
public/isa.jpg
```

por su foto (mismo nombre y ruta). Ideal: cuadrada, buen recorte de rostro. No hace falta cambiar código.

## Deploy en Vercel

**Opción A — GitHub**

1. Crea un repo vacío en GitHub.
2. Desde esta carpeta:

```bash
git add .
git commit -m "Initial commit: Isa Guarache one-pager"
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin master
```

3. En [vercel.com](https://vercel.com) → Import Project → elige el repo → Deploy.

**Opción B — CLI**

```bash
npx vercel --prod
```

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · framer-motion
