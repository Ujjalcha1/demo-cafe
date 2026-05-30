import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-cafe-gold">404</p>
      <h1 className="mt-3 font-heading text-5xl">Fresh Page Not Found</h1>
      <p className="mt-4 text-muted-foreground">Looks like this cup has gone missing. Let us guide you back to the warmest corner.</p>
      <Button asChild className="mt-6">
        <Link href="/">Back Home</Link>
      </Button>
    </section>
  )
}
