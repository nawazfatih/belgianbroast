import Link from "next/link";
import { restaurant } from "../restaurantData";

export default function SubscriptionsPage() {
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
            Subscriptions
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Belgian Broast Membership Plans
          </h1>

          <p className="mt-4 max-w-3xl text-white/60">
            Save more every month with Belgian Broast subscriptions. Members get
            discounts, birthday benefits and higher reward campaign benefits.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {restaurant.subscriptionPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[2rem] border p-8 ${
                  plan.highlighted
                    ? "border-yellow-500 bg-yellow-500 text-black"
                    : "border-yellow-500/20 bg-zinc-950 text-white"
                }`}
              >
                <p className="font-bold uppercase tracking-[0.2em]">
                  Plan
                </p>

                <h2 className="mt-4 text-4xl font-black">{plan.name}</h2>

                <p className="mt-4 text-3xl font-black">{plan.price}</p>

                <div className="mt-8 space-y-4">
                  {plan.benefits.map((benefit) => (
                    <p key={benefit} className="font-bold">
                      ✓ {benefit}
                    </p>
                  ))}
                </div>

                <button
                  className={`mt-8 w-full rounded-full px-8 py-4 font-black ${
                    plan.highlighted
                      ? "bg-black text-yellow-500"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>

          <section className="mt-12 rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-8">
            <h2 className="text-3xl font-black text-yellow-500">
              Subscription Benefits
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Monthly Food Discounts",
                "Birthday Coupon",
                "Double Reward Points",
                "Family Offers",
                "Higher Selfie Rewards",
                "Higher Social Campaign Rewards",
                "Special Coupons",
                "Priority Benefits",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-yellow-500/20 bg-black p-5 font-bold"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-8">
            <h2 className="text-3xl font-black text-yellow-500">
              Important Rules
            </h2>

            <div className="mt-6 space-y-4 text-white/70">
              <p>
                Menu prices remain fixed. Discounts are applied only through
                subscription, coupon, offer or owner-approved campaign.
              </p>

              <p>
                Subscription benefits will apply after backend verification and
                active payment status.
              </p>

              <p>
                Family plan is designed for family offers and future family
                account support.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}