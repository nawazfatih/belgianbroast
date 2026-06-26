export type BlogContentBlock = {
  heading: string;
  text: string;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  image: string;
  author: string;
  date: string;
  readTime: string;
  content: BlogContentBlock[];
  faqs: BlogFaq[];
};

export const blogs: BlogPost[] = [
  {
    slug: "best-broast-chicken-in-rampur",
    title: "Best Broast Chicken in Rampur",
    description:
      "Looking for crispy and flavorful broast chicken in Rampur? Belgian Broast serves fresh broast, burgers, pizzas, wraps and beverages for families and food lovers.",
    keywords: [
      "Best Broast Chicken in Rampur",
      "Belgian Broast Rampur",
      "Broast Chicken Rampur",
      "Fried Chicken Rampur",
      "Family Restaurant in Rampur",
    ],
    image: "/restaurant-images/hero-restaurant.jpg",
    author: "Belgian Broast",
    date: "2026-06-26",
    readTime: "3 min read",
    content: [
      {
        heading: "Why Belgian Broast is popular in Rampur",
        text:
          "Belgian Broast is known for crispy broast chicken, juicy burgers, flavorful pizzas, wraps, fries, shakes and beverages. The restaurant focuses on fresh preparation, family dining and a clean food experience for customers in Rampur.",
      },
      {
        heading: "Freshly prepared broast chicken",
        text:
          "Every broast order is prepared with care so customers can enjoy a crispy outside and juicy inside. This makes Belgian Broast a good choice for people searching for broast chicken or fried chicken in Rampur.",
      },
      {
        heading: "More than just broast",
        text:
          "Along with broast chicken, Belgian Broast also serves zinger burgers, pizza, wraps, fries, cold coffee, shakes and refreshing beverages. Customers can explore the menu and place orders through call or WhatsApp.",
      },
    ],
    faqs: [
      {
        question: "Where can I get broast chicken in Rampur?",
        answer:
          "You can visit Belgian Broast on Jheel Road, opposite Khushboo Garden, Rampur, for broast chicken, burgers, pizzas and beverages.",
      },
      {
        question: "Does Belgian Broast accept phone or WhatsApp orders?",
        answer:
          "Yes, customers can contact Belgian Broast through phone call or WhatsApp to place food orders.",
      },
      {
        question: "Is Belgian Broast suitable for families?",
        answer:
          "Yes, Belgian Broast is a family restaurant in Rampur serving broast, burgers, pizza, wraps, fries and beverages.",
      },
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}

export function getRelatedBlogs(currentSlug: string) {
  return blogs.filter((blog) => blog.slug !== currentSlug).slice(0, 3);
}