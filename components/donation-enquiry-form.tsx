"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { sendDonationEnquiry } from "@/app/actions/send-email"

export function DonationEnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(formData: FormData) {
    setStatus('loading')
    
    try {
      const result = await sendDonationEnquiry(formData)
      if (result.success) {
        setStatus('success')
        // Reset form
        const form = document.getElementById('donationForm') as HTMLFormElement
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form id="donationForm" action={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
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
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              name="country"
              required
              placeholder="Your country"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Intended Donation Amount (USD)</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              required
              placeholder="Amount in USD"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              placeholder="Any additional information..."
              rows={4}
            />
          </div>
          <Button 
            type="submit"
            className="w-full"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Submit Enquiry'}
          </Button>

          {status === 'success' && (
            <p className="text-green-600 text-center">Enquiry sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">Failed to send enquiry. Please try again.</p>
          )}
        </form>
      </CardContent>
    </Card>
  )
} 