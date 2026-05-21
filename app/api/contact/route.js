import { NextResponse } from 'next/server';
import { EMAIL, PHONE, BUSINESS_NAME, services, areas } from '../../../lib/data';
import { sendSms, toE164 } from '../../../lib/sms';

const CONTACT_LABELS = { call: 'Phone call', text: 'Text (SMS)' };

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, area, message, preferredTime, contactMethod } = body;

    if (!name || !phone || !service || !area) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, service, area' },
        { status: 400 }
      );
    }

    const method = contactMethod === 'text' ? 'text' : 'call';
    const methodLabel = CONTACT_LABELS[method];
    const serviceLabel = services.find((s) => s.slug === service)?.title || service;
    const areaLabel = areas.find((a) => a.slug === area)?.name || area;
    const timeLabel =
      { morning: 'Morning (8AM – 12PM)', afternoon: 'Afternoon (12PM – 5PM)', evening: 'Evening (5PM – 9PM)', asap: 'ASAP / Emergency' }[
        preferredTime
      ] || preferredTime || 'Any time';

    const html = `
      <h2>Callback request – ${BUSINESS_NAME}</h2>
      <p><strong>Contact via:</strong> ${methodLabel}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || '—'}</p>
      <p><strong>Service:</strong> ${serviceLabel}</p>
      <p><strong>Area:</strong> ${areaLabel}</p>
      <p><strong>Preferred time:</strong> ${timeLabel}</p>
      ${message ? `<p><strong>Issue:</strong> ${message}</p>` : ''}
      <p><em>Please ${method === 'text' ? 'text' : 'call'} the customer back as soon as possible.</em></p>
    `;

    const text = `
Callback request – ${BUSINESS_NAME}
Contact via: ${methodLabel}
Name: ${name}
Phone: ${phone}
Email: ${email || '—'}
Service: ${serviceLabel}
Area: ${areaLabel}
Preferred time: ${timeLabel}
${message ? `Issue: ${message}` : ''}
Please ${method === 'text' ? 'text' : 'call'} the customer back as soon as possible.
    `.trim();

    const businessE164 = toE164(PHONE);
    let smsSent = false;
    if (businessE164) {
      const smsBody = `Callback (${methodLabel}): ${name} ${phone} — ${serviceLabel}, ${areaLabel}. ${timeLabel !== 'Any time' ? timeLabel + '. ' : ''}${message ? message.slice(0, 80) : 'Call/text back ASAP.'}`;
      const smsResult = await sendSms(businessE164, smsBody);
      smsSent = smsResult.ok;
      if (!smsResult.ok) console.warn('[Contact] SMS not sent:', smsResult.error);
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
        subject: `Callback (${methodLabel}): ${name} – ${serviceLabel}`,
        html,
        text,
      });
      if (error) {
        console.error('[Contact] Resend error:', JSON.stringify(error, null, 2));
        return NextResponse.json(
          { error: 'Request saved but we could not send the notification email. Please call or text us directly.', emailSent: false },
          { status: 200 }
        );
      }
      emailSent = true;
      if (data?.id) console.log('[Contact] Email sent to', EMAIL, '| Resend id:', data.id);
    } else {
      console.warn('[Contact] RESEND_API_KEY is not set.');
    }

    return NextResponse.json({ success: true, emailSent, smsSent, contactMethod: method });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json({ error: 'Server error. Please try again or call us.' }, { status: 500 });
  }
}
