"use client"

import Image from "next/image"
import { Minus, Plus, ShoppingBag } from "lucide-react"
import { useMemo, useState } from "react"

import { orderingItems } from "@/data/site-data"
import { useDemoToast } from "@/components/providers/demo-toast-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Cart = Record<string, number>

export function OrderInterface() {
  const [cart, setCart] = useState<Cart>({})
  const [method, setMethod] = useState("delivery")
  const { showToast } = useDemoToast()

  const updateQty = (id: string, delta: number) => {
    setCart((prev) => {
      const next = { ...prev }
      const nextQty = (next[id] ?? 0) + delta
      if (nextQty <= 0) delete next[id]
      else next[id] = nextQty
      return next
    })
  }

  const summary = useMemo(() => {
    const items = orderingItems
      .map((item) => ({ ...item, qty: cart[item.id] ?? 0 }))
      .filter((item) => item.qty > 0)
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
    const fee = method === "delivery" ? 4 : 0
    return { items, subtotal, fee, total: subtotal + fee }
  }, [cart, method])

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        {orderingItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative h-40">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-heading text-xl text-cafe-espresso dark:text-cafe-cream">{item.name}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="font-cinzel text-cafe-gold">₹{item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline" onClick={() => updateQty(item.id, -1)}>
                    <Minus className="size-4" />
                  </Button>
                  <span className="w-6 text-center text-sm">{cart[item.id] ?? 0}</span>
                  <Button size="icon" variant="outline" onClick={() => updateQty(item.id, 1)}>
                    <Plus className="size-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="h-fit lg:sticky lg:top-24">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <ShoppingBag className="size-5 text-cafe-gold" />
            <h3 className="font-heading text-2xl text-cafe-espresso dark:text-cafe-cream">Checkout Preview</h3>
          </div>

          <div className="mb-4 space-y-2">
            <p className="text-sm font-medium">Order Type</p>
            <Select value={method} onValueChange={setMethod}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delivery">Delivery</SelectItem>
                <SelectItem value="pickup">Pickup</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 border-t border-cafe-gold/20 pt-4">
            {summary.items.length === 0 ? (
              <p className="text-sm text-muted-foreground">No items added yet.</p>
            ) : (
              summary.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>₹{(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))
            )}
          </div>

          <div className="mt-5 space-y-1 border-t border-cafe-gold/20 pt-4 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{summary.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>{method === "delivery" ? "Delivery" : "Pickup"}</span>
              <span>₹{summary.fee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-cafe-gold">
              <span>Total</span>
              <span>₹{summary.total.toFixed(2)}</span>
            </div>
          </div>

          <Button
            className="mt-6 w-full"
            onClick={() => {
              if (summary.items.length === 0) {
                showToast({
                  title: "Your cart is empty",
                  description: "Add at least one item to preview checkout in demo mode.",
                  variant: "warning"
                })
                return
              }
              showToast({
                title: "Checkout simulated",
                description: `Demo ${method} order placed for ${summary.items.length} item(s).`,
                variant: "success"
              })
            }}
          >
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}


