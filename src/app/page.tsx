"use client";

import { useState } from "react";
import { restaurant } from "./restaurantData";

export default function RestaurantTemplatePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMenu = restaurant.menu;

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    people: "",
    message: "",
  });

  const whatsappText = `Hello ${restaurant.name}, I want to book/order.
Name: ${form.name}
Mobile: ${form.mobile}
People: ${form.people}
Message: ${form.message}`;

  const whatsappLink = `https://wa.me/91${restaurant.whatsapp}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/restaurant-images/logo.png"
              alt={restaurant.name}
              className="h-24 w-auto object-contain"
            />

            <div>
              <h1 className="text-2xl font-black leading-none md:text-4xl">
                {restaurant.name}
              </h1>

              <p className="mt-1 text-sm font-medium text-yellow-500 md:text-base">
                Luxury Family Restaurant • Rampur
              </p>
            </div>
          </div>

          <nav className="hidden gap-5 text-sm font-semibold text-white/80 md:flex">
            <a href="#menu">Menu</a>
            <a href="#why-choose">Why Choose Us</a>
            <a href="#booking">Booking</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href={`tel:${restaurant.phone}`}
            className="rounded-full bg-yellow-500 px-5 py-2 font-bold text-black"
          >
            Call Now
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-6 text-sm font-semibold text-yellow-500 md:text-base">
            Welcome to Belgian Broast • Where Fresh Food, Warm Hospitality &
            Peaceful Dining Create Memorable Experiences
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Crispy • Flavorful • Unforgettable Taste
          </h2>

          <p className="mt-5 text-lg text-white/70">
            Enjoy signature broast chicken, burgers, pizza, wraps, fries,
            shakes, beverages and a premium family dining experience. Book your
            table or order directly on WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              className="rounded-full bg-yellow-500 px-7 py-3 font-black text-black"
            >
              Order on WhatsApp
            </a>
            <a
              href="#booking"
              className="rounded-full border border-yellow-500 px-7 py-3 font-black text-yellow-500"
            >
              Book Table
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {["Fresh Food", "Family Dining", "Fast Service", "100% Halal"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-yellow-500/20 bg-white/5 p-4 text-center"
                >
                  <p className="font-black text-yellow-500">✓</p>
                  <p className="text-sm text-white/70">{item}</p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex items-center justify-center overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-zinc-950 shadow-2xl">
          <img
            src={restaurant.heroImage}
            alt={restaurant.name}
            className="h-[280px] w-full object-contain md:h-[500px]"
          />
        </div>
      </section>

      <section className="border-y border-yellow-500/20 bg-zinc-950 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-2xl font-black">Special offers available</h2>
            <p className="text-white/60">{restaurant.offers.join(" • ")}</p>
          </div>
          <a
            href={whatsappLink}
            className="rounded-full bg-yellow-500 px-7 py-3 font-bold text-black"
          >
            Claim Offer
          </a>
        </div>
      </section>

      <section id="menu" className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold text-yellow-500">Our food menu</p>
          <h2 className="mt-2 text-4xl font-black">Popular Dishes</h2>

<div className="mt-6 flex gap-3 overflow-x-auto pb-3">
  {restaurant.categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-bold transition ${
        selectedCategory === category
          ? "border-yellow-500 bg-yellow-500 text-black"
          : "border-yellow-500/30 bg-black text-white/80 hover:bg-yellow-500 hover:text-black"
      }`}
    >
      {category}
    </button>
  ))}
</div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMenu.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-950 shadow-xl"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full object-cover"
                  />
                  {item.tag && (
                    <span className="absolute left-4 top-4 rounded-full bg-yellow-500 px-4 py-1 text-sm font-black text-black">
                      {item.tag}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-black">{item.name}</h3>
                    <p className="font-black text-yellow-500">{item.price}</p>
                  </div>
                  <p className="mt-2 text-sm text-white/60">
                    {item.description}
                  </p>

                  <a
                    href={whatsappLink}
                    className="mt-5 inline-block rounded-full bg-yellow-500 px-5 py-2 text-sm font-black text-black"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section id="why-choose" className="bg-zinc-950 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold text-yellow-500">Why choose us</p>
          <h2 className="mt-2 text-4xl font-black">
            Why Choose Belgian Broast?
          </h2>
          <p className="mt-4 max-w-3xl text-white/60">
            More than just great food — Belgian Broast offers premium taste,
            peaceful ambience, indoor and outdoor dining, and memorable moments
            for families, friends and food lovers in Rampur.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Signature Broast & Premium Taste",
                image: "/restaurant-images/broast-chicken.jpg",
                description:
                  "Enjoy crispy broast chicken, burgers, pizzas, wraps and more, prepared with care for a rich and memorable taste.",
              },
              {
                title: "Peaceful Garden Ambience",
                image: "/restaurant-images/gallery-1.jpg",
                description:
                  "Relax in a calm outdoor garden-style environment that gives a peaceful and refreshing dining experience.",
              },
              {
                title: "Indoor & Outdoor Seating",
                image: "/restaurant-images/gallery-2.jpg",
                description:
                  "Choose comfortable indoor dining or open-air outdoor seating based on your mood and occasion.",
              },
              {
                title: "Perfect for Families",
                image: "/restaurant-images/gallery-3.jpg",
                description:
                  "A welcoming place for family dinners, casual outings, celebrations and quality time with loved ones.",
              },
              {
                title: "Affordable Dining Experience",
                image: "/restaurant-images/zinger-combo.jpg",
                description:
                  "Enjoy delicious food, comfortable seating and good service with great value for money.",
              },
              {
                title: "More Than Just a Restaurant",
                image: "/restaurant-images/hero-restaurant.jpg",
                description:
                  "Belgian Broast is a place to enjoy food, peace and memories with family, friends and loved ones.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative min-h-[260px] overflow-hidden rounded-3xl border border-yellow-500/20 shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/65" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

                <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-end p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-xl font-black text-black shadow-lg">
                    ✓
                  </div>

                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="booking" className="bg-zinc-950 px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <p className="font-bold text-yellow-500">Table booking</p>
            <h2 className="mt-2 text-4xl font-black">
              Reserve your table today
            </h2>
            <p className="mt-4 text-white/60">
              Fill the form and send booking request directly on WhatsApp.
            </p>

            <div className="mt-8 rounded-3xl border border-yellow-500/20 bg-black p-6">
              <p className="font-bold text-yellow-500">Opening Hours</p>
              <p className="mt-2 text-white/70">{restaurant.hours}</p>
              <p className="mt-4 font-bold text-yellow-500">Address</p>
              <p className="mt-2 text-white/70">{restaurant.address}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-black p-6 shadow-xl">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your Name"
              className="mb-4 w-full rounded-xl border border-yellow-500/20 bg-zinc-950 p-3 text-white"
            />
            <input
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              placeholder="Mobile Number"
              className="mb-4 w-full rounded-xl border border-yellow-500/20 bg-zinc-950 p-3 text-white"
            />
            <input
              value={form.people}
              onChange={(e) => setForm({ ...form, people: e.target.value })}
              placeholder="Number of People"
              className="mb-4 w-full rounded-xl border border-yellow-500/20 bg-zinc-950 p-3 text-white"
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Order / Table booking message"
              rows={5}
              className="mb-4 w-full rounded-xl border border-yellow-500/20 bg-zinc-950 p-3 text-white"
            />

            <a
              href={whatsappLink}
              className="inline-block rounded-xl bg-yellow-500 px-6 py-3 font-black text-black"
            >
              Send on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold text-yellow-500">Delivery partners</p>
          <h2 className="mt-2 text-4xl font-black">
            Order from your favourite platform
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={restaurant.zomatoLink}
              className="rounded-full bg-red-600 px-7 py-3 font-black text-white"
            >
              Order on Zomato
            </a>
            <div className="mt-4 flex flex-wrap gap-3">
  <a
    href={restaurant.socials.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-pink-600 px-4 py-2 text-sm font-bold text-white"
  >
    Instagram
  </a>

  <a
    href={restaurant.socials.facebook}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-blue-700 px-4 py-2 text-sm font-bold text-white"
  >
    Facebook
  </a>

  <a
    href={restaurant.socials.youtube}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white"
  >
    YouTube
  </a>
</div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-zinc-950 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold text-yellow-500">Food gallery</p>
          <h2 className="mt-2 text-4xl font-black">Our Taste & Ambience</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {restaurant.gallery.map((img) => (
              <div
                key={img}
                className="overflow-hidden rounded-3xl border border-yellow-500/20"
              >
                <img
                  src={img}
                  alt={restaurant.name}
                  className="h-64 w-full object-cover transition hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold text-yellow-500">Customer love</p>
          <h2 className="mt-2 text-4xl font-black">Reviews</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {restaurant.reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-6"
              >
                <p className="text-yellow-500">★★★★★</p>
                <p className="mt-3 text-white/70">"{review.text}"</p>
                <h3 className="mt-4 font-black">{review.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold text-yellow-500">Questions</p>
          <h2 className="mt-2 text-4xl font-black">FAQs</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {restaurant.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-yellow-500/20 bg-black p-6"
              >
                <h3 className="font-black">{faq.question}</h3>
                <p className="mt-2 text-white/60">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <p className="font-bold text-yellow-500">Visit us</p>
            <h2 className="mt-2 text-4xl font-black">Contact & Location</h2>
            <p className="mt-4 text-white/60">{restaurant.address}</p>
            <p className="mt-2 text-white/60">Call: {restaurant.phone}</p>
            <p className="mt-2 text-white/60">Email: {restaurant.email}</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-yellow-500/20">
            <iframe
              src={restaurant.mapEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[420px]"
            />
          </div>
        </div>
      </section>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href={`tel:${restaurant.phone}`}
          className="rounded-full bg-yellow-500 px-5 py-3 text-center font-black text-black shadow-xl"
        >
          Call
        </a>
        <a
          href={whatsappLink}
          className="rounded-full bg-green-600 px-5 py-3 text-center font-black text-white shadow-xl"
        >
          WhatsApp
        </a>
      </div>

      <footer className="border-t border-yellow-500/20 bg-black px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-black">{restaurant.name}</h3>
            <p className="mt-3 text-white/60">
              Premium restaurant experience in {restaurant.city}.
            </p>
          </div>

          <div>
            <h4 className="font-black text-yellow-500">Quick Links</h4>
            <div className="mt-3 flex flex-col gap-2 text-white/60">
              <a href="#menu">Menu</a>
              <a href="#booking">Booking</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-yellow-500">Categories</h4>
            <div className="mt-3 flex flex-col gap-2 text-white/60">
              {restaurant.categories.slice(0, 5).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-yellow-500">Contact</h4>
            <p className="mt-3 text-white/60">{restaurant.address}</p>
            <p className="mt-2 text-white/60">{restaurant.hours}</p>
            <p className="mt-2 text-white/60">{restaurant.phone}</p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-6xl border-t border-yellow-500/20 pt-6 text-center text-white/40">
          © 2026 {restaurant.name}. All rights reserved.
        </p>
      </footer>
    </main>
  );
}