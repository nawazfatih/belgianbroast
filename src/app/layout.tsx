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
    "@id": "https://www.belgianbroast.com/#restaurant",

    name: restaurant.name,
    alternateName: "Belgian Broast Rampur",

    url: "https://www.belgianbroast.com",
    menu: "https://www.belgianbroast.com/#categories",

    image: [
      "https://www.belgianbroast.com/restaurant-images/hero-restaurant.jpg",
    ],

    logo: "https://www.belgianbroast.com/icon.png",

    telephone: "+918868880002",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jheel Road, opposite Khushboo Garden, Rampur, Thotar",
      addressLocality: "Rampur",
      addressRegion: "Uttar Pradesh",
      postalCode: "244901",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.8248561,
      longitude: 79.022165,
    },

    hasMap:
      "https://www.google.com/maps/dir//Belgian+Broast,+R2FC%2BWRF,+Jheel+Road,+opposite+Khushboo+Garden,+Rampur,+Thotar,+Uttar+Pradesh+244901/@28.9354264,79.0532054,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390a8d8898138ce3:0xb0a44c70c9c66f7f!2m2!1d79.022165!2d28.8248561",

    servesCuisine: [
      "Broast Chicken",
      "Fried Chicken",
      "Burgers",
      "Pizza",
      "Wraps",
      "Fast Food",
      "Beverages",
    ],

    priceRange: "₹59 - ₹549",

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "12:30",
        closes: "23:00",
      },
    ],

    sameAs: [
      "https://www.instagram.com/belgianbroastrampur/",
      "https://www.zomato.com/rampur/belgian-broast-rampur-rampur-locality/order",
      "https://www.facebook.com/p/Belgian-Broast-Restaurant-61580565897770/",
      "https://www.justdial.com/Rampur/Belgian-Broast-Opposite-Khushboo-Gardenrampur-Nalla-Par-Kalghar/9999P5952-5952-251207101700-Y3Q9_BZDET",
    ],

    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://wa.me/918868880002?text=Hello%20Belgian%20Broast%2C%20I%20want%20to%20order%20food.",
        inLanguage: "en-IN",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.belgianbroast.com/#website",
    name: "Belgian Broast",
    url: "https://www.belgianbroast.com",
    publisher: {
      "@id": "https://www.belgianbroast.com/#restaurant",
    },
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