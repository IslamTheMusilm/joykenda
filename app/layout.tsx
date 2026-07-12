import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joykendaarts.com"),
  title: {
    default: "Joykenda Fine Arts Company | Original Paintings, Events & Art Courses",
    template: "%s | Joykenda Fine Arts Company",
  },
  description:
    "Joykenda Fine Arts Company, founded by Mona Jebali in Ajman, UAE — original paintings, artistic event management, and professional art courses.",
  keywords: [
    "Joykenda Fine Arts",
    "Mona Jebali",
    "Ajman art gallery",
    "original paintings UAE",
    "art courses Ajman",
    "art event management UAE",
  ],
  openGraph: {
    title: "Joykenda Fine Arts Company",
    description:
      "Original paintings, creative events, and inspiring art courses designed to spark imagination.",
    url: "https://joykendaarts.com",
    siteName: "Joykenda Fine Arts Company",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
