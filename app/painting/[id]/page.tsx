import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Ruler, CheckCircle2, Palette } from "lucide-react";
import Reveal from "@/components/Reveal";
import PaintingCard from "@/components/PaintingCard";
import { paintings, getPaintingById, getRelatedPaintings } from "@/data/paintings";

export function generateStaticParams() {
  return paintings.map((p) => ({ id: p.id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const painting = getPaintingById(params.id);
  if (!painting) return {};
  return {
    title: painting.title,
    description: painting.description,
    openGraph: {
      title: `${painting.title} | Joykenda Fine Arts Company`,
      description: painting.description,
      images: [painting.image],
    },
  };
}

export default function PaintingPage({ params }: { params: { id: string } }) {
  const painting = getPaintingById(params.id);
  if (!painting) notFound();

  const related = getRelatedPaintings(painting.id);

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm tracking-widest2 uppercase text-charcoal/60 hover:text-gold-dark transition-colors"
          >
            <ArrowLeft size={15} /> Back to Gallery
          </Link>
        </Reveal>

        <div className="mt-8 grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="gallery-frame shadow-frame">
              <div className="gallery-frame-inner">
                <div className="relative aspect-[6/5]">
                  <Image
                    key={painting.id}
                    src={painting.image}
                    alt={`${painting.title} — original painting by Joykenda Fine Arts Company`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="object-cover animate-[fadein_0.8s_ease]"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="eyebrow">{painting.medium}</p>
            <h1 className="font-display text-4xl sm:text-5xl text-ink mt-3">
              {painting.title}
            </h1>
            <p className="font-display text-3xl text-gold-dark mt-4">
              {painting.price.toLocaleString()} {painting.currency}
            </p>

            <p className="mt-7 text-charcoal/75 leading-relaxed text-lg">
              {painting.description}
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-charcoal/70">
                <Ruler size={17} className="text-gold-dark" />
                <span>{painting.dimensions}</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal/70">
                <CheckCircle2 size={17} className="text-gold-dark" />
                <span>{painting.availability}</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal/70">
                <Palette size={17} className="text-gold-dark" />
                <span>{painting.medium}</span>
              </div>
            </div>

            <Link href="/contact" className="btn-primary mt-10">
              Contact to Purchase
            </Link>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="mt-28">
            <Reveal>
              <h2 className="gold-rule font-display text-3xl text-ink">
                Related Paintings
              </h2>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-16 max-w-4xl">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.1}>
                  <PaintingCard painting={p} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
