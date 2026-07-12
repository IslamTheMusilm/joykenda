import Link from "next/link";
import Image from "next/image";
import { Painting } from "@/data/paintings";

export default function PaintingCard({ painting }: { painting: Painting }) {
  return (
    <Link
      href={`/painting/${painting.id}`}
      className="group block"
      aria-label={`View details for ${painting.title}`}
    >
      <div className="overflow-hidden gallery-frame shadow-frame transition-transform duration-500 ease-gallery group-hover:-translate-y-1.5">
        <div className="gallery-frame-inner overflow-hidden">
          <div className="relative aspect-[6/5] overflow-hidden">
            <Image
              src={painting.image}
              alt={`${painting.title} — original painting by Joykenda Fine Arts Company`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-gallery group-hover:scale-[1.08]"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl text-ink group-hover:text-gold-dark transition-colors">
            {painting.title}
          </h3>
          <p className="mt-1 text-sm text-charcoal/60">{painting.medium}</p>
        </div>
        <span className="font-display text-xl text-gold-dark whitespace-nowrap">
          {painting.price.toLocaleString()} {painting.currency}
        </span>
      </div>
    </Link>
  );
}
