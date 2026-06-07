import { MetadataRoute } from "next";
import { restaurant } from "./restaurantData";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = restaurant.seo.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        disallow: [
          "/api/",
          "/admin/",
          "/kitchen/",
          "/delivery/",
          "/checkout/",
          "/account/",
          "/profile/",
          "/cart/",
        ],
      },
    ],

    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}