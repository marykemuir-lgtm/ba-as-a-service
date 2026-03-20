/*
 * BookCall.tsx — BA-as-a-Service
 * Design: Editorial Minimalism — two-column layout, contact form, trust signals
 */
import { useState } from "react";
import { CheckCircle2, Clock, Calendar, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";

const CTA_BG = "/images/cta-bg.webp";

const serviceOptions = [
  "Business Analysis & Requirements",
  "Product Discovery Workshop",
  "Backlog Management & Grooming",
  "Process Mapping & System Design",
  "Fractional Product Owner Support",
  "Delivery Lead & Project Oversight",
  "Not sure — I need advice",
];

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
        headers: {
          "Content-Type": "application/json",
        },
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
        toast.success("Request submitted! Check your email for confirmation.");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to submit form. Please try again.");
      console.error(error);
    }
  };

  return (
    <div ref={revealRef}>
      {/* Page header */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ background: "oklch(0.16 0.01 260)" }}
      >
        <img
          src={CTA_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: "oklch(0.55 0.12 260)" }}>
              Speak With a Consultant
            </p>
            <h1
              className="display-headline text-4xl lg:text-5xl mb-6"
              style={{ color: "white" }}
            >
              Schedule a discovery session.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "oklch(0.72 0.01 260)" }}>
              Fill in the form below and one of our consultants will be in touch within one business day to confirm your discovery call. It's free, it's 30 minutes, and there's no commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20" style={{ background: "oklch(0.985 0.004 85)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: info */}
            <div className="lg:col-span-2 reveal">
              <p className="section-label mb-5">What to expect</p>

              <div className="flex flex-col gap-6 mb-10">
                {[
                  {
                    icon: Clock,
                    title: "30 minutes",
                    desc: "A focused conversation — no fluff, no hard sell.",
                  },
                  {
                    icon: MessageSquare,
                    title: "Honest advice",
                    desc: "Our consultant will tell you honestly whether and how BA-as-a-Service can help.",
                  },
                  {
                    icon: Calendar,
                    title: "Flexible scheduling",
                    desc: "Available across AEST, NZST, and UK/EU time zones.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: "oklch(0.94 0.06 260 / 0.15)" }}
                      >
                        <Icon size={18} style={{ color: "oklch(0.46 0.18 260)" }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-0.5" style={{ color: "oklch(0.18 0.01 260)" }}>
                          {item.title}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.01 260)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="p-5 rounded-lg border"
                style={{
                  background: "oklch(0.97 0.003 85)",
                  borderColor: "oklch(0.88 0.006 85)",
                }}
              >
                <p className="section-label mb-3">Good to know</p>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "No commitment required after the call",
                    "Proposal sent within 2 business days if relevant",
                    "Engagements can start within 1–2 weeks",
                    "Fully remote — works across time zones",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="shrink-0 mt-0.5"
                        style={{ color: "oklch(0.46 0.18 260)" }}
                      />
                      <span className="text-sm leading-snug" style={{ color: "oklch(0.38 0.01 260)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3 reveal" style={{ transitionDelay: "100ms" }}>
              {submitted ? (
                <div
                  className="p-10 rounded-xl border text-center"
                  style={{
                    background: "oklch(0.99 0.002 85)",
                    borderColor: "oklch(0.88 0.006 85)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "oklch(0.94 0.06 260 / 0.15)" }}
                  >
                    <CheckCircle2 size={32} style={{ color: "oklch(0.46 0.18 260)" }} />
                  </div>
                  <h2
                    className="font-bold text-2xl mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.01 260)" }}
                  >
                    Request received!
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "oklch(0.52 0.01 260)" }}>
                    Thank you, <strong>{formData.name}</strong>. One of our consultants will be in touch within one business day to confirm your discovery call.
                  </p>
                  <p className="text-sm mt-4" style={{ color: "oklch(0.62 0.01 260)" }}>
                    Check your inbox at <strong>{formData.email}</strong> for a confirmation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-xl border"
                  style={{
                    background: "oklch(0.99 0.002 85)",
                    borderColor: "oklch(0.88 0.006 85)",
                  }}
                >
                  <h2
                    className="font-bold text-xl mb-6"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.01 260)" }}
                  >
                    Request a consultation
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ color: "oklch(0.42 0.01 260)" }}
                      >
                        Full Name <span style={{ color: "oklch(0.46 0.18 260)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all duration-200"
                        style={{
                          borderColor: "oklch(0.88 0.006 85)",
                          background: "white",
                          color: "oklch(0.18 0.01 260)",
                          fontFamily: "var(--font-body)",
                        }}
                        onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "oklch(0.46 0.18 260)"; }}
                        onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "oklch(0.88 0.006 85)"; }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ color: "oklch(0.42 0.01 260)" }}
                      >
                        Email Address <span style={{ color: "oklch(0.46 0.18 260)" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all duration-200"
                        style={{
                          borderColor: "oklch(0.88 0.006 85)",
                          background: "white",
                          color: "oklch(0.18 0.01 260)",
                          fontFamily: "var(--font-body)",
                        }}
                        onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "oklch(0.46 0.18 260)"; }}
                        onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "oklch(0.88 0.006 85)"; }}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="mb-5">
                    <label
                      className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                      style={{ color: "oklch(0.42 0.01 260)" }}
                    >
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all duration-200"
                      style={{
                        borderColor: "oklch(0.88 0.006 85)",
                        background: "white",
                        color: "oklch(0.18 0.01 260)",
                        fontFamily: "var(--font-body)",
                      }}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "oklch(0.46 0.18 260)"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "oklch(0.88 0.006 85)"; }}
                    />
                  </div>

                  {/* Service */}
                  <div className="mb-5">
                    <label
                      className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                      style={{ color: "oklch(0.42 0.01 260)" }}
                    >
                      What service are you interested in?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all duration-200"
                      style={{
                        borderColor: "oklch(0.88 0.006 85)",
                        background: "white",
                        color: formData.service ? "oklch(0.18 0.01 260)" : "oklch(0.62 0.01 260)",
                        fontFamily: "var(--font-body)",
                      }}
                      onFocus={(e) => { (e.currentTarget as HTMLSelectElement).style.borderColor = "oklch(0.46 0.18 260)"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLSelectElement).style.borderColor = "oklch(0.88 0.006 85)"; }}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label
                      className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                      style={{ color: "oklch(0.42 0.01 260)" }}
                    >
                      Tell us about your project <span style={{ color: "oklch(0.46 0.18 260)" }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you're building, where you're stuck, or what kind of support you're looking for..."
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        borderColor: "oklch(0.88 0.006 85)",
                        background: "white",
                        color: "oklch(0.18 0.01 260)",
                        fontFamily: "var(--font-body)",
                      }}
                      onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "oklch(0.46 0.18 260)"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "oklch(0.88 0.006 85)"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 text-sm font-semibold rounded transition-all duration-200 flex items-center justify-center gap-2"
                    style={{
                      background: loading ? "oklch(0.65 0.12 260)" : "oklch(0.46 0.18 260)",
                      color: "white",
                      fontFamily: "var(--font-body)",
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.38 0.18 260)";
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.46 0.18 260)";
                    }}
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

                  <p className="text-xs text-center mt-4" style={{ color: "oklch(0.62 0.01 260)" }}>
                    One of our consultants will respond within one business day to confirm your call.
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
