import { MetadataRoute } from "next";
import { restaurant } from "./restaurantData";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = restaurant.seo.siteUrl;

  const categoryPages = restaurant.categories.map((category) => ({
    url: `${siteUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const menuPages = restaurant.menu.map((item) => ({
    url: `${siteUrl}/menu/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    ...categoryPages,

    ...menuPages,
  ];
}