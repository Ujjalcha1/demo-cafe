"use client"

import { useEffect, useState } from "react"
import { MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        aria-label="Toggle theme"
        variant="outline"
        size="icon"
        className="border-cafe-gold/30 animate-pulse"
      >
        <span className="size-4" />
      </Button>
    )
  }

  return (
    <Button
      aria-label="Toggle theme"
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border-cafe-gold/30"
    >
      {theme === "dark" ? <Sun className="size-4" /> : <MoonStar className="size-4" />}
    </Button>
  )
}


