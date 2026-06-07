export type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
  tag?: string;
};

export const restaurant = {
  name: "Belgian Broast",
  logoText: "BB",
  city: "Rampur",
  address:
    "Opposite Khushboo Garden, Jheel Road, Rampur, Thotar, Uttar Pradesh 244901",
  phone: "8868880002",
  whatsapp: "8868880002",
  email: "info@belgianbroast.com",
  hours: "Mon - Sun : 12:30 PM - 11:00 PM",

  theme: {
    primary: "bg-black",
    secondary: "bg-zinc-950",
    gold: "bg-yellow-500",
    goldText: "text-yellow-500",
    border: "border-yellow-500/30",
  },

  seo: {
    title: "Belgian Broast Rampur | Online Food Order & Table Booking",
    description:
      "Order burgers, pizza, broast, wraps, fries, combos, shakes and beverages from Belgian Broast Rampur.",
    keywords:
      "Belgian Broast Rampur, restaurant in Rampur, food order Rampur, pizza Rampur, burgers Rampur, broast Rampur",
  },

  heroImage: "/restaurant-images/hero-restaurant.jpg",

  zomatoLink:
    "https://www.zomato.com/rampur/belgian-broast-rampur-rampur-locality/order",

  justDialLink:
    "https://www.justdial.com/Rampur/Belgian-Broast-Opposite-Khushboo-Gardenrampur-Nalla-Par-Kalghar/9999P5952-5952-251207101700-Y3Q9_BZDET",

  districtLink:
    "https://www.district.in/dining/rampur/belgian-broast-rampur-rampur-locality",

  googleMapLink:
    "https://www.google.com/maps?daddr=R2FC%2BWRF,+Jheel+Road,+opposite+Khushboo+Garden,+Rampur,+Thotar,+Uttar+Pradesh+244901",

  categories: [
    "Broast",
    "Burgers",
    "Pizza",
    "Wraps",
    "Fries",
    "Combos",
    "Shakes",
    "Beverages",
  ],

  menu: [
    {
      name: "Classic Chicken Broast",
      price: "₹249",
      description: "Crispy chicken broast with signature spices.",
      image: "/restaurant-images/broast-chicken.jpg",
      tag: "Popular",
    },
    {
      name: "Classic Chicken Broast Bucket",
      price: "₹349",
      description: "Crispy broast bucket for sharing.",
      image: "/restaurant-images/broast-bucket.jpg",
    },
    {
      name: "Family Broast Meal Bucket",
      price: "₹549",
      description: "Family-size broast meal bucket.",
      image: "/restaurant-images/broast-family-bucket.jpg",
      tag: "Family Pack",
    },
    {
      name: "Spicy Chicken Popcorn",
      price: "₹149",
      description: "Crispy boneless spicy chicken popcorn.",
      image: "/restaurant-images/chicken-popcorn.jpg",
    },

    {
      name: "Special Zinger Burger",
      price: "₹119",
      description: "Crispy zinger burger with special sauce.",
      image: "/restaurant-images/zinger-burger.jpg",
      tag: "Best Seller",
    },
    {
      name: "Spicy Zinger Burger",
      price: "₹119",
      description: "Spicy crispy chicken burger with fresh veggies.",
      image: "/restaurant-images/spicy-zinger-burger.jpg",
    },
    {
      name: "Mega Zinger Burger",
      price: "₹149",
      description: "Large zinger burger with extra crispy filling.",
      image: "/restaurant-images/mega-zinger-burger.jpg",
    },
    {
      name: "Tangy Paneer Burger",
      price: "₹119",
      description: "Paneer burger with tangy sauce and fresh veggies.",
      image: "/restaurant-images/paneer-burger.jpg",
    },

    {
      name: "BBQ Chicken Pizza",
      price: "₹259",
      description: "Smoky BBQ chicken pizza with cheese.",
      image: "/restaurant-images/bbq-chicken-pizza.jpg",
      tag: "Popular",
    },
    {
      name: "Hot & Spicy Chicken Pizza",
      price: "₹259",
      description: "Spicy chicken pizza with bold flavours.",
      image: "/restaurant-images/spicy-chicken-pizza.jpg",
    },
    {
      name: "Margherita Pizza",
      price: "₹199",
      description: "Classic cheese pizza with tomato base.",
      image: "/restaurant-images/margherita-pizza.jpg",
    },
    {
      name: "Paneer Tikka Pizza",
      price: "₹249",
      description: "Paneer tikka pizza with cheesy toppings.",
      image: "/restaurant-images/paneer-tikka-pizza.jpg",
    },

    {
      name: "Zinger Wrap",
      price: "₹99",
      description: "Crispy zinger wrap with fresh veggies.",
      image: "/restaurant-images/zinger-wrap.jpg",
    },
    {
      name: "Chicken Tikka Wrap",
      price: "₹99",
      description: "Chicken tikka wrap with creamy sauce.",
      image: "/restaurant-images/chicken-tikka-wrap.jpg",
    },
    {
      name: "Paneer Wrap",
      price: "₹99",
      description: "Paneer wrap with fresh filling.",
      image: "/restaurant-images/paneer-wrap.jpg",
    },
    {
      name: "Mix-Veg Wrap",
      price: "₹79",
      description: "Mixed vegetable wrap with special sauce.",
      image: "/restaurant-images/mix-veg-wrap.jpg",
    },

    {
      name: "Classic French Fries",
      price: "₹79",
      description: "Golden crispy salted fries.",
      image: "/restaurant-images/classic-fries.jpg",
    },
    {
      name: "Peri-Peri Fries",
      price: "₹89",
      description: "Crispy fries with peri-peri seasoning.",
      image: "/restaurant-images/peri-peri-fries.jpg",
    },
    {
      name: "Loaded Fries",
      price: "₹129",
      description: "Fries loaded with cheese and sauces.",
      image: "/restaurant-images/loaded-fries.jpg",
    },

    {
      name: "Zinger Combo",
      price: "₹199",
      description: "Zinger burger with fries and soft drink.",
      image: "/restaurant-images/zinger-combo.jpg",
      tag: "Combo",
    },
    {
      name: "Broast Combo",
      price: "₹339",
      description: "Chicken broast with fries and soft drink.",
      image: "/restaurant-images/broast-combo.jpg",
    },

    {
      name: "Strawberry Shake",
      price: "₹119",
      description: "Creamy strawberry shake.",
      image: "/restaurant-images/strawberry-shake.jpg",
    },
    {
      name: "Oreo Shake",
      price: "₹139",
      description: "Creamy Oreo shake with chocolate crunch.",
      image: "/restaurant-images/oreo-shake.jpg",
    },

    {
      name: "Cold Coffee",
      price: "₹99",
      description: "Chilled creamy cold coffee.",
      image: "/restaurant-images/cold-coffee.jpg",
    },
    {
      name: "Virgin Mojito",
      price: "₹79",
      description: "Refreshing mint mojito.",
      image: "/restaurant-images/virgin-mojito.jpg",
    },
  ] satisfies MenuItem[],

  offers: [
    "Flat 10% off on first WhatsApp order",
    "Family combo meals available",
    "Table booking available",
  ],

  gallery: [
    "/restaurant-images/gallery-1.jpg",
    "/restaurant-images/gallery-2.jpg",
    "/restaurant-images/gallery-3.jpg",
    "/restaurant-images/gallery-4.jpg",
  ],

  reviews: [
    {
      name: "Amaan Khan",
      text: "Amazing taste and fresh food. Broast chicken was crispy and delicious.",
    },
    {
      name: "Sara Ali",
      text: "Best place in Rampur for burgers, pizza and family dinner.",
    },
    {
      name: "Faizan Qureshi",
      text: "Good ambience, quick service and tasty food.",
    },
  ],

  faqs: [
    {
      question: "Do you accept table booking?",
      answer: "Yes, customers can book a table through WhatsApp or call.",
    },
    {
      question: "Do you provide online food orders?",
      answer:
        "Yes, customers can order through WhatsApp. Online payment can be added later.",
    },
    {
      question: "Are Zomato and Swiggy links available?",
      answer: "Yes, buttons can be connected to Zomato and Swiggy profiles.",
    },
  ],

  mapEmbed:
    "https://maps.google.com/maps?q=Belgian%20Broast%20Opposite%20Khushboo%20Garden%20Jheel%20Road%20Rampur%20Uttar%20Pradesh%20244901&t=&z=16&ie=UTF8&iwloc=&output=embed",

  socials: {
    instagram: "https://www.instagram.com/belgianbroastrampur/",
    facebook:
      "https://www.facebook.com/p/Belgian-Broast-Restaurant-61580565897770/",
    youtube: "https://www.youtube.com/channel/UC4g3bMVZRBA4KdgfYiqrn2Q",
  },
};