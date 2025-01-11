"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success("Thank you for your interest! We will contact you soon.")
    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              name="country"
              required
              placeholder="Your country of residence"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Intended Donation Amount (USD)</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              min="1"
              required
              placeholder="Enter amount in USD"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Any specific requirements or questions?"
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#1a7fa8] hover:bg-[#1a7fa8]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Enquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

