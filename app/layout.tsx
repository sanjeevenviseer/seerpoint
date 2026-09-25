import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { brand } from "@/lib/brand";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const title = `${brand.fullName} | Production AI, engineered and run for you`;
const description =
  "RTSPoint is a boutique AI engineering firm offering data engineering, AI readiness assessment, production-grade agentic AI systems, AI managed services and workflow automation with guardrails. Start with a 4-week Proof of Value.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Navbar />
        <main id="top">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
