import {
  Approach,
  Cloud,
  Contact,
  Engines,
  Faq,
  Hero,
  ProofOfValue,
  Services,
  Why,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProofOfValue />
      <Cloud />
      <Engines />
      <Approach />
      <Why />
      <Faq />
      <Contact />
    </>
  );
}
