import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

// Home-page section for the Fairmont Ajman x Joykenda workshops.
// Uses the site's own colours and classes (bg-ink, text-cream, gold-light, eyebrow, font-display, btn-primary).
// The button is a plain <a> (not next/link) because /register.html is a static file in /public.

const workshops = [
  { day: "Fri · 9 Oct", name: "Glass Painting" },
  { day: "Sat · 10 Oct", name: "Silk Painting" },
  { day: "Sun · 11 Oct", name: "Watercolour" },
  { day: "Mon · 12 Oct", name: "Oil Painting" },
];

export default function WorkshopBanner() {
  return (
    <section className="bg-ink text-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow !text-gold-light text-center">
            Fairmont Ajman &amp; Joykenda Fine Arts Company
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-center mt-3">
            Fine Arts <span className="italic text-gold-light">Workshops</span>
          </h2>
          <p className="mt-5 text-center text-cream/70 text-lg">
            9 – 12 October 2026 · Daily, 4:00 – 5:00 PM · Fairmont Ajman
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {workshops.map((w, i) => (
            <Reveal key={w.name} delay={i * 0.1}>
              <div className="text-center border border-cream/15 p-8 h-full transition-colors duration-500 hover:border-gold-light/60">
                <p className="text-xs tracking-widest2 uppercase text-gold-light">{w.day}</p>
                <p className="mt-3 font-display text-2xl">{w.name}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-cream/60">
            Free participation · Keep your artwork · Prizes for the best work · Led by artist Mona Jebali
          </p>
          <div className="mt-8 flex justify-center">
            <a href="/register.html" className="btn-primary">
              Register Now <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
