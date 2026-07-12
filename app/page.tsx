import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Palette, PartyPopper, Brush, Sparkles, ShieldCheck, Heart, UserCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import PaintingCard from "@/components/PaintingCard";
import { paintings } from "@/data/paintings";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow">Joykenda Fine Arts Company · Ajman, UAE</p>
            <h1 className="mt-5 font-display font-medium text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ink">
              Bringing Art
              <br />
              <span className="italic text-gold-dark">to Life</span>
            </h1>
            <p className="mt-6 max-w-md text-charcoal/70 text-lg leading-relaxed">
              Original paintings, creative events, and inspiring art courses
              designed to spark imagination.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/gallery" className="btn-primary">
                View Gallery <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="gallery-frame shadow-frame max-w-md mx-auto lg:ml-auto">
                <div className="gallery-frame-inner">
                  <div className="relative aspect-[6/5]">
                    <Image
                      src="/images/painting-horse-cubist.png"
                      alt="Golden Stride — cubist-style painting of a horse by Joykenda Fine Arts"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 480px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:block bg-paper px-6 py-4 shadow-soft border border-beige">
                <p className="font-display italic text-lg text-ink">"Golden Stride"</p>
                <p className="text-xs text-charcoal/60 mt-0.5">Acrylic on canvas · 5,000 AED</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PAINTINGS */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow">Current Collection</p>
            <div className="flex flex-wrap items-end justify-between gap-6 mt-3">
              <h2 className="gold-rule font-display text-4xl sm:text-5xl text-ink">
                Featured Paintings
              </h2>
              <Link
                href="/gallery"
                className="text-sm tracking-widest2 uppercase text-charcoal/70 hover:text-gold-dark transition-colors inline-flex items-center gap-2"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 gap-x-10 gap-y-16 max-w-4xl">
            {paintings.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <PaintingCard painting={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-center">What We Offer</p>
            <h2 className="gold-rule center font-display text-4xl sm:text-5xl text-ink text-center mt-3">
              Our Services
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Fine Art Paintings",
                desc: "High-quality original artwork for collectors and art lovers.",
              },
              {
                icon: PartyPopper,
                title: "Event Management",
                desc: "Creative artistic event planning and decoration.",
              },
              {
                icon: Brush,
                title: "Art Courses",
                desc: "Professional art classes for beginners and experienced artists.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <div className="group bg-paper border border-beige/70 p-10 h-full transition-all duration-500 ease-gallery hover:-translate-y-2 hover:shadow-frame">
                  <div className="w-14 h-14 rounded-full bg-cream border border-gold/40 flex items-center justify-center text-gold-dark transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <s.icon size={24} strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-ink">{s.title}</h3>
                  <p className="mt-3 text-charcoal/65 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-ink text-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow !text-gold-light text-center">Why Joykenda</p>
            <h2 className="font-display text-4xl sm:text-5xl text-center mt-3">
              Why Choose Us
            </h2>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, label: "Original Artwork" },
              { icon: ShieldCheck, label: "Professional Service" },
              { icon: Heart, label: "Passion for Creativity" },
              { icon: UserCheck, label: "Personalized Experience" },
            ].map((f, i) => (
              <Reveal key={f.label} delay={i * 0.1}>
                <div className="text-center border border-cream/15 p-8 h-full transition-colors duration-500 hover:border-gold-light/60">
                  <f.icon
                    size={28}
                    strokeWidth={1.3}
                    className="mx-auto text-gold-light"
                  />
                  <p className="mt-5 font-display text-lg">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
