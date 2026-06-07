import Link from "next/link";
import { popularItems } from "../restaurantData";

export default function WishlistPage() {
  const wishlistItems = popularItems.slice(0, 6);

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-yellow-500/20 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link href="/" className="text-2xl font-black text-yellow-500">
            Belgian Broast
          </Link>

          <Link
            href="/account"
            className="rounded-full border border-yellow-500 px-5 py-2 font-bold text-yellow-500"
          >
            My Account
          </Link>
        </div>
      </header>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Wishlist
          </p>

          <h1 className="mt-4 text-5xl font-black">
            My Favorite Food
          </h1>

          <p className="mt-4 max-w-2xl text-white/60">
            Customers can save favorite menu items here and quickly reorder
            them later.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-zinc-950"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
                    {item.category}
                  </p>

                  <h2 className="mt-3 text-2xl font-black">
                    {item.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {item.description}
                  </p>

                  <p className="mt-4 text-2xl font-black text-yellow-500">
                    {item.displayPrice}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/menu/${item.slug}`}
                      className="rounded-full bg-yellow-500 px-5 py-3 font-black text-black"
                    >
                      View
                    </Link>

                    <button className="rounded-full border border-yellow-500 px-5 py-3 font-black text-yellow-500">
                      Add To Cart
                    </button>

                    <button className="rounded-full border border-red-500/40 px-5 py-3 font-black text-red-400">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-8">
            <h2 className="text-3xl font-black text-yellow-500">
              Future Wishlist Features
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Save Favorite Food",
                "Add Favorite To Cart",
                "Quick Reorder",
                "Recommended Similar Items",
                "Wishlist Sync After Login",
                "Subscription Member Favorites",
              ].map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-yellow-500/20 bg-black p-4"
                >
                  <p className="font-bold">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}