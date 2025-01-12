import Image from "next/image"
import { DonationCalculator } from "@/components/donation-calculator"
import { DonationEnquiryForm } from '@/components/donation-enquiry-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[#1a7fa8]">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center space-y-4 px-4">
            <h1 className="text-4xl md:text-6xl font-bold">Support Our Mission</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Help make quality education accessible to underprivileged learners in Cambodia
            </p>
          </div>
        </div>
      </section>

      {/* Scholarship Program Info */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-[#1a7fa8]">Our Scholarship Program</h2>
            <p className="text-lg text-gray-700">
              At SonShine Kids Cambodia, we believe that every child deserves access to quality education. 
              Our scholarship program aims to provide underprivileged children with the opportunity to 
              receive bilingual education, opening doors to a brighter future.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1a7fa8]">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Full access to our bilingual curriculum, learning materials, and educational activities
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1a7fa8]">Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Individual attention from qualified teachers and regular progress assessments
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1a7fa8]">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Integration into our diverse learning community and participation in cultural activities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Calculator */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a7fa8] mb-4">Sponsor a Child&apos;s Education</h2>
              <p className="text-gray-600">
                Choose your sponsorship duration and the number of students you wish to support
              </p>
            </div>
            <Select>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select number of students" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg">
                <SelectItem value="1">1 Student</SelectItem>
                <SelectItem value="2">2 Students</SelectItem>
                <SelectItem value="3">3 Students</SelectItem>
              </SelectContent>
            </Select>
            <DonationCalculator />
          </div>
        </div>
      </section>

      <Separator />

      {/* International Donors */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a7fa8] mb-4">International Donors</h2>
              <p className="text-gray-600">
                For international supporters who cannot access local payment methods, 
                please fill out our enquiry form and we&apos;ll provide alternative donation options
              </p>
            </div>
            <DonationEnquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}

