import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const programs = [
  {
    title: "Play Group",
    ageRange: "From 2 years old",
    description: "Our play group program focuses on early socialization and basic skill development through play-based learning.",
    activities: [
      "Social interaction",
      "Basic language skills",
      "Motor skills development",
      "Creative play",
      "Introduction to routines"
    ],
    image: "/images/activities/act.avif"
  },
  {
    title: "Nursery",
    ageRange: "Ages 3-4",
    description: "Our nursery program builds on early childhood development with a focus on language and cognitive skills.",
    activities: [
      "Language development (English and Khmer)",
      "Basic numeracy",
      "Arts and crafts",
      "Physical activities",
      "Social skills enhancement"
    ],
    image: "/images/activities/act2.avif"
  },
  {
    title: "Kindergarten",
    ageRange: "Ages 4-5",
    description: "Our kindergarten program prepares children for primary school with a comprehensive curriculum.",
    activities: [
      "Advanced language learning",
      "Mathematics foundations",
      "Science exploration",
      "Reading and writing preparation",
      "Cultural activities"
    ],
    image: "/images/activities/act3.avif"
  },
  {
    title: "Preparatory",
    ageRange: "Ages 5-6",
    description: "Our preparatory program ensures students are fully ready for the challenges of primary education.",
    activities: [
      "Advanced literacy skills",
      "Mathematical concepts",
      "Critical thinking exercises",
      "Introduction to technology",
      "Personal and social development"
    ],
    image: "/images/activities/act4.avif"
  }
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[#1a7fa8]">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Our Programs</h1>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12">
              {programs.map((program) => (
                <Card key={program.title} className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-[300px] md:h-full">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <CardHeader>
                        <CardTitle className="text-2xl text-[#1a7fa8]">{program.title}</CardTitle>
                        <CardDescription className="text-lg font-semibold">
                          {program.ageRange}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-gray-700">{program.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Key Activities:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {program.activities.map((activity) => (
                              <li key={activity}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#1a7fa8]">Join Our Sonshine Family</h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience the difference at Sonshine School Cambodia. We're committed to nurturing 
              your child's potential in a loving, bilingual environment.
            </p>
            <Button asChild size="lg" className="bg-[#ff6c9e] hover:bg-[#ff6c9e]/90">
              <a href="#contact">Contact Us Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

