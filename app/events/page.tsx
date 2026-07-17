import type { Metadata } from "next";
import { Building2, Users, School, HeartHandshake, Landmark, Gem } from "lucide-react";
import Reveal from "@/components/Reveal";
import PosterCarousel from "@/components/PosterCarousel";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Artistic event management by Joykenda Fine Arts Company — corporate events, workshops, exhibitions, and more.",
};

const events = [
  { icon: Building2, title: "Corporate Events", desc: "Elegant artistic touches for corporate gatherings and brand activations." },
  { icon: Users, title: "Private Art Workshops", desc: "Guided painting sessions for private groups, friends, and family." },
  { icon: School, title: "School Activities", desc: "Creative art programs and workshops designed for students." },
  { icon: HeartHandshake, title: "Community Art Events", desc: "Bringing communities together through shared creative experiences." },
  { icon: Landmark, title: "Gallery Exhibitions", desc: "Curated exhibitions showcasing original artwork and emerging talent." },
  { icon: Gem, title: "Wedding Art Displays", desc: "Bespoke artistic installations and live painting for weddings." },
];

const upcomingPosters = [
  {
    src: "/images/poster-oil-workshop-en.jpg",
    alt: "Oil Painting Workshop with Mona Al Jabali — Wednesday, July 29, 2026, Ajman Hall 2",
  },
  {
    src: "/images/poster-oil-workshop-ar.jpg",
    alt: "ورشة الرسم الزيتي مع الفنانة منى الجبالي - الأربعاء ٢٩ يوليو ٢٠٢٦",
  },
];

export default function EventsPage() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <Reveal>
            <p className="eyebrow">Creative Occasions</p>
            <h1 className="gold-rule font-display text-4xl sm:text-5xl text-ink mt-3">
              Events
            </h1>
            <p className="mt-6 text-charcoal/70 leading-relaxed text-lg max-w-md">
              From boardrooms to weddings, we bring an artist's eye to every
              occasion — thoughtful decoration, live painting, and curated
              artistic experiences.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow text-center mb-4">Upcoming Workshop</p>
            <PosterCarousel
              posters={upcomingPosters}
              registerHref="https://docs.google.com/forms/d/e/1FAIpQLSe_TlgGb5f-OoNQ2YJxASPM58h4Z1xLSyFeZnG60kzNITgxCA/viewform?usp=publish-editor"
            />
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <div className="group bg-cream border border-beige/70 p-9 h-full transition-all duration-500 ease-gallery hover:-translate-y-2 hover:shadow-frame">
                <div className="w-14 h-14 rounded-full bg-paper border border-gold/40 flex items-center justify-center text-gold-dark transition-transform duration-500 group-hover:scale-110">
                  <e.icon size={24} strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">{e.title}</h3>
                <p className="mt-3 text-charcoal/65 leading-relaxed">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
