import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PaintingCard from "@/components/PaintingCard";
import { paintings } from "@/data/paintings";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse original paintings by Joykenda Fine Arts Company — each piece available to purchase.",
};

export default function GalleryPage() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-center">The Collection</p>
          <h1 className="gold-rule center font-display text-4xl sm:text-5xl text-ink text-center mt-3">
            Gallery
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-center text-charcoal/65">
            Every painting is an original, one-of-a-kind piece. Select a work
            to view its full story, dimensions, and availability.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {paintings.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <PaintingCard painting={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-20 text-center text-sm text-charcoal/50 italic font-display">
            More original works are added regularly — check back soon, or
            contact us about a commission.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
