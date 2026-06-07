import Link from "next/link";
import { popularItems, restaurant } from "../restaurantData";

export default function CartPage() {
  const sampleItems = popularItems.slice(0, 3);

  const subtotal = sampleItems.reduce((total, item) => {
    if (typeof item.price === "number") {
      return total + item.price;
    }

    return total;
  }, 0);

  const rewardPoints = Math.floor(subtotal / 100) * 5;

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-yellow-500/20 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link href="/" className="text-2xl font-black text-yellow-500">
            Belgian Broast
          </Link>

          <Link
            href="/"
            className="rounded-full border border-yellow-500 px-5 py-2 font-bold text-yellow-500"
          >
            Continue Ordering
          </Link>
        </div>
      </header>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
              Cart
            </p>

            <h1 className="mt-4 text-5xl font-black">Your Food Cart</h1>

            <p className="mt-4 max-w-2xl text-white/60">
              This cart page is ready for the future backend and local cart
              connection. Prices stay fixed per quantity. No automatic bulk
              discount is applied.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_420px]">
            <div className="space-y-5">
              {sampleItems.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-5 rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-5 md:grid-cols-[160px_1fr_auto]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-36 w-full rounded-3xl object-cover md:w-40"
                  />

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
                      {item.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-black">{item.name}</h2>

                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <button className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-500/30 text-yellow-500">
                        -
                      </button>

                      <span className="font-black">1</span>

                      <button className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-500/30 text-yellow-500">
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-2xl font-black text-yellow-500">
                      {item.displayPrice}
                    </p>

                    <button className="mt-4 rounded-full border border-red-500/40 px-4 py-2 text-sm font-bold text-red-400">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
              <h2 className="text-3xl font-black text-yellow-500">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 text-white/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-black text-white">₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-black text-white">
                    Calculated at checkout
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="font-black text-white">
                    Coupon / Subscription only
                  </span>
                </div>

                <div className="border-t border-yellow-500/20 pt-4">
                  <div className="flex justify-between text-xl">
                    <span className="font-black text-white">Total</span>
                    <span className="font-black text-yellow-500">
                      ₹{subtotal}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-yellow-500/20 bg-black p-5">
                <p className="font-black text-yellow-500">Reward Estimate</p>
                <p className="mt-2 text-white/70">
                  You will earn approx{" "}
                  <span className="font-black text-yellow-500">
                    {rewardPoints} points
                  </span>{" "}
                  on this order.
                </p>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black"
              >
                Proceed To Checkout
              </Link>

              <p className="mt-4 text-center text-xs leading-5 text-white/40">
                No automatic bulk discount. Discounts only through subscription,
                coupon, offer or owner-approved campaign.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}