"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { navLinks } from "@/data/site-data"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Button variant="outline" size="icon" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
      </Button>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute left-4 right-4 top-20 rounded-3xl p-5"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-2 text-sm text-foreground transition hover:bg-cafe-gold/20"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="#menu">View Menu</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="#contact">Contact</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}


