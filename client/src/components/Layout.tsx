import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const NAV = "#0d1117";
const CREAM = "#f5f0e8";
const SAND = "#d4c9b0";
const BLUE = "#4a6cf7";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services & Pricing" },
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
    <div className="min-h-screen flex flex-col" style={{ background: CREAM }}>

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(245,240,232,0.97)" : CREAM,
          backdropFilter: "blur(8px)",
          borderBottom: `0.5px solid ${SAND}`,
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">

            <Link href="/" style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 2, fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 500, color: NAV }}>
                <span style={{ color: BLUE, fontWeight: 400 }}>[</span>
                Scoped
                <span style={{ color: BLUE, fontWeight: 400 }}>]</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                  <span
                    className="text-xs transition-colors duration-200"
                    style={{
                      color: location === link.href ? NAV : "#888",
                      fontWeight: location === link.href ? 500 : 400,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = NAV; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = location === link.href ? NAV : "#888"; }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/book"
                className="hidden md:inline-flex items-center px-5 py-2 text-xs font-medium transition-all duration-200"
                style={{ background: NAV, color: CREAM, textDecoration: "none", letterSpacing: "0.04em" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1a2030"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = NAV; }}
              >
                Book a call
              </Link>
              <button
                className="md:hidden p-2"
                style={{ color: NAV, background: "transparent", border: "none" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>

        {mobileOpen && (
          <div style={{ background: CREAM, borderTop: `0.5px solid ${SAND}` }}>
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                  <span
                    className="block px-4 py-3 text-sm transition-colors duration-200"
                    style={{ color: location === link.href ? BLUE : "#555", fontWeight: location === link.href ? 500 : 400 }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link
                href="/book"
                className="mt-3 flex items-center justify-center px-5 py-3 text-sm font-medium"
                style={{ background: NAV, color: CREAM, textDecoration: "none" }}
              >
                Book a call
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16">{children}</main>

      <footer style={{ background: NAV }}>
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 500, color: CREAM, marginBottom: 12 }}>
                <span style={{ color: BLUE }}>[</span>Scoped<span style={{ color: BLUE }}>]</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                AI Requirements Strategist. Fractional BA & Delivery for startups and small businesses across AU & NZ.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium mb-4" style={{ color: BLUE, textTransform: "uppercase", letterSpacing: "0.1em" }}>Navigation</p>
              <div className="flex flex-col gap-2">
                {[...navLinks, { href: "/book", label: "Book a Call" }].map((link) => (
                  <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                    <span
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#666" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = CREAM; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "#666"; }}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium mb-4" style={{ color: BLUE, textTransform: "uppercase", letterSpacing: "0.1em" }}>Get in touch</p>
              <p className="text-sm leading-relaxed mb-2" style={{ color: "#666" }}>Free 30-minute discovery call. No pitch, no pressure.</p>
              <p className="text-sm mb-4" style={{ color: "#666" }}>hello@scopedconsulting.co.nz</p>
              <Link
                href="/book"
                className="inline-flex items-center px-5 py-2.5 text-xs font-medium transition-all duration-200"
                style={{ background: BLUE, color: "white", textDecoration: "none", letterSpacing: "0.04em" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#3b5ce5"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = BLUE; }}
              >
                Book a discovery call
              </Link>
            </div>

          </div>

          <div className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "0.5px solid #1a2030" }}>
            <p className="text-xs" style={{ color: "#3a3a3a" }}>© {new Date().getFullYear()} Scoped Consulting. All rights reserved.</p>
            <p className="text-xs" style={{ color: "#3a3a3a" }}>AU & NZ · Fixed-scope · No lock-in</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

