import type { Metadata } from "next";
import Image from "next/image";
import { Award, GraduationCap, Palette, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Artist — Mona Jebali",
  description:
    "Meet Mona Jebali, founder of Joykenda Fine Arts Company — over 20 years of experience in fine arts, 500+ exhibitions, and international recognition.",
};

const stats = [
  { number: "20+", label: "Years of Experience" },
  { number: "500+", label: "Exhibitions" },
  { number: "300+", label: "Workshops Conducted" },
];

const milestones = [
  {
    icon: GraduationCap,
    title: "Academic Leadership",
    text: "Worked at Ajman University with expertise in fine arts for over 20 years, serving as Head of the Fine Arts Department.",
  },
  {
    icon: Award,
    title: "National & International Recognition",
    text: "Achieved numerous accomplishments at the national level, including participation in art competitions and fine arts carnivals, and organized the International Fine Arts Biennial for two consecutive editions. Member of the Emirates Fine Arts Society, and a certified artist recognized by the Dubai Culture Authority among talented artists in specialized professions.",
  },
  {
    icon: Palette,
    title: "Teaching & Craft",
    text: "Taught numerous fine arts courses in oil painting, watercolor, and acrylic, as well as courses in ceramics, sculpture, and other artistic crafts.",
  },
  {
    icon: MapPin,
    title: "Exhibitions Around the World",
    text: "Exhibited artwork across the UAE — including Burj Al Arab and Atlantis, The Palm — as well as internationally in Spain (the Spanish Congress Hall and Carmen Hall in Valencia) and in Paris.",
  },
];

export default function ArtistPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="gallery-frame shadow-frame max-w-md mx-auto lg:mx-0">
              <div className="gallery-frame-inner">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/mona-jebali.jpg"
                    alt="Portrait of Mona Jebali, founder of Joykenda Fine Arts Company"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="eyebrow">The Artist</p>
            <h1 className="mt-4 font-display italic font-medium text-6xl sm:text-7xl lg:text-8xl text-ink leading-[1.05]">
              Mona Jebali
            </h1>
            <p className="mt-6 text-charcoal/70 text-lg leading-relaxed max-w-md">
              Founder of Joykenda Fine Arts Company, and an artist whose
              career spans over two decades of teaching, exhibiting, and
              shaping the fine arts scene in the UAE and beyond.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl text-gold-dark">
                    {s.number}
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-charcoal/60 uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-center">A Career in Fine Art</p>
            <h2 className="gold-rule center font-display text-4xl sm:text-5xl text-ink text-center mt-3">
              Milestones
            </h2>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            {milestones.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <div className="group bg-cream border border-beige/70 p-9 h-full transition-all duration-500 ease-gallery hover:-translate-y-1.5 hover:shadow-frame">
                  <div className="w-14 h-14 rounded-full bg-paper border border-gold/40 flex items-center justify-center text-gold-dark transition-transform duration-500 group-hover:scale-110">
                    <m.icon size={24} strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-charcoal/65 leading-relaxed">
                    {m.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING QUOTE / JOURNEY */}
      <section className="bg-ink text-cream py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <Reveal>
            <p className="font-display italic text-3xl sm:text-4xl leading-relaxed text-cream/90">
              "Over the course of my artistic journey, I have held more than
              500 exhibitions and conducted more than 300 workshops."
            </p>
            <p className="mt-8 eyebrow !text-gold-light">— Mona Jebali</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
