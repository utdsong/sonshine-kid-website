'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  try {
    const data = await resend.emails.send({
      from: 'SonShine Kids Cambodia <onboarding@resend.dev>',
      to: ['sonshinekidcambodia@gmail.com'],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: JSON.stringify(error) };
  }
}

export async function sendDonationEnquiry(formData: FormData) {
  const name = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const country = formData.get('country') as string;
  const amount = formData.get('amount') as string;
  const additionalInfo = formData.get('additionalInfo') as string;

  try {
    await resend.emails.send({
      from: 'SonShine Kids Cambodia <onboarding@resend.dev>',
      to: ['sonshinekidcambodia@gmail.com'],
      replyTo: email,
      subject: 'New International Donation Enquiry',
      html: `
        <h2>New International Donation Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Intended Donation Amount:</strong> $${amount} USD</p>
        <p><strong>Additional Information:</strong></p>
        <p>${additionalInfo || 'None provided'}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to send email' };
  }
} 