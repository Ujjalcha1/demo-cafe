"use client"

import { ClientReactPlayer } from "@/components/shared/client-react-player"
import { Star } from "lucide-react"

import { testimonials } from "@/data/site-data"
import { Card, CardContent } from "@/components/ui/card"

export function ReviewGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardContent className="space-y-4 p-6">
            <div className="flex items-center gap-1 text-cafe-gold">
              {[...Array(item.rating)].map((_, index) => (
                <Star key={index} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{item.quote}</p>
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.role}</p>
            </div>
            {item.videoUrl ? (
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-cafe-gold/20">
                <ClientReactPlayer src={item.videoUrl} controls width="100%" height="100%" className="!absolute !left-0 !top-0" />
              </div>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}



