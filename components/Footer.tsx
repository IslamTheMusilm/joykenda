import Link from "next/link";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/artist", label: "The Artist" },
  { href: "/gallery", label: "Gallery" },
  { href: "/courses", label: "Courses" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream/85">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-display text-4xl tracking-wide text-cream">
            JOYKENDA
          </p>
          <p className="font-display italic text-lg text-gold-light -mt-1">
            Fine Arts Company
          </p>
          <p className="mt-5 max-w-sm font-display text-lg italic text-cream/70">
            Bringing art to life, one canvas at a time.
          </p>
        </div>

        <div>
          <p className="eyebrow !text-gold-light">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-cream/70 hover:text-gold-light transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-gold-light">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-gold-light" />
              <a href="tel:+971509508385" className="hover:text-gold-light transition-colors">
                +971 50 950 8385
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-gold-light" />
              <a
                href="mailto:joykendaarts@gmail.com"
                className="hover:text-gold-light transition-colors"
              >
                joykendaarts@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 pt-1">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gold-light transition-colors"
              >
                <Instagram size={17} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-gold-light transition-colors"
              >
                <Facebook size={17} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-cream/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {year} Joykenda Fine Arts Company. All rights reserved.</span>
          <span>Ajman, United Arab Emirates</span>
        </div>
      </div>
    </footer>
  );
}
