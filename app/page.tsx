import {
  Approach,
  Architecture,
  Contact,
  Hero,
  Industries,
  Principles,
  ProofBar,
  ProofSprint,
  Services,
  WhyUs,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Principles />
      <Services />
      <Industries />
      <ProofSprint />
      <Architecture />
      <WhyUs />
      <Approach />
      <Contact />
    </>
  );
}
