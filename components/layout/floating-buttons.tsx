"use client"

import Link from "next/link"
import { ArrowUp, MessageCircleMore } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/utils/seo"

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 420)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <Button
        asChild
        size="icon"
        className="bg-emerald-500 text-white hover:bg-emerald-400"
        aria-label="Chat on WhatsApp"
      >
        <Link href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
          <MessageCircleMore className="size-5" />
        </Link>
      </Button>
      {showTop ? (
        <Button size="icon" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top">
          <ArrowUp className="size-4" />
        </Button>
      ) : null}
    </div>
  )
}


