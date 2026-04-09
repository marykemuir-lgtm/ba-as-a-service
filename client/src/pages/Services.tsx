import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IllustrationBlueprint, IllustrationAccents } from "@/components/Illustrations";

const CREAM = "#f5f0e8";
const NAV = "#0d1117";
const SAND = "#d4c9b0";
const BLUE = "#4a6cf7";
const MUTED = "#6b6b6b";
const BODY = "#3a3a3a";

const packages = [
  {
    num: "01",
    tag: "Entry point",
    name: "Clarity Sprint",
    duration: "1 week · Fixed scope",
    desc: "Not sure where to start? One focused week to audit what you have, find the gaps, and hand you a backlog you can act on immediately. Low commitment, high signal.",
    includes: [
      "Requirements audit across existing scope",
      "Gap analysis with prioritised risk flags",
      "Actionable, prioritised backlog",
      "30-minute debrief and Q&A",
    ],
    price: "$1,800",
    priceNote: "NZD ex GST · one-off",
    cta: "Start here",
    flagship: false,
  },
  {
    num: "02",
    tag: "Core engagement",
    name: "Discovery & Definition",
    duration: "2–3 weeks · Fixed scope",
    desc: "Full requirements work from discovery through to documented definition. Everything your dev team needs to build with confidence — no guesswork, no back-and-forth.",
    includes: [
      "Stakeholder discovery sessions",
      "User stories and acceptance criteria",
      "Process mapping and business requirements",
      "Dev-ready handover documentation",
    ],
    price: "$5,500",
    priceNote: "NZD ex GST · one-off",
    cta: "Get started",
    flagship: false,
  },
  {
    num: "03",
    tag: "Ongoing",
    name: "Fractional BA/PO",
    duration: "Monthly · Min 2 months",
    desc: "Senior BA and Product Owner coverage on a fixed monthly basis. Embedded in your sprints, without the overhead of a full-time hire.",
    includes: [
      "Sprint planning and backlog grooming",
      "Ongoing requirements and user stories",
      "Delivery governance and reporting",
      "Stakeholder management support",
    ],
    price: "$4,200",
    priceNote: "NZD ex GST · per month",
    cta: "Book a call first",
    flagship: false,
  },
];

export default function Services() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} style={{ background: CREAM }}>

      {/* ── Hero ── */}
      <section style={{ padding: "80px 0 64px", borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: BLUE, marginBottom: 20, fontWeight: 500 }}>Pricing · Fixed scope · No surprises</p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 500, lineHeight: 1.1, color: NAV, letterSpacing: "-0.02em", marginBottom: 20 }}>
            You know the cost<br />before we start.<br /><em style={{ fontStyle: "italic", color: BLUE }}>Always.</em>
          </h1>
          <p style={{ fontSize: 16, color: BODY, maxWidth: 520, lineHeight: 1.75 }}>
            Every engagement is scoped and priced upfront. No retainers, no billable hour drift, no awkward conversations mid-project.
          </p>
        </div>
      </section>

      {/* ── Flagship ── */}
      <section style={{ background: NAV, borderBottom: `0.5px solid #1a2030` }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 py-16" style={{ gap: 48 }}>
            <div>
              <div style={{ display: "inline-block", background: BLUE, color: "white", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 14px", marginBottom: 24 }}>Flagship offer</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 500, color: CREAM, lineHeight: 1.15, marginBottom: 16 }}>AI Requirements Blueprint</h2>              <p style={{ fontSize: 15, color: "#a0a0a0", lineHeight: 1.75, maxWidth: 480, marginBottom: 32 }}>
                The thing most AI builds skip — and why they fail. Before a single line of code, we define exactly what your AI agent needs to know, do, and decide. You get a complete requirements spec your dev team can actually build from.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "AI agent scope and decision logic — what it does, what it doesn't, and why",
                  "Full requirements specification, structured for dev handover",
                  "User stories with acceptance criteria",
                  "Integration, data, and edge case requirements",
                  "One review session included",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 13, color: "#c0c0c0", display: "flex", alignItems: "flex-start", gap: 12, lineHeight: 1.5 }}>
                    <span style={{ display: "inline-block", width: 16, height: 1, background: BLUE, marginTop: 9, flexShrink: 0 }}></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                style={{ display: "inline-block", background: BLUE, color: "white", fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", padding: "13px 28px", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#3b5ce5"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = BLUE; }}
              >
                Book a discovery call
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end", paddingTop: 8, gap: 32 }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 64, fontWeight: 400, color: CREAM, lineHeight: 1, marginBottom: 6 }}>$3,500</div>
                <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "#555" }}>NZD ex GST · Fixed fee</div>
              </div>
              <IllustrationBlueprint width={300} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Supporting tiers ── */}
      <section style={{ padding: "64px 0", borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9a9a9a", marginBottom: 40, fontWeight: 500 }}>Supporting engagements</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ border: `0.5px solid ${SAND}` }}>
            {packages.map((pkg, i, arr) => (
              <div
                key={pkg.num}
                className="reveal"
                style={{ padding: "36px 28px", borderRight: i < arr.length - 1 ? `0.5px solid ${SAND}` : "none", display: "flex", flexDirection: "column" }}
              >
                <div style={{ fontSize: 11, letterSpacing: "0.1em", color: BLUE, marginBottom: 20, fontWeight: 500, textTransform: "uppercase" }}>{pkg.num} · {pkg.tag}</div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 500, color: NAV, marginBottom: 6, lineHeight: 1.2 }}>{pkg.name}</div>
                <div style={{ fontSize: 12, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>{pkg.duration}</div>
                <div style={{ fontSize: 13, color: BODY, lineHeight: 1.7, marginBottom: 24, flex: 1 }}>{pkg.desc}</div>
                <div style={{ height: "0.5px", background: SAND, marginBottom: 20 }}></div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 9 }}>
                  {pkg.includes.map((item) => (
                    <li key={item} style={{ fontSize: 12, color: MUTED, display: "flex", alignItems: "flex-start", gap: 8, lineHeight: 1.5 }}>
                      <span style={{ display: "inline-block", width: 12, height: 1, background: SAND, marginTop: 8, flexShrink: 0 }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 400, color: NAV, marginBottom: 4 }}>{pkg.price}</div>
                <div style={{ fontSize: 11, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20 }}>{pkg.priceNote}</div>
                <Link
                  href="/book"
                  style={{ fontSize: 12, fontWeight: 500, color: NAV, border: `0.5px solid ${NAV}`, padding: "10px 18px", textAlign: "center", textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase", marginTop: "auto", display: "block" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = NAV; el.style.color = CREAM; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "transparent"; el.style.color = NAV; }}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fine print ── */}
      <IllustrationAccents />
      <section style={{ borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 py-10">
            {[
              { title: "GST & currency", desc: "All prices NZD, ex GST. GST added where applicable. AU clients invoiced in AUD at the prevailing exchange rate." },
              { title: "Scope changes", desc: "Fixed price means fixed price. Any scope change is agreed in writing before additional work begins — no surprises, ever." },
              { title: "Not sure which fits?", desc: "Book a free 30-minute call. Most clients start with a Clarity Sprint — the fastest way to get signal on what you actually need." },
            ].map((item, i, arr) => (
              <div key={item.title} style={{ padding: "0 32px 0 0", borderRight: i < arr.length - 1 ? `0.5px solid ${SAND}` : "none", marginRight: i < arr.length - 1 ? 32 : 0, paddingRight: i < arr.length - 1 ? 32 : 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: NAV, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.title}</div>
                <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0", textAlign: "center", borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          <div className="reveal">
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 500, color: NAV, marginBottom: 12, lineHeight: 1.2 }}>
              Still figuring it out?<br />That's what the call is for.
            </div>
            <p style={{ fontSize: 15, color: MUTED, marginBottom: 32 }}>Free, 30 minutes, no pitch. Just a conversation about where you are and whether Scoped can help.</p>
            <Link
              href="/book"
              style={{ display: "inline-block", background: NAV, color: CREAM, padding: "13px 32px", fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1a2030"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = NAV; }}
            >
              Book a free discovery call
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}


