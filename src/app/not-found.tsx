import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
      <div className="max-w-xl text-center">
        <p className="text-lg font-bold uppercase tracking-[0.25em] text-yellow-500">
          Error 404
        </p>

        <h1 className="mt-4 text-6xl font-black">
          Page Not Found
        </h1>

        <p className="mt-6 text-white/60">
          Sorry, the page you are looking for does not exist.
          Please return to the Belgian Broast homepage.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-4 font-black text-black"
        >
          Back To Home
        </Link>
      </div>
    </main>
  );
}