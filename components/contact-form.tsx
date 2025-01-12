"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from 'lucide-react'
import { sendContactEmail } from "@/app/actions/send-email"

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  async function handleSubmit(formData: FormData) {
    setStatus('loading')
    setErrorMessage('')
    
    try {
      const result = await sendContactEmail(formData)
      console.log('Form submission result:', result)
      
      if (result.success) {
        setStatus('success')
        // Reset form
        const form = document.getElementById('contactForm') as HTMLFormElement
        form.reset()
      } else {
        setStatus('error')
        setErrorMessage(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setErrorMessage('An unexpected error occurred')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="w-full">
        <CardContent className="pt-6">
          <form id="contactForm" action={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
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
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="What is this regarding?"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Your message..."
                rows={5}
              />
            </div>
            <Button 
              type="submit"
              className="w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>

            {status === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">
                Failed to send message: {errorMessage}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

