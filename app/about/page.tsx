import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SchoolInfo } from "@/components/school-info"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[#1a7fa8]">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6 text-[#1a7fa8]">Our Mission</h2>
                <p className="text-lg text-gray-700">
                  At SonShine Kids Cambodia, our mission is to provide high-quality bilingual education 
                  that nurtures young minds and builds a strong foundation for lifelong learning. 
                  We strive to create an environment where children can develop their full potential 
                  while embracing both Khmer and English languages.
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6 text-[#1a7fa8]">Our Vision</h2>
                <p className="text-lg text-gray-700">
                  We envision becoming the leading bilingual early education center in Cambodia, 
                  recognized for our innovative teaching methods, caring environment, and successful 
                  preparation of students for their future academic journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1a7fa8]">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/images/logo.jpg"
                  alt="School building"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Founded in 2016, SonShine Kids Cambodia began with a small enrollment that quickly grew through positive parent feedback and word-of-mouth recommendations. What started as a small classroom has grown into a vibrant learning community, becoming one of the most trusted educational institutions in our area.
                </p>
                <p className="text-gray-700">
                  Our dedicated team of local and international teachers brings diverse experiences 
                  and perspectives, creating a rich learning environment that celebrates both Khmer 
                  and international cultures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Info */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <SchoolInfo />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1a7fa8]">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff6c9e] flex items-center justify-center">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Care</h3>
                <p className="text-gray-700">Nurturing environment where every child feels loved and valued</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#e1df32] flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-700">Commitment to high standards in education and care</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1a7fa8] flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Diversity</h3>
                <p className="text-gray-700">Celebrating different cultures and perspectives</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

