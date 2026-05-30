"use client"

import { Search } from "lucide-react"
import { useMemo, useState } from "react"

import { blogPosts } from "@/data/site-data"
import { BlogCard } from "@/components/shared/blog-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

export function BlogExplorer() {
  const [query, setQuery] = useState("")
  const [active, setActive] = useState("All")

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const categoryMatch = active === "All" || post.category === active
      const queryMatch = `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())
      return categoryMatch && queryMatch
    })
  }, [active, query])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 rounded-3xl border border-cafe-gold/20 bg-card/70 p-5 backdrop-blur md:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" className="pl-10" />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button key={category} variant={active === category ? "default" : "outline"} size="sm" onClick={() => setActive(category)}>
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}


