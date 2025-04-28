'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

export async function sendEmail(formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }

  const result = schema.safeParse(data)
  
  if (!result.success) {
    return { error: 'Invalid form data' }
  }

  try {
    await resend.emails.send({
      from: 'your-verified-domain@resend.dev',
      to: 'your-email@example.com',
      subject: `Contact form submission from ${result.data.name}`,
      text: `
        Name: ${result.data.name}
        Email: ${result.data.email}
        Message: ${result.data.message}
      `,
    })
    
    return { success: true }
  } catch (error) {
    return { error: 'Failed to send email' }
  }
}

