/*
 * BookCall.tsx — Scoped Consulting
 * Design: Dark theme — dot pattern hero, form + email option, trust signals
 */
import { useState } from "react";
import { CheckCircle2, Clock, Calendar, MessageSquare, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";

const serviceOptions = [
  "Business Analysis & Requirements",
  "Product Discovery Workshop",
  "Backlog Management & Grooming",
  "Process Mapping & System Design",
  "Fractional Product Owner Support",
  "Delivery Lead & Project Oversight",
  "Not sure — I need advice",
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

export default function BookCall() {
  const revealRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mreyqjol", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setLoading(false);
        setSubmitted(true);
        toast.success("Request submitted! We'll be in touch within one business day.");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to submit. Please try again or email us directly.");
      console.error(error);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    background: "#131a2e",
    border: "0.5px solid #1e2a40",
    borderRadius: "8px",
    fontSize: "13px",
    color: "#94a3b8",
    outline: "none",
    fontFamily: "var(--font-body)",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    fontSize: "10px",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#64748b",
    marginBottom: "6px",
  };

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
              Let's Talk
            </p>
            <h1
              className="display-headline text-4xl lg:text-5xl mb-6"
              style={{ lineHeight: 1.1, color: "white" }}
            >
              Book a free{" "}
              <span style={{ color: "#4a6cf7" }}>30-minute discovery call.</span>
            </h1>
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "#94a3b8", fontFamily: "var(--font-body)" }}
            >
              No pitch, no pressure. Fill in the form and we'll be in touch within one business day — or just send us an email directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16" style={{ background: "#0a0d16", borderTop: "0.5px solid #151b28" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left — info */}
            <div className="lg:col-span-2 reveal flex flex-col gap-5">
              <p className="text-xs font-semibold mb-1" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.14em" }}>
                What to expect
              </p>

              {[
                { icon: Clock, title: "30 minutes", desc: "A focused conversation — no fluff, no hard sell." },
                { icon: MessageSquare, title: "Honest advice", desc: "We'll tell you honestly whether and how we can help — no upsell." },
                { icon: Calendar, title: "Flexible scheduling", desc: "Available across AEST and NZST time zones." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-3 items-start">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#131a2e" }}
                    >
                      <Icon size={14} style={{ color: "#4a6cf7" }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: "white" }}>{item.title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}

              {/* Good to know */}
              <div
                className="p-5 rounded-xl"
                style={{ background: "#0d1220", border: "0.5px solid #1e2a40" }}
              >
                <p className="text-xs font-semibold mb-3" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Good to know
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "No commitment required after the call",
                    "Proposal sent within 2 business days if relevant",
                    "Engagements can start within 1–2 weeks",
                    "Fully remote — works across time zones",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={12} className="shrink-0 mt-0.5" style={{ color: "#4a6cf7" }} />
                      <span className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Email option */}
              <div
                className="p-4 rounded-xl flex items-center gap-4"
                style={{ background: "#0f1520", border: "1.5px solid #1e2a40" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#131a2e" }}
                >
                  <Mail size={14} style={{ color: "#4a6cf7" }} />
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "#64748b" }}>Prefer to email directly?</p>
                  <a
                    href="mailto:hello@scopedconsulting.co.nz"
                    className="text-sm font-semibold"
                    style={{ color: "#4a6cf7", textDecoration: "none" }}
                  >
                    hello@scopedconsulting.co.nz
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3 reveal" style={{ transitionDelay: "100ms" }}>
              {submitted ? (
                <div
                  className="p-10 rounded-2xl text-center"
                  style={{ background: "#0d1220", border: "0.5px solid #1e2a40" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "#131a2e" }}
                  >
                    <CheckCircle2 size={32} style={{ color: "#4a6cf7" }} />
                  </div>
                  <h2
                    className="font-bold text-2xl mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "white" }}
                  >
                    Request received!
                  </h2>
                  <p className="text-base leading-relaxed mb-2" style={{ color: "#94a3b8" }}>
                    Thank you, <span style={{ color: "white" }}>{formData.name}</span>. We'll be in touch within one business day to confirm your discovery call.
                  </p>
                  <p className="text-sm" style={{ color: "#64748b" }}>
                    Check your inbox at <span style={{ color: "#94a3b8" }}>{formData.email}</span>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl"
                  style={{ background: "#0d1220", border: "0.5px solid #1e2a40" }}
                >
                  <h2
                    className="font-bold text-xl mb-6"
                    style={{ fontFamily: "var(--font-display)", color: "white" }}
                  >
                    Request a consultation
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label style={labelStyle}>Full Name <span style={{ color: "#4a6cf7" }}>*</span></label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        required
                        style={inputStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#4a6cf7"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "#1e2a40"; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address <span style={{ color: "#4a6cf7" }}>*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        required
                        style={inputStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#4a6cf7"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "#1e2a40"; }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label style={labelStyle}>Company / Organisation</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#4a6cf7"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#1e2a40"; }}
                    />
                  </div>

                  <div className="mb-4">
                    <label style={labelStyle}>What service are you interested in?</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, color: formData.service ? "#94a3b8" : "#64748b" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#4a6cf7"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#1e2a40"; }}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label style={labelStyle}>Tell us about your project <span style={{ color: "#4a6cf7" }}>*</span></label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you're building, where you're stuck, or what kind of support you're looking for..."
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#4a6cf7"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#1e2a40"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mb-4"
                    style={{
                      background: loading ? "#374151" : "#4a6cf7",
                      color: "white",
                      border: "none",
                      cursor: loading ? "not-allowed" : "pointer",
                      fontFamily: "var(--font-body)",
                    }}
                    onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = "#3b5ce5"; }}
                    onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = "#4a6cf7"; }}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Request Consultation"
                    )}
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-px" style={{ background: "#1e2a40" }} />
                    <span className="text-xs" style={{ color: "#374151" }}>or reach out directly</span>
                    <div className="flex-1 h-px" style={{ background: "#1e2a40" }} />
                  </div>

                  {/* Email button */}
                  <a
                    href="mailto:hello@scopedconsulting.co.nz"
                    className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-lg transition-all duration-200"
                    style={{
                      background: "transparent",
                      color: "#4a6cf7",
                      border: "1px solid #1e2a40",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#4a6cf7"; e.currentTarget.style.background = "#0f1520"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e2a40"; e.currentTarget.style.background = "transparent"; }}
                  >
                    <Mail size={14} />
                    hello@scopedconsulting.co.nz
                  </a>

                  <p className="text-xs text-center mt-4" style={{ color: "#374151" }}>
                    One of our consultants will respond within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
