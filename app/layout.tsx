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

export const metadata: Metadata = {
  title: "Ilse y Jose — Nos casamos",
  description: "Invitación de boda de Ilse y Jose. 24 de octubre de 2026.",
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
