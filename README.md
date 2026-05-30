# ☕ Velvet Pour

> **Velvet Pour** is an artisan cafe and coffee-house landing experience, designed to reflect high-end hospitality, rich coffee culture, and warm visual aesthetics. It features interactive menus, live cafe stats, and dynamic booking actions.

---

## 🚀 Badges & Technologies

![Next.js](https://img.shields.io/badge/next.js-v15.5.2-%23000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-v19.1.0-%23202327.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-v3.4.17-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-v5.9.2-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-v12.23.24-%23FF007F.svg?style=for-the-badge&logo=framer&logoColor=white)
![Lenis](https://img.shields.io/badge/Smooth_Scroll-Lenis-orange?style=for-the-badge)

---

## ✨ Features

- **☕ Signature Menu Showcases:** Categorized lists containing pour-overs, cold brews, and seasonal baked goods with interactive cards.
- **✨ Grouped Menu Overlay Dialog:** Dynamic pop-over modal using Radix UI tabs to display the complete cafe menu categorized by category.
- **📊 Real-time Cafe Analytics:** Displays animated numbers covering daily pours, single-origin roasts, and client reviews via `react-countup`.
- **🥐 Weekly Best Sellers Carousel:** Responsive swipeable card carousel showcasing popular guest plates and hot drinks.
- **💬 Testimonials Slider:** Smooth Swiper slide container loaded with customer reviews, complete with custom quote formatting.
- **🖼️ Social Moments Gallery:** Styled grid layout pulling imagery of coffee preparation, warm cafe seating, and plated items.
- **📬 Collab Booking triggers:** Mail trigger automation packages contact details and reservations directly into the client's email app.
- **🗺️ Integrated Maps & FAQs:** Embeds Google maps view of location alongside an interactive accordion addressing seating, roasts, and booking limits.

---

## 🛠️ Tech Stack & Key Libraries

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | [Next.js 15 (App Router)](https://nextjs.org/) | Optimized server routing and layout patterns. |
| **Library** | [React 19](https://react.dev/) | Virtual DOM component architecture. |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) & `tailwindcss-animate` | Gold/mocha themed custom styling config and micro-animations. |
| **Transitions** | [Framer Motion](https://www.framer.com/motion/) | Reveal-on-scroll wrappers and dynamic load animations. |
| **Scroller** | [Lenis](https://lenis.darkroom.engineering/) | Smooth custom inertia scroll. |
| **UI Components** | [Radix UI](https://www.radix-ui.com/) | Primitive unstyled dialogs, selects, tabs, and popovers. |
| **Sliders** | [Swiper](https://swiperjs.com/) | Touch-optimized sliding galleries. |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, lightweight hospitality icon pack. |

---

## 📂 Project Structure

```text
cafe/
├── app/                  # Next.js App Router root
│   ├── globals.css       # Cafe color scheme variables, custom font family imports
│   ├── layout.tsx        # Standard layout configuration
│   ├── page.tsx          # Main composition page arranging sections
│   ├── loading.tsx       # Fullscreen skeleton fallback
│   └── not-found.tsx     # Custom 404 page
├── components/           # React Components
│   ├── ui/               # Core Radix-based components (Dialog, Popover, Select, Tabs)
│   ├── home/             # Home page modular modules (Hero, Testimonials, FAQs, Gallery)
│   ├── menu/             # Menu specific layouts
│   │   └── GroupedMenuModal.tsx # Full menu overlay layout
│   └── shared/           # Shared modules (MotionReveal, Header, ContactMailButton)
├── data/                 # Datasets
│   └── site-data.ts      # Coffee items list, roasts, testimonials & FAQ maps
├── lib/                  # Layout tools
│   └── utils.ts          # Conditional style toggles
├── utils/                # Configuration classes
│   └── seo.ts            # Website SEO configurations and contact details
└── public/               # Static graphics assets
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version `18+` recommended).

### Installation

Clone the repository and install all dependencies:

```bash
# Install dependencies
npm install
```

### Running Locally

To spin up the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience Velvet Pour.

### Build and Production

To build the application for production:

```bash
npm run build
```

To run the built production bundle:

```bash
npm run start
```
