"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Shapes, Stars, Users } from 'lucide-react'

const programs = [
  {
    title: "Play Group",
    description: "Early development program for children from 2 years old, focusing on social skills and basic learning through play",
    icon: Users,
  },
  {
    title: "Nursery",
    description: "Nurturing program for young learners developing fundamental skills in both Khmer and English",
    icon: Stars,
  },
  {
    title: "Kindergarten",
    description: "Comprehensive bilingual education preparing children for their academic journey",
    icon: Book,
  },
  {
    title: "Preparatory",
    description: "Advanced program ensuring students are fully prepared for primary school success",
    icon: Shapes,
  }
]

export function ProgramsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {programs.map((program, index) => (
        <motion.div
          key={program.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-[#1a7fa8] flex items-center justify-center mb-4">
                <program.icon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-[#1a7fa8]">{program.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{program.description}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

