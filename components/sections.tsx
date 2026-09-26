"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowIcon } from "@/components/ArrowIcon";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/brand";

const flowSteps = [
  { index: "01", title: "Business outcome", detail: "Value hypothesis + decision metric", status: "Defined" },
  { index: "02", title: "Trusted data", detail: "Context, quality + access controls", status: "Connected" },
  { index: "03", title: "AI reasoning", detail: "Models, agents + business logic", status: "Evaluated" },
  { index: "04", title: "Policy gate", detail: "Rules, approvals + traceability", status: "Governed" },
  { index: "05", title: "Production action", detail: "Workflow execution + learning loop", status: "Observed" },
];

const services = [
  {
    num: "01 / 04",
    title: "AI opportunity & roadmap sprint",
    body: "Prioritise the use cases that matter, quantify their value, assess readiness and leave with an executable plan.",
    tags: ["2–3 weeks", "Use-case portfolio", "ROI hypothesis", "Architecture & roadmap"],
  },
  {
    num: "02 / 04",
    title: "Agentic AI & GenAI products",
    body: "Design and build domain-aware copilots, agents and intelligent workflows—tested with real users and governed for production.",
    tags: ["4–8 week MVP", "RAG & knowledge systems", "Agent orchestration", "Evaluation"],
  },
  {
    num: "03 / 04",
    title: "Data & AI platform engineering",
    body: "Create the trusted, governed data products and AI platform capabilities that turn experiments into repeatable delivery.",
    tags: ["Lakehouse / warehouse", "Pipelines & APIs", "Vector systems", "Governance"],
  },
  {
    num: "04 / 04",
    title: "AI-assisted product engineering",
    body: "Modernise products and engineering workflows with AI—without compromising architecture, maintainability or control.",
    tags: ["Legacy modernisation", "AI-enabled SDLC", "Product acceleration", "Quality engineering"],
  },
];

export function Hero() {
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActiveRow((n) => (n + 1) % flowSteps.length);
    }, 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid shell">
        <Reveal className="hero-copy">
          <p className="eyebrow">AI + Data. Strategy to production.</p>
          <h1 id="hero-title">
            From fragmented data to AI that <span>works.</span>
          </h1>
          <p className="lede">
            We are a senior AI and data engineering partner. We find the right opportunity, ready the
            data, build the system, and stay accountable through production.
          </p>
          <div className="actions">
            <a className="button primary" href="#contact">
              Book a working session <ArrowIcon />
            </a>
            <a className="button secondary" href="#proof-sprint">
              See the 4-week Proof Sprint
            </a>
          </div>
          <p className="hero-note">
            Founder-led discovery. Senior delivery. Your data, your IP, your choice of cloud.
          </p>
        </Reveal>

        <Reveal>
          <div className="system-card" aria-label="Illustration of an AI system moving from business goal to governed production action">
            <div className="system-head">
              <span>AI value loop</span>
              <span className="live">System ready</span>
            </div>
            <div className="flow">
              {flowSteps.map((step, i) => (
                <div key={step.index} className={`flow-row${i === activeRow ? " active" : ""}`}>
                  <span className="flow-index">{step.index}</span>
                  <div className="flow-copy">
                    <strong>{step.title}</strong>
                    <span>{step.detail}</span>
                  </div>
                  <span className="status">{step.status}</span>
                </div>
              ))}
            </div>
            <div className="system-foot">
              <div className="signal">
                <b>Evidence</b>
                <span>before scale</span>
              </div>
              <div className="signal">
                <b>Human control</b>
                <span>where it matters</span>
              </div>
              <div className="signal">
                <b>Cloud neutral</b>
                <span>by design</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProofBar() {
  return (
    <div className="proof-bar" aria-label="Priority markets and delivery model">
      <div className="proof-inner shell">
        <div className="proof-label">Built for consequential work</div>
        <div className="proof-item">Travel &amp; hospitality</div>
        <div className="proof-item">Retail &amp; eCommerce</div>
        <div className="proof-item">Enterprise data &amp; AI</div>
      </div>
    </div>
  );
}

export function Principles() {
  return (
    <section className="principles">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <p className="kicker">The operating idea</p>
            <div>
              <h2>Small seasoned teams. Fast evidence. Durable systems.</h2>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="principle-grid">
            <article className="principle">
              <b>Start with the decision</b>
              <p>We anchor every engagement in a business outcome—not a fashionable model or tool.</p>
            </article>
            <article className="principle">
              <b>Prove before scaling</b>
              <p>Working software and real-user evidence reduce risk before a larger investment.</p>
            </article>
            <article className="principle">
              <b>Engineer for reality</b>
              <p>Security, governance, evaluation, cost and adoption are part of the system from day one.</p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="services" id="services">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <p className="kicker">What we do</p>
            <div>
              <h2>One partner from opportunity to operation.</h2>
              <p className="section-intro">
                Engage us for a focused sprint, a production build, or the data foundation beneath it.
                Each offer is designed to create a clear next decision.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="service-list">
          {services.map((s) => (
            <Reveal key={s.num}>
              <article className="service">
                <div className="service-number">{s.num}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                <div className="service-detail">
                  {s.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <p className="kicker">Where we begin</p>
            <div>
              <h2>Domain context makes AI useful faster.</h2>
              <p className="section-intro">
                We begin where our operating experience is strongest, then apply the same patterns to
                adjacent industries and enterprise functions.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="split-panel">
          <Reveal>
            <article className="industry">
              <p className="kicker">01 · Hospitality</p>
              <h3>Turn service complexity into a better guest journey.</h3>
              <p>
                Connect operational, customer and commercial context to help teams make faster, more
                consistent decisions.
              </p>
              <ul className="industry-list">
                <li>Guest and service operations copilots</li>
                <li>Revenue, rate and demand intelligence</li>
                <li>Enterprise knowledge and policy assistance</li>
              </ul>
            </article>
          </Reveal>
          <Reveal>
            <article className="industry">
              <p className="kicker">02 · Retail &amp; ECommerce</p>
              <h3>Make every product, interaction and decision smarter.</h3>
              <p>Apply trustworthy data and AI across discovery, merchandising, service and operations.</p>
              <ul className="industry-list">
                <li>Conversational commerce and service</li>
                <li>Catalogue enrichment and product intelligence</li>
                <li>Personalisation and next-best action</li>
                <li>Demand, pricing and markdown decisions</li>
              </ul>
            </article>
          </Reveal>
          <Reveal>
            <article className="industry">
              <p className="kicker">03 · Healthcare</p>
              <h3>Reduce administrative friction and improve patient access.</h3>
              <p>
                Use governed AI and trusted data to improve service operations while keeping decisions
                transparent and accountable.
              </p>
              <ul className="industry-list">
                <li>Patient access and service workflows</li>
                <li>Administrative and document intelligence</li>
                <li>Workforce and capacity planning</li>
                <li>Enterprise knowledge and policy assistance</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ProofSprint() {
  return (
    <section className="sprint" id="proof-sprint">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <p className="kicker">The 4-week Proof Sprint</p>
            <div>
              <h2>See working evidence before a larger commitment.</h2>
              <p className="section-intro">
                One high-value problem. Real data. Real users. A fixed, decision-oriented engagement
                designed to answer: should we scale this?
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="timeline">
            <article className="week">
              <small>Week 01</small>
              <h3>Frame</h3>
              <p>Define the outcome, users, data, risks and success measures.</p>
            </article>
            <article className="week">
              <small>Week 02</small>
              <h3>Build</h3>
              <p>Create the first end-to-end working system on a narrow scope.</p>
            </article>
            <article className="week">
              <small>Week 03</small>
              <h3>Test</h3>
              <p>Put it in front of users; evaluate quality, control and usability.</p>
            </article>
            <article className="week">
              <small>Week 04</small>
              <h3>Decide</h3>
              <p>Measure the evidence and map the production path—or stop cleanly.</p>
            </article>
          </div>
        </Reveal>
        <Reveal>
          <div className="sprint-output">
            <h3>You leave with more than a demo.</h3>
            <div className="output-list">
              <span>Working prototype</span>
              <span>Evaluation scorecard</span>
              <span>Cost and value model</span>
              <span>Production architecture</span>
              <span>Risk and readiness view</span>
              <span>Scale roadmap</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Architecture() {
  const stack = [
    { layer: "Experience", detail: "Useful, explainable interactions designed around real work" },
    { layer: "Intelligence", detail: "Models, agents, retrieval, tools and business logic" },
    { layer: "Control", detail: "Policy gates, human approvals, permissions and audit trails" },
    { layer: "Evidence", detail: "Evaluation, tracing, latency, cost and business measures" },
    { layer: "Foundation", detail: "Trusted data products, lineage, quality and secure access" },
  ];

  return (
    <section className="architecture">
      <div className="shell architecture-grid">
        <Reveal className="architecture-copy">
          <p className="kicker">Production-grade by design</p>
          <h2>AI is only as strong as the system around it.</h2>
          <p>
            We combine model intelligence with deterministic control. The result is software your teams
            can understand, operate and improve.
          </p>
        </Reveal>
        <Reveal>
          <div className="stack" aria-label="Layers of a production AI system">
            {stack.map((row) => (
              <div key={row.layer} className="stack-row">
                <b>{row.layer}</b>
                <span>{row.detail}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyUs() {
  const items = [
    { n: "01", title: "Operator-led", body: "Business context and technical decisions stay connected from the first conversation." },
    { n: "02", title: "Senior team", body: "The people shaping the work are the people accountable for delivery." },
    { n: "03", title: "Evidence first", body: "We use working software and measurable tests to make the next investment decision." },
    { n: "04", title: "Cloud neutral", body: "Architecture follows your context across AWS, Azure and Google Cloud—not vendor incentives." },
    { n: "05", title: "Your assets", body: "You own the code, architecture and documentation. No manufactured dependency." },
  ];

  return (
    <section id="why-us">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <p className="kicker">Why Enviseer</p>
            <div>
              <h2>Senior attention with engineering speed.</h2>
              <p className="section-intro">
                We sit between large consultancies and delivery-only vendors: strategic enough to frame
                the right problem, technical enough to build the answer.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="why-grid">
          {items.map((item) => (
            <Reveal key={item.n}>
              <article className="why-item">
                <strong>{item.n}</strong>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  const steps = [
    { step: "01", title: "Discover", body: "Find the consequential problem and define value." },
    { step: "02", title: "Ready", body: "Prepare the data, controls and architecture." },
    { step: "03", title: "Prove", body: "Build, test and measure with real users." },
    { step: "04", title: "Scale", body: "Engineer the production system and adoption." },
    { step: "05", title: "Run", body: "Observe, govern and improve the value loop." },
  ];

  return (
    <section className="approach">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <p className="kicker">How we work</p>
            <div>
              <h2>A clear path from ambition to advantage.</h2>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="approach-line">
            {steps.map((s) => (
              <article key={s.step} className="approach-step" data-step={s.step}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const [formNote, setFormNote] = useState("This prototype opens your email app; no form data is stored.");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website introduction — ${data.get("interest")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\n\nProblem:\n${data.get("message")}`,
    );
    setFormNote("Opening your email app…");
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="shell contact-card">
        <div className="contact-copy">
          <p className="kicker">Start with the problem</p>
          <h2>Bring us one consequential workflow.</h2>
          <p>
            In a focused working session, we will pressure-test the opportunity, data reality and
            fastest credible path to evidence.
          </p>
          <div className="contact-meta">
            Prefer email? <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <br />
            {brand.location}
          </div>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" autoComplete="name" required placeholder="Your name" />
          </div>
          <div className="field">
            <label htmlFor="email">Work email</label>
            <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
          </div>
          <div className="field">
            <label htmlFor="interest">Where should we begin?</label>
            <select id="interest" name="interest" defaultValue="AI opportunity and roadmap">
              <option>AI opportunity and roadmap</option>
              <option>Agentic AI / GenAI product</option>
              <option>Data and AI platform</option>
              <option>Product engineering and modernisation</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">The problem in one or two sentences</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="What decision or workflow needs to work better?"
            />
          </div>
          <button className="button primary" type="submit">
            Compose the introduction <ArrowIcon />
          </button>
          <p className="form-note" aria-live="polite">
            {formNote}
          </p>
        </form>
      </div>
    </section>
  );
}
