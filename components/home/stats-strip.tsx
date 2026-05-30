"use client"

import CountUp from "react-countup"

import { MotionReveal } from "@/components/shared/motion-reveal"
import { stats } from "@/data/site-data"

export function StatsStrip() {
  return (
    <div className="grid gap-4 rounded-[2rem] border border-cafe-gold/20 bg-card/70 p-6 shadow-card backdrop-blur-xl md:grid-cols-4">
      {stats.map((stat) => (
        <MotionReveal key={stat.label} className="rounded-2xl border border-cafe-gold/20 bg-background/40 p-5 text-center">
          <p className="font-heading text-4xl text-cafe-espresso dark:text-cafe-cream">
            <CountUp end={stat.value} duration={2.4} separator="," />+
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
        </MotionReveal>
      ))}
    </div>
  )
}
