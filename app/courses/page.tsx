import type { Metadata } from "next";
import { Pencil, Palette, Droplet, Layers, User } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Art Courses",
  description:
    "Professional art classes for beginners and experienced artists, taught by Joykenda Fine Arts Company in Ajman.",
};

const courses = [
  {
    icon: Pencil,
    title: "Beginner Drawing",
    level: "Beginner",
    duration: "4 weeks",
    desc: "Master the fundamentals of line, shape, and shading to build a confident drawing foundation.",
  },
  {
    icon: Palette,
    title: "Oil Painting",
    level: "Intermediate",
    duration: "6 weeks",
    desc: "Explore the richness of oil paint — layering, blending, and classical technique.",
  },
  {
    icon: Droplet,
    title: "Watercolor",
    level: "All Levels",
    duration: "4 weeks",
    desc: "Learn to work with transparency, flow, and light using traditional watercolor methods.",
  },
  {
    icon: Layers,
    title: "Canvas Techniques",
    level: "Intermediate",
    duration: "5 weeks",
    desc: "Discover texture, composition, and mixed-media approaches to canvas work.",
  },
  {
    icon: User,
    title: "Portrait Drawing",
    level: "Advanced",
    duration: "6 weeks",
    desc: "Develop precision in proportion, likeness, and expression through portrait study.",
  },
];

export default function CoursesPage() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-center">Learn With Us</p>
          <h1 className="gold-rule center font-display text-4xl sm:text-5xl text-ink text-center mt-3">
            Art Courses
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-center text-charcoal/65">
            Whether you're picking up a brush for the first time or refining
            years of practice, our courses are designed to grow with you.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group bg-paper border border-beige/70 p-9 h-full transition-all duration-500 ease-gallery hover:-translate-y-2 hover:shadow-frame">
                <div className="w-14 h-14 rounded-full bg-cream border border-gold/40 flex items-center justify-center text-gold-dark transition-transform duration-500 group-hover:scale-110">
                  <c.icon size={24} strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">{c.title}</h3>
                <div className="mt-2 flex gap-3 text-xs tracking-wide uppercase text-gold-dark">
                  <span>{c.level}</span>
                  <span className="text-charcoal/30">·</span>
                  <span>{c.duration}</span>
                </div>
                <p className="mt-4 text-charcoal/65 leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
