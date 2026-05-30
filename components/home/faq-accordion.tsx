"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { faqItems } from "@/data/site-data"

export function FaqAccordion() {
  const [active, setActive] = useState<string | null>(faqItems[0]?.question ?? null)

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqItems.map((item) => {
        const isOpen = active === item.question
        return (
          <div key={item.question} className="rounded-2xl border border-cafe-gold/20 bg-card/60 p-5 backdrop-blur-sm">
            <button
              className="flex w-full items-center justify-between gap-3 text-left"
              onClick={() => setActive(isOpen ? null : item.question)}
            >
              <span className="font-poppins text-lg font-medium">{item.question}</span>
              <ChevronDown className={`size-4 transition ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {isOpen ? (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pt-3 text-sm text-muted-foreground"
                >
                  {item.answer}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}


