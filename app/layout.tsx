import type { Metadata } from "next"
import { Cinzel, Cormorant_Garamond, Inter, Lato, Playfair_Display, Poppins } from "next/font/google"
import Script from "next/script"

import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { LenisProvider } from "@/components/providers/lenis-provider"
import { DemoToastProvider } from "@/components/providers/demo-toast-provider"
import { SiteNavbar } from "@/components/layout/site-navbar"
import { SiteFooter } from "@/components/layout/site-footer"
import { FloatingButtons } from "@/components/layout/floating-buttons"
import { siteConfig } from "@/utils/seo"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600", "700"] })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["400", "500", "600"] })
const lato = Lato({ subsets: ["latin"], variable: "--font-lato", weight: ["400", "700"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Premium Cafe Experience`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Premium Cafe Experience`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Cafe Experience`,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.name,
    image: siteConfig.ogImage,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "241 Artisan Lane",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94108",
      addressCountry: "US"
    },
    servesCuisine: ["Coffee", "Desserts", "Breakfast", "Bakery"],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:00",
        closes: "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "07:00",
        closes: "23:59"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "22:00"
      }
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${poppins.variable} ${lato.variable}`}
      >
        <ThemeProvider>
          <DemoToastProvider>
            <LenisProvider />
            <div className="relative min-h-screen overflow-x-clip">
              <SiteNavbar />
              <main>{children}</main>
              <SiteFooter />
              <FloatingButtons />
            </div>
          </DemoToastProvider>
        </ThemeProvider>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  )
}
