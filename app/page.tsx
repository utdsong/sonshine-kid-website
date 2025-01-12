"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HeroCarousel } from "@/components/hero-carousel"
import { ProgramsGrid } from "@/components/programs-grid"
import { LocationMap } from "@/components/location-map"
import { ContactForm } from "@/components/contact-form"
import { ActivityCarousel } from "@/components/activity-carousel"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <HeroCarousel />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center text-white p-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              SonShine Kids Cambodia
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Bilingual Pre-School: Khmer and English
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#e1df32] hover:bg-[#e1df32]/90 text-black"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1a7fa8]">About Us</h2>
            <p className="text-lg mb-8 text-slate-700">
              SonShine Kids International is a bilingual kindergarten offering education in both Khmer and English. 
              Our dedicated team of local and international teachers provides a nurturing environment for children to learn, grow, and thrive.
            </p>
            <ActivityCarousel />
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1a7fa8]">
            Our Programs
          </h2>
          <ProgramsGrid />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#1a7fa8]">
              Find Us
            </h2>
            <LocationMap />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1a7fa8]">Contact Us</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

