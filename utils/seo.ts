import type { Metadata } from "next"
import cmsContent from "@/data/cms-content.json"

export const siteConfig = {
  name: cmsContent.brand.name,
  description: cmsContent.brand.description,
  url: cmsContent.links.websiteUrl,
  ogImage: cmsContent.links.ogImage,
  contact: {
    phone: cmsContent.contact.phone,
    email: cmsContent.contact.email,
    address: cmsContent.contact.address
  },
  demoMode: cmsContent.demoMode,
  brand: cmsContent.brand,
  hero: cmsContent.hero,
  hours: cmsContent.hours,
  links: cmsContent.links
}

export function createMetadata(title: string, description: string, path = ""): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`
  const url = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1600, height: 900, alt: siteConfig.name }],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage]
    },
    alternates: {
      canonical: url
    }
  }
}

