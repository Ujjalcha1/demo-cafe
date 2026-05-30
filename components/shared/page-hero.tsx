import Image from "next/image"

import { cn } from "@/lib/utils"

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  className
}: {
  eyebrow: string
  title: string
  description: string
  image: string
  className?: string
}) {
  return (
    <section className={cn("mx-auto mt-4 max-w-7xl px-4", className)}>
      <div className="relative overflow-hidden rounded-[2rem] border border-cafe-gold/20">
        <div className="absolute inset-0">
          <Image src={image} alt={title} fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-cafe-espresso/90 via-cafe-espresso/65 to-cafe-espresso/20" />
        </div>
        <div className="relative z-10 px-6 py-20 md:px-12">
          <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-cafe-gold">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl text-cafe-cream md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-cafe-cream/80">{description}</p>
        </div>
      </div>
    </section>
  )
}


