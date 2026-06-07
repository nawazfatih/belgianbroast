import Link from "next/link";
import { popularItems } from "../restaurantData";

export default function CheckoutPage() {
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
            href="/cart"
            className="rounded-full border border-yellow-500 px-5 py-2 font-bold text-yellow-500"
          >
            Back To Cart
          </Link>
        </div>
      </header>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Checkout
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Complete Your Order
          </h1>

          <p className="mt-4 max-w-2xl text-white/60">
            This checkout page is ready for backend integration with customer
            login, saved addresses, COD, online payment, rewards, coupons and
            order tracking.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_420px]">
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
                <h2 className="text-2xl font-black text-yellow-500">
                  Customer Details
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <input
                    placeholder="Full Name"
                    className="rounded-2xl border border-yellow-500/20 bg-black px-5 py-4 text-white outline-none placeholder:text-white/40"
                  />

                  <input
                    placeholder="Mobile Number"
                    className="rounded-2xl border border-yellow-500/20 bg-black px-5 py-4 text-white outline-none placeholder:text-white/40"
                  />

                  <input
                    placeholder="Email Optional"
                    className="rounded-2xl border border-yellow-500/20 bg-black px-5 py-4 text-white outline-none placeholder:text-white/40 md:col-span-2"
                  />
                </div>
              </div>

              <div className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
                <h2 className="text-2xl font-black text-yellow-500">
                  Delivery Address
                </h2>

                <div className="mt-6 grid gap-4">
                  <textarea
                    placeholder="Full Address"
                    rows={4}
                    className="rounded-2xl border border-yellow-500/20 bg-black px-5 py-4 text-white outline-none placeholder:text-white/40"
                  />

                  <div className="grid gap-4 md:grid-cols-3">
                    <input
                      placeholder="City"
                      defaultValue="Rampur"
                      className="rounded-2xl border border-yellow-500/20 bg-black px-5 py-4 text-white outline-none placeholder:text-white/40"
                    />

                    <input
                      placeholder="Area"
                      className="rounded-2xl border border-yellow-500/20 bg-black px-5 py-4 text-white outline-none placeholder:text-white/40"
                    />

                    <input
                      placeholder="Pincode"
                      className="rounded-2xl border border-yellow-500/20 bg-black px-5 py-4 text-white outline-none placeholder:text-white/40"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
                <h2 className="text-2xl font-black text-yellow-500">
                  Order Type
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <label className="rounded-2xl border border-yellow-500 bg-yellow-500 p-5 font-black text-black">
                    <input
                      type="radio"
                      name="orderType"
                      defaultChecked
                      className="mr-3"
                    />
                    Delivery
                  </label>

                  <label className="rounded-2xl border border-yellow-500/20 bg-black p-5 font-black text-white">
                    <input
                      type="radio"
                      name="orderType"
                      className="mr-3"
                    />
                    Pickup
                  </label>
                </div>
              </div>

              <div className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
                <h2 className="text-2xl font-black text-yellow-500">
                  Payment Method
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <label className="rounded-2xl border border-yellow-500 bg-yellow-500 p-5 font-black text-black">
                    <input
                      type="radio"
                      name="paymentMethod"
                      defaultChecked
                      className="mr-3"
                    />
                    Cash On Delivery
                  </label>

                  <label className="rounded-2xl border border-yellow-500/20 bg-black p-5 font-black text-white">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="mr-3"
                    />
                    Online Payment
                  </label>
                </div>
              </div>

              <div className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
                <h2 className="text-2xl font-black text-yellow-500">
                  Coupon / Rewards
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto]">
                  <input
                    placeholder="Enter Coupon Code"
                    className="rounded-2xl border border-yellow-500/20 bg-black px-5 py-4 text-white outline-none placeholder:text-white/40"
                  />

                  <button className="rounded-2xl bg-yellow-500 px-8 py-4 font-black text-black">
                    Apply
                  </button>
                </div>

                <p className="mt-4 text-sm text-white/50">
                  Discounts apply only through subscription, coupon, offer or
                  owner-approved campaign.
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
              <h2 className="text-3xl font-black text-yellow-500">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                {sampleItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-4 border-b border-yellow-500/10 pb-4"
                  >
                    <div>
                      <p className="font-black">{item.name}</p>
                      <p className="mt-1 text-sm text-white/50">
                        Qty: 1
                      </p>
                    </div>

                    <p className="font-black text-yellow-500">
                      {item.displayPrice}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4 text-white/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-black text-white">
                    ₹{subtotal}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-black text-white">
                    Calculated later
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="font-black text-white">₹0</span>
                </div>

                <div className="border-t border-yellow-500/20 pt-4">
                  <div className="flex justify-between text-xl">
                    <span className="font-black text-white">Payable</span>
                    <span className="font-black text-yellow-500">
                      ₹{subtotal}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-yellow-500/20 bg-black p-5">
                <p className="font-black text-yellow-500">
                  Reward Points
                </p>

                <p className="mt-2 text-white/70">
                  This order can earn approximately{" "}
                  <span className="font-black text-yellow-500">
                    {rewardPoints} points
                  </span>
                  .
                </p>
              </div>

              <button className="mt-6 w-full rounded-full bg-yellow-500 px-8 py-4 font-black text-black">
                Place Order
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-white/40">
                Online payment, OTP login, saved addresses and order tracking
                will connect through backend.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}