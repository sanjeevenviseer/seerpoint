import { Logo } from "@/components/Logo";
import { brand } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <Logo />
            <p style={{ marginTop: 12, maxWidth: "34ch" }}>{brand.tagline}</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#s1">Data engineering</a></li>
              <li><a href="#s2">AI readiness assessment</a></li>
              <li><a href="#s3">Agentic AI systems</a></li>
              <li><a href="#s4">AI managed services</a></li>
              <li><a href="#s5">Workflow automation</a></li>
            </ul>
          </div>
          <div>
            <h4>Offerings</h4>
            <ul>
              <li><a href="#pov">Proof of Value</a></li>
              <li><a href="#cloud">Cloud expertise</a></li>
              <li><a href="#engines">Domain AI engines</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="fbot">
          <span>© 2026 {brand.fullName}. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
