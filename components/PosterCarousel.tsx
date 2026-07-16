"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Poster = {
  src: string;
  alt: string;
};

export default function PosterCarousel({
  posters,
  autoPlayMs = 5000,
}: {
  posters: Poster[];
  autoPlayMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((i) => (i + dir + posters.length) % posters.length);
    },
    [posters.length]
  );

  useEffect(() => {
    if (paused || posters.length < 2) return;
    const t = setInterval(() => go(1), autoPlayMs);
    return () => clearInterval(t);
  }, [paused, go, autoPlayMs, posters.length]);

  if (posters.length === 0) return null;

  return (
    <div
      className="relative max-w-md mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="gallery-frame shadow-frame">
        <div className="gallery-frame-inner overflow-hidden relative aspect-[3/4] bg-ink">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={posters[index].src}
                alt={posters[index].alt}
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-contain"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {posters.length > 1 && (
        <>
          <button
            aria-label="Previous poster"
            onClick={() => go(-1)}
            className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 w-10 h-10 rounded-full bg-paper border border-beige shadow-soft flex items-center justify-center text-charcoal/70 hover:text-gold-dark hover:border-gold transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next poster"
            onClick={() => go(1)}
            className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 w-10 h-10 rounded-full bg-paper border border-beige shadow-soft flex items-center justify-center text-charcoal/70 hover:text-gold-dark hover:border-gold transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {posters.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to poster ${i + 1}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-beige"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
