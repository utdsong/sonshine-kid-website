"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/images/activities/act.avif",
    alt: "Students studying with globe"
  },
  {
    src: "/images/activities/act2.avif",
    alt: "Creative craft activities"
  },
  {
    src: "/images/activities/act3.avif",
    alt: "Reading session"
  },
  {
    src: "/images/activities/act4.avif",
    alt: "Music room activities"
  },
  {
    src: "/images/activities/act5.avif",
    alt: "Valentine's Day celebration"
  },
  {
    src: "/images/activities/act6.avif",
    alt: "Outdoor learning activities"
  }
]

export function ActivityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const showNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length)
  }

  const showPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full">
      <div className="aspect-video relative rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={showPrevious}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={showNext}
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-[#1a7fa8]" : "bg-gray-300"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

