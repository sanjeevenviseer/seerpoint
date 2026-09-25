import { Logo } from "@/components/Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pov", label: "Proof of Value" },
  { href: "#cloud", label: "Cloud expertise" },
  { href: "#engines", label: "AI engines" },
  { href: "#approach", label: "Approach" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="nav">
      <div className="wrap">
        <Logo labelled />
        <nav aria-label="Main">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="btn btn-primary">
          Talk to us
        </a>
      </div>
    </header>
  );
}
