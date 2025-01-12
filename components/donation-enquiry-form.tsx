'use client'

import { useState } from 'react'
import { sendDonationEnquiry } from '@/app/actions/send-email'
import { Button } from './ui/button'

export function DonationEnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(formData: FormData) {
    setStatus('loading')
    const result = await sendDonationEnquiry(formData)
    
    if (result.success) {
      setStatus('success')
      // Reset form
      const form = document.getElementById('donationEnquiryForm') as HTMLFormElement
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <form id="donationEnquiryForm" action={handleSubmit} className="space-y-6">
      <div className="grid gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className="w-full p-2 border rounded-md"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full p-2 border rounded-md"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-2">Country</label>
          <input
            id="country"
            name="country"
            type="text"
            required
            className="w-full p-2 border rounded-md"
            placeholder="Your country of residence"
          />
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-2">Intended Donation Amount (USD)</label>
          <input
            id="amount"
            name="amount"
            type="number"
            required
            className="w-full p-2 border rounded-md"
            placeholder="Enter amount in USD"
          />
        </div>

        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">Additional Information</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            className="w-full p-2 border rounded-md"
            placeholder="Any specific requirements or questions?"
          />
        </div>
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
  )
} 