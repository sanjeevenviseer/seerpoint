import { brand } from "@/lib/brand";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo markClassName="h-8 w-8" />
            <p className="mt-4 text-sm leading-relaxed text-subtle">{brand.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <a href="#capabilities" className="font-medium text-body hover:text-brand">
              Capabilities
            </a>
            <a href="#industries" className="font-medium text-body hover:text-brand">
              Industries
            </a>
            <a href="#contact" className="font-medium text-body hover:text-brand">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-line pt-6 text-sm text-subtle">
          © {year} {brand.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
