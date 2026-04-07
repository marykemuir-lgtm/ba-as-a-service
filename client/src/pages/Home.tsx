/*
 * Home.tsx — Scoped Consulting
 * Design: Dark, bold, modern — dot pattern hero, sharp copy, founder-focused
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, FileText, Users, Layers, Briefcase, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: FileText,
    title: "Business Analysis",
    desc: "User stories, acceptance criteria, and process maps your dev team can actually use — not vague briefs that get lost in translation.",
  },
  {
    icon: Users,
    title: "Product Discovery",
    desc: "Facilitated workshops that get your whole team aligned on what to build — and why — before a single developer writes a line of code.",
  },
  {
    icon: Layers,
    title: "Backlog Management",
    desc: "A prioritised, groomed backlog so your team never sits idle waiting for direction — saving you thousands in wasted sprint hours.",
  },
  {
    icon: MapPin,
    title: "Process & System Design",
    desc: "End-to-end process mapping that bridges your vision and your dev team's reality — so nothing gets lost between business and tech.",
  },
  {
    icon: Briefcase,
    title: "Fractional Product Owner",
    desc: "Embedded PO support — standups, story refining, delivery alignment — without the salary, super, and overhead of a full-time hire.",
  },
];

const problems = [
  "\"We handed requirements to devs and got something completely different.\"",
  "\"Scope keeps changing and we have no idea what we're actually building.\"",
  "\"We can't afford a full-time BA or PO but we desperately need one.\"",
  "\"Our project is over budget and we don't know how to get it back on track.\"",
];

const steps = [
  { step: "01", title: "Free Discovery Call", desc: "30 minutes. We listen, ask the right questions, and tell you honestly if and how we can help." },
  { step: "02", title: "Scoped Proposal", desc: "A fixed-scope, fixed-price proposal. You know exactly what you're getting and what it costs — no surprises." },
  { step: "03", title: "Workshop & Delivery", desc: "We work with your team to produce a dev-ready requirements pack — backlog, user stories, and process maps." },
  { step: "04", title: "Handover & Support", desc: "Your team walks away with everything they need. We stay available for questions during rollout." },
];

const DotPattern = () => (
  <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
    <svg
      className="absolute right-0 top-0 w-full h-full"
      style={{ opacity: 0.15 }}
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#4a6cf7"/>
        </pattern>
      </defs>
      <rect width="400" height="500" fill="url(#dots)"/>
    </svg>
    <svg
      className="absolute right-16 top-12"
      style={{ opacity: 0.06 }}
      width="260"
      height="260"
      viewBox="0 0 260 260"
      fill="none"
    >
      <rect x="10" y="10" width="240" height="240" rx="4" stroke="#4a6cf7" strokeWidth="0.75"/>
      <rect x="40" y="40" width="180" height="180" rx="4" stroke="#4a6cf7" strokeWidth="0.75"/>
      <rect x="70" y="70" width="120" height="120" rx="4" stroke="#4a6cf7" strokeWidth="0.75"/>
      <rect x="100" y="100" width="60" height="60" rx="4" stroke="#4a6cf7" strokeWidth="0.75"/>
      <line x1="130" y1="10" x2="130" y2="250" stroke="#4a6cf7" strokeWidth="0.5"/>
      <line x1="10" y1="130" x2="250" y2="130" stroke="#4a6cf7" strokeWidth="0.5"/>
    </svg>
  </div>
);

export default function Home() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} style={{ background: "#080b12", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        style={{ background: "#080b12" }}
      >
        <DotPattern />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-8"
              style={{ background: "#0f1520", border: "0.5px solid #1e2a40", color: "#6b8ef0", letterSpacing: "0.06em" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4a6cf7" }}></span>
              AU & NZ · Fixed-scope · No lock-in
            </div>

            <h1
              className="display-headline text-4xl sm:text-5xl lg:text-6xl mb-3"
              style={{ lineHeight: 1.08, color: "white" }}
            >
              Your developers are expensive.
            </h1>
            <h1
              className="display-headline text-4xl sm:text-5xl lg:text-6xl mb-8"
              style={{ lineHeight: 1.08, color: "#4a6cf7" }}
            >
              Don't let vague requirements waste them.
            </h1>

            <p
              className="text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: "#94a3b8", fontFamily: "var(--font-body)" }}
            >
              Scoped Consulting gives startups and small businesses access to senior BA, Product Owner, and Delivery expertise — on a fixed-scope, fractional basis. No full-time hire. No overhead. Just clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/book"
                className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg transition-all duration-200"
                style={{ background: "#4a6cf7", color: "white", fontFamily: "var(--font-body)", display: "inline-flex", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#3b5ce5"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#4a6cf7"; }}
              >
                Book a Free Discovery Call
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/how-it-works"
                className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg border transition-all duration-200"
                style={{ borderColor: "#1e2a40", color: "#94a3b8", background: "transparent", fontFamily: "var(--font-body)", display: "inline-flex", textDecoration: "none" }}
                onMouseEnter={(e) => { const l = e.currentTarget as HTMLAnchorElement; l.style.borderColor = "#4a6cf7"; l.style.color = "white"; }}
                onMouseLeave={(e) => { const l = e.currentTarget as HTMLAnchorElement; l.style.borderColor = "#1e2a40"; l.style.color = "#94a3b8"; }}
              >
                See How It Works
              </Link>
            </div>

            <div
              className="flex flex-wrap gap-8 pt-8"
              style={{ borderTop: "0.5px solid #151b28" }}
            >
              {[
                { value: "10+", label: "Years experience" },
                { value: "40+", label: "Projects delivered" },
                { value: "$1,800", label: "From, fixed-scope" },
                { value: "100%", label: "Remote-ready" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="display-headline text-3xl" style={{ color: "#4a6cf7", lineHeight: 1 }}>{stat.value}</p>
                  <p className="text-xs mt-1" style={{ color: "#64748b" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="py-20" style={{ background: "#0a0d16", borderTop: "0.5px solid #151b28" }}>
        <div className="container">
          <div className="reveal mb-8">
            <p className="text-xs font-semibold mb-3" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.14em" }}>Sound familiar?</p>
            <h2 className="display-headline text-3xl lg:text-4xl max-w-2xl" style={{ color: "white" }}>
              Most startups waste their dev budget before a single line of code is written.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="reveal flex items-start gap-3 p-4 rounded-xl"
                style={{ background: "#0d1220", border: "0.5px solid #1e2a40" }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "#0f2040", border: "1.5px solid #4a6cf7" }}
                >
                  <CheckCircle2 size={10} style={{ color: "#4a6cf7" }} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{problem}</p>
              </div>
            ))}
          </div>
          <p className="text-sm font-semibold" style={{ color: "#4a6cf7" }}>That's exactly what we fix. →</p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20" style={{ background: "#080b12", borderTop: "0.5px solid #151b28" }}>
        <div className="container">
          <div className="reveal mb-10">
            <p className="text-xs font-semibold mb-3" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.14em" }}>What we do</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="display-headline text-3xl lg:text-4xl max-w-lg" style={{ color: "white" }}>
                Senior delivery expertise. Exactly when you need it.
              </h2>
              <Link href="/services" className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#4a6cf7", textDecoration: "none" }}>
                All services <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="reveal p-5 rounded-xl transition-all duration-200"
                  style={{ background: "#0d1220", border: "0.5px solid #1e2a40", transitionDelay: `${i * 60}ms` }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#4a6cf7"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#1e2a40"; }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "#131a2e" }}
                  >
                    <Icon size={16} style={{ color: "#4a6cf7" }} />
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "var(--font-display)", color: "white" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    {service.desc}
                  </p>
                </div>
              );
            })}
            <div
              className="reveal p-5 rounded-xl flex flex-col justify-center items-center text-center"
              style={{ background: "#0f1a35", border: "1.5px solid #4a6cf7" }}
            >
              <p className="display-headline text-3xl mb-1" style={{ color: "#4a6cf7" }}>$1,800</p>
              <p className="text-xs mb-4" style={{ color: "#64748b" }}>From. Fixed-scope. No surprises.</p>
              <Link
                href="/book"
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg"
                style={{ background: "#4a6cf7", color: "white", textDecoration: "none", display: "inline-flex" }}
              >
                Book a free call <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20" style={{ background: "#0a0d16", borderTop: "0.5px solid #151b28" }}>
        <div className="container">
          <div className="reveal mb-10">
            <p className="text-xs font-semibold mb-3" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.14em" }}>How it works</p>
            <h2 className="display-headline text-3xl lg:text-4xl max-w-xl" style={{ color: "white" }}>
              From first conversation to delivery-ready requirements — fast.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, i) => (
              <div key={item.step} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ border: "1.5px solid #4a6cf7" }}
                >
                  <span className="text-xs font-bold" style={{ color: "#4a6cf7", fontFamily: "var(--font-body)" }}>
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "var(--font-display)", color: "white" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ background: "#4a6cf7" }}>
        <div className="container">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-semibold mb-4" style={{ color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              Ready to stop guessing?
            </p>
            <h2
              className="display-headline text-3xl lg:text-5xl mb-6"
              style={{ color: "white", lineHeight: 1.15 }}
            >
              Book a free 30-minute call.<br />Walk away with clarity.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
              Whether you hire us or not, you'll leave the call with a clearer picture of what you need to build and how to get it done. No pitch. No pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/book"
                className="flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-lg transition-all duration-200 inline-flex"
                style={{ background: "white", color: "#4a6cf7", fontFamily: "var(--font-body)", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f0f4ff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "white"; }}
              >
                Book Your Free Call
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-lg transition-all duration-200 inline-flex"
                style={{ background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: "var(--font-body)", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.8)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
              >
                View Services
              </Link>
            </div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Led by Maryke-Lee Muir — 10+ years in BA, delivery, and product ownership across AU & NZ.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
