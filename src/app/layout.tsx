import type { Metadata } from "next";
import { restaurant } from "./restaurantData";
import "./globals.css";

export const metadata: Metadata = {
  title: restaurant.seo.title,
  description: restaurant.seo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}