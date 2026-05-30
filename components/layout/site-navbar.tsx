"use client"

import Link from "next/link"
import { Coffee, Instagram } from "lucide-react"

import { navLinks } from "@/data/site-data"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/layout/mobile-menu"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { siteConfig } from "@/utils/seo"

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 shadow-soft">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-cafe-gold/30 text-cafe-gold">
            <Coffee className="size-4" />
          </span>
          <div>
            <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-cafe-gold">{siteConfig.brand.shortLabel}</p>
            <p className="font-heading text-sm">Cafe & Coffee Atelier</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm transition hover:bg-cafe-gold/10 hover:text-cafe-gold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="icon" aria-label="Instagram">
            <Instagram className="size-4" />
          </Button>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}


