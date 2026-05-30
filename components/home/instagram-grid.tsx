"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { instagramFeed } from "@/data/site-data"

export function InstagramGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {instagramFeed.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="group relative aspect-square overflow-hidden rounded-3xl"
        >
          <Image src={image} alt="Cafe gallery" fill className="object-cover transition duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-cafe-espresso/0 transition group-hover:bg-cafe-espresso/30" />
        </motion.div>
      ))}
    </div>
  )
}


