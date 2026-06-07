import Link from "next/link";
import { restaurant } from "../restaurantData";

export default function AccountPage() {
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
            Home
          </Link>
        </div>
      </header>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[420px_1fr]">
          <aside className="h-fit rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-yellow-500 text-4xl font-black text-black">
              BB
            </div>

            <h1 className="mt-6 text-4xl font-black">My Account</h1>

            <p className="mt-3 text-white/60">
              Login, profile, saved addresses, rewards, subscriptions and
              order history will connect here.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Profile",
                "Saved Addresses",
                "Orders",
                "Rewards",
                "Subscriptions",
                "Wishlist",
                "Referral",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-yellow-500/20 bg-black px-5 py-4 font-bold text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            <section className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
              <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
                Login
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Login With Mobile OTP
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto]">
                <input
                  placeholder="Enter Mobile Number"
                  className="rounded-2xl border border-yellow-500/20 bg-black px-5 py-4 text-white outline-none placeholder:text-white/40"
                />

                <button className="rounded-2xl bg-yellow-500 px-8 py-4 font-black text-black">
                  Send OTP
                </button>
              </div>

              <p className="mt-4 text-sm text-white/50">
                OTP login will connect with backend authentication later.
              </p>
            </section>

            <section className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
              <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
                Rewards
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Belgian Broast Rewards
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <div className="rounded-3xl border border-yellow-500/20 bg-black p-5">
                  <p className="text-sm text-white/50">Spend Rule</p>
                  <p className="mt-2 text-xl font-black text-yellow-500">
                    {restaurant.rewards.spendRule}
                  </p>
                </div>

                <div className="rounded-3xl border border-yellow-500/20 bg-black p-5">
                  <p className="text-sm text-white/50">Conversion</p>
                  <p className="mt-2 text-xl font-black text-yellow-500">
                    {restaurant.rewards.conversionRule}
                  </p>
                </div>

                <div className="rounded-3xl border border-yellow-500/20 bg-black p-5">
                  <p className="text-sm text-white/50">Selfie Reward</p>
                  <p className="mt-2 text-xl font-black text-yellow-500">
                    {restaurant.rewards.selfieReward}
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
              <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
                Subscription
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Membership Plans
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {restaurant.subscriptionPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`rounded-3xl border p-5 ${
                      plan.highlighted
                        ? "border-yellow-500 bg-yellow-500 text-black"
                        : "border-yellow-500/20 bg-black"
                    }`}
                  >
                    <h3 className="text-2xl font-black">{plan.name}</h3>
                    <p className="mt-2 font-black">{plan.price}</p>

                    <div className="mt-4 space-y-2">
                      {plan.benefits.map((benefit) => (
                        <p key={benefit} className="font-bold">
                          ✓ {benefit}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
              <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
                Order History
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Recent Orders
              </h2>

              <div className="mt-6 rounded-3xl border border-yellow-500/20 bg-black p-6 text-center">
                <p className="text-white/60">
                  No orders yet. Customer order history and reorder button will
                  appear here after backend connection.
                </p>

                <Link
                  href="/"
                  className="mt-5 inline-block rounded-full bg-yellow-500 px-8 py-4 font-black text-black"
                >
                  Start Ordering
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}