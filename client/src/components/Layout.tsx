/*
 * Layout.tsx — Scoped Consulting
 * Design: Dark theme — navy bg, blue accents, mobile-responsive nav
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
    <div className="min-h-screen flex flex-col" style={{ background: "#080b12" }}>

      {/* Navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,11,18,0.97)" : "rgba(8,11,18,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "0.5px solid #151b28",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none" }}>
              <svg width="160" height="36" viewBox="0 0 220 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4 L4 4 L4 40 L10 40" stroke="#4a6cf7" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26 4 L32 4 L32 40 L26 40" stroke="#4a6cf7" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="46" y="18" fontFamily="Georgia, serif" fontSize="14" fontWeight="500" fill="white">Scoped</text>
                <text x="46" y="35" fontFamily="Georgia, serif" fontSize="11" letterSpacing="2.5" fill="#4a6cf7">CONSULTING</text>
              </svg>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                  <span
                    className="text-sm font-medium transition-colors duration-200"
                    style={{
                      color: location === link.href ? "#4a6cf7" : "#64748b",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "white"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = location === link.href ? "#4a6cf7" : "#64748b"; }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/book"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200"
                style={{ background: "#4a6cf7", color: "white", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#3b5ce5"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#4a6cf7"; }}
              >
                Book a Discovery Call
              </Link>

              <button
                className="md:hidden p-2 rounded-lg"
                style={{ color: "#94a3b8", background: "transparent", border: "none" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden border-t"
            style={{ background: "#080b12", borderColor: "#151b28" }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                  <span
                    className="block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200"
                    style={{
                      color: location === link.href ? "#4a6cf7" : "#94a3b8",
                      background: location === link.href ? "#0f1520" : "transparent",
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link
                href="/book"
                className="mt-3 flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-lg"
                style={{ background: "#4a6cf7", color: "white", textDecoration: "none" }}
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer
        className="border-t"
        style={{ background: "#080b12", borderColor: "#151b28" }}
      >
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <svg width="160" height="36" viewBox="0 0 220 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 4 L4 4 L4 40 L10 40" stroke="#6b8ef0" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M26 4 L32 4 L32 40 L26 40" stroke="#6b8ef0" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="46" y="18" fontFamily="Georgia, serif" fontSize="14" fontWeight="500" fill="white">Scoped</text>
                  <text x="46" y="35" fontFamily="Georgia, serif" fontSize="11" letterSpacing="2.5" fill="#6b8ef0">CONSULTING</text>
                </svg>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                Senior BA, Product Owner, and Delivery expertise for startups and small businesses across AU & NZ.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-semibold mb-4" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.1em" }}>Navigation</p>
              <div className="flex flex-col gap-2">
                {[...navLinks, { href: "/book", label: "Book a Call" }].map((link) => (
                  <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                    <span
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#64748b" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "white"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "#64748b"; }}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Get in touch */}
            <div>
              <p className="text-xs font-semibold mb-4" style={{ color: "#4a6cf7", textTransform: "uppercase", letterSpacing: "0.1em" }}>Get in Touch</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
                Ready to bring clarity to your project? Book a free 30-minute discovery call.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200"
                style={{ background: "#4a6cf7", color: "white", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#3b5ce5"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#4a6cf7"; }}
              >
                Book a Discovery Call
              </Link>
            </div>

          </div>

          <div
            className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
            style={{ borderTop: "0.5px solid #151b28" }}
          >
            <p className="text-xs" style={{ color: "#374151" }}>
              © {new Date().getFullYear()} Scoped Consulting. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: "#374151" }}>
              Fractional BA · Product Owner · Delivery Lead
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
