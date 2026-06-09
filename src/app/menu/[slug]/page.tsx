import Link from "next/link";
import { notFound } from "next/navigation";
import { getMenuItemBySlug, restaurant } from "../../restaurantData";

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

  const whatsappMessage = `Hello Belgian Broast, I want to order:\n\n${item.name}\nPrice: ${item.displayPrice}`;

  const whatsappLink = `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(
    whatsappMessage
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
      <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/restaurant-images/logo.png"
              alt={restaurant.name}
              className="h-16 w-auto object-contain"
            />

            <div>
              <h1 className="text-2xl font-black">
                <span className="text-white">Belgian </span>
                <span className="text-red-500">Broast</span>
              </h1>

              <p className="text-xs font-bold text-yellow-500">
                Family Restaurant • Rampur
              </p>
            </div>
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
            <div className="flex min-h-[360px] items-center justify-center overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-4">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-[520px] max-w-full object-contain"
              />
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
              {item.category}
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight">
              {item.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-white/65">
              {item.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <p className="rounded-2xl border border-yellow-500/30 bg-zinc-950 px-6 py-3 text-4xl font-black text-yellow-500">
                {item.displayPrice}
              </p>

              {item.tag && (
                <span className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-black text-black">
                  {item.tag}
                </span>
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                className="rounded-full bg-yellow-500 px-8 py-4 font-black text-black"
              >
                WhatsApp Order
              </a>

              <a
                href={`tel:${restaurant.phone}`}
                className="rounded-full border border-yellow-500 px-8 py-4 font-black text-yellow-500"
              >
                Call Now
              </a>
            </div>

            <div className="mt-10 rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
              <h2 className="text-2xl font-black text-yellow-500">
                Why Customers Love It
              </h2>

              <ul className="mt-5 space-y-3 text-white/70">
                <li>✓ Freshly prepared food</li>
                <li>✓ Premium ingredients</li>
                <li>✓ Family dining experience</li>
                <li>✓ Available for WhatsApp and phone orders</li>
              </ul>
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
                <div className="flex h-52 items-center justify-center bg-black p-2">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-black">{food.name}</h3>

                  <p className="mt-2 text-yellow-500">
                    {food.displayPrice}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href={whatsappLink}
          target="_blank"
          className="rounded-full bg-yellow-500 px-6 py-3 text-center font-black text-black shadow-xl"
        >
          WhatsApp
        </a>

        <a
          href={`tel:${restaurant.phone}`}
          className="rounded-full border border-yellow-500 bg-black px-6 py-3 text-center font-black text-yellow-500 shadow-xl"
        >
          Call
        </a>
      </div>
    </main>
  );
}