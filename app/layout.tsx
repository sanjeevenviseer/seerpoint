import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { brand } from "@/lib/brand";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const title = `${brand.fullName} — From fragmented data to AI that works`;
const description =
  "Enviseer is a senior AI and data engineering partner. We turn high-value opportunities into governed, production-ready systems.";

export const viewport: Viewport = {
  themeColor: "#fbfbfe",
};

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
    <html lang="en" className={geist.variable}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
