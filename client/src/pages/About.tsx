/*
 * About.tsx — Scoped Consulting
 * Design: Editorial Minimalism — split layout, portrait illustration, warm tone
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PORTRAIT = "/images/portrait.jpg";

const values = [
  {
    title: "Clarity over complexity",
    desc: "Good consulting work makes the complex simple. Every artefact, workshop, and conversation should leave your team with more clarity, not less.",
  },
  {
    title: "People before process",
    desc: "Frameworks and methodologies are tools, not rules. The best outcomes come from understanding the humans involved and designing the process around them.",
  },
  {
    title: "Honest, direct communication",
    desc: "You'll always know where things stand. If something isn't working or a scope change is needed, our consultants will tell you — clearly and early.",
  },
  {
    title: "Outcomes over outputs",
    desc: "The goal isn't to produce documents. The goal is to help your team build the right thing, the right way. Every deliverable should serve that purpose.",
  },
];

const expertise = [
  "Business Requirements Analysis",
  "User Story Writing & Refinement",
  "Product Discovery Facilitation",
  "Backlog Management & Prioritisation",
  "Process Mapping (BPMN, flowcharts)",
  "System Design Documentation",
  "Agile & Scrum Delivery",
  "Stakeholder Management",
  "Jira · Confluence · Notion · Miro",
  "Figma collaboration",
  "API & integration requirements",
  "Data flow & system context diagrams",
];

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section className="py-20 lg:py-28" style={{ background: "oklch(0.985 0.004 85)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="reveal">
              <p className="section-label mb-4">About</p>
              <h1 className="display-headline text-4xl lg:text-5xl mb-6">
                BA-as-a-Service was founded to help organisations access senior expertise
                <span className="block italic" style={{ color: "oklch(0.46 0.18 260)" }}>
                  without the overhead.
                </span>
              </h1>
              <div className="flex gap-4 mb-6">
                <div className="accent-line h-16" />
                <p className="text-lg leading-relaxed" style={{ color: "oklch(0.42 0.01 260)" }}>
                  BA-as-a-Service was founded by Maryke-Lee Muir, a Delivery Lead and Business Analysis specialist with over a decade of experience supporting complex technology initiatives and product delivery programmes.
                </p>
              </div>
              <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.42 0.01 260)" }}>
                Maryke-Lee created BA-as-a-Service to help organisations access senior Business Analysis expertise without the cost of hiring a full-time resource. Our consultants bring the same level of rigour and strategic thinking you'd expect from a senior hire, but on a flexible, fractional basis.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.01 260)" }}>
                Whether you're a startup validating your first product, a scale-up managing a complex backlog, or an enterprise team launching a new initiative — we provide the structured thinking and hands-on delivery support you need.
              </p>
            </div>

            {/* Portrait */}
            <div className="reveal flex justify-center lg:justify-end">
              <div className="relative">
                <div
                  className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                  style={{ background: "oklch(0.94 0.04 145)", zIndex: 0 }}
                />
                <img
                  src={PORTRAIT}
                  alt="Maryke-Lee Muir — Founder, BA-as-a-Service"
                  className="relative z-10 rounded-2xl shadow-lg"
                  style={{ maxWidth: "340px", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-20" style={{ background: "oklch(0.96 0.006 85)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="reveal">
              <p className="section-label mb-4">Our Focus</p>
              <h2 className="display-headline text-3xl lg:text-4xl mb-6">
                Expertise across the full product lifecycle.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.42 0.01 260)" }}>
                Our consultants specialise in helping organisations navigate the critical phases of product and delivery work. From initial discovery through to delivery governance, we bring structured thinking and hands-on support.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.42 0.01 260)" }}>
                We've worked across a wide range of industries — fintech, healthtech, e-commerce, SaaS, and government digital services — giving us a broad perspective on how different organisations approach product development.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.01 260)" }}>
                We're equally comfortable in a startup moving at pace and in an enterprise navigating governance and compliance. What stays constant is our commitment to clear thinking, honest communication, and outcomes that actually matter to the business.
              </p>
            </div>

            {/* Expertise tags */}
            <div className="reveal">
              <p className="section-label mb-4">Areas of Expertise</p>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border"
                    style={{
                      borderColor: "oklch(0.82 0.01 260)",
                      color: "oklch(0.38 0.01 260)",
                      background: "white",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "oklch(0.985 0.004 85)" }}>
        <div className="container">
          <div className="reveal mb-12">
            <p className="section-label mb-3">Our Approach</p>
            <h2 className="display-headline text-3xl lg:text-4xl max-w-lg">
              The principles that guide every engagement.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="reveal p-6 rounded-lg border"
                style={{
                  borderColor: "oklch(0.88 0.006 85)",
                  background: "oklch(0.99 0.002 85)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="flex gap-4">
                  <div className="accent-line h-full min-h-[3rem] shrink-0" style={{ width: "3px" }} />
                  <div>
                    <h3
                      className="font-bold text-base mb-2"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.01 260)" }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.01 260)" }}>
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.46 0.18 260)" }}>
        <div className="container">
          <div className="reveal max-w-xl">
            <p className="section-label mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Work With Us
            </p>
            <h2
              className="display-headline text-3xl lg:text-4xl mb-6"
              style={{ color: "white" }}
            >
              Let's talk about your product.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
              Schedule a free 30-minute discovery call with one of our consultants. No pitch, no pressure — just an honest conversation about where you are and how we can help.
            </p>
            <Link href="/book" className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded border-2 transition-all duration-200 inline-flex" style={{
              borderColor: "white",
              color: "white",
              background: "transparent",
              fontFamily: "var(--font-body)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const link = e.currentTarget as HTMLAnchorElement;
              link.style.background = "white";
              link.style.color = "oklch(0.46 0.18 260)";
            }}
            onMouseLeave={(e) => {
              const link = e.currentTarget as HTMLAnchorElement;
              link.style.background = "transparent";
              link.style.color = "white";
            }}
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
