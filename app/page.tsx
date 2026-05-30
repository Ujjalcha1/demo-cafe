import { MotionReveal } from "@/components/shared/motion-reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { HeroSection } from "@/components/home/hero-section"
import { MenuCard } from "@/components/shared/menu-card"
import { BestSellersCarousel } from "@/components/home/best-sellers-carousel"
import { TestimonialSlider } from "@/components/home/testimonial-slider"
import { InstagramGrid } from "@/components/home/instagram-grid"
import { FaqAccordion } from "@/components/home/faq-accordion"
import { StatsStrip } from "@/components/home/stats-strip"
import { CtaBanner } from "@/components/shared/cta-banner"
import { ContactMailButton } from "@/components/shared/contact-mail-button"
import { GroupedMenuModal } from "@/components/menu/grouped-menu-modal"
import { signatureDrinks, menuItems } from "@/data/site-data"
import { siteConfig } from "@/utils/seo"

export default function HomePage() {
  return (
    <div id="home" className="space-y-20 px-4 pb-10 pt-4 md:space-y-24">
      <HeroSection />

      <section className="mx-auto max-w-7xl">
        <StatsStrip />
      </section>

      <section id="menu" className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Signature Selection"
          title="Curated Coffee Moments"
          description="Each cup is intentionally crafted, from bean origin to final pour, with premium ingredients and ritual-driven preparation."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {signatureDrinks.map((item, index) => (
            <MotionReveal key={item.id} delay={index * 0.08}>
              <MenuCard item={item} />
            </MotionReveal>
          ))}
        </div>
        <div className="flex justify-center">
          <GroupedMenuModal />
        </div>
      </section>

      <section className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Best Sellers"
          title="Guest Favorites This Week"
          description="A rotating showcase of our most-loved drinks and plates."
        />
        <BestSellersCarousel />
      </section>

      <section id="about" className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[2rem] border border-cafe-gold/20 bg-warm-gradient p-8 shadow-soft md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <MotionReveal>
            <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-cafe-mocha">About Velvet Pour</p>
            <h2 className="mt-3 font-heading text-4xl text-cafe-espresso md:text-5xl">Where Every Sip Tells A Story.</h2>
            <p className="mt-4 text-cafe-roast/90">
              Inspired by global coffee culture and refined hospitality, our space blends artisan brewing with a warm, cinematic atmosphere.
              From sunrise pour-overs to midnight espresso moments, every visit is designed to feel memorable.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.2} className="grid gap-4">
            {menuItems.slice(0, 3).map((item) => (
              <div key={item.id} className="rounded-2xl border border-cafe-mocha/25 bg-white/60 p-4 backdrop-blur">
                <p className="font-heading text-2xl text-cafe-espresso">{item.name}</p>
                <p className="mt-1 text-sm text-cafe-roast/80">{item.description}</p>
              </div>
            ))}
          </MotionReveal>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Guest Love"
          title="Testimonials & Stories"
          description="Loved by coffee lovers, creators, and travelers who seek beauty in everyday rituals."
        />
        <TestimonialSlider />
      </section>

      <section id="gallery" className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Social Moments"
          title="Gallery"
          description="Snapshots from our cafe interiors, coffee rituals, and plated experiences."
        />
        <InstagramGrid />
      </section>



      <section id="faq" className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="FAQs"
          title="Everything You Need To Know"
          description="Quick answers before your next cafe visit."
        />
        <FaqAccordion />
      </section>

      <section id="contact" className="mx-auto max-w-7xl space-y-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Talk Coffee & Brand Collaborations"
          description="Reach out for cafe visits, collaborations, events, and media enquiries."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactMailButton />
          <aside className="space-y-4 rounded-[2rem] border border-cafe-gold/20 bg-card/70 p-6 shadow-soft backdrop-blur-xl">
            <h3 className="font-heading text-3xl text-cafe-espresso dark:text-cafe-cream">Visit Us</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.contact.address}</p>
            <p className="text-sm text-muted-foreground">{siteConfig.contact.phone}</p>
            <p className="text-sm text-muted-foreground">{siteConfig.contact.email}</p>
            <div className="overflow-hidden rounded-2xl border border-cafe-gold/20">
              <iframe
                title="Cafe location"
                src="https://www.google.com/maps?q=San+Francisco+CA&output=embed"
                width="100%"
                height="250"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}

