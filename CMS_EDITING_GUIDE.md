# CMS-Like JSON Content Editing Guide

This website is frontend-only and optimized for showcase use.
You can update brand text and core details from one JSON file:

- `data/cms-content.json`

## Quick Workflow

1. Open `data/cms-content.json`.
2. Update the values you want (brand, hero text, contact, hours, links).
3. Save the file.
4. Run `npm run dev` to preview changes.
5. Run `npm run build` before publishing.

## What To Edit

### Brand and global SEO
- `brand.name`
- `brand.tagline`
- `brand.description`
- `links.websiteUrl`
- `links.ogImage`

These values feed metadata in `utils/seo.ts`.

### Hero section copy
- `hero.eyebrow`
- `hero.headline`
- `hero.subheadline`

These values feed the home hero section.

### Contact and footer
- `contact.phone`
- `contact.email`
- `contact.address`
- `hours` array
- `links.whatsapp`

These values feed contact/footer/floating actions.

### Demo mode behavior
- `demoMode.enabled`
- `demoMode.notice`

When demo mode is enabled, forms/actions use elegant toasts and do not send data anywhere.

## Image and Video Replacements

For premium visual updates, replace media URLs in:

- `data/site-data.ts` for menu cards, gallery items, testimonials, blog images, and offers.

Use high-quality royalty-free assets (Unsplash/Pexels) and keep dimensions large enough for modern displays.

## Safety Notes

- Keep JSON valid (double quotes, commas, no trailing commas).
- Do not rename keys unless you also update references in code.
- This project has no backend/database by design.
