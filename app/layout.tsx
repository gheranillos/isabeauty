import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const tagline =
  "Traduzco tu propósito en contenido que conecta y vende.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  ),
  title: "Isa Guarache",
  description: tagline,
  openGraph: {
    title: "Isa Guarache",
    description: tagline,
    images: [{ url: "/isa.jpg", width: 800, height: 800, alt: "Isa Guarache" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Isa Guarache",
    description: tagline,
    images: ["/isa.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fraunces.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
