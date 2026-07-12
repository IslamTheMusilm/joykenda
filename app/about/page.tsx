import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story of Joykenda Fine Arts Company, founded by Mona Jebali in Ajman, UAE.",
};

const timeline = [
  {
    year: "Our Roots",
    text: "Founded by Mona Jebali in Ajman, United Arab Emirates, out of a lifelong devotion to painting.",
  },
  {
    year: "Our Craft",
    text: "Grew into a studio celebrating creativity through original artwork, artistic event management, and educational art courses.",
  },
  {
    year: "Our Belief",
    text: "We believe art has the power to inspire, connect, and transform communities.",
  },
  {
    year: "Our Mission",
    text: "To make fine art accessible while creating memorable artistic experiences for every client.",
  },
];

export default function AboutPage() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h1 className="gold-rule font-display text-4xl sm:text-5xl text-ink mt-3">
              About Joykenda
              <br />
              Fine Arts Company
            </h1>
            <div className="mt-8 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                Joykenda Fine Arts Company was founded by Mona Jebali in Ajman,
                United Arab Emirates.
              </p>
              <p>
                Our company celebrates creativity through original artwork,
                artistic event management, and educational art courses.
              </p>
              <p>
                We believe that art has the power to inspire, connect, and
                transform communities. Our mission is to make fine art
                accessible while creating memorable artistic experiences for
                our clients.
              </p>
              <p>
                Whether you are looking for a unique painting, organizing an
                event, or wishing to develop your artistic skills, Joykenda
                Fine Arts Company is here to bring creativity to life.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="gallery-frame shadow-frame max-w-md mx-auto">
              <div className="gallery-frame-inner">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/painting-horses-trio.png"
                    alt="Between the Horses — painting from the Joykenda collection"
                    fill
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="mt-28">
          <Reveal>
            <p className="eyebrow text-center">The Journey</p>
            <h2 className="font-display text-4xl text-ink text-center mt-3">
              How We Got Here
            </h2>
          </Reveal>

          <div className="mt-16 relative max-w-3xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-beige sm:-translate-x-1/2" />
            <div className="space-y-14">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div
                    className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                      i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                    }`}
                  >
                    <div className="absolute left-4 sm:left-1/2 top-1.5 w-2.5 h-2.5 rounded-full bg-gold -translate-x-1/2 ring-4 ring-cream" />
                    <div
                      className={`sm:w-1/2 pl-12 sm:pl-0 ${
                        i % 2 === 1 ? "sm:pl-10" : "sm:pr-10"
                      }`}
                    >
                      <p className="font-display italic text-2xl text-gold-dark">
                        {item.year}
                      </p>
                    </div>
                    <div
                      className={`sm:w-1/2 pl-12 ${
                        i % 2 === 1 ? "sm:pr-10" : "sm:pl-10"
                      }`}
                    >
                      <p className="text-charcoal/70 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
