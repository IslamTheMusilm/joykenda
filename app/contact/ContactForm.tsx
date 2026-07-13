"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeyqpvb";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target as HTMLFormElement),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
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
            name="name"
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
            name="email"
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
          name="phone"
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
          name="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-2 w-full bg-transparent border-b border-charcoal/25 py-2.5 focus:outline-none focus:border-gold transition-colors resize-none"
          placeholder="Tell us about your painting, event, or course interest..."
        />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-700">
          <AlertCircle size={16} />
          Something went wrong sending your message. Please try again, or
          email us directly at joykendaarts@gmail.com.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
        {status === "sending" ? (
          <>
            <Loader2 size={15} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}

