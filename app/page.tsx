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
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Baby, Book, Palette, GraduationCap } from 'lucide-react'

const programs = [
  {
    title: "Nursery Program",
    icon: <Baby className="w-12 h-12 text-[#1a7fa8]" />,
    description: "For children aged 2-3 years. Focus on early development and social skills.",
    href: "/programs/nursery"
  },
  {
    title: "Pre-School Program",
    icon: <Book className="w-12 h-12 text-[#1a7fa8]" />,
    description: "For children aged 3-4 years. Introduction to basic concepts and learning through play.",
    href: "/programs/preschool"
  },
  {
    title: "Kindergarten Program",
    icon: <Palette className="w-12 h-12 text-[#1a7fa8]" />,
    description: "For children aged 4-6 years. Comprehensive bilingual education preparing for primary school.",
    href: "/programs/kindergarten"
  },
  {
    title: "After School Program",
    icon: <GraduationCap className="w-12 h-12 text-[#1a7fa8]" />,
    description: "For children aged 6-12 years. Additional support and enrichment activities after regular school hours.",
    href: "/programs/afterschool"
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <HeroCarousel />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center text-white p-6 max-w-4xl mx-auto"
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
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
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
            <div className="max-w-4xl mx-auto">
              <ActivityCarousel />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1a7fa8]">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {programs.map((program) => (
              <Card key={program.title} className="flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center text-center">
                  <div className="mb-4 flex justify-center">
                    {program.icon}
                  </div>
                  <p>{program.description}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link href={program.href}>
                    <Button>Learn More</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#1a7fa8]">
              Find Us
            </h2>
            <p className="text-center text-gray-600 mb-8">
              House 63, Street 160, Teuk Laak 2, Khan Toul Kork, Phnom Penh, Cambodia
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <LocationMap />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1a7fa8]">Contact Us</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

