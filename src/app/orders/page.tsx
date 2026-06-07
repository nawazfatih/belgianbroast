import Link from "next/link";

const sampleOrders = [
  {
    id: "BB-1001",
    date: "07 Jun 2026",
    status: "Delivered",
    amount: "₹549",
    items: "Family Broast Meal Bucket",
  },
  {
    id: "BB-1002",
    date: "05 Jun 2026",
    status: "Preparing",
    amount: "₹259",
    items: "BBQ Chicken Pizza",
  },
  {
    id: "BB-1003",
    date: "02 Jun 2026",
    status: "Cancelled",
    amount: "₹119",
    items: "Special Zinger Burger",
  },
];

export default function OrdersPage() {
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
            Orders
          </p>

          <h1 className="mt-4 text-5xl font-black">
            My Orders
          </h1>

          <p className="mt-4 max-w-2xl text-white/60">
            Order history, live order tracking, delivery updates,
            invoices, refunds and re-order functionality will connect
            through backend APIs.
          </p>

          <div className="mt-12 space-y-6">
            {sampleOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
                      Order ID
                    </p>

                    <h2 className="mt-2 text-2xl font-black">
                      {order.id}
                    </h2>

                    <p className="mt-3 text-white/60">
                      {order.items}
                    </p>

                    <p className="mt-2 text-sm text-white/40">
                      {order.date}
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-3xl font-black text-yellow-500">
                      {order.amount}
                    </p>

                    <span
                      className={`mt-3 inline-block rounded-full px-4 py-2 text-sm font-black ${
                        order.status === "Delivered"
                          ? "bg-green-600 text-white"
                          : order.status === "Preparing"
                          ? "bg-yellow-500 text-black"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full bg-yellow-500 px-6 py-3 font-black text-black">
                    Reorder
                  </button>

                  <button className="rounded-full border border-yellow-500 px-6 py-3 font-black text-yellow-500">
                    Track Order
                  </button>

                  <button className="rounded-full border border-white/20 px-6 py-3 font-black text-white">
                    View Invoice
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-8">
            <h2 className="text-3xl font-black text-yellow-500">
              Future Order Features
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Live Order Tracking",
                "Delivery Rider Tracking",
                "Order Timeline",
                "Download Invoice",
                "Refund Tracking",
                "Cancel Order",
                "Reorder",
                "Reward Points History",
                "Subscription Discounts",
              ].map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-yellow-500/20 bg-black p-4"
                >
                  <p className="font-bold">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}