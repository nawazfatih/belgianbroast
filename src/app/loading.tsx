export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="mx-auto h-20 w-20 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />

        <h2 className="mt-8 text-3xl font-black text-yellow-500">
          Belgian Broast
        </h2>

        <p className="mt-3 text-white/60">
          Loading delicious food...
        </p>
      </div>
    </main>
  );
}