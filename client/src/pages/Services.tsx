/*
 * Services.tsx — Scoped Consulting
 * Design: Dark theme — dot pattern hero, outcome-focused copy, pricing cards
 */
import { Link } from "wouter";
import { ArrowRight, FileText, Users, Layers, GitBranch, Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: FileText,
    number: "01",
    title: "Business Analysis & Requirements",
    tagline: "Translate business needs into dev-ready docs",
    desc: "Your developers can only build what they understand. We work with your stakeholders to turn vague ideas into structured user stories, acceptance criteria, and process maps — so nothing gets lost between business intent and technical delivery.",
    deliverables: [
      "Business Requirements Document (BRD)",
      "User stories & acceptance criteria",
      "Process mapping (BPMN)",
      "Functional specifications",
      "System interaction design",
    ],
  },
  {
    icon: Users,
    number: "02",
    title: "Product Discovery Workshops",
    tagline: "Align your team before you build",
    desc: "Most costly mistakes happen before development starts. We facilitate a structured discovery workshop to define your product vision, surface assumptions, align stakeholders, and establish MVP scope — saving weeks of expensive rework down the line.",
    deliverables: [
      "Problem statement & opportunity definition",
      "User persona development",
      "Feature prioritisation",
      "MVP scope definition",
      "Product roadmap guidance",
    ],
  },
  {
    icon: Layers,
    number: "03",
    title: "Backlog Management & Grooming",
    tagline: "A well-maintained backlog is a team superpower",
    desc: "A chaotic backlog slows teams down and creates misalignment. We bring structure to your product backlog — prioritising features, writing and refining user stories, and facilitating grooming sessions so your team always knows what's next.",
    deliverables: [
      "Prioritised product backlog",
      "Sprint-ready user stories",
      "Backlog grooming facilitation",
      "Roadmap alignment",
      "Definition of Ready (DoR) setup",
    ],
  },
  {
    icon: MapPin,
    number: "04",
    title: "Process Mapping & System Design",
    tagline: "Visualise the system before you build it",
    desc: "Understanding how your business processes and systems interact is critical before building a digital solution. We map current and future-state processes, identify pain points, and produce system design documentation that bridges business intent and technical architecture.",
    deliverables: [
      "As-is and to-be process maps",
      "Data flow diagrams",
      "System context diagrams",
      "Integration requirements",
      "Gap analysis report",
    ],
  },
  {
    icon: GitBranch,
    number: "05",
    title: "Fractional Product Owner",
    tagline: "Senior PO expertise, without the salary",
    desc: "Not every organisation needs a full-time PO — but every team needs PO-level thinking. We attend standups, refine backlogs, make prioritisation calls, and keep your delivery aligned with business goals. All the value, none of the overhead.",
    deliverables: [
      "Sprint planning facilitation",
      "Daily standup attendance",
      "Backlog refinement sessions",
      "Vendor coordination",
      "Product roadmap support",
    ],
  },
  {
    icon: Briefcase,
    number: "06",
    title: "Delivery Lead & Project Oversight",
    tagline: "Keep delivery on track and stakeholders informed",
    desc: "When you need someone to own the delivery process end-to-end, we step in as Delivery Lead — coordinating teams, managing dependencies, tracking milestones, and ensuring stakeholders are informed and aligned throughout the project lifecycle.",
    deliverables: [
      "Delivery plan & milestones",
      "Risk and issue management",
      "Stakeholder status reporting",
      "Team coordination",
      "Post-delivery retrospective",
    ],
  },
];

const packages = [
  {
    tier: "Starter",
    price: "$1,800",
    period: "From · Business Analysis",
    description: "Structured documentation and analysis for digital products or system implementations.",
    includes: [
      "User stories & acceptance criteria",
      "Process mapping",
      "Functional documentation",
      "Backlog preparation",
    ],
    note: "Ideal for pre-development readiness.",
    featured: false,
  },
  {
    tier: "Most Popular",
    price: "$2,500",
    period: "From · Product Discovery",
    description: "A structured engagement to turn your idea into clear product scope and development-ready requirements.",
    includes: [
      "Discovery workshop",
      "MVP feature definition",
      "Backlog outline",
      "Initial user stories",
      "Delivery guidance",
    ],
    note: "Typical engagement: 2–4 days of consulting.",
    featured: true,
  },
  {
    tier: "Ongoing",
    price: "$2,200",
    period: "Per month · Fractional PO & Delivery",
    description: "Ongoing support for organisations building digital solutions who need consistent delivery structure.",
    includes: [
      "Backlog management",
      "Sprint planning support",
      "Vendor collaboration",
      "Delivery structure guidance",
    ],
    note: "Typical: 1–2 days per month.",
    featured: false,
  },
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

export default function Services() {
  const revealRef = useScrollReveal();

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
              What we do
            </p>
            <h1
              className="display-headline text-4xl lg:text-5xl mb-6"
              style={{ lineHeight: 1.1, color: "white" }}
            >
              Senior expertise.{" "}
              <span style={{ color: "#4a6cf7" }}>No full-time overhead.</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "#94a3b8", fontFamily: "var(--font-body)" }}
            >
              Every engagement is fixed-scope and fixed-price. You know exactly what you're getting, what it costs, and when it's done — before we start.
            </p>
            <div
              className="flex flex-wrap gap-6 pt-6"
              style={{ borderTop: "0.5px solid #151b28" }}
            >
              {["Fixed-scope engagements", "No lock-in contracts", "Startup-friendly pricing", "100% remote-ready"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4a6cf7", flexShrink: 0 }}></span>
                  <span className="text-sm" style={{ color: "#64748b" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16" style={{ background: "#0a0d16", borderTop: "0.5px solid #151b28" }}>
        <div className="container">
          <p className="text-xs font-semibold mb-10" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.14em" }}>Services</p>
          <div className="flex flex-col">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 py-10"
                  style={{
                    borderBottom: i < services.length - 1 ? "0.5px solid #151b28" : "none",
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  {/* Number + icon */}
                  <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                    <span
                      className="text-5xl font-bold leading-none"
                      style={{ fontFamily: "var(--font-display)", color: "#1e2a40" }}
                    >
                      {service.number}
                    </span>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: "#131a2e" }}
                    >
                      <Icon size={16} style={{ color: "#4a6cf7" }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6">
                    <p className="text-xs font-semibold mb-2" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {service.tagline}
                    </p>
                    <h2
                      className="font-bold text-xl mb-4"
                      style={{ fontFamily: "var(--font-display)", color: "white" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                      {service.desc}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="lg:col-span-4">
                    <div
                      className="p-5 rounded-xl"
                      style={{ background: "#0d1220", border: "0.5px solid #1e2a40" }}
                    >
                      <p className="text-xs font-semibold mb-3" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        What you get
                      </p>
                      <ul className="flex flex-col gap-2">
                        {service.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <span
                              className="w-1 h-1 rounded-full shrink-0 mt-2"
                              style={{ background: "#4a6cf7" }}
                            />
                            <span className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20" style={{ background: "#080b12", borderTop: "0.5px solid #151b28" }}>
        <div className="container">
          <div className="reveal mb-10">
            <p className="text-xs font-semibold mb-3" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              Pricing
            </p>
            <h2 className="display-headline text-3xl lg:text-4xl mb-4" style={{ color: "white" }}>
              Fixed-scope. Fixed-price. No surprises.
            </h2>
            <p className="text-base leading-relaxed max-w-xl" style={{ color: "#64748b" }}>
              Every engagement is quoted upfront. You know exactly what you're paying before we start — no hourly billing, no scope creep surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {packages.map((pkg, i) => (
              <div
                key={pkg.tier}
                className="reveal p-6 rounded-xl"
                style={{
                  background: pkg.featured ? "#0f1a35" : "#0d1220",
                  border: pkg.featured ? "1.5px solid #4a6cf7" : "0.5px solid #1e2a40",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold" style={{ color: pkg.featured ? "#6b8ef0" : "#64748b", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {pkg.tier}
                  </p>
                  {pkg.featured && (
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: "#4a6cf7", color: "white", fontSize: "9px" }}
                    >
                      RECOMMENDED
                    </span>
                  )}
                </div>
                <p className="display-headline text-3xl mb-1" style={{ color: "#4a6cf7", lineHeight: 1 }}>
                  {pkg.price}
                </p>
                <p className="text-xs mb-4" style={{ color: "#64748b" }}>{pkg.period}</p>
                <p className="text-xs leading-relaxed mb-5" style={{ color: "#64748b" }}>{pkg.description}</p>
                <div style={{ borderTop: "0.5px solid #1e2a40", paddingTop: "14px" }}>
                  <p className="text-xs font-semibold mb-3" style={{ color: "#374151", textTransform: "uppercase", letterSpacing: "0.06em" }}>Includes</p>
                  <ul className="flex flex-col gap-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full shrink-0 mt-1.5" style={{ background: "#4a6cf7" }} />
                        <span className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs italic mt-4" style={{ color: "#374151" }}>{pkg.note}</p>
              </div>
            ))}
          </div>

          <div
            className="reveal p-5 rounded-xl"
            style={{ background: "#0d1220", border: "0.5px solid #1e2a40" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
              <span style={{ color: "#94a3b8", fontWeight: 500 }}>Larger engagements</span> are quoted separately depending on scope.{" "}
              <span style={{ color: "#94a3b8", fontWeight: 500 }}>Startup-friendly pricing</span> is available for early-stage companies with limited budgets — just ask.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: "#4a6cf7" }}>
        <div className="container">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-semibold mb-4" style={{ color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              Ready to get started?
            </p>
            <h2
              className="display-headline text-3xl lg:text-5xl mb-6"
              style={{ color: "white", lineHeight: 1.15 }}
            >
              Not sure which service you need?<br />Let's figure it out together.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
              Book a free 30-minute discovery call. We'll listen to your situation and recommend exactly what you need — no upsell, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-lg transition-all duration-200 inline-flex"
                style={{ background: "white", color: "#4a6cf7", fontFamily: "var(--font-body)", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f0f4ff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "white"; }}
              >
                Book a Free Discovery Call
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
