import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getMenuItemBySlug,
  restaurant,
} from "../../restaurantData";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return restaurant.menu.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const item = getMenuItemBySlug(slug);

  if (!item) {
    return {
      title: "Food Item Not Found",
    };
  }

  return {
    title: `${item.name} | Belgian Broast Rampur`,
    description: item.description,
  };
}

export default async function MenuItemPage({ params }: Props) {
  const { slug } = await params;

  const item = getMenuItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const whatsappText = `Hello Belgian Broast, I want to order:

${item.name}
Price: ${item.displayPrice}`;

  const whatsappLink = `https://wa.me/91${restaurant.whatsapp}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const relatedItems = restaurant.menu
    .filter(
      (food) =>
        food.categorySlug === item.categorySlug &&
        food.id !== item.id
    )
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-yellow-500/20 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link
            href="/"
            className="text-2xl font-black text-yellow-500"
          >
            Belgian Broast
          </Link>

          <Link
            href={`/category/${item.categorySlug}`}
            className="rounded-full border border-yellow-500 px-5 py-2 font-bold text-yellow-500"
          >
            Back
          </Link>
        </div>
      </header>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-[2rem] border border-yellow-500/20">
              <img
                src={item.image}
                alt={item.name}
                className="h-[500px] w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
              {item.category}
            </p>

            <h1 className="mt-4 text-5xl font-black">
              {item.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-white/65">
              {item.description}
            </p>

            <div className="mt-8">
              <p className="text-4xl font-black text-yellow-500">
                {item.displayPrice}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-yellow-500 px-8 py-4 font-black text-black">
                Add To Cart
              </button>

              <button className="rounded-full border border-yellow-500 px-8 py-4 font-black text-yellow-500">
                Buy Now
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                className="rounded-full bg-green-600 px-8 py-4 font-black text-white"
              >
                WhatsApp Order
              </a>
            </div>

            <div className="mt-12 rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
              <h2 className="text-2xl font-black text-yellow-500">
                Reward Benefits
              </h2>

              <ul className="mt-5 space-y-3 text-white/70">
                <li>✓ ₹100 Spend = 5 Reward Points</li>
                <li>✓ 100 Points = ₹10</li>
                <li>✓ Birthday Reward = 100 Points</li>
                <li>✓ Referral Reward = 100 Points</li>
                <li>✓ Selfie Reward = 50 Points</li>
                <li>✓ Social Reward = 100 Points</li>
              </ul>
            </div>

            <div className="mt-8 rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
              <h2 className="text-2xl font-black text-yellow-500">
                Subscription Savings
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {restaurant.subscriptionPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className="rounded-2xl border border-yellow-500/20 bg-black p-4"
                  >
                    <h3 className="font-black">{plan.name}</h3>
                    <p className="mt-2 text-yellow-500">
                      {plan.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">
            Related Items
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedItems.map((food) => (
              <Link
                key={food.id}
                href={`/menu/${food.slug}`}
                className="overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-black"
              >
                <img
                  src={food.image}
                  alt={food.name}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-black">
                    {food.name}
                  </h3>

                  <p className="mt-2 text-yellow-500">
                    {food.displayPrice}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}