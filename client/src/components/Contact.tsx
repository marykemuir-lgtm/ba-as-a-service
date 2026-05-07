import { useState } from "react";
import { motion } from "framer-motion";

const FORMSPREE_ID = "mreyqjol";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-semibold tracking-[3px] uppercase text-[#b8832a] mb-4">Get Started</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0e1c2a] leading-tight mb-5">
            Let's figure out what you actually need.
          </h2>
          <p className="text-base text-[#4a5568] leading-relaxed mb-12">
            Book a free 30-minute intro call. No pitch, no pressure — just an honest conversation about your situation and whether there's a fit.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-left space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-semibold tracking-wide uppercase text-[#4a5568] block mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 border border-[#ddd8cf] bg-[#faf8f4] text-[#0e1c2a] text-sm rounded-sm focus:outline-none focus:border-[#b8832a] transition-colors placeholder:text-[#aaa]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold tracking-wide uppercase text-[#4a5568] block mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-[#ddd8cf] bg-[#faf8f4] text-[#0e1c2a] text-sm rounded-sm focus:outline-none focus:border-[#b8832a] transition-colors placeholder:text-[#aaa]"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold tracking-wide uppercase text-[#4a5568] block mb-2">What's the situation?</label>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Briefly describe what you're working on and what you need help with..."
              className="w-full px-4 py-3 border border-[#ddd8cf] bg-[#faf8f4] text-[#0e1c2a] text-sm rounded-sm focus:outline-none focus:border-[#b8832a] transition-colors placeholder:text-[#aaa] resize-none"
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="text-sm font-semibold tracking-[1.5px] uppercase text-white bg-[#0e1c2a] px-12 py-4 rounded-sm hover:bg-[#1a3a5c] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-600 mt-4 font-medium">Message sent — I'll be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 mt-4">Something went wrong. Please try again or email directly.</p>
            )}
            <p className="text-xs text-[#4a5568] mt-4">hello@scopedconsulting.co.nz · Auckland, NZ</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
