/*
 * Services.tsx — Scoped Consulting
 * Design: Editorial Minimalism — section labels, vertical accent lines, card grid
 */
import { Link } from "wouter";
import { ArrowRight, FileText, Users, Layers, GitBranch, Briefcase, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SERVICES_BG = "/images/services-bg.png";

const services = [
  {
    icon: FileText,
    number: "01",
    title: "Business Analysis & Requirements",
    tagline: "Translate business needs into structured documentation",
    desc: "Our consultants translate business needs into structured documentation for development teams. We work with your stakeholders to elicit, document, and validate requirements — turning business intent into clear, actionable user stories with well-defined acceptance criteria.",
    deliverables: [
      "Business Requirements Document (BRD)",
      "Functional specifications",
      "User stories with acceptance criteria",
      "System interaction design",
      "Process mapping (BPMN)",
    ],
  },
  {
    icon: Users,
    number: "02",
    title: "Product Discovery Workshops",
    tagline: "Align your team before you build",
    desc: "One of our consultants will facilitate a structured discovery workshop to define your product vision, core features, and MVP scope. We surface assumptions, align stakeholders, define the problem space, and establish a shared vision — saving weeks of rework down the line.",
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
    desc: "A chaotic backlog slows teams down and creates misalignment. Our consultants bring structure to your product backlog — prioritising features using proven frameworks, writing and refining user stories, and facilitating backlog grooming sessions.",
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
    desc: "Understanding how your business processes and systems interact is critical before designing a digital solution. Our consultants map current-state and future-state processes, identify pain points, and produce system design documentation that bridges business intent and technical architecture.",
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
    title: "Fractional Product Owner Support",
    tagline: "Senior PO expertise, without the full-time cost",
    desc: "Not every organisation needs a full-time Product Owner, but every team needs PO-level thinking. Our consultants provide ongoing product and delivery support — attending standups, sprint planning, refining the backlog, making prioritisation decisions, and keeping delivery aligned with business goals.",
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
    desc: "When you need someone to own the delivery process end-to-end, our consultants step in as Delivery Lead — coordinating teams, managing dependencies, tracking progress against milestones, and ensuring stakeholders are informed and aligned throughout the project lifecycle.",
    deliverables: [
      "Delivery plan & milestones",
      "Risk and issue management",
      "Stakeholder status reporting",
      "Team coordination",
      "Post-delivery retrospective",
    ],
  },
];

export default function Services() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      {/* Page header */}
      <section
        className="py-20 lg:py-28"
        style={{
          background: "oklch(0.985 0.004 85)",
          backgroundImage: `url(${SERVICES_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <p className="section-label mb-4">Services</p>
            <h1 className="display-headline text-4xl lg:text-5xl mb-6">
              Expert consulting services,{" "}
              <span className="italic" style={{ color: "oklch(0.46 0.18 260)" }}>
                on your terms.
              </span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "oklch(0.42 0.01 260)" }}>
              From discovery to delivery, Scoped Consulting provides the structured thinking and hands-on support your organisation needs — without the overhead of full-time hires.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20" style={{ background: "oklch(0.985 0.004 85)" }}>
        <div className="container">
          <div className="flex flex-col gap-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b"
                  style={{
                    borderColor: "oklch(0.88 0.006 85)",
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  {/* Left: number + icon */}
                  <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                    <span
                      className="text-5xl font-bold leading-none"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "oklch(0.88 0.01 260)",
                      }}
                    >
                      {service.number}
                    </span>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "oklch(0.94 0.06 260 / 0.15)" }}
                    >
                      <Icon size={20} style={{ color: "oklch(0.46 0.18 260)" }} />
                    </div>
                  </div>

                  {/* Middle: content */}
                  <div className="lg:col-span-6">
                    <p className="section-label mb-2">{service.tagline}</p>
                    <h2
                      className="font-bold text-2xl mb-4"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.01 260)" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.01 260)" }}>
                      {service.desc}
                    </p>
                  </div>

                  {/* Right: deliverables */}
                  <div className="lg:col-span-4">
                    <div
                      className="p-5 rounded-lg border"
                      style={{
                        background: "oklch(0.97 0.003 85)",
                        borderColor: "oklch(0.88 0.006 85)",
                      }}
                    >
                      <p className="section-label mb-3">What you get</p>
                      <ul className="flex flex-col gap-2">
                        {service.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                              style={{ background: "oklch(0.46 0.18 260)" }}
                            />
                            <span className="text-sm leading-snug" style={{ color: "oklch(0.38 0.01 260)" }}>
                              {d}
                            </span>
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

      {/* ── Typical Engagements / Pricing ── */}
      <section className="py-20" style={{ background: "oklch(0.985 0.004 85)" }}>
        <div className="container">
          <div className="reveal mb-12">
            <p className="section-label mb-3">Engagement Options</p>
            <h2 className="display-headline text-3xl lg:text-4xl max-w-2xl mb-4">
              Typical Engagements
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "oklch(0.42 0.01 260)" }}>
              Every engagement is different depending on scope and complexity. The following packages provide an indication of typical consulting engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Product Discovery Package",
                price: "From $2,500",
                description: "A structured engagement to turn your idea into clear product scope and development-ready requirements.",
                includes: [
                  "Discovery workshop",
                  "MVP feature definition",
                  "Backlog outline",
                  "Initial user stories",
                  "Delivery guidance",
                ],
                note: "Typical engagement: 2–4 days of consulting.",
              },
              {
                title: "Business Analysis & Requirements",
                price: "From $1,800",
                description: "Structured documentation and analysis for digital products or system implementations.",
                includes: [
                  "User stories and acceptance criteria",
                  "Process mapping",
                  "Functional documentation",
                  "Backlog preparation",
                ],
                note: "Ideal for organisations preparing to begin development.",
              },
              {
                title: "Fractional Product & Delivery Support",
                price: "From $2,200 per month",
                description: "Ongoing support for organisations building digital solutions.",
                includes: [
                  "Backlog management",
                  "Sprint planning support",
                  "Vendor collaboration",
                  "Delivery structure guidance",
                ],
                note: "Typical engagement: 1–2 days per month.",
              },
            ].map((pkg, i) => (
              <div
                key={pkg.title}
                className="reveal p-8 rounded-lg border bg-white"
                style={{
                  borderColor: "oklch(0.88 0.006 85)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.01 260)" }}
                >
                  {pkg.title}
                </h3>
                <p
                  className="text-base font-semibold mb-4"
                  style={{ color: "oklch(0.46 0.18 260)", fontFamily: "var(--font-body)" }}
                >
                  {pkg.price}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.52 0.01 260)" }}>
                  {pkg.description}
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.38 0.01 260)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Includes
                  </p>
                  <ul className="flex flex-col gap-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.52 0.01 260)" }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: "oklch(0.46 0.18 260)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs italic" style={{ color: "oklch(0.52 0.01 260)" }}>
                  {pkg.note}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal p-6 rounded-lg border" style={{
            borderColor: "oklch(0.88 0.006 85)",
            background: "oklch(0.99 0.002 85)",
          }}>
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.01 260)" }}>
              <strong>Larger product discovery and transformation engagements</strong> are quoted separately depending on project scope.<br />
              <strong>Startup-friendly engagements</strong> are available for early-stage companies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.96 0.006 85)" }}>
        <div className="container">
          <div className="reveal max-w-xl">
            <p className="section-label mb-4">Ready to get started?</p>
            <h2 className="display-headline text-3xl lg:text-4xl mb-6">
              Ready to Bring Clarity to Your Project?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.42 0.01 260)" }}>
              Speak with one of our consultants to discuss your product idea, system initiative, or delivery challenge.
            </p>
            <Link href="/book" className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded transition-all duration-200 inline-flex" style={{
              background: "oklch(0.46 0.18 260)",
              color: "white",
              fontFamily: "var(--font-body)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.38 0.18 260)"; }}
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
