/*
 * About.tsx — Scoped Consulting
 * Design: Dark theme — bold opening, full-size portrait, values, expertise tags
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PORTRAIT = "/images/Maryke_Professional_Headshot.png";

const values = [
  {
    title: "Clarity over complexity",
    desc: "Good consulting makes the complex simple. Every artefact and conversation should leave your team with more clarity, not less.",
  },
  {
    title: "Honest, direct communication",
    desc: "You'll always know where things stand. If something isn't working, we'll tell you — clearly and early, not at the end when it's too late.",
  },
  {
    title: "Outcomes over outputs",
    desc: "The goal isn't to produce documents. The goal is to help your team build the right thing. Every deliverable should serve that purpose.",
  },
  {
    title: "People before process",
    desc: "Frameworks are tools, not rules. The best outcomes come from understanding the humans involved and designing the process around them.",
  },
];

const expertise = [
  "Business Requirements Analysis",
  "User Story Writing & Refinement",
  "Product Discovery Facilitation",
  "Backlog Management & Prioritisation",
  "Process Mapping (BPMN)",
  "System Design Documentation",
  "Agile & Scrum Delivery",
  "Stakeholder Management",
  "Jira · Confluence · Notion · Miro",
  "API & integration requirements",
  "Data flow & system context diagrams",
  "Figma collaboration",
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

export default function About() {
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
              About Scoped Consulting
            </p>
            <h1
              className="display-headline text-4xl lg:text-5xl mb-6"
              style={{ lineHeight: 1.15, color: "white" }}
            >
              Most startups don't fail because of bad ideas.
              <span className="block" style={{ color: "#4a6cf7" }}>
                They fail because nobody helped them translate the idea into something a dev team could build.
              </span>
            </h1>
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "#94a3b8", fontFamily: "var(--font-body)" }}
            >
              That's the gap Scoped Consulting exists to close. We give founders and small businesses access to the kind of senior BA, Product Owner, and Delivery expertise that usually only enterprise teams can afford — on a fixed-scope, fractional basis.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20" style={{ background: "#0a0d16", borderTop: "0.5px solid #151b28" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Text */}
            <div className="reveal">
              <p className="text-xs font-semibold mb-4" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.14em" }}>
                The Founder
              </p>
              <h2
                className="display-headline text-3xl lg:text-4xl mb-6"
                style={{ color: "white", lineHeight: 1.2 }}
              >
                Hi, I'm Maryke-Lee Muir.
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
                I've spent over a decade embedded in technology delivery — as a Business Analyst, Delivery Lead, Product Owner, and Scrum Master — working across financial services, insurance, and digital product companies in New Zealand and beyond.
              </p>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
                I've seen the same pattern repeat itself too many times: a founder with a brilliant idea, a dev team ready to build, and nothing clear in between. Requirements that are vague, scope that keeps shifting, and a budget that disappears before anything useful ships.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
                I started Scoped Consulting because I wanted to fix that — for the startups and small businesses who can't afford a full-time BA or PO, but who desperately need that thinking before they hand work to developers.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  "Based in Auckland, NZ",
                  "Serving AU & NZ",
                  "10+ years experience",
                  "40+ projects delivered",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#4a6cf7" }}
                    />
                    <span className="text-sm" style={{ color: "#64748b" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait — full size */}
            <div className="reveal">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: "#0d1220", border: "0.5px solid #1e2a40" }}
              >
                <img
                  src={PORTRAIT}
                  alt="Maryke-Lee Muir — Founder, Scoped Consulting"
                  className="w-full"
                  style={{ display: "block" }}
                />
                <div
                  className="px-6 py-5 text-center"
                  style={{ borderTop: "0.5px solid #1e2a40" }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ color: "white" }}>
                    Maryke-Lee Muir
                  </p>
                  <p className="text-xs" style={{ color: "#4a6cf7" }}>
                    Founder & Lead Consultant
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "#080b12", borderTop: "0.5px solid #151b28" }}>
        <div className="container">
          <div className="reveal mb-10">
            <p className="text-xs font-semibold mb-3" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              Our Approach
            </p>
            <h2 className="display-headline text-3xl lg:text-4xl max-w-lg" style={{ color: "white" }}>
              The principles that guide every engagement.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="reveal p-6"
                style={{
                  background: "#0d1220",
                  border: "0.5px solid #1e2a40",
                  borderLeft: "3px solid #4a6cf7",
                  borderRadius: "0 12px 12px 0",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "white" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16" style={{ background: "#0a0d16", borderTop: "0.5px solid #151b28" }}>
        <div className="container">
          <div className="reveal mb-8">
            <p className="text-xs font-semibold" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              Areas of Expertise
            </p>
          </div>
          <div className="reveal flex flex-wrap gap-2">
            {expertise.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full text-xs"
                style={{
                  background: "#0d1220",
                  border: "0.5px solid #1e2a40",
                  color: "#94a3b8",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: "#4a6cf7" }}>
        <div className="container">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-semibold mb-4" style={{ color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              Work With Us
            </p>
            <h2
              className="display-headline text-3xl lg:text-5xl mb-6"
              style={{ color: "white", lineHeight: 1.15 }}
            >
              Let's talk about your product.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
              Free 30-minute call. No pitch, no pressure — just an honest conversation about where you are and how we can help.
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
