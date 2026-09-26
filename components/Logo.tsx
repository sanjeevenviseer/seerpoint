import { brand } from "@/lib/brand";

type LogoProps = {
  showSubtitle?: boolean;
};

export function Logo({ showSubtitle = true }: LogoProps) {
  return (
    <>
      <img className="brand-mark" src="/enviseer-logo.jpeg" alt="" width={40} height={40} />
      <span className="brand-text">
        {brand.name}
        {showSubtitle ? <small>{brand.subtitle}</small> : null}
      </span>
    </>
  );
}
