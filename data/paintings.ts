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
  {
    id: "whispered-melody",
    title: "Whispered Melody",
    price: 5000,
    currency: "AED",
    image: "/images/painting-whispered-melody.jpg",
    description:
      "Two figures lean into one another over the curve of a cello, rendered in rich magentas, violets, and warm reds. Textured brushwork gives the piece an almost tactile intimacy — a quiet moment of music, tenderness, and shared silence.",
    dimensions: "90 cm × 60 cm",
    availability: "Available",
    medium: "Oil on canvas",
  },
  {
    id: "golden-herd",
    title: "Golden Herd",
    price: 5000,
    currency: "AED",
    image: "/images/painting-golden-herd.jpg",
    description:
      "Three Arabian horses emerge from a luminous golden haze, their features painted with remarkable softness and realism. Bathed in warm sepia light, the piece captures the nobility and gentle spirit of the Arabian breed.",
    dimensions: "100 cm × 100 cm",
    availability: "Available",
    medium: "Oil on canvas",
  },
  {
    id: "en-pointe",
    title: "En Pointe",
    price: 5000,
    currency: "AED",
    image: "/images/painting-en-pointe.jpg",
    description:
      "A ballerina rises en pointe against a blaze of geometric reds, oranges, and golds. Her feathered tutu seems to dissolve into light itself, contrasting delicate grace with the bold, fractured energy of the background.",
    dimensions: "90 cm × 70 cm",
    availability: "Available",
    medium: "Acrylic on canvas",
  },
  {
    id: "strings-of-color",
    title: "Strings of Color",
    price: 5000,
    currency: "AED",
    image: "/images/painting-strings-of-color.jpg",
    description:
      "A violin takes center stage in a mosaic of cubist color blocks — ambers, plums, and soft blues interlocking like stained glass. A celebration of music translated into pure geometry and warmth.",
    dimensions: "80 cm × 60 cm",
    availability: "Available",
    medium: "Acrylic on canvas",
  },
  {
    id: "coastal-bloom",
    title: "Coastal Bloom",
    price: 5000,
    currency: "AED",
    image: "/images/painting-coastal-bloom.jpg",
    description:
      "A whimsical tree crowned with swirling blossoms of every color rises over a hillside village of pinks, yellows, and blues. Thick, mosaic-like strokes give the stairways and rooftops a joyful, storybook energy.",
    dimensions: "120 cm × 120 cm",
    availability: "Available",
    medium: "Acrylic on canvas",
  },
  {
    id: "sunset-bazaar",
    title: "Sunset Bazaar",
    price: 5000,
    currency: "AED",
    image: "/images/painting-sunset-bazaar.jpg",
    description:
      "An old-city souq glows beneath a fiery sunset — minarets rising over stone gates, lantern stalls, spice merchants, and travelers passing through. A richly detailed tribute to the timeless bustle of the traditional Arab marketplace.",
    dimensions: "100 cm × 90 cm",
    availability: "Available",
    medium: "Oil on canvas",
  },
  {
    id: "inner-glance",
    title: "Inner Glance",
    price: 5000,
    currency: "AED",
    image: "/images/painting-inner-glance.jpg",
    description:
      "A striking abstract portrait in which a woman's gaze emerges from a mosaic of cubist fragments — olive greens, violets, and warm ochres weaving through her features. Intimate yet enigmatic, the piece invites the viewer to look inward as much as outward. Presented in an American box frame.",
    dimensions: "150 cm × 150 cm",
    availability: "Available",
    medium: "Oil on canvas",
  },
  {
    id: "joyful-voyage",
    title: "Joyful Voyage",
    price: 5000,
    currency: "AED",
    image: "/images/painting-joyful-voyage.jpg",
    description:
      "A whimsical sailboat rides swirling sapphire waves beneath a blazing sun, its patchwork sails alive with reds, golds, and greens. Painted with playful, storybook energy, this cheerful piece is perfect for children's rooms and family spaces.",
    dimensions: "150 cm × 150 cm",
    availability: "Available",
    medium: "Oil on canvas",
  },
];

export function getPaintingById(id: string) {
  return paintings.find((p) => p.id === id);
}

export function getRelatedPaintings(id: string, count = 3) {
  return paintings.filter((p) => p.id !== id).slice(0, count);
}
