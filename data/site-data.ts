import type { BlogPost, MenuItem, Offer, Testimonial } from "@/types"

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
]

export const stats = [
  { label: "Cups Brewed", value: 320000 },
  { label: "Happy Guests", value: 92000 },
  { label: "Signature Drinks", value: 48 },
  { label: "Years of Craft", value: 12 }
]

export const signatureDrinks: MenuItem[] = [
  {
    id: "drink-1",
    name: "Velvet Caramel Latte",
    description: "Single-origin espresso, caramel silk, steamed oat milk, soft gold dust.",
    price: 8.5,
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
    category: "Latte",
    isFavorite: true,
    badge: "Signature"
  },
  {
    id: "drink-2",
    name: "Amber Cold Brew",
    description: "18-hour steeped cold brew with orange peel bitters and vanilla cream.",
    price: 7.5,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1f864?auto=format&fit=crop&w=900&q=80",
    category: "Cold Coffee",
    badge: "Best Seller"
  },
  {
    id: "drink-3",
    name: "Maple Cinnamon Cappuccino",
    description: "Velvety microfoam, warm maple notes, and slow-roasted cinnamon.",
    price: 8,
    image: "https://images.unsplash.com/photo-1521302200778-33500795e128?auto=format&fit=crop&w=900&q=80",
    category: "Cappuccino"
  },
  {
    id: "drink-4",
    name: "Mocha Noisette",
    description: "Dark chocolate ganache, toasted hazelnut, and double ristretto.",
    price: 9,
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80",
    category: "Espresso",
    badge: "Limited"
  }
]

export const menuItems: MenuItem[] = [
  {
    id: "hot-1",
    name: "Classic Drip Coffee",
    description: "Balanced medium roast with cocoa finish.",
    price: 5,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80",
    category: "Hot Coffee"
  },
  {
    id: "hot-2",
    name: "French Press Reserve",
    description: "Rich full-bodied brew from Ethiopian beans.",
    price: 6.5,
    image: "https://images.unsplash.com/photo-1529473814998-077b4fec6770?auto=format&fit=crop&w=900&q=80",
    category: "Hot Coffee",
    badge: "Organic"
  },
  {
    id: "cold-1",
    name: "Nitro Cold Brew",
    description: "Nitrogen-infused cold brew with creamy cascade.",
    price: 7,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    category: "Cold Coffee"
  },
  {
    id: "cold-2",
    name: "Iced Brown Sugar Latte",
    description: "Caramelized sugar syrup, espresso, and milk over crystal ice.",
    price: 7.8,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    category: "Cold Coffee",
    isFavorite: true
  },
  {
    id: "espresso-1",
    name: "Double Ristretto",
    description: "Concentrated silky shot with deep crema.",
    price: 4.8,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    category: "Espresso"
  },
  {
    id: "espresso-2",
    name: "Affogato Royale",
    description: "Vanilla bean gelato crowned with warm espresso.",
    price: 8.2,
    image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=900&q=80",
    category: "Espresso",
    badge: "Chef Pick"
  },
  {
    id: "capp-1",
    name: "Traditional Cappuccino",
    description: "Perfect 1:1:1 espresso, milk, and foam ratio.",
    price: 6.8,
    image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=900&q=80",
    category: "Cappuccino"
  },
  {
    id: "capp-2",
    name: "Honey Almond Cappuccino",
    description: "Toasted almond milk with local wildflower honey.",
    price: 7.4,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
    category: "Cappuccino"
  },
  {
    id: "latte-1",
    name: "Vanilla Bean Latte",
    description: "Madagascar vanilla, espresso, and steamed whole milk.",
    price: 7.2,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=900&q=80",
    category: "Latte"
  },
  {
    id: "latte-2",
    name: "Rose Pistachio Latte",
    description: "Floral rose water, pistachio cream, and signature espresso.",
    price: 8.4,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=900&q=80",
    category: "Latte",
    badge: "Seasonal"
  },
  {
    id: "tea-1",
    name: "Jasmine Green Tea",
    description: "Delicate floral infusion with a clean finish.",
    price: 5.6,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=900&q=80",
    category: "Tea"
  },
  {
    id: "tea-2",
    name: "Masala Chai",
    description: "Bold Assam tea with warm spices and milk.",
    price: 6,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
    category: "Tea"
  },
  {
    id: "dessert-1",
    name: "Tiramisu Verrine",
    description: "Layers of mascarpone cream and espresso-soaked sponge.",
    price: 8.8,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    category: "Desserts",
    isFavorite: true
  },
  {
    id: "dessert-2",
    name: "Burnt Cheesecake",
    description: "Creamy Basque cheesecake with caramelized top.",
    price: 9.2,
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=900&q=80",
    category: "Desserts"
  },
  {
    id: "breakfast-1",
    name: "Avocado Sourdough",
    description: "Heirloom tomatoes, seeds, and citrus dressing.",
    price: 11.5,
    image: "https://images.unsplash.com/photo-1533089860892-a9c58f0f1842?auto=format&fit=crop&w=900&q=80",
    category: "Breakfast"
  },
  {
    id: "breakfast-2",
    name: "Truffle Scramble",
    description: "Creamy eggs, brioche toast, and shaved parmesan.",
    price: 13.8,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    category: "Breakfast"
  },
  {
    id: "snack-1",
    name: "Smoked Turkey Panini",
    description: "Aged cheddar, aioli, and sourdough press.",
    price: 12.4,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
    category: "Snacks"
  },
  {
    id: "snack-2",
    name: "Roasted Veggie Wrap",
    description: "Charred vegetables, hummus, and herb dressing.",
    price: 10.7,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80",
    category: "Snacks"
  },
  {
    id: "bakery-1",
    name: "Butter Croissant",
    description: "Flaky French-style croissant baked daily.",
    price: 4.5,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    category: "Bakery"
  },
  {
    id: "bakery-2",
    name: "Almond Pain au Chocolat",
    description: "Dark chocolate baton with toasted almond glaze.",
    price: 5.8,
    image: "https://images.unsplash.com/photo-1518867286076-b55d3f71a5c4?auto=format&fit=crop&w=900&q=80",
    category: "Bakery",
    badge: "Morning Favorite"
  }
]

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Olivia Harper",
    role: "Travel Food Creator",
    rating: 5,
    quote:
      "Every corner feels cinematic. The Velvet Caramel Latte is absolutely unforgettable and the service is world-class.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    videoUrl: "https://www.youtube.com/watch?v=4xDzrJKXOOY"
  },
  {
    id: "t2",
    name: "Daniel Ross",
    role: "Design Director",
    rating: 5,
    quote: "An elegant, slow-living experience. It is my go-to spot for meetings and intentional mornings.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "t3",
    name: "Sophie Lee",
    role: "Entrepreneur",
    rating: 5,
    quote:
      "The ambience, playlist, and coffee ritual create this beautiful sense of calm. Perfect balance of luxury and comfort.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80",
    videoUrl: "https://www.youtube.com/watch?v=GSIx9wqf0Wo"
  }
]

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "How to Brew Cafe-Level Pour Over at Home",
    category: "Brewing Guide",
    excerpt: "Master bloom timing, grind calibration, and water temperature in under ten minutes.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
    publishedAt: "May 10, 2026",
    readTime: "6 min"
  },
  {
    id: "b2",
    title: "A Slow Morning Ritual for Better Focus",
    category: "Cafe Lifestyle",
    excerpt: "Build a mindful morning routine around coffee, journaling, and soft transitions.",
    image: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?auto=format&fit=crop&w=900&q=80",
    publishedAt: "May 07, 2026",
    readTime: "4 min"
  },
  {
    id: "b3",
    title: "Our Chef's Warm Almond Brioche Recipe",
    category: "Recipes",
    excerpt: "Bake our signature bakery hero with rich butter layers and a delicate crumb.",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80",
    publishedAt: "April 28, 2026",
    readTime: "9 min"
  },
  {
    id: "b4",
    title: "Pairing Single-Origin Coffee with Desserts",
    category: "Food Articles",
    excerpt: "Learn flavor pairing that elevates both your pastry and your espresso profile.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    publishedAt: "April 21, 2026",
    readTime: "5 min"
  }
]

export const offers: Offer[] = [
  {
    id: "o1",
    title: "Golden Hour Latte Set",
    description: "Any two signature lattes + one dessert tasting plate.",
    discount: "25% Off",
    validUntil: "June 30, 2026",
    code: "GOLDEN25",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "o2",
    title: "Weekend Brunch Bundle",
    description: "Two breakfast mains + premium roast pot for two.",
    discount: "Save ₹18",
    validUntil: "July 15, 2026",
    code: "BRUNCH18",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "o3",
    title: "Loyalty Espresso Passport",
    description: "Collect 8 stamps, enjoy the 9th espresso on us.",
    discount: "Members Exclusive",
    validUntil: "Ongoing",
    code: "PASSPORT",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80"
  }
]

export const galleryImages = [
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529473814998-077b4fec6770?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
]

export const galleryVideos = [
  "https://www.youtube.com/watch?v=4xDzrJKXOOY",
  "https://www.youtube.com/watch?v=vFcS080VYQ0",
  "https://www.youtube.com/watch?v=GSIx9wqf0Wo"
]

export const faqItems = [
  {
    question: "Do you accept walk-ins?",
    answer: "Yes. Velvet Pour is a brand showcase cafe concept and welcomes walk-ins during operating hours."
  },
  {
    question: "Do you offer vegan and gluten-friendly options?",
    answer: "Yes, our menu includes several vegan and gluten-conscious drinks and food choices."
  },
  {
    question: "Can I host private events at Velvet Pour?",
    answer: "Absolutely. We offer curated private packages for birthdays, launches, and intimate gatherings."
  },
  {
    question: "Do you provide delivery and pickup?",
    answer: "Yes, both are available through our online ordering section with real-time prep updates."
  }
]

export const founders = {
  name: "Mira & Elio Bennett",
  title: "Founders of Velvet Pour",
  story:
    "Two baristas turned dreamers, Mira and Elio built Velvet Pour to blend world-class coffee with intentional hospitality. Their philosophy: every cup should feel like a pause worth remembering.",
  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
}

export const staff = [
  {
    name: "Naomi Clarke",
    role: "Head Barista",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Aarav Joshi",
    role: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Lena Morgan",
    role: "Guest Experience Lead",
    image: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=600&q=80"
  }
]

export const values = [
  {
    title: "Craft First",
    description: "Small-batch roasting and precise extraction in every cup."
  },
  {
    title: "Human Hospitality",
    description: "Warm, personal service that makes every guest feel known."
  },
  {
    title: "Responsible Sourcing",
    description: "Direct-trade partnerships with ethical growers across regions."
  },
  {
    title: "Design-Led Experience",
    description: "From aroma to music, we design moments with intention."
  }
]

export const sourcingHighlights = [
  "Colombia Huila micro-lots with honey sweetness",
  "Yirgacheffe floral profiles for bright pour-over",
  "Guatemala Antigua espresso blends with chocolate notes",
  "Seasonal direct-trade selections refreshed every quarter"
]

export const instagramFeed = [
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=700&q=80"
]

export const ambienceVideos = [
  "https://www.youtube.com/watch?v=4xDzrJKXOOY",
  "https://www.youtube.com/watch?v=DWcJFNfaw9c"
]

export const orderingItems = menuItems.slice(0, 12)
