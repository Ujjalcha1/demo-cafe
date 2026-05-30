"use client"

import { useMemo, useState } from "react"

import { menuItems } from "@/data/site-data"
import type { CafeMenuCategory } from "@/types"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories: CafeMenuCategory[] = [
  "Hot Coffee",
  "Cold Coffee",
  "Espresso",
  "Cappuccino",
  "Latte",
  "Tea",
  "Desserts",
  "Breakfast",
  "Snacks",
  "Bakery"
]

export function GroupedMenuModal() {
  const [activeCategory, setActiveCategory] = useState<CafeMenuCategory>("Hot Coffee")

  const grouped = useMemo(() => {
    return menuItems.reduce<Record<string, typeof menuItems>>((acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item)
      return acc
    }, {})
  }, [])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-6">
          View Full Menu
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>Full Menu (Category Wise)</DialogTitle>
        </DialogHeader>

        <Tabs value={activeCategory} onValueChange={(value) => setActiveCategory(value as CafeMenuCategory)}>
          <div className="overflow-x-auto pb-2">
            <TabsList className="min-w-max gap-1">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-3">
                {(grouped[category] ?? []).map((item) => (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-cafe-gold/20 bg-background/40 p-4 transition hover:border-cafe-gold/40"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-heading text-2xl text-cafe-espresso dark:text-cafe-cream">{item.name}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <p className="font-cinzel text-cafe-gold">₹{item.price.toFixed(2)}</p>
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

