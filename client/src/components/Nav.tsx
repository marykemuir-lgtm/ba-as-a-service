import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(250,248,244,0.95)] backdrop-blur-md border-b border-[#ddd8cf]"
          : "bg-transparent"
      }`}
    >
      <div className="font-serif text-xl font-bold text-[#0e1c2a] tracking-wide">
        Scoped<span className="text-[#b8832a]">.</span>
      </div>
      <a
        href="#contact"
        className="text-xs font-semibold tracking-widest uppercase text-white bg-[#0e1c2a] px-6 py-2.5 rounded-sm hover:bg-[#1a3a5c] transition-colors"
      >
        Book a Call
      </a>
    </nav>
  );
}
