"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import { menuItems } from "@/data/site-data"
import { MenuCard } from "@/components/shared/menu-card"

export function BestSellersCarousel() {
  const items = menuItems.slice(8, 16)

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3200, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      spaceBetween={22}
      breakpoints={{
        320: { slidesPerView: 1.1 },
        768: { slidesPerView: 2.2 },
        1280: { slidesPerView: 3.2 }
      }}
      className="pb-10"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <MenuCard item={item} compact />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


