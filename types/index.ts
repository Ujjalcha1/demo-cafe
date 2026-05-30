export type CafeMenuCategory =
  | "Hot Coffee"
  | "Cold Coffee"
  | "Espresso"
  | "Cappuccino"
  | "Latte"
  | "Tea"
  | "Desserts"
  | "Breakfast"
  | "Snacks"
  | "Bakery"

export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: CafeMenuCategory
  isFavorite?: boolean
  badge?: string
}

export type Testimonial = {
  id: string
  name: string
  role: string
  rating: number
  quote: string
  avatar: string
  videoUrl?: string
}

export type BlogPost = {
  id: string
  title: string
  category: string
  excerpt: string
  image: string
  publishedAt: string
  readTime: string
}

export type Offer = {
  id: string
  title: string
  description: string
  discount: string
  validUntil: string
  code: string
  image: string
}
