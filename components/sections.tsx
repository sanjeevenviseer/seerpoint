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
    <div className={`mb-12 md:mb-16 ${alignClass}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-body md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

const capabilities = [
  {
    tag: "Artificial Intelligence",
    title: "Enterprise AI Systems",
    description:
      "End-to-end AI strategy, model selection, and production pipelines—designed for reliability, observability, and governance at scale.",
  },
  {
    tag: "Agentic AI",
    title: "Autonomous Workflows",
    description:
      "Custom multi-agent orchestration that integrates with your stack to automate complex, multi-step operations—not chatbot demos.",
  },
  {
    tag: "Generative AI",
    title: "GenAI in Production",
    description:
      "RAG, fine-tuning, and guardrailed generation embedded in products—with evaluation harnesses and human-in-the-loop where it matters.",
  },
  {
    tag: "Machine Learning",
    title: "Predictive Intelligence",
    description:
      "Feature engineering, MLOps, and real-time inference on modernized data foundations—because models are only as good as the data feeding them.",
  },
  {
    tag: "ADLC",
    title: "AI Development Life Cycle",
    description:
      "Discovery through deployment: requirements, data readiness, experimentation, validation, security review, and continuous improvement baked into delivery.",
  },
  {
    tag: "Software Engineering",
    title: "AI-Native Platforms",
    description:
      "Cloud-native architecture, APIs, and legacy modernization—the engineering backbone that makes AI durable inside the enterprise.",
  },
];

export function Hero() {
  return (
    <section className="border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Enterprise AI &amp; software engineering</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            We don&apos;t build AI prototypes. We build AI-first enterprises.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-body">
            {brand.fullName} is a specialized boutique AI and software firm. We help enterprises
            modernize legacy architectures, instill an AI-first culture, and solve the complex
            data problems that off-the-shelf software cannot touch.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-primary">
              Book an AI Readiness Diagnostic
            </a>
            <a href="#capabilities" className="btn-secondary">
              View capabilities
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-10 sm:grid-cols-3 lg:grid-cols-5">
          {["Agentic AI", "Generative AI", "Machine Learning", "ADLC", "MLOps"].map((item) => (
            <div key={item}>
              <p className="text-sm font-semibold text-ink">{item}</p>
              <p className="mt-1 text-xs text-subtle">Production-grade delivery</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro
          eyebrow="Capabilities"
          title="Technical depth across the modern AI stack"
          description="Full-stack software development with specialization in the systems enterprises rely on for durable AI outcomes."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <article key={cap.tag} className="card-enterprise">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">{cap.tag}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{cap.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{cap.description}</p>
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
      title: "The AI Culture Shift",
      body: "Adopting AI is not a software upgrade; it is a cultural revolution. We help leadership teams move from isolated experiments to an enterprise-wide, AI-native mindset, ensuring your people and your technology scale together.",
    },
    {
      title: "Solving the Hard Problems",
      body: "We thrive in the deep end. From untangling massive, fractured data silos to architecting secure, agentic workflows, we specialize in the complex architectural engineering that powers true artificial intelligence.",
    },
    {
      title: "Modernization at Speed",
      body: "We transform rigid, legacy architectures into agile, data-fluid environments ready for predictive modeling, generative AI, and autonomous agents.",
    },
  ];

  return (
    <section id="philosophy" className="border-y border-line bg-panel py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro
          eyebrow="Approach"
          title="The transformation agenda"
          description="What it means to truly be AI-first."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <article key={item.title} className="border-l-2 border-brand/30 pl-6">
              <span className="font-display text-sm font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{item.body}</p>
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
      challenge:
        "Fractured customer data, inventory silos, and rigid legacy commerce platforms.",
      solution:
        "Deploying predictive supply chain agents, unifying customer data pipelines, and leveraging decades of domain expertise to protect margins and accelerate digital conversion.",
    },
    {
      name: "Travel & Hospitality",
      challenge:
        "Deeply siloed Property Management Systems (PMS) and Global Distribution Systems (GDS).",
      solution:
        "Architecting intelligent guest concierges, predictive inventory management, and bypassing legacy friction to unify operations and drive RevPAR.",
    },
    {
      name: "Healthcare",
      challenge:
        "Unstructured EMR data, rigorous compliance requirements, and severe administrative burnout.",
      solution:
        "Building clinically validated AI workflows—guided by globally recognized medical authorities—to automate patient triage and securely unlock medical data.",
    },
  ];

  return (
    <section id="industries" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro
          eyebrow="Industries"
          title="Where we dominate"
          description="Domain obsession over generic solutions."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {industries.map((ind) => (
            <article key={ind.name} className="card-enterprise flex flex-col">
              <h3 className="font-display text-xl font-semibold text-ink">{ind.name}</h3>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-ink">The enterprise challenge</dt>
                  <dd className="mt-2 leading-relaxed text-body">{ind.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Our AI-first solution</dt>
                  <dd className="mt-2 leading-relaxed text-body">{ind.solution}</dd>
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
  return (
    <section id="services" className="border-y border-line bg-panel py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro
          eyebrow="Services"
          title="The blueprint"
          description="How we architect your transformation."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="card-enterprise">
            <h3 className="font-display text-xl font-semibold text-ink">
              AI Blueprinting & Legacy Modernization
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-body">
              Before you can deploy true AI, you must untangle the past. We start by mapping your
              existing data maturity and identifying structural bottlenecks within your current
              architecture. From there, we modernize rigid legacy codebases, break down operational
              silos, and engineer the high-speed, secure data pipelines required to support
              advanced machine learning. The result is a comprehensive technical roadmap and a
              data-fluid environment ready for scale—because AI is only as intelligent as the data
              feeding it.
            </p>
          </article>

          <article className="card-enterprise">
            <h3 className="font-display text-xl font-semibold text-ink">
              Custom Agentic AI Deployment
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-body">
              We bypass generic, off-the-shelf tools to engineer highly specialized, autonomous AI
              agents. These custom frameworks integrate directly into your newly modernized
              environment to automate your most complex, multi-step business operations, turning
              your data into an active, intelligent workforce.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const points = [
    {
      title: "Boutique agility, enterprise execution",
      body: "We offer the personalized focus, speed, and elite engineering of a specialized firm, capable of out-maneuvering the slow, bloated timelines of massive system integrators.",
    },
    {
      title: "Deep domain DNA",
      body: "We do not just understand code; we understand your business model. Our frameworks are built on profound, insider knowledge of retail margins, hospitality operations, and clinical healthcare realities.",
    },
    {
      title: "Outcomes, not hours",
      body: "We do not sell developer headcounts or endless consulting cycles. We deliver fixed-timeline, high-impact architectural solutions designed to produce immediate business value.",
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro eyebrow="Differentiators" title={`Why ${brand.fullName}?`} />

        <div className="grid gap-10 md:grid-cols-3">
          {points.map((p) => (
            <article key={p.title}>
              <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-panel py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionIntro
              align="left"
              eyebrow="Contact"
              title="Ready to move beyond the hype?"
              description="Let's discuss your most complex data bottleneck. Share a few details and our team will follow up to schedule a diagnostic conversation."
            />
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
