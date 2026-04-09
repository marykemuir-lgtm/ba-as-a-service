import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IllustrationGap, IllustrationAccents } from "@/components/Illustrations";

const CREAM = "#f5f0e8";
const NAV = "#0d1117";
const SAND = "#d4c9b0";
const BLUE = "#4a6cf7";
const MUTED = "#6b6b6b";
const BODY = "#3a3a3a";

export default function Home() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} style={{ background: CREAM, minHeight: "100vh" }}>

      {/* ── Ticker ── */}
      <div style={{ borderBottom: `0.5px solid ${SAND}`, overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 40, padding: "14px 0", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9a9a9a", whiteSpace: "nowrap", justifyContent: "center" }}>
         {["AI Requirements Strategy", "Fixed-scope engagements", "No retainers. No lock-in.", "AU & NZ", "Startups & small business"].map((item, i) => (
            <span key={i}>
              {item}<span style={{ color: BLUE, margin: "0 16px" }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero ── */}
      <section style={{ borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: 48, minHeight: 480, padding: "72px 0" }}>
            <div style={{ flex: 1.1 }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: BLUE, marginBottom: 24, fontWeight: 500 }}>
                AI Requirements Strategist · Fractional BA & Delivery
              </p>
              <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 4.5vw, 54px)", fontWeight: 500, lineHeight: 1.1, color: NAV, letterSpacing: "-0.02em", marginBottom: 28 }}>
                Your AI agent is only as good<br />as the <em style={{ fontStyle: "italic", color: BLUE }}>requirements</em> behind it.
              </h1>
              <p style={{ fontSize: 16, color: BODY, maxWidth: 480, lineHeight: 1.75, marginBottom: 40 }}>
                Most startups skip the hard part — translating a great idea into something a dev team can actually build. That's the gap. That's what we close.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                <Link
                  href="/book"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: NAV, color: CREAM, padding: "13px 28px", fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1a2030"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = NAV; }}
                >
                  Book a discovery call <ArrowRight size={14} />
                </Link>
                <Link href="/how-it-works" style={{ fontSize: 13, color: BLUE, fontWeight: 500, textDecoration: "underline", textUnderlineOffset: 3 }}>
                  See how it works ↓
                </Link>
              </div>
            </div>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.7 }}>
              <IllustrationGap width="100%" />
            </div>
          </div>
        </div>
      </section>

      {/* ── GAP concept ── */}
      <section style={{ padding: "72px 0", borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9a9a9a", marginBottom: 32, fontWeight: 500 }}>The GAP concept</p>

          {/* Two panels side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ border: `0.5px solid ${SAND}`, maxWidth: 860 }}>
            <div style={{ padding: "28px", borderRight: `0.5px solid ${SAND}` }}>
              <div style={{ fontSize: 11, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>The problem</div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 500, marginBottom: 8, color: NAV }}>What you imagine</div>
              <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>A seamless AI agent. Intelligent workflows. A product that understands your customers and just works.</div>
            </div>
            <div style={{ padding: "28px" }}>
              <div style={{ fontSize: 11, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Without the right requirements</div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 500, marginBottom: 8, color: NAV }}>What gets built</div>
              <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>A confused codebase. Half-formed logic. An AI that doesn't know what it's supposed to do — because nobody told it clearly.</div>
            </div>
          </div>

          {/* Arrow + resolution block */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, maxWidth: 860, padding: "16px 0" }}>
            <div style={{ flex: 1, height: "0.5px", background: SAND }}></div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: BLUE, fontWeight: 500, whiteSpace: "nowrap" }}>↓ Scoped closes the gap ↓</div>
            <div style={{ flex: 1, height: "0.5px", background: SAND }}></div>
          </div>

          <div style={{ background: NAV, padding: "28px 32px", maxWidth: 860, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 19, fontWeight: 400, fontStyle: "italic", color: CREAM, lineHeight: 1.45, margin: 0 }}>
              "Your AI agent is only as good as the requirements behind it."
            </p>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: BLUE, border: `0.5px solid ${BLUE}`, padding: "6px 14px", whiteSpace: "nowrap", flexShrink: 0 }}>That's what we do</div>
          </div>

        </div>
      </section>

      {/* ── Accent divider ── */}
      <IllustrationAccents />

      {/* ── Services preview ── */}
      <section style={{ padding: "80px 0", borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 36, fontWeight: 500, color: NAV, lineHeight: 1.2 }}>What we do</div>
            <div style={{ fontSize: 16, color: MUTED, lineHeight: 1.5, textAlign: "right" }}>Fixed-scope. Fractional. No full-time overhead.</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ border: `0.5px solid ${SAND}` }}>
            {[
              { num: "01", title: "AI Requirements Blueprint", tag: "Flagship", desc: "Define what your AI agent needs to know, do, and decide — before your team writes a single line of code." },
              { num: "02", title: "Business Analysis & Discovery", tag: "Fractional", desc: "User stories, BRDs, process maps — the documentation that turns ideas into buildable products." },
              { num: "03", title: "Fractional BA/PO & Delivery", tag: "Ongoing", desc: "Embedded sprint leadership and PO coverage without the headcount. Your team's rhythm, done right." },
            ].map((s, i, arr) => (
              <div key={s.num} className="reveal" style={{ padding: "32px 28px", borderRight: i < arr.length - 1 ? `0.5px solid ${SAND}` : "none" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", color: BLUE, marginBottom: 20, fontWeight: 500, textTransform: "uppercase" }}>{s.num}</div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 19, fontWeight: 500, color: NAV, marginBottom: 10, lineHeight: 1.25 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, marginBottom: 20 }}>{s.desc}</div>
                <div style={{ display: "inline-block", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: BLUE, border: `0.5px solid ${BLUE}`, padding: "4px 10px" }}>{s.tag}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, textAlign: "right" }}>
            <Link href="/services" style={{ fontSize: 13, color: BLUE, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
              See all services & pricing <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About strip ── */}
      <section style={{ borderBottom: `0.5px solid ${SAND}` }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div style={{ padding: "72px 48px", borderRight: `0.5px solid ${SAND}` }}>
            <p style={{ fontSize: 16, color: "#9a9a9a", marginBottom: 32 }}>About</p>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 500, lineHeight: 1.25, color: NAV, marginBottom: 20 }}>Most startups don't fail because of bad ideas.</div>
            <p style={{ fontSize: 15, color: BODY, lineHeight: 1.75, marginBottom: 28, maxWidth: 460 }}>
              They fail because nobody helped them translate the idea into something a dev team could build. I've spent a decade bridging that gap — and I built Scoped Consulting to make that expertise accessible without the agency overhead.
            </p>
            <Link href="/about" style={{ fontSize: 13, color: BLUE, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
              About Maryke-Lee <ArrowRight size={13} />
            </Link>
          </div>
          <div style={{ padding: "72px 48px", background: NAV, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32 }}>
            {[
              { num: "10+", label: "Years in BA & delivery" },
              { num: "AU·NZ", label: "Markets served" },
              { num: "Zero", label: "Lock-ins. Ever." },
            ].map((s) => (
              <div key={s.label} style={{ borderTop: "0.5px solid #2a2a2a", paddingTop: 16 }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 40, fontWeight: 400, color: CREAM, lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "#666", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ padding: "96px 0", textAlign: "center", borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          <div className="reveal">
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 500, color: NAV, marginBottom: 12, lineHeight: 1.15 }}>Stop building the wrong thing.</div>
            <p style={{ fontSize: 15, color: MUTED, marginBottom: 32 }}>Book a 30-minute discovery call. No commitment, no sales pitch.</p>
            <Link
              href="/book"
              style={{ display: "inline-block", background: NAV, color: CREAM, padding: "13px 32px", fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1a2030"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = NAV; }}
            >
              Book a free call
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
