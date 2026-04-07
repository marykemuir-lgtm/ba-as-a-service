/*
 * HowItWorks.tsx — Scoped Consulting
 * Design: Dark theme — infographic 2x2 grid, FAQ cards, blue CTA
 */
import { Link } from "wouter";
import { ArrowRight, MessageSquare, FileCheck, Code, RefreshCw, CheckCircle2, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    tagline: "Free · 30 minutes · No commitment",
    desc: "Everything starts with a conversation. No pitch, no pressure — just an honest discussion about your situation and how we might help.",
    details: [
      "Understand your product & team context",
      "Identify key challenges & bottlenecks",
      "Explore which services fit best",
      "Answer your questions about the engagement",
    ],
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Scoped Proposal",
    tagline: "Hands-on, collaborative work",
    desc: "A fixed-scope, fixed-price proposal. You know exactly what you're getting and what it costs — before we start. No hourly billing, no surprises.",
    details: [
      "Clear scope and deliverables defined",
      "Fixed price agreed upfront",
      "Timeline and milestones set",
      "Kickoff scheduled within 1–2 weeks",
    ],
  },
  {
    number: "03",
    icon: Code,
    title: "Workshop & Delivery",
    tagline: "Deliverables ready for your dev team",
    desc: "We work with your team to produce a dev-ready requirements pack. Workshops, interviews, backlog grooming — tailored to how your team operates.",
    details: [
      "Workshops & stakeholder sessions",
      "Documentation & artefact creation",
      "Backlog grooming & sprint planning",
      "Regular progress check-ins",
    ],
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Handover & Support",
    tagline: "Continuous improvement built in",
    desc: "Your team walks away with everything they need. We stay available during rollout and can extend, scale up, or wind down as your needs evolve.",
    details: [
      "Full documentation handover",
      "Knowledge transfer to your team",
      "Support during rollout",
      "Retrospective & lessons learned",
    ],
  },
];

const faqs = [
  {
    q: "How quickly can you start?",
    a: "Typically within 1–2 weeks of the proposal being accepted. Contact us to check current availability.",
    full: false,
  },
  {
    q: "Do you work remotely?",
    a: "Fully remote-ready across AU & NZ time zones. On-site workshops can be arranged if needed.",
    full: false,
  },
  {
    q: "Do I need a long-term contract?",
    a: "No. All engagements are flexible by design. Project work is scoped per project. Retainers are month-to-month with a short notice period.",
    full: false,
  },
  {
    q: "What tools do you use?",
    a: "We're tool-agnostic — Jira, Linear, Notion, Confluence, Miro. We adapt to your existing stack and methodology.",
    full: false,
  },
  {
    q: "What's the minimum engagement length?",
    a: "Project work can be as short as a few days for a focused workshop or requirements sprint. Retainer engagements typically run for a minimum of one month.",
    full: true,
  },
];

const DotPattern = () => (
  <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
    <svg
      className="absolute right-0 top-0 w-full h-full"
      style={{ opacity: 0.12 }}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#4a6cf7"/>
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#dots)"/>
    </svg>
  </div>
);

export default function HowItWorks() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} style={{ background: "#080b12" }}>

      {/* Hero */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "#080b12" }}
      >
        <DotPattern />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold mb-4" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              How It Works
            </p>
            <h1
              className="display-headline text-4xl lg:text-5xl mb-6"
              style={{ lineHeight: 1.1, color: "white" }}
            >
              Simple. Structured.{" "}
              <span style={{ color: "#4a6cf7" }}>Collaborative.</span>
            </h1>
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "#94a3b8", fontFamily: "var(--font-body)" }}
            >
              Every engagement starts with understanding your context. Here's how we go from first conversation to delivery-ready requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Process steps — 2x2 infographic grid */}
      <section className="py-16" style={{ background: "#0a0d16", borderTop: "0.5px solid #151b28" }}>
        <div className="container">
          <p className="text-xs font-semibold mb-8 text-center" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.14em" }}>
            The Process
          </p>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Centre connector */}
            <div
              className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center z-10"
              style={{ background: "#4a6cf7" }}
            >
              <Zap size={16} color="white" />
            </div>

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="reveal p-6 rounded-2xl"
                  style={{
                    background: "#0d1220",
                    border: "0.5px solid #1e2a40",
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ border: "2px solid #4a6cf7", background: "#080b12" }}
                    >
                      <span className="text-sm font-bold" style={{ color: "#4a6cf7", fontFamily: "var(--font-display)" }}>
                        {step.number}
                      </span>
                    </div>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: "#131a2e" }}
                    >
                      <Icon size={16} style={{ color: "#4a6cf7" }} />
                    </div>
                  </div>

                  <p className="text-xs font-semibold mb-2" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {step.tagline}
                  </p>
                  <h3
                    className="font-bold text-lg mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "white" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
                    {step.desc}
                  </p>

                  <div style={{ borderTop: "0.5px solid #1e2a40", paddingTop: "14px" }}>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                            style={{ background: "#4a6cf7" }}
                          />
                          <span className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline callout */}
          <div
            className="reveal mt-6 p-5 rounded-xl flex items-center gap-4"
            style={{ background: "#0d1220", border: "0.5px solid #1e2a40" }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#131a2e", border: "1.5px solid #4a6cf7" }}
            >
              <Zap size={16} style={{ color: "#4a6cf7" }} />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
              <span style={{ color: "white", fontWeight: 500 }}>Typically up and running in 1–2 weeks.</span>{" "}
              Most engagements deliver the first round of artefacts within 2–4 weeks of kickoff.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "#080b12", borderTop: "0.5px solid #151b28" }}>
        <div className="container">
          <div className="reveal mb-10">
            <p className="text-xs font-semibold mb-3" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              Common Questions
            </p>
            <h2 className="display-headline text-3xl lg:text-4xl" style={{ color: "white" }}>
              Frequently asked questions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="reveal p-6 rounded-xl"
                style={{
                  background: "#0d1220",
                  border: "0.5px solid #1e2a40",
                  gridColumn: faq.full ? "1 / -1" : undefined,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <h3
                  className="font-bold text-sm mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "white" }}
                >
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: "#4a6cf7" }}>
        <div className="container">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-semibold mb-4" style={{ color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              Ready to start?
            </p>
            <h2
              className="display-headline text-3xl lg:text-5xl mb-6"
              style={{ color: "white", lineHeight: 1.15 }}
            >
              Step one is a conversation.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
              Schedule your free 30-minute discovery call and find out how Scoped Consulting can help you move faster and build better.
            </p>
            <Link
              href="/book"
              className="flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-lg transition-all duration-200 inline-flex"
              style={{ background: "white", color: "#4a6cf7", fontFamily: "var(--font-body)", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f0f4ff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "white"; }}
            >
              Book a Free Discovery Call
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
