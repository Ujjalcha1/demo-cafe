export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-cafe-espresso text-cafe-cream">
      <div className="text-center">
        <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-cafe-gold">Velvet Pour</p>
        <h2 className="mt-3 font-heading text-4xl">Brewing Your Experience</h2>
        <div className="mx-auto mt-6 h-1.5 w-56 overflow-hidden rounded-full bg-cafe-cream/20">
          <div className="h-full w-full animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(212,167,96,0.9),transparent)] bg-[length:200%_100%]" />
        </div>
      </div>
    </div>
  )
}
