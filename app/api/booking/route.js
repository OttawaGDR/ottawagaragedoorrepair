import { NextResponse } from 'next/server';
import { EMAIL, PHONE, BUSINESS_NAME } from '../../../lib/data';
import { addBookedSlot } from '../../../lib/bookedSlots';
import { sendSms, toE164 } from '../../../lib/sms';

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

    // SMS to business phone (primary notification)
    const businessE164 = toE164(PHONE);
    let smsSent = false;
    if (businessE164) {
      const smsBody = `New booking: ${dateDisplay || date} at ${timeSlot} – ${name} ${phone}. ${service}, ${area}. Call to confirm.`;
      const smsResult = await sendSms(businessE164, smsBody);
      smsSent = smsResult.ok;
      if (!smsResult.ok) console.warn('[Booking] SMS not sent:', smsResult.error);
      else console.log('[Booking] SMS sent to', PHONE);
    }

    let emailSent = false;
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(resendKey);
      const fromAddr = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
      const fromName = process.env.RESEND_FROM_NAME || BUSINESS_NAME;
      const { data, error } = await resend.emails.send({
        from: `${fromName} <${fromAddr}>`,
        to: [EMAIL],
        subject: `Booking request: ${dateDisplay || date} at ${timeSlot} – ${name}`,
        html,
        text,
      });
      if (error) {
        console.error('[Booking] Resend error:', JSON.stringify(error, null, 2));
        return NextResponse.json(
          { error: 'Booking saved but we could not send the confirmation email. We\'ll still call you to confirm.', emailSent: false },
          { status: 200 }
        );
      }
      emailSent = true;
      if (data?.id) console.log('[Booking] Email sent to', EMAIL, '| Resend id:', data.id);
    } else {
      console.warn('[Booking] RESEND_API_KEY is not set. Add it to .env in the project root and restart the dev server. Emails will go to:', EMAIL);
    }

    addBookedSlot(date, timeSlot);

    return NextResponse.json({ success: true, emailSent, smsSent });
  } catch (e) {
    console.error('Booking API error:', e);
    return NextResponse.json({ error: 'Server error. Please try again or call us.' }, { status: 500 });
  }
}
