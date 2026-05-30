import Image from "next/image"

import type { BlogPost } from "@/types"
import { Card, CardContent } from "@/components/ui/card"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-56 overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <CardContent className="p-5">
        <p className="font-cinzel text-xs uppercase tracking-[0.2em] text-cafe-gold">{post.category}</p>
        <h3 className="mt-2 font-heading text-2xl text-cafe-espresso dark:text-cafe-cream">{post.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
        <p className="mt-4 text-xs text-muted-foreground">
          {post.publishedAt} · {post.readTime} read
        </p>
      </CardContent>
    </Card>
  )
}


