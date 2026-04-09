import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IllustrationAccents } from "@/components/Illustrations";

const CREAM = "#f5f0e8";
const NAV = "#0d1117";
const SAND = "#d4c9b0";
const BLUE = "#4a6cf7";
const MUTED = "#6b6b6b";
const BODY = "#3a3a3a";
const PORTRAIT = "/images/Maryke_Professional_Headshot.png";

const values = [
  { title: "Clarity over complexity", desc: "Good consulting makes the complex simple. Every artefact and conversation should leave your team with more clarity, not less." },
  { title: "Honest, direct communication", desc: "You'll always know where things stand. If something isn't working, we'll tell you — clearly and early, not at the end." },
  { title: "Outcomes over outputs", desc: "The goal isn't to produce documents. The goal is to help your team build the right thing. Every deliverable serves that purpose." },
  { title: "People before process", desc: "Frameworks are tools, not rules. The best outcomes come from understanding the humans involved and designing around them." },
];

const expertise = [
  "AI Requirements Strategy", "Business Requirements Analysis", "User Story Writing & Refinement",
  "Product Discovery Facilitation", "Backlog Management & Prioritisation", "Process Mapping (BPMN)",
  "System Design Documentation", "Agile & Scrum Delivery", "Stakeholder Management",
  "Jira · Confluence · Notion · Miro", "API & Integration Requirements", "Data Flow & System Context Diagrams",
];

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} style={{ background: CREAM }}>

      {/* ── Hero split ── */}
      <section style={{ borderBottom: `0.5px solid ${SAND}` }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div style={{ padding: "80px 48px 72px" }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: BLUE, marginBottom: 24, fontWeight: 500 }}>About the founder</p>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(34px, 4vw, 46px)", fontWeight: 500, lineHeight: 1.1, color: NAV, letterSpacing: "-0.02em", marginBottom: 28 }}>
              Most startups don't fail<br />because of bad ideas.
            </h1>
            <p style={{ fontSize: 16, color: BODY, lineHeight: 1.8, marginBottom: 20, maxWidth: 480 }}>
              They fail because nobody helped them translate the idea into something a dev team could build. I've spent a decade bridging that gap — across fintech, insurance, SaaS, and now AI-first products.
            </p>
            <p style={{ fontSize: 16, color: BODY, lineHeight: 1.8, marginBottom: 32, maxWidth: 480 }}>
              I built Scoped Consulting because senior BA and requirements expertise shouldn't cost six figures or require a full-time commitment. Founders deserve the same clarity that big companies pay consultancies a fortune for.
            </p>
            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 16, fontWeight: 500, color: NAV }}>Maryke-Lee Muir</div>
              <div style={{ fontSize: 12, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Founder · AI Requirements Strategist · BA/PM/PO</div>
            </div>
          </div>
          <div style={{ borderLeft: `0.5px solid ${SAND}`, overflow: "hidden", minHeight: 520 }}>
            <img
              src={PORTRAIT}
              alt="Maryke-Lee Muir"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ padding: "72px 0", borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9a9a9a", marginBottom: 16, fontWeight: 500 }}>How I work</p>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 500, color: NAV, lineHeight: 1.25 }}>The principles behind every engagement</div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-0" style={{ border: `0.5px solid ${SAND}` }}>
              {values.map((v, i) => (
                <div key={v.title} className="reveal" style={{ padding: "28px 24px", borderRight: i % 2 === 0 ? `0.5px solid ${SAND}` : "none", borderBottom: i < 2 ? `0.5px solid ${SAND}` : "none" }}>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 16, fontWeight: 500, color: NAV, marginBottom: 10 }}>{v.title}</div>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Accent divider ── */}
      <IllustrationAccents />

      {/* ── Expertise tags ── */}
      <section style={{ padding: "64px 0", borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9a9a9a", marginBottom: 32, fontWeight: 500 }}>Areas of expertise</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {expertise.map((item) => (
              <span key={item} style={{ fontSize: 12, color: NAV, border: `0.5px solid ${SAND}`, padding: "6px 14px", background: "#fff8f0", letterSpacing: "0.02em" }}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing quote ── */}
      <section style={{ padding: "72px 0", borderBottom: `0.5px solid ${SAND}`, background: NAV }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 400, fontStyle: "italic", color: CREAM, lineHeight: 1.5, marginBottom: 20 }}>
            "Anyone can build with AI now. Not everyone knows what to build."
          </p>
          <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "#555" }}>Maryke-Lee Muir · Founder, Scoped Consulting</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div className="reveal">
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 500, color: NAV, marginBottom: 12, lineHeight: 1.2 }}>Want to work together?</div>
            <p style={{ fontSize: 15, color: MUTED, marginBottom: 32 }}>Start with a free 30-minute call.</p>
            <Link
              href="/book"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: NAV, color: CREAM, padding: "13px 32px", fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1a2030"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = NAV; }}
            >
              Book a discovery call <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
