import { MetadataRoute } from "next";
import { restaurant } from "./restaurantData";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${restaurant.seo.siteUrl}/sitemap.xml`,
  };
}