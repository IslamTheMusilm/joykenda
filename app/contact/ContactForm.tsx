"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire this up to your email service / API route of choice
    // (e.g. Resend, Formspree, or a Next.js API route) before going live.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-paper border border-beige/70 p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-gold-dark" size={36} strokeWidth={1.3} />
        <p className="mt-4 font-display text-2xl text-ink">Message sent</p>
        <p className="mt-2 text-charcoal/65">
          Thank you, {form.name || "friend"}. We'll be in touch shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="text-xs tracking-widest2 uppercase text-charcoal/60">
            Name
          </label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-2 w-full bg-transparent border-b border-charcoal/25 py-2.5 focus:outline-none focus:border-gold transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-xs tracking-widest2 uppercase text-charcoal/60">
            Email
          </label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-2 w-full bg-transparent border-b border-charcoal/25 py-2.5 focus:outline-none focus:border-gold transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label className="text-xs tracking-widest2 uppercase text-charcoal/60">
          Phone
        </label>
        <input
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="mt-2 w-full bg-transparent border-b border-charcoal/25 py-2.5 focus:outline-none focus:border-gold transition-colors"
          placeholder="+971 ..."
        />
      </div>

      <div>
        <label className="text-xs tracking-widest2 uppercase text-charcoal/60">
          Message
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-2 w-full bg-transparent border-b border-charcoal/25 py-2.5 focus:outline-none focus:border-gold transition-colors resize-none"
          placeholder="Tell us about your painting, event, or course interest..."
        />
      </div>

      <button type="submit" className="btn-primary">
        Send Message <Send size={15} />
      </button>
    </form>
  );
}
