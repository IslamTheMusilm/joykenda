import type { Metadata } from "next";
import { Phone, Mail, Clock, Instagram, Facebook, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Joykenda Fine Arts Company in Ajman, UAE — call, email, or send a message.",
};

export default function ContactPage() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-center">Get In Touch</p>
          <h1 className="gold-rule center font-display text-4xl sm:text-5xl text-ink text-center mt-3">
            Contact Us
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-center text-charcoal/65">
            Questions about a painting, planning an event, or interested in a
            course? We'd love to hear from you.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div className="bg-paper border border-beige/70 p-9 sm:p-12">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-2xl text-ink mb-5">
                  Reach Us Directly
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:+971509508385"
                    className="flex items-center gap-3 text-charcoal/75 hover:text-gold-dark transition-colors"
                  >
                    <Phone size={18} className="text-gold-dark" />
                    +971 50 950 8385
                  </a>
                  <a
                    href="mailto:joykendaarts@gmail.com"
                    className="flex items-center gap-3 text-charcoal/75 hover:text-gold-dark transition-colors"
                  >
                    <Mail size={18} className="text-gold-dark" />
                    joykendaarts@gmail.com
                  </a>
                  <div className="flex items-start gap-3 text-charcoal/75">
                    <MapPin size={18} className="text-gold-dark mt-0.5" />
                    Ajman, United Arab Emirates
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl text-ink mb-5 flex items-center gap-2">
                  <Clock size={20} className="text-gold-dark" /> Business Hours
                </h2>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex justify-between max-w-xs">
                    <span>Saturday – Thursday</span>
                    <span>10:00 AM – 8:00 PM</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Friday</span>
                    <span>By appointment</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-ink mb-5">Follow Along</h2>
                <div className="flex gap-4">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full border border-beige flex items-center justify-center text-charcoal/70 hover:text-gold-dark hover:border-gold transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full border border-beige flex items-center justify-center text-charcoal/70 hover:text-gold-dark hover:border-gold transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16">
          <div className="w-full aspect-[16/6] bg-beige/40 border border-beige flex items-center justify-center text-charcoal/40 text-sm">
            {/* Replace with an embedded Google Maps iframe pointing to your exact location */}
            Google Maps embed placeholder — Ajman, UAE
          </div>
        </Reveal>
      </div>
    </section>
  );
}
