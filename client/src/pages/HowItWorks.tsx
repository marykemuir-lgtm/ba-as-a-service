import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IllustrationClarity, IllustrationAccents } from "@/components/Illustrations";

const CREAM = "#f5f0e8";
const NAV = "#0d1117";
const SAND = "#d4c9b0";
const BLUE = "#4a6cf7";
const MUTED = "#6b6b6b";
const BODY = "#3a3a3a";

const steps = [
  { num: "01", title: "Discovery call", duration: "30 minutes · Free", desc: "We listen, ask the right questions, and tell you honestly whether and how Scoped can help. No pitch, no pressure. You'll leave with clarity either way." },
  { num: "02", title: "Scoped proposal", duration: "Within 48 hours", desc: "A fixed-scope, fixed-price proposal lands in your inbox. You know exactly what you're getting, what it costs, and when it ends — before we start." },
  { num: "03", title: "Discovery & definition", duration: "1–3 weeks depending on scope", desc: "We work with your team — stakeholders, founders, devs — to surface requirements, map processes, and define exactly what gets built." },
  { num: "04", title: "Handover & support", duration: "Included in all engagements", desc: "Your team walks away with everything they need to build with confidence. We stay available for questions during the build phase." },
];

const faqs = [
  { q: "How is this different from hiring a contractor?", a: "Contractors bill by the hour — you carry the risk of scope drift. Scoped engagements are fixed price and fixed scope. You know the outcome before you commit." },
  { q: "Do I need to know exactly what I want before we talk?", a: "No. That's often exactly why you need us. A lot of clients come in with a rough idea — the discovery call helps us figure out what you actually need." },
  { q: "Can you work with my existing dev team?", a: "Yes, that's the usual model. We produce the requirements and documentation; your team (in-house or agency) does the build." },
  { q: "What if I'm not based in NZ?", a: "We work with AU and NZ clients remotely. AU clients are invoiced in AUD at the prevailing exchange rate." },
  { q: "How quickly can you start?", a: "Typically within one to two weeks of a signed proposal, depending on current availability." },
];

export default function HowItWorks() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} style={{ background: CREAM }}>

      {/* ── Hero ── */}
      <section style={{ borderBottom: `0.5px solid ${SAND}`, overflow: "hidden" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: 48, minHeight: 380 }}>
            <div style={{ flex: 1, padding: "72px 0" }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: BLUE, marginBottom: 20, fontWeight: 500 }}>Process · Simple by design</p>
              <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(34px, 4.5vw, 46px)", fontWeight: 500, lineHeight: 1.1, color: NAV, letterSpacing: "-0.02em", marginBottom: 20 }}>
                From first conversation<br />to delivery-ready requirements.<br /><em style={{ fontStyle: "italic", color: BLUE }}>Fast.</em>
              </h1>
              <p style={{ fontSize: 16, color: BODY, maxWidth: 440, lineHeight: 1.75 }}>Four steps. No retainers. No surprises. You stay in control at every stage.</p>
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", opacity: 0.85 }}>
              <IllustrationClarity width={380} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section style={{ padding: "72px 0", borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          {steps.map((step, i) => (
            <div key={step.num} className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 py-10" style={{ borderBottom: i < steps.length - 1 ? `0.5px solid ${SAND}` : "none", transitionDelay: `${i * 80}ms` }}>
              <div className="lg:col-span-2">
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 48, fontWeight: 400, color: SAND, lineHeight: 1 }}>{step.num}</div>
              </div>
              <div className="lg:col-span-5">
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 500, color: NAV, marginBottom: 8, lineHeight: 1.2 }}>{step.title}</div>
                <div style={{ fontSize: 12, color: BLUE, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>{step.duration}</div>
                <p style={{ fontSize: 14, color: BODY, lineHeight: 1.75 }}>{step.desc}</p>
              </div>
              <div className="lg:col-span-5 flex items-center">
                {i === 0 && (
                  <div style={{ background: "#fff8f0", border: `0.5px solid ${SAND}`, padding: "20px 24px", width: "100%" }}>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>"Whether you hire us or not, you'll leave the call with a clearer picture of what you need to build."</p>
                  </div>
                )}
                {i === 1 && (
                  <div style={{ background: NAV, padding: "20px 24px", width: "100%" }}>
                    <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: BLUE, marginBottom: 10 }}>What's in the proposal</p>
                    {["Scope of work", "Fixed deliverables", "Timeline", "Fixed price"].map((item) => (
                      <div key={item} style={{ fontSize: 13, color: "#888", display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{ display: "inline-block", width: 12, height: 1, background: BLUE }}></span>{item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Accent divider ── */}
      <IllustrationAccents />

      {/* ── FAQs ── */}
      <section style={{ padding: "72px 0", borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9a9a9a", marginBottom: 16, fontWeight: 500 }}>Common questions</p>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 500, color: NAV, lineHeight: 1.25 }}>Things people usually ask</div>
            </div>
            <div className="lg:col-span-8">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="reveal" style={{ padding: "24px 0", borderBottom: i < faqs.length - 1 ? `0.5px solid ${SAND}` : "none" }}>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 16, fontWeight: 500, color: NAV, marginBottom: 10 }}>{faq.q}</div>
                  <p style={{ fontSize: 14, color: BODY, lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div className="reveal">
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 500, color: NAV, marginBottom: 12, lineHeight: 1.2 }}>Ready to close the gap?</div>
            <p style={{ fontSize: 15, color: MUTED, marginBottom: 32 }}>Start with a free 30-minute discovery call.</p>
            <Link
              href="/book"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: NAV, color: CREAM, padding: "13px 32px", fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1a2030"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = NAV; }}
            >
              Book a free call <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

