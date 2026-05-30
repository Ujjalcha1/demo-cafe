"use client"

import { Mail } from "lucide-react"

import { useDemoToast } from "@/components/providers/demo-toast-provider"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/utils/seo"
import { openMail } from "@/utils/open-mail"

export function ContactMailButton() {
  const { showToast } = useDemoToast()

  const handleOpenMail = () => {
    showToast({
      title: "Opening mail app",
      description: "Opening draft to contact the Velvet Pour team.",
      variant: "success"
    })
    openMail({
      to: siteConfig.contact.email,
      subject: `Inquiry - ${siteConfig.name}`,
      body: `Hello ${siteConfig.name} Team,\n\nI would like to get in touch with you.\n\nThanks.`
    })
  }

  return (
    <div className="flex flex-col items-center justify-center text-center rounded-[2rem] border border-cafe-gold/20 bg-card/70 p-8 shadow-soft backdrop-blur-xl lg:p-12 hover:border-cafe-gold/40 transition duration-500">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cafe-gold/10 text-cafe-gold mb-6 transition duration-500">
        <Mail className="h-8 w-8" />
      </div>
      <h3 className="font-heading text-3xl text-cafe-espresso dark:text-cafe-cream">Get in Touch Directly</h3>
      <p className="mt-4 max-w-md text-muted-foreground text-sm leading-relaxed">
        Have questions about reservations, private events, or brand collaborations? Send us an email directly, and we will get back to you within 24 hours.
      </p>
      <Button onClick={handleOpenMail} className="mt-8 gap-2 px-8 h-12 rounded-full font-medium hover:scale-105 active:scale-95 transition-all duration-300 bg-cafe-gold text-white hover:bg-cafe-gold/90" size="lg">
        <Mail className="h-4 w-4" /> Send us an Email
      </Button>
    </div>
  )
}
