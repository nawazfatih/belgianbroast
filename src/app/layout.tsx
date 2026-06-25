import type { Metadata } from "next";
import { restaurant } from "./restaurantData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.belgianbroast.com"),

  title: restaurant.seo.title,
  description: restaurant.seo.description,
  keywords: restaurant.seo.keywords,

  alternates: {
    canonical: "https://www.belgianbroast.com",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: restaurant.seo.title,
    description: restaurant.seo.description,
    type: "website",
    url: "https://www.belgianbroast.com",
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

    url: "https://www.belgianbroast.com",

    image: "https://www.belgianbroast.com/restaurant-images/hero-restaurant.jpg",

    logo: "https://www.belgianbroast.com/icon.png",

    address: restaurant.address,

    telephone: restaurant.phone,

    servesCuisine: [
      "Broast Chicken",
      "Burgers",
      "Pizza",
      "Wraps",
    ],

    priceRange: "₹59 - ₹549",
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