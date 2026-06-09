import { MetadataRoute } from "next";
import { restaurant } from "./restaurantData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = restaurant.seo.siteUrl;

  const categoryPages = restaurant.categories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const menuPages = restaurant.menu.map((item) => ({
    url: `${baseUrl}/menu/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...categoryPages,
    ...menuPages,
  ];
}