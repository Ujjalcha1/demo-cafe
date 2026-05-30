import Link from "next/link"

import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="my-16 px-4">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cafe-gold/25 bg-espresso-gradient p-8 text-cafe-cream shadow-soft md:p-12">
        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-cafe-gold">Visit Velvet Pour</p>
        <h3 className="mt-3 font-heading text-3xl md:text-5xl">Experience The Brand Story In Every Sip.</h3>
        <p className="mt-4 max-w-2xl text-cafe-cream/80">
          Discover handcrafted coffee, chef-curated plates, and a warm atmosphere designed for meaningful conversation.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" className="text-cafe-cream hover:text-cafe-espresso">
            <Link href="#menu">Explore Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


