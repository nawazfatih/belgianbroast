import Link from "next/link";
import { blogs } from "./blogData";
import { restaurant } from "../restaurantData";

export const metadata = {
  title: `Blog | ${restaurant.name} Rampur`,
  description:
    "Read Belgian Broast Rampur blogs about broast chicken, burgers, pizza, beverages and family dining in Rampur.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-yellow-500/20 bg-black px-5 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-black">
            <span className="text-white">Belgian </span>
            <span className="text-red-500">Broast</span>
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
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Belgian Broast Blog
          </p>

          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
            Food, Taste & Restaurant Stories
          </h1>

          <p className="mt-4 max-w-3xl text-white/60">
            Explore Belgian Broast Rampur blogs about broast chicken, zinger
            burgers, pizza, shakes, beverages and family dining.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-zinc-950 transition hover:-translate-y-1 hover:border-yellow-500"
              >
                <div className="flex h-56 items-center justify-center bg-black">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-bold text-yellow-500">
                    {blog.date} • {blog.readTime}
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-white">
                    {blog.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {blog.description}
                  </p>

                  <p className="mt-5 font-black text-yellow-500">
                    Read Blog →
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