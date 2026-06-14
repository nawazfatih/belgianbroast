import Link from "next/link";
import { popularItems, restaurant, signatureItems } from "./restaurantData";

export default function HomePage() {
  const whatsappMessage =
    "Hello Belgian Broast, I want to order food from your menu.";
  const whatsappLink = `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const whiteHeadingClass = "text-4xl font-black text-white md:text-5xl";

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/95 px-5 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/restaurant-images/logo.png"
              alt={restaurant.name}
              className="h-20 w-auto shrink-0 object-contain md:h-40"
            />

            <div className="min-w-0">
              <h1 className="whitespace-nowrap text-2xl font-black leading-none md:text-5xl">
                <span className="text-white">Belgian </span>
                <span className="text-red-500">Broast</span>
              </h1>

              <p className="mt-2 whitespace-nowrap text-xs font-bold text-yellow-500 md:text-lg">
                Luxury Family Restaurant • {restaurant.city}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-bold text-white/75 lg:flex">
            <a href="#categories">Menu</a>
            <a href="#popular">Popular</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${restaurant.phone}`}
              className="rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white transition hover:bg-red-700"
            >
              Call Now
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              className="rounded-full bg-green-600 px-8 py-4 font-black text-white transition hover:bg-green-700"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-green-500/20 px-5 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(234,179,8,0.16),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#000_0%,#030303_50%,#0b0b0b_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <div className="mb-8 max-w-2xl">
              <h2 className={whiteHeadingClass}>
                Welcome to Belgian Broast
              </h2>

              <p className="mt-5 whitespace-pre-line text-base font-bold leading-8 text-yellow-500">
                {`At Belgian Broast, we believe great memories begin with great food. We are a peaceful place where families connect, children smile, and everyone feels at home.

Your family’s health is our highest priority. That’s why we prepare our meals fresh every day, using quality ingredients and avoiding processed foods whenever possible. Every dish is made with care, because we serve our guests the same way we would serve our own family.`}
              </p>
            </div>

            <h2 className={`${whiteHeadingClass} leading-tight`}>
              Crispy •<br />
              Flavorful •<br />
              Unforgettable
              <br />
              Taste
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:mt-8 md:text-lg md:leading-8">
              Enjoy signature broast chicken, juicy burgers, pizzas, wraps,
              fries, shakes, beverages and a premium family dining experience in
              the heart of {restaurant.city}.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                className="rounded-full bg-green-600 px-8 py-4 font-black text-white transition hover:bg-green-700"
              >
                WhatsApp Order
              </a>

              <a
                href={`tel:${restaurant.phone}`}
                className="rounded-full bg-red-600 px-8 py-4 font-black text-white transition hover:bg-red-700"
              >
                Call Now
              </a>

              <a
                href="#categories"
                className="rounded-full border border-white/20 px-8 py-4 font-black text-white"
              >
                View Menu
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-zinc-950 shadow-2xl shadow-yellow-500/10">
              <img
                src={restaurant.heroImage}
                alt={restaurant.name}
                className="h-[340px] w-full object-contain md:h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
              Categories
            </p>
            <h2 className={`mt-3 ${whiteHeadingClass}`}>
              What would you like to order?
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restaurant.categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-zinc-950 transition hover:-translate-y-1 hover:border-yellow-500"
              >
                <div className="flex h-56 items-center justify-center bg-black">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="max-h-full max-w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black text-yellow-500">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {category.description}
                  </p>
                  <p className="mt-5 font-black text-white">View Items →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Signature Food
          </p>
          <h2 className={`mt-3 ${whiteHeadingClass}`}>
            Belgian Broast Specials
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {signatureItems.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/menu/${item.slug}`}
                className="rounded-[2rem] border border-yellow-500/20 bg-black p-5"
              >
                <div className="flex h-56 items-center justify-center rounded-3xl bg-black p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h3 className="mt-5 text-xl font-black">{item.name}</h3>
                <p className="mt-2 text-white/60">{item.description}</p>
                <p className="mt-4 text-2xl font-black text-yellow-500">
                  {item.displayPrice}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="popular" className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Popular Food
          </p>
          <h2 className={`mt-3 ${whiteHeadingClass}`}>Most Loved Items</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popularItems.slice(0, 8).map((item) => (
              <Link
                key={item.id}
                href={`/menu/${item.slug}`}
                className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-5"
              >
                <div className="flex h-44 items-center justify-center rounded-3xl bg-black p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h3 className="mt-4 font-black">{item.name}</h3>
                <p className="mt-2 text-xl font-black text-yellow-500">
                  {item.displayPrice}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-zinc-950 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Restaurant Gallery
          </p>
          <h2 className={`mt-3 ${whiteHeadingClass}`}>
            Ambience, Dining & Food Moments
          </h2>

          <p className="mt-4 max-w-2xl text-white/60">
            A glimpse of Belgian Broast Rampur — family seating, dining area,
            food presentation and restaurant ambience.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {restaurant.gallery.map((image, index) => (
              <div
                key={image}
                className="overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-black"
              >
                <img
                  src={image}
                  alt={`Belgian Broast restaurant gallery ${index + 1}`}
                  className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Reviews
          </p>
          <h2 className={`mt-3 ${whiteHeadingClass}`}>Customer Love</h2>

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

      <section id="location" className="bg-zinc-950 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
              Location
            </p>
            <h2 className={`mt-3 ${whiteHeadingClass}`}>
              Visit Belgian Broast
            </h2>
            <p className="mt-4 text-white/60">{restaurant.address}</p>
            <p className="mt-2 text-white/60">Call: {restaurant.phone}</p>
            <p className="mt-2 text-white/60">Email: {restaurant.email}</p>
            <p className="mt-2 text-white/60">{restaurant.hours}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${restaurant.phone}`}
                className="rounded-full bg-red-600 px-8 py-4 font-black text-white transition hover:bg-red-700"
              >
                Call Now
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                className="rounded-full bg-green-600 px-8 py-4 font-black text-white transition hover:bg-green-700"
              >
                WhatsApp Order
              </a>
            </div>
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
          href={whatsappLink}
          target="_blank"
          className="rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white shadow-xl transition hover:bg-green-700 md:px-6 md:text-base"
        >
          WhatsApp
        </a>

        <a
          href={`tel:${restaurant.phone}`}
          className="rounded-full bg-red-600 px-5 py-3 text-center text-sm font-black text-white shadow-xl transition hover:bg-red-700 md:px-6 md:text-base"
        >
          Call
        </a>
      </div>

     <footer className="border-t border-yellow-500/20 bg-black px-5 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <img
              src="/restaurant-images/logo.png"
              alt={restaurant.name}
              className="h-20 w-auto object-contain"
            />
            <h3 className="mt-3 text-2xl font-black text-yellow-500">
              {restaurant.name}
            </h3>
            <p className="mt-3 text-white/60">
              Luxury family restaurant in {restaurant.city}, serving broast,
              burgers, pizza, wraps, fries, combos, shakes and beverages.
            </p>
          </div>

          <div>
            <h4 className="font-black text-yellow-500">Categories</h4>
            <div className="mt-3 flex flex-col gap-2 text-white/60">
              {restaurant.categories.slice(0, 8).map((item) => (
                <Link key={item.slug} href={`/category/${item.slug}`}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-yellow-500">Quick Links</h4>

            <div className="mt-3 flex flex-col gap-2 text-white/60">
              <a href="#categories">Menu</a>
              <a href="#popular">Popular Food</a>
              <a href="#gallery">Gallery</a>
              <a href="#location">Location</a>
            </div>

            <h4 className="mt-6 font-black text-yellow-500">Follow & Order</h4>

            <div className="mt-3 flex flex-col gap-2 text-white/60">
              <a
                href="https://www.instagram.com/belgianbroastrampur?igsh=NWR0ZHU5Yno0ajJn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://zomato.onelink.me/xqzv/yku3mooy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on Zomato
              </a>

              <a
                href="https://www.justdial.com/Rampur/Belgian-Broast-Opposite-Khushboo-Gardenrampur-Nalla-Par-Kalghar/9999P5952-5952-251207101700-Y3Q9_BZDET"
                target="_blank"
                rel="noopener noreferrer"
              >
                Justdial Listing
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-yellow-500">Contact</h4>
            <p className="mt-3 text-white/60">{restaurant.address}</p>
            <p className="mt-2 text-white/60">{restaurant.phone}</p>
            <p className="mt-2 text-white/60">{restaurant.email}</p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`tel:${restaurant.phone}`}
                className="rounded-full bg-red-600 px-5 py-3 text-center font-black text-white transition hover:bg-red-700"
              >
                Call Now
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                className="rounded-full bg-green-600 px-5 py-3 text-center font-black text-white transition hover:bg-green-700"
              >
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-7xl border-t border-yellow-500/20 pt-6 text-center text-white/40">
          © 2026 {restaurant.name}. All rights reserved.
        </p>
      </footer>
    </main>
  );
}