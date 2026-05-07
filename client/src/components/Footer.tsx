export default function Footer() {
  return (
    <footer className="bg-[#0e1c2a] px-6 md:px-16 py-7 flex flex-col md:flex-row justify-between items-center gap-3 border-t border-white/[0.06]">
      <div className="font-serif text-lg font-bold text-white">
        Scoped<span className="text-[#b8832a]">.</span>
      </div>
      <p className="text-xs text-white/35 text-center md:text-right">
        Fixed-fee · Outcomes-based · Auckland, NZ · 2026 · All prices NZD · GST not included
      </p>
    </footer>
  );
}
