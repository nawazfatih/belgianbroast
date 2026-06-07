import Link from "next/link";
import {
  popularItems,
  restaurant,
  signatureItems,
} from "./restaurantData";

export default function HomePage() {
  const whatsappText = `Hello ${restaurant.name}, I want to order food.`;
  const whatsappLink = `https://wa.me/91${restaurant.whatsapp}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/95 px-5 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-4">
            <img
              src="/restaurant-images/logo.png"
              alt={restaurant.name}
              className="h-16 w-auto object-contain md:h-20"
            />

            <div>
              <h1 className="text-3xl font-black leading-none text-white md:text-4xl">
                {restaurant.name}
              </h1>
              <p className="mt-2 text-sm font-bold text-yellow-500 md:text-base">
                Luxury Family Restaurant • {restaurant.city}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-bold text-white/75 lg:flex">
            <a href="#categories">Menu</a>
            <a href="#popular">Popular</a>
            <a href="#offers">Offers</a>
            <a href="#subscriptions">Subscriptions</a>
            <a href="#rewards">Rewards</a>
            <a href="#location">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/account"
              className="rounded-full border border-yellow-500/30 px-5 py-3 text-sm font-black text-yellow-500"
            >
              Account
            </Link>

            <Link
              href="/cart"
              className="rounded-full bg-yellow-500 px-8 py-4 font-black text-black"
            >
              Order Now
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-yellow-500/20 px-5 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(234,179,8,0.16),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#000_0%,#030303_50%,#0b0b0b_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-8 max-w-2xl text-base font-bold leading-8 text-yellow-500">
              Welcome to Belgian Broast • Where Fresh Food, Warm Hospitality &
              Peaceful Dining Create Memorable Experiences
            </p>

            <h2 className="text-6xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
              Crispy •<br />
              Flavorful •<br />
              Unforgettable
              <br />
              Taste
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              Enjoy signature broast chicken, juicy burgers, pizzas, wraps,
              fries, shakes, beverages and a premium family dining experience in
              the heart of {restaurant.city}.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/cart"
                className="rounded-full bg-yellow-500 px-8 py-4 font-black text-black"
              >
                Order Online
              </Link>

              <a
                href="#categories"
                className="rounded-full border border-yellow-500 px-8 py-4 font-black text-yellow-500"
              >
                View Menu
              </a>

              <a
                href={whatsappLink}
                className="rounded-full border border-green-500 px-8 py-4 font-black text-green-400"
              >
                WhatsApp Order
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

      <section className="border-b border-yellow-500/20 bg-zinc-950 px-5 py-8">
        <div className="mx-auto max-w-4xl">
          <input
            placeholder="Search broast, burger, pizza, wraps..."
            className="w-full rounded-2xl border border-yellow-500/20 bg-black px-6 py-5 text-white outline-none placeholder:text-white/40"
          />
        </div>
      </section>

      <section id="categories" className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
              Categories
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
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
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
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
          <h2 className="mt-3 text-4xl font-black">Belgian Broast Specials</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {signatureItems.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/menu/${item.slug}`}
                className="rounded-[2rem] border border-yellow-500/20 bg-black p-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full rounded-3xl object-cover"
                />
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
          <h2 className="mt-3 text-4xl font-black">Most Loved Items</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popularItems.slice(0, 8).map((item) => (
              <Link
                key={item.id}
                href={`/menu/${item.slug}`}
                className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-44 w-full rounded-3xl object-cover"
                />
                <h3 className="mt-4 font-black">{item.name}</h3>
                <p className="mt-2 text-xl font-black text-yellow-500">
                  {item.displayPrice}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="bg-zinc-950 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Offers
          </p>
          <h2 className="mt-3 text-4xl font-black">Premium Food Benefits</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {restaurant.offers.map((offer) => (
              <div
                key={offer}
                className="rounded-3xl border border-yellow-500/20 bg-black p-6"
              >
                <p className="text-3xl text-yellow-500">✦</p>
                <h3 className="mt-4 font-black">{offer}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="subscriptions" className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Subscription Plans
          </p>
          <h2 className="mt-3 text-4xl font-black">Save More Every Month</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {restaurant.subscriptionPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[2rem] border p-7 ${
                  plan.highlighted
                    ? "border-yellow-500 bg-yellow-500 text-black"
                    : "border-yellow-500/20 bg-zinc-950"
                }`}
              >
                <h3 className="text-3xl font-black">{plan.name}</h3>
                <p className="mt-3 text-2xl font-black">{plan.price}</p>
                <div className="mt-5 space-y-3">
                  {plan.benefits.map((benefit) => (
                    <p key={benefit} className="font-bold">
                      ✓ {benefit}
                    </p>
                  ))}
                </div>
                <Link
                  href="/subscriptions"
                  className={`mt-6 inline-block rounded-full px-6 py-3 font-black ${
                    plan.highlighted
                      ? "bg-black text-yellow-500"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  View Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rewards" className="bg-zinc-950 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Rewards
          </p>
          <h2 className="mt-3 text-4xl font-black">Eat, Share & Earn Points</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              restaurant.rewards.spendRule,
              restaurant.rewards.selfieReward,
              restaurant.rewards.socialReward,
              restaurant.rewards.referralReward,
              restaurant.rewards.birthdayReward,
              restaurant.rewards.socialFreeItemRule,
            ].map((reward, index) => (
              <div
                key={`${reward}-${index}`}
                className="rounded-3xl border border-yellow-500/20 bg-black p-6"
              >
                <p className="text-3xl text-yellow-500">★</p>
                <p className="mt-4 font-bold text-white/80">{reward}</p>
              </div>
            ))}
          </div>

          <Link
            href="/rewards"
            className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-4 font-black text-black"
          >
            View Rewards
          </Link>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Reviews
          </p>
          <h2 className="mt-3 text-4xl font-black">Customer Love</h2>

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
            <h2 className="mt-3 text-4xl font-black">Visit Belgian Broast</h2>
            <p className="mt-4 text-white/60">{restaurant.address}</p>
            <p className="mt-2 text-white/60">Call: {restaurant.phone}</p>
            <p className="mt-2 text-white/60">Email: {restaurant.email}</p>
            <p className="mt-2 text-white/60">{restaurant.hours}</p>
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
        <Link
          href="/cart"
          className="rounded-full bg-yellow-500 px-6 py-3 text-center font-black text-black shadow-xl"
        >
          Order
        </Link>
        <a
          href={whatsappLink}
          className="rounded-full bg-green-600 px-6 py-3 text-center font-black text-white shadow-xl"
        >
          WhatsApp
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
              Premium online food ordering platform for {restaurant.city}.
            </p>
          </div>

          <div>
            <h4 className="font-black text-yellow-500">Categories</h4>
            <div className="mt-3 flex flex-col gap-2 text-white/60">
              {restaurant.categories.slice(0, 6).map((item) => (
                <Link key={item.slug} href={`/category/${item.slug}`}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-yellow-500">Quick Links</h4>
            <div className="mt-3 flex flex-col gap-2 text-white/60">
              <Link href="/cart">Cart</Link>
              <Link href="/account">My Account</Link>
              <Link href="/orders">Orders</Link>
              <Link href="/wishlist">Wishlist</Link>
              <Link href="/rewards">Rewards</Link>
              <Link href="/subscriptions">Subscriptions</Link>
            </div>
          </div>

          <div>
            <h4 className="font-black text-yellow-500">Contact</h4>
            <p className="mt-3 text-white/60">{restaurant.address}</p>
            <p className="mt-2 text-white/60">{restaurant.phone}</p>
            <p className="mt-2 text-white/60">{restaurant.email}</p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-7xl border-t border-yellow-500/20 pt-6 text-center text-white/40">
          © 2026 {restaurant.name}. All rights reserved.
        </p>
      </footer>
    </main>
  );
}