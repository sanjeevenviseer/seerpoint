import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { brand } from "@/lib/brand";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${brand.fullName} | AI-First Enterprise Transformation`,
  description:
    "Boutique AI and software engineering firm specializing in Agentic AI, Generative AI, Machine Learning, and enterprise ADLC—building AI-first enterprises, not prototypes.",
  openGraph: {
    title: `${brand.fullName} | AI-First Enterprise Transformation`,
    description:
      "Expert software development in Artificial Intelligence, Agentic AI, Generative AI, and Machine Learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
