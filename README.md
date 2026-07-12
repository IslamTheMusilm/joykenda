# Joykenda Fine Arts Company — Website

A Next.js + Tailwind CSS + Framer Motion website for Joykenda Fine Arts Company.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Deploy it live

The easiest option is [Vercel](https://vercel.com) (made by the creators of Next.js):
1. Push this project to a GitHub repo.
2. Import the repo at vercel.com → it detects Next.js automatically → Deploy.
3. Connect your own domain (e.g. joykendaarts.com) from the Vercel dashboard.

Netlify and most other hosts also support Next.js if you'd prefer.

## Adding or editing paintings

Everything about the gallery lives in one file: **`data/paintings.ts`**.
To add a new painting:
1. Drop the image into `public/images/`.
2. Add a new object to the `paintings` array with its title, price, description, dimensions, availability, and image path.

It will automatically show up on the Home page, the Gallery page, and get its own detail page at `/painting/your-id`.

## What's included

- **Home** — hero, featured paintings, services, "why choose us"
- **About** — company story + timeline
- **Gallery** — full painting grid
- **Painting detail pages** — `/painting/[id]`, dynamic from `data/paintings.ts`
- **Courses**, **Events**, **Contact** (with form, hours, map placeholder)
- Sticky nav with animated underline + mobile hamburger menu
- Scroll-reveal, hover, and page-load animations via Framer Motion
- SEO metadata, Open Graph tags, semantic HTML, alt text on every image

## Still to do before going fully live

- Replace the Google Maps placeholder on the Contact page with a real embedded map (`app/contact/page.tsx`).
- Wire the contact form up to an email service or API route — it currently just shows a success message locally (`app/contact/ContactForm.tsx`).
- Swap in real photography for the Events page section image if you have event photos.
- Add real social media links in `components/Footer.tsx` and `app/contact/page.tsx` (currently `#` placeholders).
- Add more paintings to `data/paintings.ts` as your collection grows.
