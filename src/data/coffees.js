export const coffees = [
  {
    id: 1,
    name: "Traditional Espresso",
    description: "Traditional coffee made with hot water and ground beans",
    price: 650,
    tags: ["TRADITIONAL"],
    image: "/images/coffee-1.png",
    details: {
      intensity: 90,
      aroma: 95,
      fullDescription:
        "Our Traditional Espresso is the gold standard of coffee. Expertly pulled to highlight the natural oils and rich flavors of premium Arabica beans.",
      features: ["Pure Caffeine Kick", "Rich Crema", "Intense Flavor"],
    },
    reviews: [
      {
        id: 101,
        user: "Zain Ali",
        rating: 5,
        comment: "The perfect start to my morning!",
      },
    ],
  },
  {
    id: 2,
    name: "American Espresso",
    description: "Diluted espresso, less intense than the traditional one",
    price: 750,
    tags: ["TRADITIONAL"],
    image: "/images/coffee-2.png",
    details: {
      intensity: 60,
      aroma: 85,
      fullDescription:
        "A smoother experience for those who enjoy the flavor of espresso but prefer a longer, less concentrated drink.",
      features: ["Balanced Taste", "Mild Aftertaste", "Daily Drink"],
    },
    reviews: [
      {
        id: 201,
        user: "Saira Khan",
        rating: 4,
        comment: "Very smooth and easy to drink.",
      },
    ],
  },
  {
    id: 3,
    name: "Creamy Espresso",
    description: "Traditional espresso with creamy foam",
    price: 600,
    tags: ["TRADITIONAL"],
    image: "/images/coffee-3.png",
    details: {
      intensity: 75,
      aroma: 90,
      fullDescription:
        "The richness of espresso meets the velvet texture of steamed milk foam. A delight for the senses.",
      features: ["Velvety Foam", "Low Acidity", "Sweet Aroma"],
    },
    reviews: [],
  },
  {
    id: 4,
    name: "Iced Espresso",
    description: "Drink prepared with espresso and ice cubes",
    price: 700,
    tags: ["TRADITIONAL", "ICED"],
    image: "/images/coffee-4.png",
    details: {
      intensity: 85,
      aroma: 80,
      fullDescription:
        "Chilled perfection. We pull a hot shot over ice to lock in the flavor without losing the caffeine punch.",
      features: ["Refreshing", "Strong Kick", "Ice Cold"],
    },
    reviews: [
      {
        id: 401,
        user: "Hamza",
        rating: 5,
        comment: "Best iced coffee in town!",
      },
    ],
  },
  {
    id: 5,
    name: "Coffee with Milk",
    description: "Half traditional espresso, half steamed milk",
    price: 650,
    tags: ["TRADITIONAL", "WITH MILK"],
    image: "/images/coffee-5.png",
    details: {
      intensity: 50,
      aroma: 88,
      fullDescription:
        "The classic 'Café com Leite'. A perfect harmony of bold coffee and creamy milk.",
      features: ["Classic Ratio", "Comforting", "Smooth Texture"],
    },
    reviews: [],
  },
  {
    id: 6,
    name: "Latte",
    description: "An espresso shot with double milk and creamy foam",
    price: 750,
    tags: ["TRADITIONAL", "WITH MILK"],
    image: "/images/coffee-6.png",
    details: {
      intensity: 40,
      aroma: 92,
      fullDescription:
        "More milk, more foam, more joy. Our Latte is light, airy, and delicately sweet.",
      features: ["Double Milk", "Artistic Foam", "Mild Flavor"],
    },
    reviews: [
      {
        id: 601,
        user: "Dua",
        rating: 5,
        comment: "So creamy! Love the foam art.",
      },
    ],
  },
  {
    id: 7,
    name: "Cappuccino",
    description:
      "Beverage with cinnamon made of equal doses of coffee, milk and foam",
    price: 650,
    tags: ["TRADITIONAL", "WITH MILK"],
    image: "/images/coffee-7.png",
    details: {
      intensity: 65,
      aroma: 98,
      fullDescription:
        "A spicy twist on a classic. Equal parts espresso, milk, and foam with a dusting of cinnamon.",
      features: ["Cinnamon Flavor", "Equal Parts", "Rich Foam"],
    },
    reviews: [],
  },
  {
    id: 8,
    name: "Macchiato",
    description: "Espresso mixed with a little hot milk and foam",
    price: 650,
    tags: ["TRADITIONAL", "WITH MILK"],
    image: "/images/coffee-8.png",
    details: {
      intensity: 88,
      aroma: 90,
      fullDescription:
        "A 'stained' espresso. Small amount of milk that cuts the edge of the espresso without losing intensity.",
      features: ["Espresso Forward", "Quick Pick-me-up", "Minimal Milk"],
    },
    reviews: [],
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Espresso with chocolate syrup, a little milk, and foam",
    price: 700,
    tags: ["TRADITIONAL", "WITH MILK"],
    image: "/images/coffee-9.png",
    details: {
      intensity: 70,
      aroma: 96,
      fullDescription:
        "For the chocolate lovers. A decadent mix of coffee and chocolate syrup topped with foam.",
      features: ["Chocolaty", "Sweet Dessert Coffee", "Indulgent"],
    },
    reviews: [],
  },
  {
    id: 10,
    name: "Hot Chocolate",
    description: "Drink made with chocolate dissolved in hot milk and coffee",
    price: 900,
    tags: ["SPECIAL", "WITH MILK"],
    image: "/images/coffee-10.png",
    details: {
      intensity: 30,
      aroma: 100,
      fullDescription:
        "Not just chocolate. This is a thick, rich blend of premium chocolate and a hint of coffee essence.",
      features: ["Creamy Chocolate", "Caffeine Light", "Winter Favorite"],
    },
    reviews: [],
  },
  {
    id: 11,
    name: "Cuban",
    description: "Iced espresso drink with rum, cream, and mint",
    price: 550,
    tags: ["SPECIAL", "ALCOHOLIC", "ICED"],
    image: "/images/coffee-11.png",
    details: {
      intensity: 80,
      aroma: 94,
      fullDescription:
        "A tropical explosion. This unique drink combines the heat of rum with the coolness of mint and coffee.",
      features: ["Alcoholic Kick", "Fresh Mint", "Exotic Taste"],
    },
    reviews: [],
  },
  {
    id: 12,
    name: "Hawaiian",
    description: "Sweet drink made with coffee and coconut milk",
    price: 700,
    tags: ["SPECIAL"],
    image: "/images/coffee-12.png",
    details: {
      intensity: 55,
      aroma: 97,
      fullDescription:
        "Paradise in a cup. Naturally sweet coconut milk blended with our signature Arabica roast.",
      features: ["Dairy Free Option", "Tropical Aroma", "Coconut Base"],
    },
    reviews: [],
  },
  {
    id: 13,
    name: "Arabic",
    description: "Beverage prepared with Arabica coffee beans and spices",
    price: 600,
    tags: ["SPECIAL"],
    image: "/images/coffee-13.png",
    details: {
      intensity: 95,
      aroma: 100,
      fullDescription:
        "Experience the ancient tradition. Spiced with cardamom and saffron for a truly unique profile.",
      features: ["Spiced Flavor", "Traditional Roast", "Aromatic Cardamom"],
    },
    reviews: [],
  },
  {
    id: 14,
    name: "Irish",
    description:
      "A drink made with coffee, Irish whiskey, sugar, and whipped cream",
    price: 800,
    tags: ["SPECIAL", "ALCOHOLIC"],
    image: "/images/coffee-10.png",
    details: {
      intensity: 75,
      aroma: 93,
      fullDescription:
        "Warm, sweet, and spirited. Irish whiskey and coffee topped with a thick layer of cold cream.",
      features: ["Whiskey Infused", "Whipped Cream Top", "Warm Spirit"],
    },
    reviews: [],
  },
];
