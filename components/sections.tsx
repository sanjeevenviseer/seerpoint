"use client";

import { brand } from "@/lib/brand";

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "left" ? "text-left" : "mx-auto max-w-2xl text-center";
  return (
    <div className={`mb-12 md:mb-14 ${alignClass}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base text-body md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function Punch({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-display text-sm font-medium text-brand ${className}`}>{children}</p>
  );
}

const deliveryHighlights = [
  { headline: "Blueprint → build → run", detail: "One team from assessment to production." },
  { headline: "Fixed scope, fixed timeline", detail: "Outcomes priced in—not open-ended hours." },
  { headline: "Production is the milestone", detail: "We ship governed systems, not demo scripts." },
  { headline: "Senior engineers on the work", detail: "No bait-and-switch once the SOW is signed." },
];

const capabilities = [
  {
    tag: "Artificial Intelligence",
    title: "Enterprise AI Systems",
    punch: "Strategy that survives audit and scale.",
    detail: "Model selection, pipelines, observability, and governance—built for production.",
  },
  {
    tag: "Agentic AI",
    title: "Autonomous Workflows",
    punch: "Agents that finish the workflow—not just chat.",
    detail: "Multi-step automation wired into your stack and operating model.",
  },
  {
    tag: "Generative AI",
    title: "GenAI in Production",
    punch: "Guardrails included. Hallucinations accounted for.",
    detail: "RAG, fine-tuning, and evaluation harnesses before users ever see it.",
  },
  {
    tag: "Machine Learning",
    title: "Predictive Intelligence",
    punch: "Models are only as good as the pipes feeding them.",
    detail: "MLOps and real-time inference on modernized data foundations.",
  },
  {
    tag: "ADLC",
    title: "AI Development Life Cycle",
    punch: "Discovery to deploy—same playbook every time.",
    detail: "Data readiness, validation, security review, and continuous improvement baked in.",
  },
  {
    tag: "Software Engineering",
    title: "AI-Native Platforms",
    punch: "Legacy out. APIs and cloud-native in.",
    detail: "The architecture layer that keeps AI durable inside the enterprise.",
  },
];

export function Hero() {
  return (
    <section className="border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Enterprise AI &amp; software engineering</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            We don&apos;t build AI prototypes. We build AI-first enterprises.
          </h1>
          <Punch className="mt-5 text-base md:text-lg">
            Boutique focus. Enterprise delivery. Measured by what ships.
          </Punch>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-body">
            {brand.fullName} modernizes legacy platforms, untangles data, and puts agentic and
            generative AI into production—where your operators and customers actually feel it.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-primary">
              Book an AI Readiness Diagnostic
            </a>
            <a href="#capabilities" className="btn-secondary">
              View capabilities
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryHighlights.map((item) => (
            <div key={item.headline}>
              <p className="font-display text-sm font-semibold text-ink">{item.headline}</p>
              <p className="mt-1.5 text-sm text-subtle">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro
          eyebrow="Capabilities"
          title="Depth across the stack"
          description="What we deliver—not what we slide-deck."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <article key={cap.tag} className="card-enterprise">
              <p className="text-xs font-semibold uppercase tracking-wide text-subtle">{cap.tag}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{cap.title}</h3>
              <Punch className="mt-3">{cap.punch}</Punch>
              <p className="mt-2 text-sm leading-relaxed text-body">{cap.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Philosophy() {
  const items = [
    {
      title: "The AI culture shift",
      punch: "Experiments don't scale. Operating models do.",
      body: "We align leadership, teams, and architecture so AI becomes how the enterprise runs—not a side project.",
    },
    {
      title: "The hard problems",
      punch: "Silos, legacy, and compliance—we've done this before.",
      body: "Secure agentic workflows and unified data paths for the problems off-the-shelf tools won&apos;t touch.",
    },
    {
      title: "Modernization at speed",
      punch: "Data-fluid platforms. Weeks to clarity—not years of drift.",
      body: "Legacy replaced with pipelines ready for ML, GenAI, and autonomous agents.",
    },
  ];

  return (
    <section id="philosophy" className="border-y border-line bg-panel py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro
          eyebrow="Approach"
          title="Built to transform—not to tinker"
          description="Three commitments on every engagement."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <article key={item.title} className="border-l-2 border-brand/30 pl-6">
              <span className="font-display text-sm font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 font-display text-sm font-medium text-brand">{item.punch}</p>
              <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  const industries = [
    {
      name: "Retail & E-Commerce",
      punch: "Margin protection, delivered in the cart and the warehouse.",
      challenge: "Fractured customer data, inventory silos, legacy commerce.",
      solution: "Unified pipelines, supply-chain agents, conversion lift you can measure.",
    },
    {
      name: "Travel & Hospitality",
      punch: "RevPAR moves when ops and guest experience connect.",
      challenge: "PMS and GDS silos, legacy friction across properties.",
      solution: "Guest concierges, predictive inventory, operations on one intelligent layer.",
    },
    {
      name: "Healthcare",
      punch: "Clinical rigor meets operational relief.",
      challenge: "Unstructured EMR data, compliance, admin overload.",
      solution: "Validated triage workflows and secure access to the data clinicians need.",
    },
  ];

  return (
    <section id="industries" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro
          eyebrow="Industries"
          title="Domain depth—not generic playbooks"
          description="We show up with insider context and leave with systems in production."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {industries.map((ind) => (
            <article key={ind.name} className="card-enterprise flex flex-col">
              <h3 className="font-display text-xl font-semibold text-ink">{ind.name}</h3>
              <Punch className="mt-3">{ind.punch}</Punch>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-ink">Challenge</dt>
                  <dd className="mt-1 text-body">{ind.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">What we deliver</dt>
                  <dd className="mt-1 text-body">{ind.solution}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const offerings = [
    {
      title: "AI Blueprinting & Legacy Modernization",
      punch: "You can't run AI on architecture held together with hope.",
      bullets: [
        "Data maturity map and bottleneck teardown—first two weeks.",
        "Modernized code, unified pipelines, roadmap you can fund and defend.",
      ],
    },
    {
      title: "Custom Agentic AI Deployment",
      punch: "Your workflows. Your policies. Agents that execute end-to-end.",
      bullets: [
        "Purpose-built agents—not repackaged chatbots.",
        "Integrated, observable automation on the platform we modernized with you.",
      ],
    },
  ];

  return (
    <section id="services" className="border-y border-line bg-panel py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro
          eyebrow="Services"
          title="Two engagements. One outcome: production."
          description="How we take you from stuck to shipped."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {offerings.map((o) => (
            <article key={o.title} className="card-enterprise">
              <h3 className="font-display text-xl font-semibold text-ink">{o.title}</h3>
              <p className="mt-3 font-display text-sm font-medium text-brand">{o.punch}</p>
              <ul className="mt-4 space-y-2 text-sm text-body">
                {o.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const points = [
    {
      title: "Boutique agility, enterprise execution",
      punch: "Big-firm polish without eighteen-month Gantt charts.",
    },
    {
      title: "Deep domain DNA",
      punch: "We speak margin, RevPAR, and clinical workflow—not just Python.",
    },
    {
      title: "Outcomes, not hours",
      punch: "Fixed timeline. Fixed scope. Value you can point to in the P&L.",
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro
          eyebrow="Differentiators"
          title={`Why ${brand.fullName}?`}
          description="Experience you can feel in the first working session."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((p) => (
            <article key={p.title} className="border-t-2 border-brand/20 pt-6">
              <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
              <Punch className="mt-3">{p.punch}</Punch>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-panel py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionIntro
              align="left"
              eyebrow="Contact"
              title="Ready to move beyond the hype?"
              description="Tell us the bottleneck. We'll tell you the fastest path to production."
            />
            <p className="text-sm font-medium text-brand">
              Typical first step: a 90-minute AI readiness diagnostic with your technical and business leads.
            </p>
          </div>

          <form
            className="rounded-lg border border-line bg-white p-8 shadow-card"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="space-y-4">
              <input type="text" placeholder="Full name" required className="input-field" />
              <input type="email" placeholder="Corporate email" required className="input-field" />
              <input type="text" placeholder="Role / job title" required className="input-field" />
              <input
                type="text"
                placeholder="Primary AI objective for this quarter"
                required
                className="input-field"
              />
              <button type="submit" className="btn-primary w-full">
                Initiate discussion
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
