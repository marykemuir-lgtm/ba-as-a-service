/*
 * HowItWorks.tsx — Scoped Consulting
 * Design: Editorial Minimalism — vertical timeline, alternating content, step numbers
 */
import { Link } from "wouter";
import { ArrowRight, MessageSquare, FileCheck, Cpu, RefreshCw, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    subtitle: "Free · 30 minutes · No commitment",
    desc: "Speak with a consultant to discuss your product, system, or delivery challenge. Everything starts with a conversation. There's no pitch, no pressure, just an honest discussion about your situation and how we might help.",
    details: [
      "Understand your product and team context",
      "Identify the key challenges and bottlenecks",
      "Explore which services would be most valuable",
      "Answer any questions you have about the engagement",
    ],
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Workshop & Analysis",
    subtitle: "Hands-on, collaborative work",
    desc: "A consultant works with your team to translate ideas into structured requirements. Whether that means facilitating workshops, writing requirements, grooming your backlog, or attending your standups — the work is hands-on, collaborative, and tailored to how your team operates.",
    details: [
      "Workshops, interviews, and stakeholder sessions",
      "Documentation and artefact creation",
      "Backlog grooming and sprint planning",
      "Regular check-ins and progress updates",
    ],
  },
  {
    number: "03",
    icon: Cpu,
    title: "Requirements Pack",
    subtitle: "Deliverables ready for your team",
    desc: "You receive documentation including backlog items, user stories, and delivery guidance ready for development teams. All artefacts are tailored to your team's tools and processes, whether that's Jira, Linear, Notion, or something else.",
    details: [
      "Prioritised product backlog",
      "Sprint-ready user stories",
      "System design and process documentation",
      "Delivery roadmap and guidance",
    ],
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Review & Iterate",
    subtitle: "Continuous improvement built in",
    desc: "Regular check-ins to ensure the work is landing well, adapting to new information, and continuing to serve your team's needs. Engagements can be extended, scoped up, or wound down as your needs evolve.",
    details: [
      "Fortnightly progress reviews",
      "Flexible scope adjustments",
      "Knowledge transfer to your team",
      "Retrospective and lessons learned",
    ],
  },
];

const faqs = [
  {
    q: "How quickly can you start?",
    a: "Typically within one to two weeks of the proposal being accepted, depending on current availability. Contact us to check current availability.",
  },
  {
    q: "Do you work remotely or on-site?",
    a: "Our consultants are fully remote-ready and work with organisations across time zones. On-site work can be arranged for specific workshops or kick-off sessions if required.",
  },
  {
    q: "What's the minimum engagement length?",
    a: "Project-based engagements can be as short as a few days for a focused workshop or requirements sprint. Retainer engagements typically run for a minimum of one month.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. Engagements are flexible by design. Project work is scoped and priced per project. Retainer arrangements are month-to-month with a short notice period.",
  },
  {
    q: "What tools and methodologies do you use?",
    a: "Our consultants are tool-agnostic and adapt to your existing stack — whether that's Jira, Linear, Notion, Confluence, Miro, or something else. Methodologies are tailored to your team's context (Agile, Scrum, Kanban, or hybrid).",
  },
];

export default function HowItWorks() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      {/* Page header */}
      <section className="py-20 lg:py-28" style={{ background: "oklch(0.985 0.004 85)" }}>
        <div className="container">
          <div className="max-w-2xl">
            <p className="section-label mb-4">How It Works</p>
            <h1 className="display-headline text-4xl lg:text-5xl mb-6">
              Simple, structured,{" "}
              <span className="italic" style={{ color: "oklch(0.46 0.18 260)" }}>
                collaborative.
              </span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "oklch(0.42 0.01 260)" }}>
              Every engagement starts with understanding your context. Here's how a typical Scoped Consulting engagement works — from first conversation to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16" style={{ background: "oklch(0.985 0.004 85)" }}>
        <div className="container">
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 1;
              return (
                <div
                  key={step.number}
                  className="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-16 border-b"
                  style={{
                    borderColor: "oklch(0.88 0.006 85)",
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {/* Content block */}
                  <div className={isEven ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-5">
                      <span
                        className="text-6xl font-bold leading-none"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "oklch(0.9 0.01 260)",
                        }}
                      >
                        {step.number}
                      </span>
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: "oklch(0.94 0.06 260 / 0.15)" }}
                      >
                        <Icon size={20} style={{ color: "oklch(0.46 0.18 260)" }} />
                      </div>
                    </div>
                    <p className="section-label mb-2">{step.subtitle}</p>
                    <h2
                      className="font-bold text-2xl lg:text-3xl mb-4"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.01 260)" }}
                    >
                      {step.title}
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.01 260)" }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Detail box */}
                  <div className={isEven ? "lg:order-1" : ""}>
                    <div
                      className="p-6 rounded-xl h-full border"
                      style={{
                        background: "oklch(0.97 0.003 85)",
                        borderColor: "oklch(0.88 0.006 85)",
                      }}
                    >
                      <p className="section-label mb-4">What happens here</p>
                      <ul className="flex flex-col gap-3">
                        {step.details.map((d) => (
                          <li key={d} className="flex items-start gap-3">
                            <CheckCircle2
                              size={16}
                              className="shrink-0 mt-0.5"
                              style={{ color: "oklch(0.46 0.18 260)" }}
                            />
                            <span className="text-sm leading-relaxed" style={{ color: "oklch(0.38 0.01 260)" }}>
                              {d}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "oklch(0.96 0.006 85)" }}>
        <div className="container">
          <div className="reveal mb-12">
            <p className="section-label mb-3">Common Questions</p>
            <h2 className="display-headline text-3xl lg:text-4xl max-w-lg">
              Frequently asked questions.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="reveal p-6 rounded-lg border bg-white"
                style={{
                  borderColor: "oklch(0.88 0.006 85)",
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <h3
                  className="font-bold text-base mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.01 260)" }}
                >
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.01 260)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.985 0.004 85)" }}>
        <div className="container">
          <div className="reveal max-w-xl">
            <p className="section-label mb-4">Ready to start?</p>
            <h2 className="display-headline text-3xl lg:text-4xl mb-6">
              Step one is a conversation.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.42 0.01 260)" }}>
              Schedule your free 30-minute discovery call with one of our consultants and find out how Scoped Consulting can help your organisation move faster and build better.
            </p>
            <Link href="/book" className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded transition-all duration-200 inline-flex" style={{
              background: "oklch(0.46 0.18 260)",
              color: "white",
              fontFamily: "var(--font-body)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.38 0.18 260)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.46 0.18 260)"; }}
            >
              Speak With a Consultant
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
