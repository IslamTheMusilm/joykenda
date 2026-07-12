export type Painting = {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
  description: string;
  dimensions: string;
  availability: "Available" | "Sold" | "Commissioned";
  medium: string;
};

// Add a new painting later by adding one object here — every page
// (Home featured section, Gallery grid, and individual painting pages)
// reads from this single file.
export const paintings: Painting[] = [
  {
    id: "golden-stride",
    title: "Golden Stride",
    price: 5000,
    currency: "AED",
    image: "/images/painting-horse-cubist.png",
    description:
      "A vivid, cubist-inspired composition of a horse caught mid-motion, fractured into bold geometric planes of gold, purple, and crimson. Light seems to move through the piece the way it moves through stained glass, giving a classic equestrian subject a strikingly contemporary voice.",
    dimensions: "100 cm × 70 cm",
    availability: "Available",
    medium: "Acrylic on canvas",
  },
  {
    id: "between-the-horses",
    title: "Between the Horses",
    price: 5000,
    currency: "AED",
    image: "/images/painting-horses-trio.png",
    description:
      "A monochrome, sepia-toned study of three Arabian horses in close, intimate profile. Expressive, textured brushwork lends the piece a quiet dignity, evoking the trust and companionship shared between the animals. Originally shown as part of the 'Between the Horses' exhibition.",
    dimensions: "120 cm × 100 cm",
    availability: "Available",
    medium: "Oil on canvas",
  },
];

export function getPaintingById(id: string) {
  return paintings.find((p) => p.id === id);
}

export function getRelatedPaintings(id: string, count = 2) {
  return paintings.filter((p) => p.id !== id).slice(0, count);
}
