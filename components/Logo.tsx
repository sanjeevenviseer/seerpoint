import { brand } from "@/lib/brand";

type LogoProps = {
  showWordmark?: boolean;
  className?: string;
  markClassName?: string;
};

/** Enterprise mark — abstract convergence node in brand navy */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="1" y="1" width="38" height="38" rx="8" fill="#1e3a8a" />
      <path
        d="M20 12v6M20 18l-8 10M20 18l8 10"
        stroke="#93c5fd"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="20" cy="12" r="2.5" fill="#ffffff" />
      <circle cx="12" cy="28" r="2.5" fill="#bfdbfe" />
      <circle cx="28" cy="28" r="2.5" fill="#bfdbfe" />
      <circle cx="20" cy="18" r="2" fill="#ffffff" />
    </svg>
  );
}

export function Logo({
  showWordmark = true,
  className = "",
  markClassName = "h-9 w-9",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={markClassName} />
      {showWordmark && (
        <span
          className="font-display text-lg font-semibold tracking-tight text-ink"
          aria-label={brand.fullName}
        >
          {brand.wordmarkParts.map((part, index) =>
            index === brand.wordmarkAccentIndex ? (
              <span key={part + index} className="text-brand">
                {part}
              </span>
            ) : (
              <span key={part + index}>{part}</span>
            ),
          )}
        </span>
      )}
    </span>
  );
}
