"use client";

import {
  Hero,
  Capabilities,
  Philosophy,
  Industries,
  Services,
  WhyUs,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Philosophy />
      <Industries />
      <Services />
      <WhyUs />
      <Contact />
    </>
  );
}
