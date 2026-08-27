import type { Metadata } from "next";
import { Great_Vibes, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vibes",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ilse y Jose",
  description:
    "Queremos que seas parte de nuestra boda. Accedé a la invitación completa y confirmá tu asistencia.",
  applicationName: "Ilse y Jose",
  openGraph: {
    title: "Ilse y Jose",
    description:
      "Queremos que seas parte de nuestra boda. Accedé a la invitación completa y confirmá tu asistencia.",
    type: "website",
    locale: "es_ES",
    siteName: "Ilse y Jose",
  },
  twitter: {
    card: "summary",
    title: "Ilse y Jose",
    description:
      "Queremos que seas parte de nuestra boda. Accedé a la invitación completa y confirmá tu asistencia.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${vibes.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
