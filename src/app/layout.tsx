import type { Metadata } from "next";
import { restaurant } from "./restaurantData";
import "./globals.css";

const siteUrl = restaurant.seo.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: restaurant.seo.title,
    template: "%s | Belgian Broast Rampur",
  },
  description: restaurant.seo.description,
  keywords: restaurant.seo.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: restaurant.seo.title,
    description: restaurant.seo.description,
    url: siteUrl,
    siteName: restaurant.name,
    images: [
      {
        url: restaurant.heroImage,
        width: 1200,
        height: 630,
        alt: restaurant.name,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: restaurant.seo.title,
    description: restaurant.seo.description,
    images: [restaurant.heroImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#eab308",
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
    image: `${siteUrl}${restaurant.heroImage}`,
    url: siteUrl,
    telephone: `+91${restaurant.phone}`,
    servesCuisine: ["Broast Chicken", "Burgers", "Pizza", "Wraps", "Fast Food"],
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Opposite Khushboo Garden, Jheel Road, Rampur, Thotar",
      addressLocality: "Rampur",
      addressRegion: "Uttar Pradesh",
      postalCode: "244901",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 12:30-23:00",
    sameAs: [
      restaurant.socials.instagram,
      restaurant.socials.facebook,
      restaurant.socials.youtube,
    ],
    hasMenu: `${siteUrl}/#categories`,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: restaurant.name,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}