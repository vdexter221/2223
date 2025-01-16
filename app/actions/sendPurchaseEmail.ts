'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPurchaseEmail(formData: FormData) {
  console.log('Sending purchase email with Resend API key:', process.env.RESEND_API_KEY);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const reviewType = formData.get('reviewType') as string;
  const reviewCount = formData.get('reviewCount') as string;
  const totalPrice = formData.get('totalPrice') as string;

  try {
    await resend.emails.send({
      from: 'Orderboosts <noreply@orderboosts.com>',
      to: [email],
      subject: 'Your G2 Review Purchase Information',
      html: `
        <h1>Thank you for your purchase, ${name}!</h1>
        <p>We've received your order for ${reviewCount} ${reviewType} G2 review(s) at a total price of $${totalPrice}.</p>
        <p>We'll be in touch shortly with more information about your purchase.</p>
        <p>If you have any questions, please don't hesitate to contact us.</p>
      `
    });

    // Send an email to the admin
    await resend.emails.send({
      from: 'Orderboosts <noreply@orderboosts.com>',
      to: ['admin@orderboosts.com'],
      subject: 'New G2 Review Purchase',
      html: `
        <h1>New Purchase Alert</h1>
        <p>Customer Name: ${name}</p>
        <p>Customer Email: ${email}</p>
        <p>Review Type: ${reviewType}</p>
        <p>Review Count: ${reviewCount}</p>
        <p>Total Price: $${totalPrice}</p>
      `
    });

    return { success: true, message: 'Purchase successful! Check your email for more information.' };
  } catch (error) {
    console.error('Failed to send email:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    return { success: false, message: 'Failed to process purchase. Please try again.' };
  }
}

