/*
 * Layout.tsx — Scoped Consulting
 * Design: Editorial Minimalism — slim top nav, left-aligned logo, CTA right
 * Colors: warm white bg, charcoal text, slate blue accent
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
      {/* Navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(250,250,248,0.95)" : "rgba(250,250,248,0.98)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid oklch(0.88 0.006 85)" : "1px solid transparent",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-sm flex items-center justify-center"
                  style={{ background: "oklch(0.46 0.18 260)" }}
                >
                  <span className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-body)" }}>BA</span>
                </div>
                <div>
                <span
                  className="font-bold text-sm tracking-tight"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.01 260)" }}
                >
                  Scoped Consulting
                </span>
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-sm font-medium transition-colors duration-200 relative group"
                    style={{
                      color: location === link.href ? "oklch(0.46 0.18 260)" : "oklch(0.38 0.01 260)",
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                      style={{
                        background: "oklch(0.46 0.18 260)",
                        width: location === link.href ? "100%" : "0%",
                      }}
                    />
                  </span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link href="/book">
                <button
                  className="px-5 py-2.5 text-sm font-semibold rounded transition-all duration-200"
                  style={{
                    background: "oklch(0.46 0.18 260)",
                    color: "white",
                    fontFamily: "var(--font-body)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.38 0.18 260)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.46 0.18 260)";
                  }}
                >
                  Book a Discovery Call
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{ color: "oklch(0.18 0.01 260)" }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden border-t"
            style={{
              background: "oklch(0.985 0.004 85)",
              borderColor: "oklch(0.88 0.006 85)",
            }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="block py-2.5 text-sm font-medium"
                    style={{
                      color: location === link.href ? "oklch(0.46 0.18 260)" : "oklch(0.38 0.01 260)",
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/book">
                <button
                  className="mt-3 w-full py-3 text-sm font-semibold rounded"
                  style={{
                    background: "oklch(0.46 0.18 260)",
                    color: "white",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Book a Discovery Call
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1 pt-16 lg:pt-18">
        {children}
      </main>

      {/* Footer */}
      <footer
        className="border-t"
        style={{
          background: "oklch(0.16 0.01 260)",
          borderColor: "oklch(0.22 0.01 260)",
        }}
      >
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-7 h-7 rounded-sm flex items-center justify-center"
                  style={{ background: "oklch(0.46 0.18 260)" }}
                >
                  <span className="text-white font-bold text-xs">BA</span>
                </div>
              <span
                className="font-bold text-sm"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.9 0.005 85)" }}
              >
                Scoped Consulting
              </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.65 0.01 260)" }}>
                Fractional Business Analyst, Product Owner, and Delivery Lead services for startups and digital product companies.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="section-label mb-4" style={{ color: "oklch(0.55 0.12 260)" }}>Navigation</p>
              <div className="flex flex-col gap-2">
                {[...navLinks, { href: "/book", label: "Book a Call" }].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span
                      className="text-sm transition-colors duration-200"
                      style={{ color: "oklch(0.65 0.01 260)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "oklch(0.85 0.01 260)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "oklch(0.65 0.01 260)"; }}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="section-label mb-4" style={{ color: "oklch(0.55 0.12 260)" }}>Get in Touch</p>
              <p className="text-sm mb-4" style={{ color: "oklch(0.65 0.01 260)" }}>
                Ready to bring clarity to your product? Book a free 30-minute discovery call.
              </p>
              <Link href="/book">
                <button
                  className="px-5 py-2.5 text-sm font-semibold rounded border transition-all duration-200"
                  style={{
                    borderColor: "oklch(0.46 0.18 260)",
                    color: "oklch(0.75 0.12 260)",
                    background: "transparent",
                    fontFamily: "var(--font-body)",
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.background = "oklch(0.46 0.18 260)";
                    btn.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.background = "transparent";
                    btn.style.color = "oklch(0.75 0.12 260)";
                  }}
                >
                  Book a Discovery Call
                </button>
              </Link>
            </div>
          </div>

          <div
            className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
            style={{ borderColor: "oklch(0.22 0.01 260)" }}
          >
            <p className="text-xs" style={{ color: "oklch(0.45 0.01 260)" }}>
              © {new Date().getFullYear()} Scoped Consulting. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: "oklch(0.45 0.01 260)" }}>
              Fractional BA · Product Owner · Delivery Lead
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
