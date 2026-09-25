"use client";

import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import {
  IconChart,
  IconChartShort,
  IconDatabase,
  IconEye,
  IconNodes,
  IconRefresh,
  IconShield,
} from "@/components/Icons";
import { brand } from "@/lib/brand";

function barStyle(width: string, background?: string): CSSProperties {
  return { ["--w" as string]: width, background };
}

const logLines: { delay: string; time: string; kind: "k" | "g" | "h"; label: string; text: string }[] = [
  { delay: ".2s", time: "00:00.0", kind: "k", label: "intent", text: "process request · change + refund" },
  { delay: ".6s", time: "00:00.4", kind: "k", label: "retrieve", text: "records, policy docs, account tier" },
  { delay: "1.0s", time: "00:01.1", kind: "k", label: "plan", text: "3 steps · modify → refund → notify" },
  { delay: "1.4s", time: "00:01.6", kind: "k", label: "tool", text: "orders_api.modify() → ok" },
  { delay: "1.8s", time: "00:02.0", kind: "g", label: "guardrail", text: "refund ≤ policy limit → pass" },
  { delay: "2.2s", time: "00:02.1", kind: "h", label: "approval", text: "above auto‑limit → routed to human" },
  { delay: "2.8s", time: "00:34.7", kind: "g", label: "approved", text: "payments_api.refund() → ok" },
  { delay: "3.2s", time: "00:35.0", kind: "k", label: "notify", text: "customer updated · audit logged" },
];

type ServiceIcon = "database" | "chart" | "nodes" | "refresh" | "shield";

const serviceIcons: Record<ServiceIcon, (size: number) => ReactNode> = {
  database: (size) => <IconDatabase size={size} />,
  chart: (size) => <IconChart size={size} />,
  nodes: (size) => <IconNodes size={size} />,
  refresh: (size) => <IconRefresh size={size} />,
  shield: (size) => <IconShield size={size} />,
};

const services: {
  id: string;
  tab: string;
  hint: string;
  title: string;
  subtitle: string;
  body: string;
  outcomes: string[];
  gets: string[];
  prev?: string;
  next?: string;
  icon: ServiceIcon;
  guardrail?: boolean;
}[] = [
  {
    id: "s1",
    tab: "Data engineering",
    hint: "Foundation for AI",
    title: "Data engineering",
    subtitle: "The foundation every AI system stands on.",
    body: "AI is only as good as the data behind it. We bring scattered data from your applications, databases and third‑party sources into clean, governed, AI‑ready platforms, built for both analytics and real‑time AI workloads.",
    outcomes: ["Trusted, unified data", "Faster AI delivery", "Lower data costs"],
    gets: [
      "Modern lakehouse and data warehouse design",
      "Batch and real‑time data pipelines",
      "Vector stores and knowledge bases for AI",
      "Data quality, lineage and access governance",
    ],
    next: "AI readiness assessment",
    icon: "database",
  },
  {
    id: "s2",
    tab: "AI readiness assessment",
    hint: "2–3 week assessment",
    title: "AI readiness assessment",
    subtitle: "Know where you stand before you invest.",
    body: "We assess your data, technology, people, processes and governance against what AI actually needs. Then we identify and rank the use cases that will deliver the highest value with the least risk, so you fund the right initiatives first.",
    outcomes: ["Clear priorities", "Board‑ready business case", "Reduced risk"],
    gets: [
      "AI readiness scorecard across five dimensions",
      "Prioritised use‑case roadmap with ROI estimates",
      "Gap analysis and remediation plan",
      "Recommended architecture and budget",
    ],
    prev: "Data engineering",
    next: "Agentic AI systems",
    icon: "chart",
  },
  {
    id: "s3",
    tab: "Agentic AI systems",
    hint: "Build and orchestrate",
    title: "Production‑grade agentic AI systems",
    subtitle: "Agents that do real work, reliably and at scale.",
    body: "We design and build AI agents that plan, use your tools and complete multi‑step tasks, coordinated by a robust orchestration layer. Our proven accelerators for memory, tool calling, evaluation and observability take you from concept to production in weeks, not quarters.",
    outcomes: ["Faster time to market", "Reliable at scale", "Controlled costs"],
    gets: [
      "Single and multi‑agent architecture and orchestration",
      "Reusable accelerators and blueprints",
      "Automated evaluation before every release",
      "Tracing, latency and cost monitoring",
      "Security, access control and compliance built in",
    ],
    prev: "AI readiness assessment",
    next: "AI managed services",
    icon: "nodes",
  },
  {
    id: "s4",
    tab: "AI managed services",
    hint: "Operate and improve",
    title: "AI managed services",
    subtitle: "We build it with you, then run it for you.",
    body: "AI systems need constant care: models drift, vendors release new versions, costs creep and usage grows. As your long‑term partner, we operate, monitor and continuously improve your AI products, so your team can focus on the business.",
    outcomes: ["Always‑on reliability", "Continuous improvement", "Predictable spend"],
    gets: [
      "24×7 monitoring with agreed service levels",
      "Model, prompt and version upgrades",
      "Drift, accuracy and cost optimisation",
      "Monthly value and performance reports",
    ],
    prev: "Agentic AI systems",
    next: "Workflow automation",
    icon: "refresh",
  },
  {
    id: "s5",
    tab: "Workflow automation",
    hint: "With guardrails",
    title: "Workflow automation with deterministic guardrails",
    subtitle: "Organisation‑wide automation your risk and finance teams can sign off.",
    body: "We automate end‑to‑end workflows across finance, operations, customer service and HR. AI handles the judgement; hard‑coded business rules enforce limits it can never override. High‑impact steps route to a person, and every decision is logged.",
    outcomes: ["Predictable outcomes", "Full auditability", "Hours saved every week"],
    gets: [
      "Process discovery and automation design",
      "Policy rules enforced outside the AI",
      "Human‑in‑the‑loop approval paths",
      "Complete audit trail and explainability",
      "Integration with ERP, CRM and ticketing tools",
    ],
    prev: "AI managed services",
    icon: "shield",
    guardrail: true,
  },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <a href="#pov" className="pill">
          <b>Proof of Value</b> See a working prototype in 4 weeks
        </a>
        <h1>Production AI, engineered and run for you.</h1>
        <p className="lede">
          RTSPoint is a boutique AI engineering partner. From data foundations to agentic systems running in
          production, we build AI that delivers measurable business value, and we stay to run it.
        </p>
        <div className="hero-ctas">
          <a href="#pov" className="btn btn-primary">
            Start a Proof of Value
          </a>
          <a href="#services" className="btn btn-ghost">
            Explore our services
          </a>
        </div>

        <nav className="strip" aria-label="Our services">
          <a href="#s1"><b>Data engineering</b></a>
          <a href="#s2"><b>AI readiness assessment</b></a>
          <a href="#s3"><b>Production‑grade agentic AI systems</b></a>
          <a href="#s4"><b>AI managed services</b></a>
          <a href="#s5"><b>Workflow automation with guardrails</b></a>
        </nav>

        <div className="trace" aria-label="Illustration of a production AI agent completing a task with guardrail checks">
          <div className="trace-bar">
            <div className="dots">
              <i />
              <i />
              <i />
            </div>
            <span>agent-run #4812</span>
            <span className="live">Running in production</span>
          </div>
          <div className="trace-body">
            <div className="log">
              {logLines.map((line) => (
                <div key={line.time} style={{ animationDelay: line.delay }}>
                  <span className="t">{line.time}</span>
                  <span>
                    <span className={line.kind}>{line.label}</span> {line.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="side">
              <div className="metric">
                <small>Completed without hand‑off</small>
                <b>82%</b>
                <div className="bar"><i style={barStyle("82%")} /></div>
              </div>
              <div className="metric">
                <small>Actions within policy</small>
                <b>100%</b>
                <div className="bar"><i style={barStyle("100%", "var(--ok)")} /></div>
              </div>
              <div className="metric">
                <small>Cost per task</small>
                <b>$0.04</b>
                <div className="bar"><i style={barStyle("18%")} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const [active, setActive] = useState(0);
  const focusTab = useRef<number | null>(null);

  function show(index: number, focus = false) {
    setActive(index);
    if (focus) focusTab.current = index;
  }

  useEffect(() => {
    if (focusTab.current == null) return;
    document.getElementById(`t${focusTab.current + 1}`)?.focus();
    focusTab.current = null;
  }, [active]);

  useEffect(() => {
    const openFromHash = (hash: string) => {
      const match = hash.match(/^#s([1-5])$/);
      if (!match) return;
      setActive(Number(match[1]) - 1);
    };

    openFromHash(window.location.hash);

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      const href = anchor?.getAttribute("href") ?? "";
      const match = href.match(/^#s([1-5])$/);
      if (!match) return;
      event.preventDefault();
      setActive(Number(match[1]) - 1);
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <section id="services" style={{ paddingTop: 72 }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker">Our services</span>
            <h2>One path from data to production AI.</h2>
          </div>
          <p className="lede">
            Engage us for a single service to close a gap, or combine them with one accountable team, from your first
            assessment to a system running and improving at scale.
          </p>
        </div>

        <div className="svc-wrap">
          <div className="svc-tabs" role="tablist" aria-label="Our services" aria-orientation="vertical">
            {services.map((service, index) => (
              <button
                key={service.id}
                className="svc-tab"
                role="tab"
                id={`t${index + 1}`}
                aria-controls={service.id}
                aria-selected={active === index}
                tabIndex={active === index ? 0 : -1}
                type="button"
                onClick={() => show(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                    event.preventDefault();
                    show((index + 1) % services.length, true);
                  }
                  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                    event.preventDefault();
                    show((index + services.length - 1) % services.length, true);
                  }
                }}
              >
                <span className="ti" aria-hidden>
                  {serviceIcons[service.icon](20)}
                </span>
                <span>
                  <b>{service.tab}</b>
                  <small>{service.hint}</small>
                </span>
              </button>
            ))}
          </div>

          <div>
            {services.map((service, index) => (
              <article
                key={service.id}
                className="svc-panel"
                role="tabpanel"
                id={service.id}
                aria-labelledby={`t${index + 1}`}
                hidden={active !== index}
              >
                <div className="sp-head">
                  <span className="big-ico" aria-hidden>
                    {serviceIcons[service.icon](26)}
                  </span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.subtitle}</p>
                  </div>
                </div>
                <div className="sp-body">
                  <div>
                    <p>{service.body}</p>
                    {service.guardrail ? (
                      <>
                        <span className="sp-label">How every action is controlled</span>
                        <div className="gflow" aria-label="Guardrail flow">
                          <span className="ai">AI proposes</span>
                          <em>→</em>
                          <span className="ru">Rules check</span>
                          <em>→</em>
                          <span className="hu">Human approves</span>
                          <em>→</em>
                          <span className="ru">Execute and log</span>
                        </div>
                      </>
                    ) : null}
                    <span className="sp-label">Business outcomes</span>
                    <div className="out">
                      {service.outcomes.map((outcome) => (
                        <span key={outcome}>{outcome}</span>
                      ))}
                    </div>
                  </div>
                  <div className="get">
                    <span className="sp-label">What you get</span>
                    <ul>
                      {service.gets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sp-nav">
                  {service.prev ? (
                    <button type="button" onClick={() => show(index - 1, true)}>
                      ← {service.prev}
                    </button>
                  ) : (
                    <span />
                  )}
                  {service.next ? (
                    <button type="button" onClick={() => show(index + 1, true)}>
                      {service.next} →
                    </button>
                  ) : (
                    <a href="#pov" style={{ fontWeight: 500, color: "var(--accent)", textDecoration: "none", fontSize: ".92rem", padding: "6px 0" }}>
                      See it working: Proof of Value →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProofOfValue() {
  const weeks = [
    { label: "Week 1", title: "Frame and connect", body: "Agree success measures, map the workflow and connect your data securely.", width: "25%" },
    { label: "Week 2", title: "Build the prototype", body: "Stand up agents on our accelerators, with guardrails from day one.", width: "50%" },
    { label: "Week 3", title: "Test with real users", body: "Controlled rollout to a small group, with daily evaluation and tuning.", width: "75%" },
    { label: "Week 4", title: "Measure and decide", body: "Results review, production cost model and a scale‑up plan.", width: "100%" },
  ];

  return (
    <section className="pov" id="pov">
      <div className="wrap">
        <div className="pov-top">
          <div>
            <span className="kicker">Our strategic offering</span>
            <h2>Proof of Value: see it working before you commit.</h2>
            <p className="lede">
              Slide decks don’t build confidence. Working software does. In four weeks, we deliver a working prototype
              on your real data, on a vendor‑agnostic agentic architecture, measured against the goals you set on day
              one.
            </p>
            <div className="hero-ctas" style={{ justifyContent: "flex-start" }}>
              <a href="#contact" className="btn btn-primary">
                Book your Proof of Value
              </a>
            </div>
          </div>
          <div className="pov-why">
            <div>
              <span className="i"><IconEye /></span>
              <span>
                <b>See it, touch it, trust it</b>
                <p>Your stakeholders use a real prototype, not a concept demo.</p>
              </span>
            </div>
            <div>
              <span className="i"><IconChartShort /></span>
              <span>
                <b>Decide on evidence</b>
                <p>A results scorecard and production cost model support a clear go or no‑go.</p>
              </span>
            </div>
            <div>
              <span className="i"><IconShield /></span>
              <span>
                <b>Low risk, fixed price</b>
                <p>Four weeks, fixed scope, no lock‑in. The prototype and learnings are yours.</p>
              </span>
            </div>
          </div>
        </div>

        <div className="weeks">
          {weeks.map((week) => (
            <div className="week" key={week.label}>
              <span className="w">{week.label}</span>
              <h3>{week.title}</h3>
              <p>{week.body}</p>
              <div className="track"><i style={{ width: week.width }} /></div>
            </div>
          ))}
        </div>
        <div className="deliver">
          <div>
            <small>What you walk away with</small>
            <ul>
              <li>A working prototype on your data</li>
              <li>Results scorecard against your goals</li>
              <li>Production cost and ROI estimate</li>
              <li>Architecture and roadmap to scale</li>
            </ul>
          </div>
          <div className="cta">
            <p>Scale it with us, or take it in‑house.</p>
            <a href="#contact" className="btn btn-primary">
              Start in 4 weeks
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Cloud() {
  const clouds = [
    {
      name: "AWS",
      body: "AI and data platforms built on Amazon’s managed AI and analytics stack.",
      tags: ["Amazon Bedrock", "SageMaker", "Glue", "Redshift", "Lambda"],
    },
    {
      name: "Microsoft Azure",
      body: "Enterprise AI integrated with the Microsoft ecosystem your teams already use.",
      tags: ["Azure AI Foundry", "Azure OpenAI", "Microsoft Fabric", "AKS"],
    },
    {
      name: "Google Cloud",
      body: "Data‑first AI solutions on Google’s analytics and model platform.",
      tags: ["Vertex AI", "BigQuery", "Dataflow", "GKE"],
    },
  ];

  return (
    <section id="cloud">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker">Horizontal expertise</span>
            <h2>Deep cloud expertise, across every service.</h2>
          </div>
          <p className="lede">
            Cloud isn’t a separate project for us. It’s the expertise that runs underneath everything we deliver. We
            design, build and operate on AWS, Microsoft Azure and Google Cloud, and keep your architecture free to
            move between them.
          </p>
        </div>

        <div className="horiz" aria-label="Cloud expertise spans all our services">
          <div className="horiz-top">
            <div>Data engineering</div>
            <div>AI readiness assessment</div>
            <div>Agentic AI systems</div>
            <div>AI managed services</div>
            <div>Workflow automation</div>
          </div>
          <div className="horiz-band">
            <b>Cloud expertise</b>
            <span>
              <i>AWS</i>
              <i>Microsoft Azure</i>
              <i>Google Cloud</i>
              <i>Hybrid and on‑premise</i>
            </span>
          </div>
          <div className="horiz-band2">Vendor‑agnostic architecture: switch models or clouds without rebuilding</div>
        </div>

        <div className="clouds">
          {clouds.map((cloud) => (
            <div className="cloud" key={cloud.name}>
              <h3>{cloud.name}</h3>
              <p>{cloud.body}</p>
              <div className="row">
                {cloud.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cloud-benefits">
          <div>
            <b>Right cloud for the job</b>
            <p>Independent advice on the best fit for your workloads, skills and budget.</p>
          </div>
          <div>
            <b>Your data stays yours</b>
            <p>We deploy in your cloud account, under your security and data residency policies.</p>
          </div>
          <div>
            <b>Built to optimise cost</b>
            <p>Architectures sized for real usage, with spend tracked from day one.</p>
          </div>
          <div>
            <b>Partnership benefits</b>
            <p>
              We’re building partnerships with AWS, Azure and Google Cloud, opening access to credits and co‑funding
              programmes that can offset your costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const domains = [
  {
    name: "Retail",
    intro: "For store networks and merchandising teams.",
    engines: [
      ["Demand forecasting engine", "Store and SKU‑level forecasts to reduce stock‑outs and overstock."],
      ["Pricing and markdown engine", "Data‑driven prices that protect margin and improve sell‑through."],
      ["Store associate copilot", "Instant answers on stock, products and policy for floor staff."],
    ],
  },
  {
    name: "eCommerce",
    intro: "For digital commerce and marketplace teams.",
    engines: [
      ["Conversational shopping engine", "AI search and assistance that understands what shoppers mean."],
      ["Catalogue enrichment engine", "Generate and clean product content and attributes at scale."],
      ["Personalisation engine", "Real‑time recommendations that lift conversion and basket size."],
    ],
  },
  {
    name: "Travel and hospitality",
    intro: "For airlines, travel sellers and hotel groups.",
    engines: [
      ["Disruption and rebooking engine", "Agents that rebook travellers within fare and policy rules."],
      ["Digital concierge engine", "24×7 guest service, requests and upsells in any language."],
      ["Revenue and rate engine", "Rate recommendations from demand, events and market data."],
    ],
  },
];

export function Engines() {
  return (
    <section className="engines" id="engines">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker">Domain‑specific AI engines</span>
            <h2>Pre‑built engines that give you a head start.</h2>
          </div>
          <p className="lede">
            Alongside our services, we develop ready‑to‑adapt AI engines for specific industries. Instead of starting
            from a blank page, you begin with a working engine that already understands your domain, then we tune it
            to your data.
          </p>
        </div>

        <div className="eng-grid">
          {domains.map((domain) => (
            <div className="domain" key={domain.name}>
              <div className="d">
                <h3>{domain.name}</h3>
                <span className="live-tag">Available</span>
              </div>
              <p>{domain.intro}</p>
              {domain.engines.map(([title, detail]) => (
                <div className="engine" key={title}>
                  <b>{title}</b>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="next">
          <div>
            <b>More domains on the roadmap</b>
            <p>
              We add new engines as we go deep into new industries. Working in a different sector? Our services apply
              everywhere. Tell us about your domain.
            </p>
          </div>
          <a href="#contact" className="btn btn-ghost">
            Suggest a domain
          </a>
        </div>

        <div className="how-eng">
          <div>
            <b>Start from a working base</b>
            <p>Each engine comes with data models, agents and guardrails pre‑built.</p>
          </div>
          <div>
            <b>Tuned to your business</b>
            <p>We adapt it to your data, rules and systems during a Proof of Value.</p>
          </div>
          <div>
            <b>Delivered through our services</b>
            <p>Engines are built, deployed and run using our core services.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  const stages = [
    { step: "01 · Assess", title: "Find the value", body: "Score readiness and pick the highest‑return use case.", ref: "AI readiness assessment" },
    { step: "02 · Prepare", title: "Ready the data", body: "Connect and clean the data the use case needs.", ref: "Data engineering" },
    { step: "03 · Prove", title: "Show it working", body: "A working prototype on real data in four weeks.", ref: "Proof of Value", prove: true },
    { step: "04 · Build", title: "Scale safely", body: "Harden into production with guardrails and integrations.", ref: "Agentic systems · Workflow automation" },
    { step: "05 · Run", title: "Operate and improve", body: "Monitor, optimise and report value every month.", ref: "AI managed services" },
  ];

  return (
    <section id="approach">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker">How we work and deliver</span>
            <h2>Five stages. A clear decision at each.</h2>
          </div>
          <p className="lede">
            You always know what comes next, what it costs and what it will return. Start at any stage and stop at any
            gate.
          </p>
        </div>
        <div className="life">
          {stages.map((stage) => (
            <div className={stage.prove ? "stage pv" : "stage"} key={stage.step}>
              <span className="s">{stage.step}</span>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
              <span className="ref">{stage.ref}</span>
            </div>
          ))}
        </div>
        <div className="promises">
          <div>
            <b>Fixed scope and price</b>
            <p>Each stage is priced upfront against outcomes, not hours.</p>
          </div>
          <div>
            <b>Working software weekly</b>
            <p>Demos every week, so you steer as we build.</p>
          </div>
          <div>
            <b>Senior engineers only</b>
            <p>The people you meet are the people who build.</p>
          </div>
          <div>
            <b>You own it all</b>
            <p>Code, prompts, pipelines and documentation are yours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  const points = [
    ["4 wks", "From idea to working prototype", "Confidence built on evidence, before a larger commitment."],
    ["1 team", "Accountable end to end", "The same senior people from assessment to operations."],
    ["3 clouds", "Horizontal cloud expertise", "AWS, Azure and Google Cloud, with no lock‑in to any of them."],
    ["100%", "Actions within policy", "Deterministic guardrails on every automated step."],
    ["Weeks", "Not quarters, to launch", "Accelerators and domain engines replace months of groundwork."],
    ["24×7", "Run, not just built", "We keep your AI accurate, affordable and improving."],
  ];

  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2 style={{ marginBottom: 40 }}>Why teams choose RTSPoint.</h2>
        <div className="why-grid">
          {points.map(([stat, title, body]) => (
            <div key={stat}>
              <span className="big">{stat}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  [
    "We’re early in our AI journey. Where should we start?",
    "With an AI readiness assessment. In two to three weeks you’ll know which use cases are worth funding and what needs to be in place first. Many clients follow it directly with a Proof of Value.",
  ],
  [
    "What exactly is a Proof of Value?",
    "A fixed‑price, four‑week engagement where we build a working prototype on your real data and measure it against goals you set. It gives your stakeholders something real to see and use, and gives you the evidence to decide whether to scale.",
  ],
  [
    "What makes your agentic systems production‑grade?",
    "Automated evaluation before every release, deterministic guardrails on actions, full tracing, cost controls, security review and a plan for managed operations. A demo is where we start, not where we stop.",
  ],
  [
    "Which cloud do you recommend?",
    "The one that best fits your existing stack, skills and budget. We work across AWS, Azure and Google Cloud and design for portability, so the choice never locks you in.",
  ],
  [
    "Do you only work with retail, eCommerce and travel companies?",
    "No. Our services apply to any industry. Those are the sectors where we already have pre‑built domain engines, and we add new ones regularly.",
  ],
];

export function Faq() {
  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap faq-wrap">
        <div>
          <h2>Questions, answered.</h2>
          <p className="lede">
            Can’t find what you need? <a href="#contact">Talk to an engineer.</a>
          </p>
        </div>
        <div>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const interests = [
  "Proof of Value (4 weeks)",
  "Data engineering",
  "AI readiness assessment",
  "Production‑grade agentic AI systems",
  "AI managed services",
  "Workflow automation with guardrails",
  "Domain‑specific AI engines",
  "Not sure yet",
];

export function Contact() {
  const [status, setStatus] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "");
    if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ kind: "err", text: "Add your name and a valid work email to book a session." });
      return;
    }
    setStatus({ kind: "ok", text: "Session requested. We’ll reply within one business day." });
    setSent(true);
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="cbox">
          <div>
            <h2>Let’s find your fastest path to production AI.</h2>
            <p className="lede">
              Start with a free 60‑minute working session with our engineers. You leave with a shortlist of high‑value
              use cases, whether or not we work together.
            </p>
            <div className="meta">
              <span><b>Email</b>{brand.email}</span>
              <span><b>Based in</b>{brand.location}</span>
              <span><b>Response</b>{brand.responseTime}</span>
            </div>
          </div>
          <form id="lead" noValidate onSubmit={onSubmit}>
            <div className="row2">
              <label>
                Name
                <input name="name" autoComplete="name" />
              </label>
              <label>
                Work email
                <input name="email" type="email" autoComplete="email" />
              </label>
            </div>
            <label>
              Company
              <input name="company" autoComplete="organization" />
            </label>
            <label>
              I’m interested in
              <select name="interest" defaultValue={interests[0]}>
                {interests.map((interest) => (
                  <option key={interest}>{interest}</option>
                ))}
              </select>
            </label>
            <label>
              What would you like to solve?
              <textarea name="msg" placeholder="For example: automate invoice approvals without breaking finance policy" />
            </label>
            <button className="btn btn-primary" type="submit" disabled={sent}>
              Book a working session
            </button>
            <p className={status ? `status ${status.kind}` : "status"} id="status" role="status">
              {status?.text}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
