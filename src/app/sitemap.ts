import { MetadataRoute } from "next";
import { restaurant } from "./restaurantData";
import { blogs } from "./blog/blogData";

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

  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...categoryPages,
    ...menuPages,
    ...blogPages,
  ];
}