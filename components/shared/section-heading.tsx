import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <header className={cn("mx-auto mb-10 max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 font-cinzel text-xs uppercase tracking-[0.35em] text-cafe-gold">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl leading-tight text-cafe-espresso dark:text-cafe-cream md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-muted-foreground md:text-lg">{description}</p> : null}
    </header>
  )
}


