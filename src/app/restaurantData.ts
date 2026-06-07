export type CategorySlug =
  | "broast-special"
  | "burgers"
  | "wraps"
  | "pizza"
  | "pasta"
  | "fries"
  | "combos"
  | "shakes"
  | "beverages";

export type Category = {
  name: string;
  slug: CategorySlug;
  description: string;
  image: string;
};

export type MenuItem = {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: CategorySlug;
  price: number | "MRP";
  displayPrice: string;
  description: string;
  image: string;
  tag?: string;
  isSignature?: boolean;
  isPopular?: boolean;
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

  seo: {
    title: "Belgian Broast Rampur | Online Food Order & Family Dining",
    description:
      "Order broast chicken, burgers, pizza, wraps, fries, combos, shakes and beverages from Belgian Broast Rampur. Premium family restaurant with online ordering, rewards and offers.",
    keywords:
      "Belgian Broast Rampur, online food order Rampur, broast chicken Rampur, burgers Rampur, pizza Rampur, family restaurant Rampur",
    siteUrl: "https://belgianbroast.com",
  },

  heroImage: "/restaurant-images/hero-restaurant.jpg",

  zomatoLink:
    "https://www.zomato.com/rampur/belgian-broast-rampur-rampur-locality/order",

  googleMapLink:
    "https://www.google.com/maps?daddr=R2FC%2BWRF,+Jheel+Road,+opposite+Khushboo+Garden,+Rampur,+Thotar,+Uttar+Pradesh+244901",

  categories: [
    {
      name: "Broast Special",
      slug: "broast-special",
      description: "Signature crispy broast chicken, popcorn and chizza.",
      image: "/restaurant-images/broast-chicken.jpg",
    },
    {
      name: "Burgers",
      slug: "burgers",
      description: "Zinger, paneer and herb chilli burgers.",
      image: "/restaurant-images/zinger-burger.jpg",
    },
    {
      name: "Wraps",
      slug: "wraps",
      description: "Fresh wraps with chicken, paneer and veg fillings.",
      image: "/restaurant-images/zinger-wrap.jpg",
    },
    {
      name: "Pizza",
      slug: "pizza",
      description: "Chicken, paneer, veg and cheese pizzas.",
      image: "/restaurant-images/bbq-chicken-pizza.jpg",
    },
    {
      name: "Pasta",
      slug: "pasta",
      description: "Red sauce and white sauce pasta options.",
      image: "/restaurant-images/pizza.jpg",
    },
    {
      name: "Fries",
      slug: "fries",
      description: "Classic, peri peri and loaded fries.",
      image: "/restaurant-images/classic-fries.jpg",
    },
    {
      name: "Combos",
      slug: "combos",
      description: "Value combos for quick meals.",
      image: "/restaurant-images/zinger-combo.jpg",
    },
    {
      name: "Shakes",
      slug: "shakes",
      description: "Creamy strawberry, vanilla, Oreo and chocolate shakes.",
      image: "/restaurant-images/oreo-shake.jpg",
    },
    {
      name: "Beverages",
      slug: "beverages",
      description: "Coffee, lemonade, mojito and cold drinks.",
      image: "/restaurant-images/cold-coffee.jpg",
    },
  ] satisfies Category[],

  menu: [
    {
      id: "classic-chicken-broast",
      name: "Classic Chicken Broast",
      slug: "classic-chicken-broast",
      category: "Broast Special",
      categorySlug: "broast-special",
      price: 249,
      displayPrice: "₹249",
      description: "2pcs Wings + 2pcs legs.",
      image: "/restaurant-images/broast-chicken.jpg",
      tag: "Popular",
      isSignature: true,
      isPopular: true,
    },
    {
      id: "classic-chicken-broast-bucket",
      name: "Classic Chicken Broast Bucket",
      slug: "classic-chicken-broast-bucket",
      category: "Broast Special",
      categorySlug: "broast-special",
      price: 349,
      displayPrice: "₹349",
      description: "2pcs Wings + 2pcs legs + 2pcs Boneless.",
      image: "/restaurant-images/broast-bucket.jpg",
      isPopular: true,
    },
    {
      id: "family-broast-meal-bucket",
      name: "Family Broast Meal Bucket",
      slug: "family-broast-meal-bucket",
      category: "Broast Special",
      categorySlug: "broast-special",
      price: 549,
      displayPrice: "₹549",
      description: "10pcs full Chicken family-size broast meal bucket.",
      image: "/restaurant-images/broast-family-bucket.jpg",
      tag: "Family Pack",
      isSignature: true,
    },
    {
      id: "spicy-chicken-popcorn",
      name: "Spicy Chicken Popcorn",
      slug: "spicy-chicken-popcorn",
      category: "Broast Special",
      categorySlug: "broast-special",
      price: 149,
      displayPrice: "₹149",
      description: "8-10pcs Boneless chicken.",
      image: "/restaurant-images/chicken-popcorn.jpg",
    },
    {
      id: "special-loaded-chicken-popcorn",
      name: "Special Loaded Chicken Popcorn",
      slug: "special-loaded-chicken-popcorn",
      category: "Broast Special",
      categorySlug: "broast-special",
      price: 199,
      displayPrice: "₹199",
      description: "Tender juicy chicken bites, layered with cheese and sauces.",
      image: "/restaurant-images/chicken-popcorn.jpg",
      tag: "Special",
      isSignature: true,
    },
    {
      id: "special-tandoori-chicken-chizza",
      name: "Special Tandoori Chicken Chizza",
      slug: "special-tandoori-chicken-chizza",
      category: "Broast Special",
      categorySlug: "broast-special",
      price: 249,
      displayPrice: "₹249",
      description:
        "Crispy chicken base topped with rich cheese, flavorful sauces and fresh toppings.",
      image: "/restaurant-images/broast-combo.jpg",
      tag: "Special",
      isSignature: true,
    },
    {
      id: "special-zinger-burger",
      name: "Special Zinger Burger",
      slug: "special-zinger-burger",
      category: "Burgers",
      categorySlug: "burgers",
      price: 119,
      displayPrice: "₹119",
      description: "Crispy zinger burger with special sauce.",
      image: "/restaurant-images/zinger-burger.jpg",
      tag: "Best Seller",
      isPopular: true,
    },
    {
      id: "spicy-zinger-burger",
      name: "Spicy Zinger Burger",
      slug: "spicy-zinger-burger",
      category: "Burgers",
      categorySlug: "burgers",
      price: 119,
      displayPrice: "₹119",
      description: "Spicy crispy chicken burger with fresh veggies.",
      image: "/restaurant-images/spicy-zinger-burger.jpg",
    },
    {
      id: "mega-zinger-burger",
      name: "Mega Zinger Burger",
      slug: "mega-zinger-burger",
      category: "Burgers",
      categorySlug: "burgers",
      price: 149,
      displayPrice: "₹149",
      description: "Large zinger burger with extra crispy filling.",
      image: "/restaurant-images/mega-zinger-burger.jpg",
      isPopular: true,
    },
    {
      id: "zinger-burger-duo",
      name: "Zinger Burger Duo",
      slug: "zinger-burger-duo",
      category: "Burgers",
      categorySlug: "burgers",
      price: 219,
      displayPrice: "₹219",
      description: "Two zinger burgers for sharing.",
      image: "/restaurant-images/zinger-combo.jpg",
      tag: "Duo",
    },
    {
      id: "herb-chilli-burger",
      name: "Herb Chilli Burger",
      slug: "herb-chilli-burger",
      category: "Burgers",
      categorySlug: "burgers",
      price: 69,
      displayPrice: "₹69",
      description: "Veg herb chilli burger with fresh filling.",
      image: "/restaurant-images/burger.jpg",
    },
    {
      id: "herb-chilli-burger-duo",
      name: "Herb Chilli Burger Duo",
      slug: "herb-chilli-burger-duo",
      category: "Burgers",
      categorySlug: "burgers",
      price: 119,
      displayPrice: "₹119",
      description: "Two herb chilli burgers for sharing.",
      image: "/restaurant-images/burger.jpg",
    },
    {
      id: "tangy-paneer-burger",
      name: "Tangy Paneer Burger",
      slug: "tangy-paneer-burger",
      category: "Burgers",
      categorySlug: "burgers",
      price: 119,
      displayPrice: "₹119",
      description: "Paneer burger with tangy sauce and fresh veggies.",
      image: "/restaurant-images/paneer-burger.jpg",
    },
    {
      id: "zinger-wrap",
      name: "Zinger Wrap",
      slug: "zinger-wrap",
      category: "Wraps",
      categorySlug: "wraps",
      price: 99,
      displayPrice: "₹99",
      description: "Crispy zinger wrap with fresh veggies.",
      image: "/restaurant-images/zinger-wrap.jpg",
    },
    {
      id: "chicken-tikka-wrap",
      name: "Chicken Tikka Wrap",
      slug: "chicken-tikka-wrap",
      category: "Wraps",
      categorySlug: "wraps",
      price: 99,
      displayPrice: "₹99",
      description: "Chicken tikka wrap with creamy sauce.",
      image: "/restaurant-images/chicken-tikka-wrap.jpg",
      isPopular: true,
    },
    {
      id: "paneer-wrap",
      name: "Paneer Wrap",
      slug: "paneer-wrap",
      category: "Wraps",
      categorySlug: "wraps",
      price: 99,
      displayPrice: "₹99",
      description: "Paneer wrap with fresh filling.",
      image: "/restaurant-images/paneer-wrap.jpg",
    },
    {
      id: "mix-veg-wrap",
      name: "Mix Veg Wrap",
      slug: "mix-veg-wrap",
      category: "Wraps",
      categorySlug: "wraps",
      price: 79,
      displayPrice: "₹79",
      description: "Mixed vegetable wrap with special sauce.",
      image: "/restaurant-images/mix-veg-wrap.jpg",
    },
    {
      id: "bbq-chicken-pizza",
      name: "BBQ Chicken Pizza",
      slug: "bbq-chicken-pizza",
      category: "Pizza",
      categorySlug: "pizza",
      price: 259,
      displayPrice: "₹259",
      description: "Smoky BBQ chicken pizza with cheese.",
      image: "/restaurant-images/bbq-chicken-pizza.jpg",
      tag: "Popular",
      isPopular: true,
    },
    {
      id: "hot-spicy-chicken-pizza",
      name: "Hot & Spicy Chicken Pizza",
      slug: "hot-spicy-chicken-pizza",
      category: "Pizza",
      categorySlug: "pizza",
      price: 259,
      displayPrice: "₹259",
      description: "Spicy chicken pizza with bold flavours.",
      image: "/restaurant-images/spicy-chicken-pizza.jpg",
    },
    {
      id: "tandoori-chicken-pizza",
      name: "Tandoori Chicken Pizza",
      slug: "tandoori-chicken-pizza",
      category: "Pizza",
      categorySlug: "pizza",
      price: 269,
      displayPrice: "₹269",
      description: "Tandoori chicken pizza with rich cheese and sauces.",
      image: "/restaurant-images/spicy-chicken-pizza.jpg",
    },
    {
      id: "chicken-tikka-pizza",
      name: "Chicken Tikka Pizza",
      slug: "chicken-tikka-pizza",
      category: "Pizza",
      categorySlug: "pizza",
      price: 269,
      displayPrice: "₹269",
      description: "Chicken tikka pizza with flavorful toppings.",
      image: "/restaurant-images/bbq-chicken-pizza.jpg",
    },
    {
      id: "margherita-pizza",
      name: "Margherita Pizza",
      slug: "margherita-pizza",
      category: "Pizza",
      categorySlug: "pizza",
      price: 199,
      displayPrice: "₹199",
      description: "Classic cheese pizza with tomato base.",
      image: "/restaurant-images/margherita-pizza.jpg",
    },
    {
      id: "hot-spicy-veg-pizza",
      name: "Hot & Spicy Veg Pizza",
      slug: "hot-spicy-veg-pizza",
      category: "Pizza",
      categorySlug: "pizza",
      price: 249,
      displayPrice: "₹249",
      description: "Spicy veg pizza with cheesy toppings.",
      image: "/restaurant-images/margherita-pizza.jpg",
    },
    {
      id: "paneer-tikka-pizza",
      name: "Paneer Tikka Pizza",
      slug: "paneer-tikka-pizza",
      category: "Pizza",
      categorySlug: "pizza",
      price: 249,
      displayPrice: "₹249",
      description: "Paneer tikka pizza with cheesy toppings.",
      image: "/restaurant-images/paneer-tikka-pizza.jpg",
    },
    {
      id: "farmhouse-delight-pizza",
      name: "Farmhouse Delight Pizza",
      slug: "farmhouse-delight-pizza",
      category: "Pizza",
      categorySlug: "pizza",
      price: 249,
      displayPrice: "₹249",
      description: "Veg farmhouse pizza with fresh toppings.",
      image: "/restaurant-images/paneer-tikka-pizza.jpg",
    },
    {
      id: "red-sauce-chicken-pasta",
      name: "Red Sauce Chicken Pasta",
      slug: "red-sauce-chicken-pasta",
      category: "Pasta",
      categorySlug: "pasta",
      price: 199,
      displayPrice: "₹199",
      description: "Chicken pasta tossed in red sauce.",
      image: "/restaurant-images/pizza.jpg",
    },
    {
      id: "white-sauce-chicken-pasta",
      name: "White Sauce Chicken Pasta",
      slug: "white-sauce-chicken-pasta",
      category: "Pasta",
      categorySlug: "pasta",
      price: 199,
      displayPrice: "₹199",
      description: "Chicken pasta tossed in creamy white sauce.",
      image: "/restaurant-images/pizza.jpg",
    },
    {
      id: "mix-veg-red-sauce-pasta",
      name: "Mix Veg Red Sauce Pasta",
      slug: "mix-veg-red-sauce-pasta",
      category: "Pasta",
      categorySlug: "pasta",
      price: 149,
      displayPrice: "₹149",
      description: "Mixed veg pasta tossed in red sauce.",
      image: "/restaurant-images/pizza.jpg",
    },
    {
      id: "mix-veg-white-sauce-pasta",
      name: "Mix Veg White Sauce Pasta",
      slug: "mix-veg-white-sauce-pasta",
      category: "Pasta",
      categorySlug: "pasta",
      price: 149,
      displayPrice: "₹149",
      description: "Mixed veg pasta tossed in creamy white sauce.",
      image: "/restaurant-images/pizza.jpg",
    },
    {
      id: "classic-french-fries",
      name: "Classic French Fries",
      slug: "classic-french-fries",
      category: "Fries",
      categorySlug: "fries",
      price: 79,
      displayPrice: "₹79",
      description: "Golden crispy salted fries.",
      image: "/restaurant-images/classic-fries.jpg",
    },
    {
      id: "peri-peri-fries",
      name: "Peri Peri Fries",
      slug: "peri-peri-fries",
      category: "Fries",
      categorySlug: "fries",
      price: 89,
      displayPrice: "₹89",
      description: "Crispy fries with peri-peri seasoning.",
      image: "/restaurant-images/peri-peri-fries.jpg",
    },
    {
      id: "loaded-fries",
      name: "Loaded Fries",
      slug: "loaded-fries",
      category: "Fries",
      categorySlug: "fries",
      price: 129,
      displayPrice: "₹129",
      description: "Fries loaded with cheese and sauces.",
      image: "/restaurant-images/loaded-fries.jpg",
      isPopular: true,
    },
    {
      id: "zinger-combo",
      name: "Zinger Combo",
      slug: "zinger-combo",
      category: "Combos",
      categorySlug: "combos",
      price: 199,
      displayPrice: "₹199",
      description: "Zinger burger with fries and soft drink.",
      image: "/restaurant-images/zinger-combo.jpg",
      tag: "Combo",
      isPopular: true,
    },
    {
      id: "broast-combo",
      name: "Broast Combo",
      slug: "broast-combo",
      category: "Combos",
      categorySlug: "combos",
      price: 339,
      displayPrice: "₹339",
      description: "Chicken broast with fries and soft drink.",
      image: "/restaurant-images/broast-combo.jpg",
      isSignature: true,
    },
    {
      id: "strawberry-shake",
      name: "Strawberry Shake",
      slug: "strawberry-shake",
      category: "Shakes",
      categorySlug: "shakes",
      price: 119,
      displayPrice: "₹119",
      description: "Creamy strawberry shake.",
      image: "/restaurant-images/strawberry-shake.jpg",
    },
    {
      id: "vanilla-shake",
      name: "Vanilla Shake",
      slug: "vanilla-shake",
      category: "Shakes",
      categorySlug: "shakes",
      price: 119,
      displayPrice: "₹119",
      description: "Creamy vanilla shake.",
      image: "/restaurant-images/vanilla-shake.jpg",
    },
    {
      id: "oreo-shake",
      name: "Oreo Shake",
      slug: "oreo-shake",
      category: "Shakes",
      categorySlug: "shakes",
      price: 139,
      displayPrice: "₹139",
      description: "Creamy Oreo shake with chocolate crunch.",
      image: "/restaurant-images/oreo-shake.jpg",
      isPopular: true,
    },
    {
      id: "chocolate-shake",
      name: "Chocolate Shake",
      slug: "chocolate-shake",
      category: "Shakes",
      categorySlug: "shakes",
      price: 129,
      displayPrice: "₹129",
      description: "Creamy chocolate shake.",
      image: "/restaurant-images/chocolate-shake.jpg",
    },
    {
      id: "cold-coffee",
      name: "Cold Coffee",
      slug: "cold-coffee",
      category: "Beverages",
      categorySlug: "beverages",
      price: 99,
      displayPrice: "₹99",
      description: "Chilled creamy cold coffee.",
      image: "/restaurant-images/cold-coffee.jpg",
      isPopular: true,
    },
    {
      id: "iced-lemonade",
      name: "Iced Lemonade",
      slug: "iced-lemonade",
      category: "Beverages",
      categorySlug: "beverages",
      price: 79,
      displayPrice: "₹79",
      description: "Refreshing iced lemonade.",
      image: "/restaurant-images/virgin-mojito.jpg",
    },
    {
      id: "virgin-mojito",
      name: "Virgin Mojito",
      slug: "virgin-mojito",
      category: "Beverages",
      categorySlug: "beverages",
      price: 79,
      displayPrice: "₹79",
      description: "Refreshing mint mojito.",
      image: "/restaurant-images/virgin-mojito.jpg",
    },
    {
      id: "regular-filter-coffee",
      name: "Regular Filter Coffee",
      slug: "regular-filter-coffee",
      category: "Beverages",
      categorySlug: "beverages",
      price: 59,
      displayPrice: "₹59",
      description: "Classic regular filter coffee.",
      image: "/restaurant-images/cold-coffee.jpg",
    },
    {
      id: "hand-beaten-coffee",
      name: "Hand-Beaten Coffee",
      slug: "hand-beaten-coffee",
      category: "Beverages",
      categorySlug: "beverages",
      price: 99,
      displayPrice: "₹99",
      description: "Rich hand-beaten coffee.",
      image: "/restaurant-images/cold-coffee.jpg",
    },
    {
      id: "black-coffee",
      name: "Black Coffee",
      slug: "black-coffee",
      category: "Beverages",
      categorySlug: "beverages",
      price: 59,
      displayPrice: "₹59",
      description: "Classic black coffee.",
      image: "/restaurant-images/cold-coffee.jpg",
    },
    {
      id: "cold-drinks",
      name: "Cold Drinks",
      slug: "cold-drinks",
      category: "Beverages",
      categorySlug: "beverages",
      price: "MRP",
      displayPrice: "MRP",
      description: "Cold drinks available at MRP.",
      image: "/restaurant-images/beverage.jpg",
    },
  ] satisfies MenuItem[],

  rewards: {
    spendRule: "₹100 Spend = 5 Points",
    conversionRule: "100 Points = ₹10",
    birthdayReward: "100 Points",
    referralReward: "100 Points",
    selfieReward: "50 Points instantly",
    socialReward: "100 Points",
    socialFreeItemRule:
      "Next order ₹200+ eligible for complimentary surprise food item chosen by Belgian Broast.",
  },

  subscriptionPlans: [
    {
      name: "Silver",
      price: "₹99/month",
      benefits: ["5% Discount", "Birthday Coupon"],
    },
    {
      name: "Gold",
      price: "₹199/month",
      benefits: ["10% Discount", "Double Reward Points"],
      highlighted: true,
    },
    {
      name: "Family",
      price: "₹299/month",
      benefits: ["10% Discount", "Double Points", "Family Offers"],
    },
  ],

  offers: [
    "First order reward points",
    "Subscription discounts available",
    "Surprise food item on eligible social reward orders",
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
      question: "Can I order online from Belgian Broast Rampur?",
      answer:
        "Yes, customers can order online through the website flow. WhatsApp and call ordering can also remain available during the early launch phase.",
    },
    {
      question: "Do menu prices change for bulk quantity?",
      answer:
        "No. Menu prices remain fixed per quantity. Discounts apply only through subscription, coupon, offer or owner-approved campaign.",
    },
    {
      question: "How does the selfie reward work?",
      answer:
        "Customers can upload a selfie with food and receive 50 reward points instantly. The system can support approval later if needed.",
    },
    {
      question: "Can customers choose the complimentary surprise item?",
      answer:
        "No. On eligible social reward orders, the complimentary surprise item is selected by Belgian Broast.",
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

export const getCategoryBySlug = (slug: string) =>
  restaurant.categories.find((category) => category.slug === slug);

export const getMenuByCategorySlug = (slug: string) =>
  restaurant.menu.filter((item) => item.categorySlug === slug);

export const getMenuItemBySlug = (slug: string) =>
  restaurant.menu.find((item) => item.slug === slug);

export const signatureItems = restaurant.menu.filter((item) => item.isSignature);

export const popularItems = restaurant.menu.filter((item) => item.isPopular);