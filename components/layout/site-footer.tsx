import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Send, Youtube } from "lucide-react"

import { siteConfig } from "@/utils/seo"

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-cafe-gold/20 bg-cafe-espresso/95 px-4 py-12 text-cafe-cream">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-heading text-2xl">{siteConfig.name}</h3>
          <p className="mt-3 text-sm text-cafe-cream/70">{siteConfig.description}</p>
        </div>

        <div>
          <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-cafe-gold">Visit</h4>
          <p className="mt-3 flex items-start gap-2 text-sm text-cafe-cream/80">
            <MapPin className="mt-0.5 size-4" />
            {siteConfig.contact.address}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-cafe-cream/80">
            <Phone className="size-4" />
            {siteConfig.contact.phone}
          </p>
        </div>

        <div>
          <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-cafe-gold">Hours</h4>
          <ul className="mt-3 space-y-2 text-sm text-cafe-cream/80">
            {siteConfig.hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-cafe-gold">Connect</h4>
          <div className="mt-3 flex gap-3">
            {[Instagram, Facebook, Youtube, Send].map((Icon, index) => (
              <span key={index} className="rounded-full border border-cafe-gold/30 p-2 text-cafe-gold">
                <Icon className="size-4" />
              </span>
            ))}
          </div>
          <div className="mt-5 space-y-2 text-sm text-cafe-cream/80">
            <Link href="#menu" className="block hover:text-cafe-gold">
              Explore Menu
            </Link>
            <Link href="#contact" className="block hover:text-cafe-gold">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-cafe-gold/20 pt-5 text-xs text-cafe-cream/60">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
}


