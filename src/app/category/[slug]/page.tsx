import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getMenuByCategorySlug,
  restaurant,
} from "../../restaurantData";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return restaurant.categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} | Belgian Broast Rampur`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const items = getMenuByCategorySlug(slug);

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
            href="/"
            className="rounded-full border border-yellow-500 px-5 py-2 font-bold text-yellow-500"
          >
            Back Home
          </Link>
        </div>
      </header>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
              Category
            </p>

            <h1 className="mt-4 text-5xl font-black">
              {category.name}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              {category.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.id}
                href={`/menu/${item.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-zinc-950 transition hover:-translate-y-1 hover:border-yellow-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  {item.tag && (
                    <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-black text-black">
                      {item.tag}
                    </span>
                  )}

                  <h2 className="mt-4 text-2xl font-black">
                    {item.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-2xl font-black text-yellow-500">
                      {item.displayPrice}
                    </p>

                    <span className="font-bold text-white">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}