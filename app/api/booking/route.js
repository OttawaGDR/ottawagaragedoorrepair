import { NextResponse } from 'next/server';
import { EMAIL } from '../../../lib/data';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, area, date, dateDisplay, timeSlot, message } = body;
    if (!name || !phone || !service || !area || !date || !timeSlot) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, service, area, date, timeSlot' },
        { status: 400 }
      );
    }

    const html = `
      <h2>New booking request – Ottawa - GDR</h2>
      <p><strong>Date:</strong> ${dateDisplay || date}</p>
      <p><strong>Time slot:</strong> ${timeSlot}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || '—'}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Area:</strong> ${area}</p>
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      <p><em>Please call the customer to confirm this appointment.</em></p>
    `;

    const text = `
New booking request – Ottawa - GDR
Date: ${dateDisplay || date}
Time slot: ${timeSlot}
Name: ${name}
Phone: ${phone}
Email: ${email || '—'}
Service: ${service}
Area: ${area}
${message ? `Message: ${message}` : ''}
Please call the customer to confirm this appointment.
    `.trim();

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(resendKey);
      const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
      const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM_NAME ? `${process.env.RESEND_FROM_NAME} <${from}>` : from,
        to: EMAIL,
        subject: `Booking request: ${dateDisplay || date} at ${timeSlot} – ${name}`,
        html,
        text,
      });
      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json({ error: 'Failed to send notification email.' }, { status: 500 });
      }
    } else {
      console.log('[Booking] No RESEND_API_KEY – notification not sent. Booking details:', { name, phone, email, service, area, date, timeSlot, message });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Booking API error:', e);
    return NextResponse.json({ error: 'Server error. Please try again or call us.' }, { status: 500 });
  }
}
