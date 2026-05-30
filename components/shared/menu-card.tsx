import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { MenuItem } from "@/types"
import { cn } from "@/lib/utils"

export function MenuCard({ item, compact = false }: { item: MenuItem; compact?: boolean }) {
  return (
    <Card className={cn("group overflow-hidden transition duration-500 hover:-translate-y-1 hover:shadow-soft", compact ? "rounded-2xl" : "") }>
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cafe-espresso/65 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          {item.badge ? <Badge>{item.badge}</Badge> : null}
          {item.isFavorite ? <Badge variant="outline">Favorite</Badge> : null}
        </div>
      </div>
      <CardContent className="p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="font-heading text-2xl text-cafe-espresso dark:text-cafe-cream">{item.name}</h3>
          <p className="font-cinzel text-cafe-gold">₹{item.price.toFixed(2)}</p>
        </div>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  )
}


