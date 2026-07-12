import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream min-h-[60vh] flex items-center justify-center py-24">
      <div className="text-center px-6">
        <p className="eyebrow">404</p>
        <h1 className="font-display text-4xl text-ink mt-3">Page Not Found</h1>
        <p className="mt-4 text-charcoal/65 max-w-sm mx-auto">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
