"use client"

import Image from "next/image"
import { ClientReactPlayer } from "@/components/shared/client-react-player"
import { Star } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import { testimonials } from "@/data/site-data"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      spaceBetween={24}
      breakpoints={{
        320: { slidesPerView: 1 },
        1024: { slidesPerView: 1.4 }
      }}
      className="pb-10"
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.id}>
          <Card className="overflow-hidden">
            <div className="grid gap-4 md:grid-cols-2">
              <CardContent className="p-7">
                <div className="mb-4 flex items-center gap-1 text-cafe-gold">
                  {[...Array(item.rating)].map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="font-display text-2xl leading-relaxed text-cafe-espresso dark:text-cafe-cream">“{item.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
              {item.videoUrl ? (
                <div className="relative min-h-[280px] overflow-hidden rounded-b-3xl rounded-r-3xl md:min-h-full">
                  <ClientReactPlayer src={item.videoUrl} width="100%" height="100%" controls className="!absolute !left-0 !top-0" />
                </div>
              ) : (
                <div className="relative min-h-[280px] overflow-hidden rounded-b-3xl rounded-r-3xl">
                  <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                </div>
              )}
            </div>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}



