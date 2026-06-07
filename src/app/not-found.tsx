import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-8xl font-black text-yellow-500">404</p>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Page Not Found
        </h1>

        <p className="mt-5 text-lg leading-8 text-white/60">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-yellow-500 px-8 py-4 font-black text-black transition hover:scale-105"
          >
            Back To Home
          </Link>

          <Link
            href="/category/broast-special"
            className="rounded-full border border-yellow-500 px-8 py-4 font-black text-yellow-500 transition hover:bg-yellow-500 hover:text-black"
          >
            View Menu
          </Link>
        </div>

        <div className="mt-12 rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
          <h2 className="text-xl font-black text-yellow-500">
            Popular Categories
          </h2>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/category/broast-special"
              className="rounded-full border border-yellow-500/20 px-4 py-2"
            >
              Broast Special
            </Link>

            <Link
              href="/category/burgers"
              className="rounded-full border border-yellow-500/20 px-4 py-2"
            >
              Burgers
            </Link>

            <Link
              href="/category/pizza"
              className="rounded-full border border-yellow-500/20 px-4 py-2"
            >
              Pizza
            </Link>

            <Link
              href="/category/wraps"
              className="rounded-full border border-yellow-500/20 px-4 py-2"
            >
              Wraps
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}