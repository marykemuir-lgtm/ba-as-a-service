/*
 * Home.tsx — Scoped Consulting
 * Design: Editorial Minimalism — asymmetric hero, left-anchored content
 * Sections: Hero, Problems, Who We Work With, Services Overview, How It Works Teaser, CTA
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, FileText, Users, Layers, GitBranch, Briefcase, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HERO_IMG = "/images/hero-abstract.webp";
const CTA_BG = "/images/cta-bg.webp";

const services = [
  {
    icon: FileText,
    title: "Business Analysis & Requirements",
    desc: "Our consultants translate business needs into structured documentation for development teams, including user stories, acceptance criteria, and process mapping.",
  },
  {
    icon: Users,
    title: "Product Discovery Workshops",
    desc: "Facilitated workshops that align stakeholders, surface assumptions, and define what to build — and why.",
  },
  {
    icon: Layers,
    title: "Backlog Management",
    desc: "Prioritised, groomed backlogs with clear acceptance criteria so your team always knows what's next and why it matters.",
  },
  {
    icon: MapPin,
    title: "Process & System Design",
    desc: "End-to-end process mapping and system design documentation that bridges business intent and technical delivery.",
  },
  {
    icon: Briefcase,
    title: "Fractional Product Owner Support",
    desc: "Embedded fractional PO support — attending standups, refining stories, and keeping delivery aligned with business goals.",
  },
];

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "40+", label: "Projects delivered" },
  { value: "3", label: "Core service areas" },
  { value: "100%", label: "Remote-ready" },
];

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()


  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ background: "oklch(0.985 0.004 85)" }}
      >
        {/* Abstract visual — right side */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block"
          style={{ opacity: 0.85 }}
        >
          <img
            src={HERO_IMG}
            alt=""
            className="w-full h-full object-cover object-left"
          />
          {/* Gradient fade to left */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, oklch(0.985 0.004 85) 0%, transparent 40%)",
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-xl lg:max-w-2xl py-24 lg:py-32">
            {/* Section label */}
            <p className="section-label mb-6">Business Analysis · Product Ownership · Delivery</p>

            {/* Headline */}
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
              className="text-lg leading-relaxed mb-4 max-w-lg"
              style={{ color: "oklch(0.42 0.01 260)", fontFamily: "var(--font-body)" }}
            >
              Our consultants translate business ideas into structured requirements, user stories, and delivery plans so development teams can build the right solution the first time.
            </p>

            <p
              className="text-sm leading-relaxed mb-8 max-w-lg"
              style={{ color: "oklch(0.52 0.01 260)", fontFamily: "var(--font-body)" }}
            >
              Perfect for startups building digital products, companies implementing internal systems, and organisations working with development vendors.
            </p>

            <div className="mb-8 pb-8 border-b" style={{ borderColor: "oklch(0.88 0.006 85)" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "oklch(0.46 0.18 260)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Senior Business Analysis Expertise
              </p>
              <p className="text-base font-semibold" style={{ color: "oklch(0.18 0.01 260)", fontFamily: "var(--font-body)" }}>
                From $1,800 per consulting engagement
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded transition-all duration-200" style={{
                background: "oklch(0.46 0.18 260)",
                color: "white",
                fontFamily: "var(--font-body)",
                display: "inline-flex",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.38 0.18 260)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.46 0.18 260)"; }}
              >
                Speak With a Consultant
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded border transition-all duration-200" style={{
                borderColor: "oklch(0.78 0.01 260)",
                color: "oklch(0.38 0.01 260)",
                background: "transparent",
                fontFamily: "var(--font-body)",
                display: "inline-flex",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const link = e.currentTarget as HTMLAnchorElement;
                link.style.borderColor = "oklch(0.46 0.18 260)";
                link.style.color = "oklch(0.46 0.18 260)";
              }}
              onMouseLeave={(e) => {
                const link = e.currentTarget as HTMLAnchorElement;
                link.style.borderColor = "oklch(0.78 0.01 260)";
                link.style.color = "oklch(0.38 0.01 260)";
              }}
              >
                View Services
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap gap-4">
              {["Flexible engagements", "Senior-level expertise", "Structured delivery approach"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} style={{ color: "oklch(0.46 0.18 260)" }} />
                  <span className="text-xs font-medium" style={{ color: "oklch(0.52 0.01 260)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Problems We Solve ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.006 85)" }}>
        <div className="container">
          <div className="reveal max-w-2xl">
            <h2 className="display-headline text-2xl lg:text-3xl mb-6">
              Problems We Help Solve
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.42 0.01 260)" }}>
              Many organisations struggle with:
            </p>
            <ul className="flex flex-col gap-3 mb-6 max-w-xl">
              {[
                "Unclear product requirements",
                "Developers receiving vague instructions",
                "Projects running over budget",
                "Features being built that the business didn't intend",
                "Misalignment between business and technology teams",
              ].map((problem) => (
                <li key={problem} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.42 0.01 260)" }}>
                  <span className="text-lg" style={{ color: "oklch(0.46 0.18 260)" }}>•</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.42 0.01 260)" }}>
              We help turn unclear ideas into structured artefacts such as backlogs, user stories, and process flows.
            </p>
            <p className="text-base font-semibold" style={{ color: "oklch(0.18 0.01 260)" }}>
              Our consultants bring structure and clarity to product development.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who We Work With ── */}
      <section className="py-16" style={{ background: "oklch(0.985 0.004 85)" }}>
        <div className="container">
          <div className="reveal max-w-2xl">
            <h2 className="display-headline text-2xl lg:text-3xl mb-6">
              Who We Work With
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.42 0.01 260)" }}>
              Our consultants typically support:
            </p>
            <ul className="flex flex-col gap-3 max-w-xl">
              {[
                "Startups building new digital products",
                "Growing companies implementing internal systems",
                "Organisations working with development vendors",
                "Businesses needing structured requirements before development begins",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.42 0.01 260)" }}>
                  <span className="text-lg" style={{ color: "oklch(0.46 0.18 260)" }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="py-20" style={{ background: "oklch(0.96 0.006 85)" }}>
        <div className="container">
          <div className="reveal mb-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="display-headline text-3xl lg:text-4xl max-w-lg">
                Everything you need to go from idea to shipped product.
              </h2>
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
                  className="reveal p-6 rounded-lg border bg-white transition-all duration-200 group"
                  style={{
                    borderColor: "oklch(0.88 0.006 85)",
                    transitionDelay: `${i * 60}ms`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "oklch(0.46 0.18 260)";
                    el.style.boxShadow = "0 4px 24px oklch(0.46 0.18 260 / 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "oklch(0.88 0.006 85)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "oklch(0.94 0.06 260 / 0.15)" }}
                  >
                    <Icon size={20} style={{ color: "oklch(0.46 0.18 260)" }} />
                  </div>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.01 260)" }}
                  >
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

      {/* ── How it works teaser ── */}
      <section className="py-24" style={{ background: "oklch(0.985 0.004 85)" }}>
        <div className="container">
          <div className="reveal mb-14">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="display-headline text-3xl lg:text-4xl max-w-xl">
              A simple, structured engagement from day one.
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div
              className="hidden lg:block absolute top-8 left-0 right-0 h-px"
              style={{ background: "oklch(0.88 0.006 85)", zIndex: 0 }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery Call", desc: "Speak with a consultant to discuss your product, system, or delivery challenge." },
                { step: "02", title: "Workshop & Analysis", desc: "A consultant works with your team to translate ideas into structured requirements." },
                { step: "03", title: "Requirements Pack", desc: "You receive documentation including backlog items, user stories, and delivery guidance." },
                { step: "04", title: "Review & Iterate", desc: "Regular check-ins to ensure the work is landing well and adapting to your needs." },
              ].map((item, i) => (
                <div key={item.step} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5 border-2"
                    style={{
                      background: "oklch(0.985 0.004 85)",
                      borderColor: "oklch(0.46 0.18 260)",
                    }}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{ color: "oklch(0.46 0.18 260)", fontFamily: "var(--font-body)" }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.01 260)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.01 260)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal mt-12">
            <Link href="/how-it-works" className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "oklch(0.46 0.18 260)", textDecoration: "none" }}>
              Learn more about the process <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "oklch(0.16 0.01 260)" }}
      >
        <img
          src={CTA_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
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
            <Link href="/book" className="flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded transition-all duration-200 inline-flex" style={{
              background: "oklch(0.46 0.18 260)",
              color: "white",
              fontFamily: "var(--font-body)",
              textDecoration: "none",
            }}
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
