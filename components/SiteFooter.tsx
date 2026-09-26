import { brand } from "@/lib/brand";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>
          © {year} {brand.fullName}. {brand.tagline}
        </span>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#proof-sprint">Proof Sprint</a>
          <a href={`mailto:${brand.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
