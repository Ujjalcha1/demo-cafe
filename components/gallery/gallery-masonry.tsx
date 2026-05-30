"use client"

import Image from "next/image"
import { ClientReactPlayer } from "@/components/shared/client-react-player"
import { useState } from "react"

import { galleryImages, galleryVideos } from "@/data/site-data"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function GalleryMasonry() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <>
      <div className="columns-1 gap-4 space-y-4 md:columns-2 xl:columns-3">
        {galleryImages.map((image, index) => (
          <button
            key={image}
            onClick={() => setActiveImage(image)}
            className="group relative block w-full overflow-hidden rounded-3xl border border-cafe-gold/20"
          >
            <Image
              src={image}
              alt={`Cafe gallery ${index + 1}`}
              width={900}
              height={index % 2 === 0 ? 1100 : 800}
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-cafe-espresso/0 transition group-hover:bg-cafe-espresso/30" />
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {galleryVideos.map((video) => (
          <div key={video} className="relative overflow-hidden rounded-3xl border border-cafe-gold/20">
            <div className="relative aspect-video">
              <ClientReactPlayer src={video} controls width="100%" height="100%" className="!absolute !left-0 !top-0" />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={Boolean(activeImage)} onOpenChange={(open) => !open && setActiveImage(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          {activeImage ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-cafe-gold/30">
              <Image src={activeImage} alt="Gallery preview" fill className="object-cover" />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}



