"use client"

import { useMemo, useState } from "react"

import { menuItems } from "@/data/site-data"
import { MenuCard } from "@/components/shared/menu-card"
import { MotionReveal } from "@/components/shared/motion-reveal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { CafeMenuCategory } from "@/types"

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

export function MenuBrowser() {
  const [activeCategory, setActiveCategory] = useState<CafeMenuCategory>("Hot Coffee")

  const grouped = useMemo(() => {
    return menuItems.reduce<Record<string, typeof menuItems>>((acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item)
      return acc
    }, {})
  }, [])

  return (
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
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {(grouped[category] ?? []).map((item, index) => (
              <MotionReveal key={item.id} delay={index * 0.06}>
                <MenuCard item={item} />
              </MotionReveal>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}


