import { brand, wordmarkPlainText } from "@/lib/brand";

type LogoProps = {
  labelled?: boolean;
};

export function Logo({ labelled = false }: LogoProps) {
  const [lead, accent] = brand.wordmarkParts;
  const name = wordmarkPlainText();

  return (
    <a href="#top" className="logo" aria-label={labelled ? `${name} AI home` : name}>
      <span className="wordmark">
        {lead}
        <span className="wordmark-accent">
          {accent.slice(0, 1)}
          <span className="wordmark-o">
            {accent.slice(1, 2)}
            <i aria-hidden="true" />
          </span>
          {accent.slice(2)}
        </span>
      </span>
    </a>
  );
}
