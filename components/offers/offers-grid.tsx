import Image from "next/image"
import { Ticket } from "lucide-react"

import { offers } from "@/data/site-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function OffersGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {offers.map((offer) => (
        <Card key={offer.id} className="group overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <Image src={offer.image} alt={offer.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-cafe-espresso/70 to-transparent" />
            <p className="absolute bottom-4 left-4 font-cinzel text-cafe-gold">{offer.discount}</p>
          </div>
          <CardContent className="space-y-3 p-5">
            <h3 className="font-heading text-2xl text-cafe-espresso dark:text-cafe-cream">{offer.title}</h3>
            <p className="text-sm text-muted-foreground">{offer.description}</p>
            <div className="rounded-xl border border-dashed border-cafe-gold/50 bg-cafe-gold/10 p-3 text-sm">
              <p className="font-medium">Coupon: {offer.code}</p>
              <p className="text-xs text-muted-foreground">Valid until {offer.validUntil}</p>
            </div>
            <Button variant="outline" className="w-full">
              <Ticket className="mr-2 size-4" />
              Claim Offer
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


