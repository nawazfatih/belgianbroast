import Link from "next/link";
import { restaurant } from "../restaurantData";

export default function RewardsPage() {
  const rewardCards = [
    {
      title: "Spend Reward",
      value: restaurant.rewards.spendRule,
      description: "Every successful order earns Belgian Broast reward points.",
    },
    {
      title: "Points Value",
      value: restaurant.rewards.conversionRule,
      description: "Customers can redeem points on future eligible orders.",
    },
    {
      title: "Birthday Reward",
      value: restaurant.rewards.birthdayReward,
      description: "Birthday reward can be added to customer account.",
    },
    {
      title: "Referral Reward",
      value: restaurant.rewards.referralReward,
      description: "Invite friends and earn reward points.",
    },
    {
      title: "Selfie Reward",
      value: restaurant.rewards.selfieReward,
      description:
        "Customer uploads selfie with food and gets points instantly.",
    },
    {
      title: "Social Reward",
      value: restaurant.rewards.socialReward,
      description:
        "Post selfie on Instagram/Facebook and upload the post link.",
    },
  ];

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
            Rewards
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Belgian Broast Rewards
          </h1>

          <p className="mt-4 max-w-3xl text-white/60">
            Eat, upload selfie, share on social media, refer friends and earn
            Belgian Broast reward points.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rewardCards.map((reward) => (
              <div
                key={reward.title}
                className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6"
              >
                <p className="text-4xl text-yellow-500">★</p>

                <h2 className="mt-5 text-2xl font-black">
                  {reward.title}
                </h2>

                <p className="mt-3 text-xl font-black text-yellow-500">
                  {reward.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {reward.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <section className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-8">
              <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
                Selfie Reward
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Upload Selfie With Food
              </h2>

              <p className="mt-4 text-white/60">
                Customer uploads selfie with Belgian Broast food and gets 50
                points instantly. No approval is required initially, but the
                system can support approval later if needed.
              </p>

              <div className="mt-6 rounded-3xl border border-yellow-500/20 bg-black p-5">
                <input
                  type="file"
                  accept="image/*"
                  className="w-full rounded-2xl border border-yellow-500/20 bg-zinc-950 p-4 text-white"
                />

                <button className="mt-4 rounded-full bg-yellow-500 px-8 py-4 font-black text-black">
                  Upload Selfie
                </button>
              </div>
            </section>

            <section className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-8">
              <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
                Social Reward
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Post & Upload Link
              </h2>

              <p className="mt-4 text-white/60">
                Customer posts selfie with food on Instagram/Facebook and
                uploads the post link. Reward: 100 points.
              </p>

              <div className="mt-6 rounded-3xl border border-yellow-500/20 bg-black p-5">
                <input
                  placeholder="Instagram / Facebook Post Link"
                  className="w-full rounded-2xl border border-yellow-500/20 bg-zinc-950 px-5 py-4 text-white outline-none placeholder:text-white/40"
                />

                <button className="mt-4 rounded-full bg-yellow-500 px-8 py-4 font-black text-black">
                  Submit Link
                </button>
              </div>
            </section>
          </div>

          <section className="mt-12 rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-8">
            <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
              Ambassador Program
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Become Belgian Broast Ambassador
            </h2>

            <p className="mt-4 text-white/60">
              10 social posts + 10 successful orders = Belgian Broast
              Ambassador.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                "Exclusive Offers",
                "Special Coupons",
                "Double Reward Campaigns",
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
              Important Reward Rule
            </h2>

            <p className="mt-4 text-white/70">
              On eligible social reward orders, the next order of ₹200+ can get
              a complimentary surprise food item. Customer cannot choose the
              free item. Belgian Broast decides the item.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}