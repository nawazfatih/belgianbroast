import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlogBySlug, getRelatedBlogs } from "../blogData";
import { restaurant } from "../../restaurantData";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Belgian Broast Rampur`,
    description: blog.description,
    keywords: blog.keywords,
    alternates: {
      canonical: `https://www.belgianbroast.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://www.belgianbroast.com/blog/${blog.slug}`,
      type: "article",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(blog.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    image: `https://www.belgianbroast.com${blog.image}`,
    author: {
      "@type": "Organization",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: restaurant.name,
      logo: {
        "@type": "ImageObject",
        url: "https://www.belgianbroast.com/icon.png",
      },
    },
    datePublished: blog.date,
    dateModified: blog.date,
    mainEntityOfPage: `https://www.belgianbroast.com/blog/${blog.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blog.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <header className="border-b border-yellow-500/20 bg-black px-5 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-black">
            <span className="text-white">Belgian </span>
            <span className="text-red-500">Broast</span>
          </Link>

          <Link
            href="/blog"
            className="rounded-full border border-yellow-500 px-5 py-2 font-bold text-yellow-500"
          >
            All Blogs
          </Link>
        </div>
      </header>

      <article className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-500">
            Belgian Broast Blog
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            {blog.title}
          </h1>

          <p className="mt-5 text-white/60">
            By {blog.author} • {blog.date} • {blog.readTime}
          </p>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-zinc-950">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-[420px] w-full object-cover"
            />
          </div>

          <p className="mt-8 text-xl leading-9 text-white/70">
            {blog.description}
          </p>

          <div className="mt-10 space-y-10">
            {blog.content.map((block) => (
              <section key={block.heading}>
                <h2 className="text-3xl font-black text-yellow-500">
                  {block.heading}
                </h2>
                <p className="mt-4 text-lg leading-9 text-white/70">
                  {block.text}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6">
            <h2 className="text-3xl font-black text-white">
              Order from Belgian Broast
            </h2>

            <p className="mt-4 text-white/60">
              Explore our menu and order broast chicken, burgers, pizza, wraps,
              shakes and beverages through call or WhatsApp.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`tel:${restaurant.phone}`}
                className="rounded-full bg-red-600 px-6 py-3 font-black text-white"
              >
                Call Now
              </a>

              <a
                href={`https://wa.me/${restaurant.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-600 px-6 py-3 font-black text-white"
              >
                WhatsApp Order
              </a>

              <Link
                href="/#categories"
                className="rounded-full border border-yellow-500 px-6 py-3 font-black text-yellow-500"
              >
                View Menu
              </Link>
            </div>
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-white">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-4">
              {blog.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-6"
                >
                  <h3 className="font-black text-yellow-500">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {relatedBlogs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-3xl font-black text-white">
                Related Blogs
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {relatedBlogs.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-5"
                  >
                    <h3 className="font-black text-yellow-500">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/60">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </main>
  );
}