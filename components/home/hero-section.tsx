"use client"

import Link from "next/link"
import { ClientReactPlayer } from "@/components/shared/client-react-player"
import { motion } from "framer-motion"
import { ArrowRight, PlayCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/utils/seo"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden rounded-[2.2rem] border border-cafe-gold/20 shadow-soft">
      <div className="absolute inset-0">
        <ClientReactPlayer
          src="https://www.youtube.com/watch?v=4xDzrJKXOOY"
          width="100%"
          height="100%"
          playing
          muted
          loop
          controls={false}
          className="!absolute !left-0 !top-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cafe-espresso/90 via-cafe-espresso/45 to-transparent" />
        <div className="texture-overlay" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-16 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-cinzel text-xs uppercase tracking-[0.35em] text-cafe-gold"
        >
          {siteConfig.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-3xl font-heading text-5xl leading-tight text-cafe-cream md:text-7xl"
        >
          {siteConfig.hero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-5 max-w-xl text-base text-cafe-cream/80 md:text-lg"
        >
          {siteConfig.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg">
            <Link href="#menu">
              View Menu <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-cafe-cream hover:text-cafe-espresso">
            <Link href="#gallery">
              View Gallery <PlayCircle className="size-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="pointer-events-none absolute right-10 top-28 hidden h-24 w-24 rounded-full border border-cafe-gold/40 bg-cafe-gold/20 blur-[1px] animate-float lg:block"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65 }}
          className="pointer-events-none absolute bottom-24 right-1/4 hidden h-12 w-12 rounded-full border border-cafe-gold/40 bg-cafe-gold/30 animate-float lg:block"
        />
      </div>
    </section>
  )
}



