import type { Metadata } from "next";
import { restaurant } from "./restaurantData";
import "./globals.css";

export const metadata: Metadata = {
  title: restaurant.seo.title,
  description: restaurant.seo.description,
  keywords: restaurant.seo.keywords,
  openGraph: {
    title: restaurant.seo.title,
    description: restaurant.seo.description,
    type: "website",
    locale: "en_IN",
    siteName: restaurant.name,
    images: [
      {
        url: "/restaurant-images/hero-restaurant.jpg",
        width: 1200,
        height: 630,
        alt: restaurant.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: restaurant.seo.title,
    description: restaurant.seo.description,
    images: ["/restaurant-images/hero-restaurant.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    address: restaurant.address,
    telephone: restaurant.phone,
    servesCuisine: ["Broast Chicken", "Burgers", "Pizza", "Wraps"],
    priceRange: "₹59 - ₹549",
    image: "/restaurant-images/hero-restaurant.jpg",
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}