/*
 * Home.tsx — Scoped Consulting
 * Redesign: Bold stats, service cards, vertical steps, testimonial, dark CTA
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, FileText, Users, Layers, Briefcase, MapPin, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HERO_IMG = "/images/hero-abstract.webp";
const CTA_BG = "/images/cta-bg.webp";

const services = [
  {
    icon: FileText,
    title: "Business Analysis & Requirements",
    desc: "User stories, acceptance criteria, and process mapping that give your dev team exactly what they need to build the right thing.",
  },
  {
    icon: Users,
    title: "Product Discovery Workshops",
    desc: "Facilitated workshops that align stakeholders, surface assumptions, and define what to build — and why.",
  },
  {
    icon: Layers,
    title: "Backlog Management",
    desc: "Prioritised, groomed backlogs with clear acceptance criteria so your team always knows what's next.",
  },
  {
    icon: MapPin,
    title: "Process & System Design",
    desc: "End-to-end process mapping and system design documentation that bridges business intent and technical delivery.",
  },
  {
    icon: Briefcase,
    title: "Fractional Product Owner",
    desc: "Embedded fractional PO support — attending standups, refining stories, and keeping delivery aligned with business goals.",
  },
];

const stats = [
  { value: "10+", label: "Years experience" },
  { value: "40+", label: "Projects delivered" },
  { value: "100%", label: "Remote-ready" },
];

const steps = [
  { step: "01", title: "Discovery Call", desc: "Free 30-minute chat about your product, system, or delivery challenge. No pitch, no pressure." },
  { step: "02", title: "Workshop & Analysis", desc: "We work with your team to translate ideas into structured requirements and delivery plans." },
  { step: "03", title: "Requirements Pack", desc: "You receive a full documentation pack — backlog items, user stories, and delivery guidance." },
  { step: "04", title: "Review & Iterate", desc: "Regular check-ins to ensure the work is landing well and adapting as your needs evolve." },
];

export default function Home() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>

      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ background: "oklch(0.975 0.006 85)" }}
      >
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block"
          style={{ opacity: 0.85 }}
        >
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover object-left" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, oklch(0.975 0.006 85) 0%, transparent 40%)" }}
          />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 py-24 lg:py-32">

            <div className="flex-1 max-w-xl">
              <p className="section-label mb-6">Business Analysis · Product Ownership · Delivery</p>
              <h1
                className="display-headline text-4xl sm:text-5xl lg:text-6xl mb-6"
                style={{ lineHeight: 1.08 }}
              >
                Turn Your Business Idea Into
                <span className="block italic" style={{ color: "oklch(0.46 0.18 260)" }}>
                  Build-Ready Requirements.
                </span>
              </h1>
              <p
                className="text-lg leading-relaxed mb-8 max-w-lg"
                style={{ color: "oklch(0.42 0.01 260)", fontFamily: "var(--font-body)" }}
              >
                We translate business ideas into structured requirements, user stories, and delivery plans — so your dev team builds the right thing, first time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/book"
                  className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded transition-all duration-200"
                  style={{ background: "oklch(0.46 0.18 260)", color: "white", fontFamily: "var(--font-body)", display: "inline-flex", textDecoration: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.38 0.18 260)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.46 0.18 260)"; }}
                >
                  Speak With a Consultant
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded border transition-all duration-200"
                  style={{ borderColor: "oklch(0.78 0.01 260)", color: "oklch(0.38 0.01 260)", background: "transparent", fontFamily: "var(--font-body)", display: "inline-flex", textDecoration: "none" }}
                  onMouseEnter={(e) => { const l = e.currentTarget as HTMLAnchorElement; l.style.borderColor = "oklch(0.46 0.18 260)"; l.style.color = "oklch(0.46 0.18 260)"; }}
                  onMouseLeave={(e) => { const l = e.currentTarget as HTMLAnchorElement; l.style.borderColor = "oklch(0.78 0.01 260)"; l.style.color = "oklch(0.38 0.01 260)"; }}
                >
                  View Services
                </Link>
              </div>

              <div className="flex flex-wrap gap-4">
                {["Flexible engagements", "Senior-level expertise", "Remote-ready"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} style={{ color: "oklch(0.46 0.18 260)" }} />
                    <span className="text-xs font-medium" style={{ color: "oklch(0.52 0.01 260)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-row lg:flex-col gap-4 lg:w-44">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 lg:flex-none rounded-xl p-5 text-center border"
                  style={{ background: "white", borderColor: "oklch(0.88 0.006 85)" }}
                >
                  <p
                    className="display-headline text-4xl mb-1"
                    style={{ color: "oklch(0.46 0.18 260)", lineHeight: 1 }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: "oklch(0.52 0.01 260)" }}>{stat.label}</p>
                </div>
              ))}
              <div
                className="flex-1 lg:flex-none rounded-xl p-5 text-center border"
                style={{ background: "oklch(0.46 0.18 260)", borderColor: "oklch(0.46 0.18 260)" }}
              >
                <p className="text-xs font-semibold text-white mb-1">From</p>
                <p className="display-headline text-2xl text-white" style={{ lineHeight: 1 }}>$1,800</p>
                <p className="text-xs text-white opacity-70 mt-1">per engagement</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ background: "oklch(0.985 0.004 85)" }}>
        <div className="container">
          <div className="reveal mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="section-label mb-3">Services</p>
                <h2 className="display-headline text-3xl lg:text-4xl max-w-lg">
                  Everything you need to go from idea to shipped product.
                </h2>
              </div>
              <Link href="/services" className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "oklch(0.46 0.18 260)", textDecoration: "none" }}>
                All services <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="reveal p-6 rounded-xl border bg-white transition-all duration-200"
                  style={{ borderColor: "oklch(0.88 0.006 85)", transitionDelay: `${i * 60}ms` }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "oklch(0.46 0.18 260)"; el.style.boxShadow = "0 4px 24px oklch(0.46 0.18 260 / 0.08)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "oklch(0.88 0.006 85)"; el.style.boxShadow = "none"; }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "oklch(0.94 0.06 260 / 0.15)" }}
                  >
                    <Icon size={20} style={{ color: "oklch(0.46 0.18 260)" }} />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.01 260)" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.01 260)" }}>
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ background: "oklch(0.96 0.006 85)" }}>
        <div className="container">
          <div className="reveal mb-12">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="display-headline text-3xl lg:text-4xl max-w-xl">
              A simple, structured engagement from day one.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, i) => (
              <div key={item.step} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5 border-2"
                  style={{ background: "oklch(0.96 0.006 85)", borderColor: "oklch(0.46 0.18 260)" }}
                >
                  <span className="text-sm font-bold" style={{ color: "oklch(0.46 0.18 260)", fontFamily: "var(--font-body)" }}>
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.01 260)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.01 260)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal mt-10">
            <Link href="/how-it-works" className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "oklch(0.46 0.18 260)", textDecoration: "none" }}>
              Learn more about the process <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "oklch(0.16 0.01 260)" }}
      >
        <img src={CTA_BG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="container relative z-10">
          <div className="max-w-2xl reveal">
            <p className="section-label mb-4" style={{ color: "oklch(0.55 0.12 260)" }}>
              Ready to Bring Clarity to Your Project?
            </p>
            <h2
              className="display-headline text-3xl lg:text-5xl mb-6"
              style={{ color: "white" }}
            >
              Speak with one of our consultants.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.72 0.01 260)" }}>
              Discuss your product idea or delivery challenge in a free 30-minute discovery call. No pitch, no pressure — just honest advice about how we can help.
            </p>
            <Link
              href="/book"
              className="flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded transition-all duration-200 inline-flex"
              style={{ background: "oklch(0.46 0.18 260)", color: "white", fontFamily: "var(--font-body)", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.55 0.18 260)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.46 0.18 260)"; }}
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
