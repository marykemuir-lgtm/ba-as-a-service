import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CREAM = "#f5f0e8";
const NAV = "#0d1117";
const SAND = "#d4c9b0";
const BLUE = "#4a6cf7";
const MUTED = "#6b6b6b";
const BODY = "#3a3a3a";

const FORMSPREE_ID = "mreyqjol";

const serviceOptions = [
  "AI Requirements Blueprint",
  "Clarity Sprint",
  "Discovery & Definition",
  "Fractional BA/PO",
  "Not sure — I need advice",
];

export default function BookCall() {
  const revealRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setSubmitted(true);
    } catch {}
    setLoading(false);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    background: "#fff8f0",
    border: `0.5px solid ${SAND}`,
    color: NAV,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    fontSize: 11,
    fontWeight: 500,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    color: "#9a9a9a",
    marginBottom: 8,
  };

  return (
    <div ref={revealRef} style={{ background: CREAM }}>

      {/* ── Hero ── */}
      <section style={{ padding: "80px 0 64px", borderBottom: `0.5px solid ${SAND}` }}>
        <div className="container">
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: BLUE, marginBottom: 20, fontWeight: 500 }}>Book a call · Free · 30 minutes</p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 500, lineHeight: 1.1, color: NAV, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Let's talk about<br />what you're building.
          </h1>
          <p style={{ fontSize: 16, color: BODY, maxWidth: 500, lineHeight: 1.75 }}>
            No pitch, no pressure. Tell us where you are and we'll tell you honestly whether and how Scoped can help.
          </p>
        </div>
      </section>

      {/* ── Form + side ── */}
      <section style={{ borderBottom: `0.5px solid ${SAND}` }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Form */}
          <div className="lg:col-span-7" style={{ padding: "64px 48px", borderRight: `0.5px solid ${SAND}` }}>
            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16, paddingTop: 40 }}>
                <CheckCircle2 size={40} style={{ color: BLUE }} />
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 500, color: NAV }}>We'll be in touch shortly.</div>
                <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75 }}>
                  Thanks for reaching out. You'll hear back within one business day. In the meantime, feel free to email us at{" "}
                  <a href="mailto:hello@scopedconsulting.co.nz" style={{ color: BLUE, textDecoration: "underline" }}>hello@scopedconsulting.co.nz</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Your name</label>
                    <input name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email address</label>
                    <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="jane@company.com" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Company / project name</label>
                  <input name="company" value={formData.company} onChange={handleChange} placeholder="Your startup or project" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>What are you interested in?</label>
                  <select name="service" value={formData.service} onChange={handleChange} style={{ ...inputStyle, appearance: "none" }}>
                    <option value="">Select an option</option>
                    {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Tell us about your project</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What are you building? Where are you stuck? What does success look like?"
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  style={{ background: loading ? "#555" : NAV, color: CREAM, padding: "13px 32px", fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", border: "none", cursor: loading ? "not-allowed" : "pointer", alignSelf: "flex-start" }}
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
                <p style={{ fontSize: 12, color: "#9a9a9a" }}>
                  Prefer email? Reach us directly at{" "}
                  <a href="mailto:hello@scopedconsulting.co.nz" style={{ color: BLUE }}>hello@scopedconsulting.co.nz</a>
                </p>
              </form>
            )}
          </div>

          {/* Side panel */}
          <div className="lg:col-span-5" style={{ padding: "64px 48px", background: "#fff8f0", display: "flex", flexDirection: "column", gap: 40 }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9a9a9a", marginBottom: 20, fontWeight: 500 }}>What to expect</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "30 minutes", desc: "Focused, no fluff. We cover your situation, your needs, and whether we're a fit." },
                  { label: "No pitch", desc: "If Scoped isn't right for you, we'll say so. Honest advice is the whole point." },
                  { label: "Next steps within 48 hours", desc: "If we're a fit, a scoped proposal lands in your inbox within two business days." },
                ].map((item) => (
                  <div key={item.label} style={{ paddingTop: 16, borderTop: `0.5px solid ${SAND}` }}>
                    <div style={{ fontSize: 14, fontWeight: 500, color: NAV, marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderTop: `0.5px solid ${SAND}`, paddingTop: 32 }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9a9a9a", marginBottom: 16, fontWeight: 500 }}>Packages from</p>
              {[
                { name: "Clarity Sprint", price: "$1,800 NZD" },
                { name: "AI Requirements Blueprint", price: "$3,500 NZD" },
                { name: "Discovery & Definition", price: "$5,500 NZD" },
                { name: "Fractional BA/PO", price: "$4,200 / month" },
              ].map((pkg) => (
                <div key={pkg.name} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `0.5px solid ${SAND}`, fontSize: 13 }}>
                  <span style={{ color: BODY }}>{pkg.name}</span>
                  <span style={{ color: NAV, fontWeight: 500 }}>{pkg.price}</span>
                </div>
              ))}
              <p style={{ fontSize: 11, color: "#9a9a9a", marginTop: 12 }}>All prices NZD ex GST. Fixed scope, fixed price.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
